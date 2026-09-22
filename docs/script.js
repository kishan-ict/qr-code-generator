const form = document.querySelector("#qr-form");
const textInput = document.querySelector("#text");
const errorMessage = document.querySelector("#error");
const result = document.querySelector("#result");
const qrImage = document.querySelector("#qr-image");
const download = document.querySelector("#download");

const staging = document.createElement("div");
staging.setAttribute("aria-hidden", "true");
staging.style.cssText = "position:fixed;left:-10000px;top:0;";
document.body.appendChild(staging);

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = textInput.value.trim();

  errorMessage.hidden = true;
  result.hidden = true;

  if (!text) {
    errorMessage.textContent = "Please enter text or a URL to create your QR code.";
    errorMessage.hidden = false;
    return;
  }

  try {
    staging.innerHTML = "";
    new QRCode(staging, {
      text: text,
      width: 512,
      height: 512,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });

    // qrcode.js completes its canvas/image work asynchronously on Android.
    window.setTimeout(() => {
      try {
        const qrCanvas = staging.querySelector("canvas");
        if (!qrCanvas) throw new Error("QR canvas not ready");

        // Add a large white quiet zone. This is required for dependable scanning
        // in Google Lens and most phone-camera QR readers.
        const border = 80;
        const finalCanvas = document.createElement("canvas");
        finalCanvas.width = qrCanvas.width + (border * 2);
        finalCanvas.height = qrCanvas.height + (border * 2);

        const context = finalCanvas.getContext("2d");
        context.fillStyle = "#ffffff";
        context.fillRect(0, 0, finalCanvas.width, finalCanvas.height);
        context.imageSmoothingEnabled = false;
        context.drawImage(qrCanvas, border, border);

        const dataUrl = finalCanvas.toDataURL("image/png");
        qrImage.src = dataUrl;
        download.href = dataUrl;
        result.hidden = false;
        result.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } catch (renderError) {
        errorMessage.textContent = "Could not prepare the QR image. Please reload the page once and try again.";
        errorMessage.hidden = false;
      }
    }, 250);
  } catch (generationError) {
    errorMessage.textContent = "Could not create the QR code. Please try shorter text.";
    errorMessage.hidden = false;
  }
});
