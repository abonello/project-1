# def application(environ, start_response):
#     response1 = b"Hello from Python! Changed"
#     response2 = b"\nSecond line"

#     start_response(
#         "200 OK",
#         [
#             ("Content-Type", "text/plain"),
#             ("Content-Length", str(len(response1)+len(response2)))
#         ]
#     )

#     return [response1, response2]

import json

data = {
    "message": "Hello from Python!",
    "status": "success"
}

def application(environ, start_response):

    response = json.dumps(data).encode("utf-8")
    
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