const form = document.querySelector("#qr-form");
const textInput = document.querySelector("#text");
const error = document.querySelector("#error");
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

  error.hidden = true;
  result.hidden = true;

  if (!text) {
    error.textContent = "Please enter text or a URL to create your QR code.";
    error.hidden = false;
    return;
  }

  try {
    staging.innerHTML = "";
    new QRCode(staging, {
      text: text,
      width: 512,
      height: 512,
      colorDark: "#101828",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.M
    });

    // qrcode.js completes its canvas/image work asynchronously on Android.
    window.setTimeout(() => {
      try {
        const canvas = staging.querySelector("canvas");
        const image = staging.querySelector("img");
        const dataUrl = canvas ? canvas.toDataURL("image/png") : (image ? image.src : "");

        if (!dataUrl) throw new Error("QR image not ready");

        qrImage.src = dataUrl;
        download.href = dataUrl;
        result.hidden = false;
        result.scrollIntoView({ behavior: "smooth", block: "nearest" });
      } catch (error) {
        error.hidden = false;
        error.textContent = "Could not prepare the QR image. Please reload the page once and try again.";
      }
    }, 250);
  } catch (error) {
    error.hidden = false;
    error.textContent = "Could not create the QR code. Please try shorter text.";
  }
});
