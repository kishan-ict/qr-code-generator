const form = document.querySelector("#qr-form");
const textInput = document.querySelector("#text");
const error = document.querySelector("#error");
const result = document.querySelector("#result");
const qrImage = document.querySelector("#qr-image");
const download = document.querySelector("#download");

form.addEventListener("submit", async (event) => {
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
    const dataUrl = await QRCode.toDataURL(text, {
      errorCorrectionLevel: "M",
      margin: 2,
      width: 720,
      color: { dark: "#101828", light: "#ffffff" }
    });

    qrImage.src = dataUrl;
    download.href = dataUrl;
    result.hidden = false;
    result.scrollIntoView({ behavior: "smooth", block: "nearest" });
  } catch {
    error.textContent = "We could not create that QR code. Please try shorter text.";
    error.hidden = false;
  }
});
