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
- React + Vite for the GitHub Pages interface
- ThreeUI Halftone Flow shader as a mobile-only background

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

## Build the GitHub Pages site

The static site in `docs/` is built from the React app in `frontend/`. The animated shader is loaded only on mobile-width screens; QR generation runs in the browser.

1. Install Node.js (18 or newer).
2. Install the front-end dependencies and build the Pages files:

   ```bash
   npm install
   npm run build
   ```

3. Commit the updated `docs/` build output and push it to GitHub. In the repository, open **Settings → Pages** and select the `main` branch and `/docs` folder as the publishing source.

For local front-end development, run `npm run dev` and open the URL printed by Vite. For a production-like local preview, run `npm run build` followed by `npm run preview`.

## Project structure

```
qr-code-generator/
├── app.py
├── requirements.txt
├── frontend/
│   └── src/
├── src/shaders/                 # Exact registered ThreeUI source snapshot
├── package.json
├── vite.config.ts
├── docs/                        # GitHub Pages build output
├── templates/
│   └── index.html
└── static/
    └── style.css
```
