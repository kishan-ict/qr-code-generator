# QR Code Generator

A simple web app that turns any text or URL into a downloadable QR-code image.

## Features

- Generate QR codes from text, web links, event registration URLs, and more
- Download the generated QR code as a PNG file
- Clean, responsive interface built with basic HTML and CSS
- Input validation for empty and oversized content

## Tech stack

- Python + Flask
- HTML and CSS
- `qrcode` with Pillow

## Run locally

1. Clone the repository:

   ```bash
   git clone https://github.com/kishan-ict/qr-code-generator.git
   cd qr-code-generator
   ```

2. Create and activate a virtual environment:

   ```bash
   python -m venv .venv
   ```

   **Windows**

   ```bash
   .venv\Scripts\activate
   ```

   **macOS/Linux**

   ```bash
   source .venv/bin/activate
   ```

3. Install the dependencies:

   ```bash
   pip install -r requirements.txt
   ```

4. Start the app:

   ```bash
   python app.py
   ```

5. Open [http://127.0.0.1:5000](http://127.0.0.1:5000) in your browser.

## Project structure

```
qr-code-generator/
├── app.py
├── requirements.txt
├── templates/
│   └── index.html
└── static/
    └── style.css
```
