# from html.parser import HTMLParser
import re
import html

MIN_NAME_LENGTH = 3
MAX_NAME_LENGTH = 100
MAX_EMAIL_LENGTH = 254
MAX_SUBJECT_LENGTH = 200
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
    

    # Check email length and format
    if len(email) > MAX_EMAIL_LENGTH:
        return None, "Email address is too long."

    if not EMAIL_PATTERN.fullmatch(email):
        return None, "Please enter a valid email address."
    

    if len(subject) > MAX_SUBJECT_LENGTH:
        return None, "Subject is too long."
    

    if len(message) > MAX_MESSAGE_LENGTH:
        return None, "Message is too long."


    # if (
    #     contains_html(name) or
    #     contains_html(email) or
    #     contains_html(subject) or
    #     contains_html(message)
    # ):
    #     return None, "HTML is not allowed."

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



# class HTMLDetector(HTMLParser):
# 
#     def __init__(self):
#         super().__init__()
#         self.found_html = False
# 
#     def handle_starttag(self, tag, attrs):
#         self.found_html = True
# 
#     def handle_startendtag(self, tag, attrs):
#         self.found_html = True
# 
#     def handle_endtag(self, tag):
#         self.found_html = True
# 
# 
# def contains_html(value):
#     parser = HTMLDetector()
#     parser.feed(value)
#     return parser.found_html