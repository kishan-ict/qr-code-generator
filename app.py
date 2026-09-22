from io import BytesIO

import qrcode
from flask import Flask, render_template, request, send_file

app = Flask(__name__)


@app.route("/", methods=["GET", "POST"])
def index():
    text = ""
    error = None

    if request.method == "POST":
        text = request.form.get("text", "").strip()

        if not text:
            error = "Please enter text or a URL to create your QR code."
        elif len(text) > 2_000:
            error = "Please keep the text under 2,000 characters."
        else:
            qr = qrcode.QRCode(
                version=None,
                error_correction=qrcode.constants.ERROR_CORRECT_M,
                box_size=10,
                border=4,
            )
            qr.add_data(text)
            qr.make(fit=True)

            image = qr.make_image(fill_color="#111827", back_color="white")
            buffer = BytesIO()
            image.save(buffer, "PNG")
            buffer.seek(0)

            return send_file(
                buffer,
                mimetype="image/png",
                as_attachment=True,
                download_name="my-qr-code.png",
            )

    return render_template("index.html", text=text, error=error)


if __name__ == "__main__":
    app.run(debug=True)
