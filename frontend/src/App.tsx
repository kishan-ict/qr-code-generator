import { lazy, Suspense, useEffect, useState, type ComponentType, type FormEvent } from "react";
import QRCode from "qrcode";
import "@designcodeio/threeui/style.css";
import "./styles.css";

const PredictiveArcCanvas = lazy(() =>
  import("@designcodeio/threeui/components/PredictiveArcCanvas").then(({ PredictiveArcCanvas }) => ({
    default: PredictiveArcCanvas,
  })),
);
const SylvaLivingWorldScene = lazy(() =>
  import("@designcodeio/threeui/components/SylvaLivingWorldScene").then(({ SylvaLivingWorldScene }) => ({
    default: SylvaLivingWorldScene as ComponentType<{ variant: "living-green" }>,
  })),
);

function useMobileViewport() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const query = window.matchMedia("(max-width: 760px)");
    const update = () => setIsMobile(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);
  return isMobile;
}

export default function App() {
  const isMobile = useMobileViewport();
  const [value, setValue] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);

  async function generate(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const text = value.trim();
    setError("");
    setImage(null);
    if (!text) {
      setError("Enter text or a URL first.");
      return;
    }
    setBusy(true);
    try {
      const png = await QRCode.toDataURL(text, {
        errorCorrectionLevel: "H",
        margin: 4,
        width: 720,
        color: { dark: "#000000", light: "#ffffff" },
      });
      setImage(png);
    } catch {
      setError("That content could not be encoded. Try a shorter message or link.");
    } finally {
      setBusy(false);
    }
  }

  async function copyText() {
    if (!value.trim()) return;
    try {
      await navigator.clipboard.writeText(value.trim());
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      setError("Clipboard access is unavailable in this browser.");
    }
  }

  return (
    <>
      <div className="shader-frame" aria-hidden="true">
        <Suspense fallback={null}>
          {isMobile ? (
            <PredictiveArcCanvas variant="halftone-flow" hue={0} saturation={1.0} brightness={1.0} />
          ) : (
            <SylvaLivingWorldScene variant="living-green" />
          )}
        </Suspense>
      </div>
      <div className="app-shell">
        <header className="topbar">
          <a className="brand" href="#top" aria-label="QR Studio home">
            <span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /></span>
            <span>qr<span className="brand-accent">studio</span></span>
          </a>
          <span className="top-note"><span className="status-dot" /> Free QR code maker</span>
        </header>

        <main id="top" className="shell">
          <section className="intro">
            <span className="eyebrow">MAKE IT SCANNABLE</span>
            <h1>Turn anything into<br /><span>a QR code.</span></h1>
            <p>Create a QR code for a link, event, or message. Download the image and share it anywhere.</p>
            <div className="trust-row"><span>✓ No account needed</span><span>✓ PNG download</span><span>✓ Made for scanning</span></div>
          </section>

          <section className="workspace glass-card" aria-label="QR code generator">
            <div className="form-panel">
              <div className="panel-heading">
                <span className="step">01</span>
                <div><h2>Your content</h2><p>Paste a link or type a short message.</p></div>
              </div>
              <form onSubmit={generate}>
                <label htmlFor="qr-text">Text or URL</label>
                <textarea id="qr-text" value={value} onChange={(event) => setValue(event.target.value)} maxLength={2000} placeholder="https://example.com" />
                <div className="field-meta"><span>Shorter content scans more easily.</span><span>{value.length.toLocaleString()} / 2,000</span></div>
                {error && <p className="error" role="alert">{error}</p>}
                <div className="button-row">
                  <button className="primary-button" type="submit" disabled={busy}>
                    <span>{busy ? "Creating your QR…" : "Generate QR code"}</span><span aria-hidden="true">↗</span>
                  </button>
                  <button className="copy-button" type="button" onClick={copyText} aria-label="Copy entered text">{copied ? "Copied" : "Copy"}</button>
                </div>
              </form>
              <div className="privacy-note"><span aria-hidden="true">◆</span><span>QR codes are created in your browser. Your text stays on your device.</span></div>
            </div>

            <div className="preview-panel">
              <div className="preview-head"><span className="step">02</span><div><h2>Your QR code</h2><p>Preview and download when ready.</p></div></div>
              {image ? (
                <div className="result" aria-live="polite">
                  <div className="qr-frame"><img src={image} alt="Generated QR code" /></div>
                  <p className="ready-label"><span className="status-dot" /> Ready to scan</p>
                  <a className="download" href={image} download="my-qr-code.png"><span aria-hidden="true">↓</span> Download PNG</a>
                </div>
              ) : (
                <div className="empty-state">
                  <div className="qr-placeholder" aria-hidden="true">{Array.from({ length: 9 }, (_, i) => <span key={i} />)}</div>
                  <p>Your QR code will appear here</p>
                  <span>Enter your content to get started</span>
                </div>
              )}
            </div>
          </section>

          <section className="use-cases" aria-label="Common uses">
            <span className="use-title">MADE FOR EVERYDAY SHARING</span>
            <div className="use-list"><span><b>↗</b> Share links</span><span><b>▦</b> Promote a business</span><span><b>◎</b> Event registrations</span></div>
          </section>
        </main>
        <footer><span>QR Studio</span><span>Simple QR codes, ready to share.</span></footer>
      </div>
    </>
  );
}
