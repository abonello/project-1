# from html.parser import HTMLParser
import re
import html
import unicodedata

MIN_NAME_LENGTH = 3
MAX_NAME_LENGTH = 100
MAX_EMAIL_LENGTH = 254
MIN_SUBJECT_LENGTH = 3
MAX_SUBJECT_LENGTH = 200
MIN_MESSAGE_LENGTH = 10
MAX_MESSAGE_LENGTH = 5000

EMAIL_PATTERN = re.compile(
    r"^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+"
    r"@"
    r"[A-Za-z0-9]"
    r"(?:[A-Za-z0-9-]*[A-Za-z0-9])?"
    r"(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?)+$"
)


def validate_form_data(data):

    if not isinstance(data, dict):
        return None, "Invalid request data."

    name = data.get("name")
    email = data.get("email")
    subject = data.get("subject")
    message = data.get("message")

    # All fields must be strings
    if not all(isinstance(value, str) for value in [name, email, subject, message]):
        return None, "All form fields are required."

    # Remove leading/trailing whitespace
    name = name.strip()
    email = email.strip()
    subject = subject.strip()
    message = message.strip()

    # Fields cannot be empty
    if not name or not email or not subject or not message:
        return None, "All form fields must contain a value."


    # Check name length and character requirements
    if len(name) > MAX_NAME_LENGTH:
        return None, "Name is too long."

    if sum(character.isalpha() for character in name) < MIN_NAME_LENGTH:
        return None, "Name must contain at least 3 letters."
    
    if not valid_name(name):
        return None, "Name contains invalid characters."  

    # Reject control characters for Name
    if contains_control_characters(name):
        return None, "Name contains invalid characters."
    

    # Check email length and format
    if len(email) > MAX_EMAIL_LENGTH:
        return None, "Email address is too long."

    if not EMAIL_PATTERN.fullmatch(email):
        return None, "Please enter a valid email address."

    # Reject control characters for Email
    if contains_control_characters(email):
            return None, "Email contains invalid characters."

    
    # Check subject length
    if len(subject) > MAX_SUBJECT_LENGTH:
        return None, "Subject is too long."

    if len(subject) < MIN_SUBJECT_LENGTH:
        return None, "Subject must contain at least 3 characters."

    # Reject control characters for Subject
    if contains_control_characters(subject):
        return None, "Subject contains invalid characters."
    

    # Check message length
    if len(message) > MAX_MESSAGE_LENGTH:
        return None, "Message is too long."

    if len(message) < MIN_MESSAGE_LENGTH:
        return None, "Message must contain at least 10 characters."

    # Reject Unicode control/format characters for Message
    if contains_control_characters(message, allow_message_whitespace=True):
        return None, "Message contains invalid characters."
    

    # Escape HTML
    name = html.escape(name)
    email = html.escape(email)
    subject = html.escape(subject)
    message = html.escape(message)

    template_params_data = {
        "from_name": name,
        "to_name": "Anthony Bonello",
        "email": email,
        "subject": subject,
        "message": message
    }

    return template_params_data, None


def valid_name(name):

    allowed_punctuation = {" ", "'", "-", "."}

    return all(
        character.isalpha() or character in allowed_punctuation
        for character in name
    )


def contains_control_characters(value, allow_message_whitespace=False):
    allowed = {"Cc", "Cf"}

    for character in value:
        category = unicodedata.category(character)

        if category in allowed:
            if allow_message_whitespace and character in "\n\r\t":
                continue

            return True

    return False
