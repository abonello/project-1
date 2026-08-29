import json
import urllib.request


def application(environ, start_response):

    # "service_id": "default_service",
    #         "template_id": "template1",

    emailjs_data = {
        "service_id": "websites",
        "template_id": "template_LLWKSkJG",
        "user_id": "5J36fO24MtaoAiTUj",
        "accessToken": "WXGigL6FZV9adikr9HcAh",

        "template_params": {
            "from_name": "Python Test 2",
            "to_name": "Anthony Bonello",
            "email": "test@example.com",
            "subject": "Test from Python 2",
            "message": "This email was sent by Python through the EmailJS REST API. Test 2."
        }
    }

    data = json.dumps(emailjs_data).encode("utf-8")

    request = urllib.request.Request(
        "https://api.emailjs.com/api/v1.0/email/send",
        data=data,
        headers={
            "Content-Type": "application/json",
            "User-Agent": "Python EmailJS Test"
        },
        method="POST"
    )

    try:
        with urllib.request.urlopen(request) as response:
            result = response.read()

        response_body = json.dumps({
            "success": True,
            "emailjs_response": result.decode("utf-8")
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
            ("Access-Control-Allow-Origin", "*")
        ]
    )

    return [response_body]


if __name__ == "__main__":
    from wsgiref.simple_server import make_server

    server = make_server("localhost", 8000, application)

    print("Serving on http://localhost:8000")

    server.serve_forever()