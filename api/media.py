import os

PRIVATE_MEDIA_PATH = os.getenv("PRIVATE_MEDIA_PATH")


def serve_video(environ, start_response):

    if environ["REQUEST_METHOD"] != "GET":
        response = b"Method Not Allowed"

        start_response(
            "405 Method Not Allowed",
            [
                ("Content-Type", "text/plain"),
                ("Content-Length", str(len(response)))
            ]
        )

        return [response]

    video_path = os.path.join(
        PRIVATE_MEDIA_PATH,
        "video",
        "SlideShow_Slide2.mp4"
    )

    if not os.path.isfile(video_path):
        response = b"Video not found"

        start_response(
            "404 Not Found",
            [
                ("Content-Type", "text/plain"),
                ("Content-Length", str(len(response)))
            ]
        )

        return [response]

    file_size = os.path.getsize(video_path)

    range_header = environ.get("HTTP_RANGE")

    if not range_header:
        start_response(
            "200 OK",
            [
                ("Content-Type", "video/mp4"),
                ("Content-Length", str(file_size)),
                ("Accept-Ranges", "bytes")
            ]
        )

        def generate():
            with open(video_path, "rb") as video:
                while True:
                    chunk = video.read(64 * 1024)

                    if not chunk:
                        break

                    yield chunk

        return generate()

    # Parse Range header
    try:
        range_value = range_header.replace("bytes=", "")
        start, end = range_value.split("-")

        start = int(start)

        if end:
            end = int(end)
        else:
            end = file_size - 1

    except (ValueError, AttributeError):
        response = b"Invalid Range"

        start_response(
            "416 Range Not Satisfiable",
            [
                ("Content-Type", "text/plain"),
                ("Content-Length", str(len(response))),
                ("Content-Range", f"bytes */{file_size}")
            ]
        )

        return [response]

    # Validate range
    if start < 0 or start >= file_size or end < start:
        response = b"Invalid Range"

        start_response(
            "416 Range Not Satisfiable",
            [
                ("Content-Type", "text/plain"),
                ("Content-Length", str(len(response))),
                ("Content-Range", f"bytes */{file_size}")
            ]
        )

        return [response]

    # Don't allow the requested end beyond the file
    end = min(end, file_size - 1)

    content_length = end - start + 1

    start_response(
        "206 Partial Content",
        [
            ("Content-Type", "video/mp4"),
            ("Content-Length", str(content_length)),
            ("Content-Range", f"bytes {start}-{end}/{file_size}"),
            ("Accept-Ranges", "bytes")
        ]
    )

    def generate_range():
        with open(video_path, "rb") as video:
            video.seek(start)

            remaining = content_length

            while remaining > 0:
                chunk = video.read(min(64 * 1024, remaining))

                if not chunk:
                    break

                yield chunk
                remaining -= len(chunk)

    return generate_range()
