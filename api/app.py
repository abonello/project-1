import json
import urllib.request
from urllib.parse import parse_qs
from dotenv import load_dotenv
import os
import time

load_dotenv()

from validation import validate_form_data
from media import serve_video
from media import serve_audio

service_id = os.environ["EMAILJS_SERVICE_ID"]
template_id = os.environ["EMAILJS_TEMPLATE_ID"]
public_key = os.environ["EMAILJS_PUBLIC_KEY"]
private_key = os.environ["EMAILJS_PRIVATE_KEY"]

last_submission = {}
RATE_LIMIT_SECONDS = 60

ALLOWED_ORIGINS = {
    "http://localhost:5500",
    "http://127.0.0.1:5500",
    "https://anthonybonello.co.uk"
}


def application(environ, start_response):

    method = environ["REQUEST_METHOD"]
    path = environ.get("PATH_INFO", "")
    origin = environ.get("HTTP_ORIGIN", "")

    params = parse_qs(environ.get("QUERY_STRING", ""))
    
    if params.get("type") == ["video"]:
        return serve_video(environ, start_response)

    if params.get("type") == ["audio"]:
        return serve_audio(environ, start_response)

    client_ip = environ.get("REMOTE_ADDR", "")
    now = time.time()

    last_request = last_submission.get(client_ip)

    if last_request is not None:
        elapsed = now - last_request

        if elapsed < RATE_LIMIT_SECONDS:
            response = json.dumps({
                "success": False,
                "message": "Please wait before sending another message."
            }).encode("utf-8")

            start_response(
                "429 Too Many Requests",
                [
                    ("Content-Type", "application/json"),
                    ("Content-Length", str(len(response))),
                    ("Access-Control-Allow-Origin", origin)
                ]
            )

            return [response]
    

    if origin not in ALLOWED_ORIGINS:
        response = json.dumps({
            "success": False,
            "message": "Forbidden"
        }).encode("utf-8")

        start_response(
            "403 Forbidden",
            [
                ("Content-Type", "application/json"),
                ("Content-Length", str(len(response)))
            ]
        )

        return [response]
    

    # Handle CORS preflight request
    if method == "OPTIONS":
        start_response(
            "204 No Content",
            [
                ("Access-Control-Allow-Origin", origin),
                ("Access-Control-Allow-Methods", "POST, OPTIONS"),
                ("Access-Control-Allow-Headers", "Content-Type")
            ]
        )
        return [b""]
    

    # Only allow POST
    if method != "POST":
        response = json.dumps({
            "success": False,
            "message": "POST required"
        }).encode("utf-8")

        start_response(
            "405 Method Not Allowed",
            [
                ("Content-Type", "application/json"),
                ("Content-Length", str(len(response))),
                ("Access-Control-Allow-Origin", origin)
            ]
        )

        return [response]
    

    # Read the request body
    content_length = int(environ.get("CONTENT_LENGTH", 0))
    body = environ["wsgi.input"].read(content_length)


    try:
        data = json.loads(body)
    except json.JSONDecodeError:
        response = json.dumps({
            "success": False,
            "message": "Invalid JSON."
        }).encode("utf-8")

        start_response(
            "400 Bad Request",
            [
                ("Content-Type", "application/json"),
                ("Content-Length", str(len(response))),
                ("Access-Control-Allow-Origin", origin)
            ]
        )

        return [response]
    

    template_params_data, validation_error = validate_form_data(data)

    if validation_error:
        response = json.dumps({
            "success": False,
            "message": validation_error
        }).encode("utf-8")

        start_response(
            "400 Bad Request",
            [
                ("Content-Type", "application/json"),
                ("Content-Length", str(len(response))),
                ("Access-Control-Allow-Origin", origin)
            ]
        )

        return [response]

    emailjs_data = {
        "service_id": service_id,
        "template_id": template_id,
        "user_id": public_key,
        "accessToken": private_key,
        "template_params": template_params_data
    }

    request = urllib.request.Request(
            "https://api.emailjs.com/api/v1.0/email/send",
            data=json.dumps(emailjs_data).encode("utf-8"),
            headers={
                "Content-Type": "application/json",
                "User-Agent": "Python EmailJS Test"
            },
            method="POST"
        )
    
    try:
        with urllib.request.urlopen(request) as response:
            result = response.read()

        last_submission[client_ip] = now

        response_body = json.dumps({
            "success": True,
            "emailjs_response": result.decode("utf-8"),
            "message": "Message sent successfully."
        }).encode("utf-8")

        status = "200 OK"

    except urllib.error.HTTPError as error:
        error_body = error.read().decode("utf-8")

        response_body = json.dumps({
            "success": False,
            "emailjs_status": error.code,
            "emailjs_response": error_body
        }).encode("utf-8")

        status = "500 Internal Server Error"

    except Exception as error:
        response_body = json.dumps({
            "success": False,
            "error": str(error)
        }).encode("utf-8")

        status = "500 Internal Server Error"

    start_response(
        status,
        [
            ("Content-Type", "application/json"),
            ("Content-Length", str(len(response_body))),
            ("Access-Control-Allow-Origin", origin)
        ]
    )

    return [response_body]


if __name__ == "__main__":
    from wsgiref.simple_server import make_server

    server = make_server("localhost", 8000, application)

    print("Serving on http://localhost:8000")

    server.serve_forever()