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
      text,
      width: 720,
      height: 720,
      colorDark: "#101828",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.M
    });

    const canvas = staging.querySelector("canvas");
    const image = staging.querySelector("img");
    const dataUrl = canvas ? canvas.toDataURL("image/png") : image?.src;

    if (!dataUrl) throw new Error("QR image not created");

    qrImage.src = dataUrl;
    download.href = dataUrl;
    result.hidden = false;
    result.scrollIntoView({ behavior: "smooth", block: "nearest" });
  } catch {
    error.textContent = "We could not create that QR code. Please try shorter text.";
    error.hidden = false;
  }
});
