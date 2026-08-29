import json


def application(environ, start_response):

    method = environ["REQUEST_METHOD"]

    if method == "OPTIONS":
        start_response(
            "204 No Content",
            [
                ("Access-Control-Allow-Origin", "*"),
                ("Access-Control-Allow-Methods", "POST, OPTIONS"),
                ("Access-Control-Allow-Headers", "Content-Type")
            ]
        )
        return [b""]

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
                ("Access-Control-Allow-Origin", "*")
            ]
        )

        return [response]

    content_length = int(environ.get("CONTENT_LENGTH", 0))

    body = environ["wsgi.input"].read(content_length)

    data = json.loads(body)

    response_data = {
        "success": True,
        "message": "Python received your message",
        "data": data
    }

    response = json.dumps(response_data).encode("utf-8")

    start_response(
        "200 OK",
        [
            ("Content-Type", "application/json"),
            ("Content-Length", str(len(response))),
            ("Access-Control-Allow-Origin", "*")
        ]
    )

    return [response]


if __name__ == "__main__":
    from wsgiref.simple_server import make_server

    server = make_server("localhost", 8000, application)

    print("Serving on http://localhost:8000")

    server.serve_forever()