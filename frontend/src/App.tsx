import { lazy, Suspense, useState, type FormEvent } from "react";
import QRCode from "qrcode";
import "@designcodeio/threeui/style.css";
import "./styles.css";

const PredictiveArcCanvas = lazy(() =>
  import("@designcodeio/threeui/components/PredictiveArcCanvas").then(({ PredictiveArcCanvas }) => ({
    default: PredictiveArcCanvas,
  })),
);
type User = { id: string; name: string; gr: string; course: string; phone: string; blocked: boolean };
type Book = { id: string; title: string; author: string; category: string; shelf: string; issuedTo?: string };

const starterUsers: User[] = [
  { id: "u1", name: "Demo Student", gr: "GR1001", course: "Computer Engineering", phone: "0000000000", blocked: false },
];
const starterBooks: Book[] = [
  { id: "BOOK001", title: "Python Programming", author: "Mark Lutz", category: "Programming", shelf: "A-01" },
  { id: "BOOK002", title: "Clean Code", author: "Robert C. Martin", category: "Programming", shelf: "A-02" },
  { id: "BOOK003", title: "Data Structures", author: "Narasimha Karumanchi", category: "Computer Science", shelf: "B-01" },
  { id: "BOOK004", title: "Computer Networks", author: "Andrew S. Tanenbaum", category: "Networking", shelf: "B-02" },
  { id: "BOOK005", title: "Database System Concepts", author: "Abraham Silberschatz", category: "Database", shelf: "C-01" },
];

function useStored<T>(key: string, fallback: T) {
  const [value, setValue] = useState<T>(() => {
    try { return JSON.parse(localStorage.getItem(key) || "null") ?? fallback; } catch { return fallback; }
  });
  useEffect(() => localStorage.setItem(key, JSON.stringify(value)), [key, value]);
  return [value, setValue] as const;
}

function LibraryManagement() {
  const [users, setUsers] = useStored<User[]>("qr-library-users", starterUsers);
  const [books, setBooks] = useStored<Book[]>("qr-library-books", starterBooks);
  const [mode, setMode] = useState<"reader" | "manager">("reader");
  const [selectedBook, setSelectedBook] = useState<Book | null>(null);
  const [message, setMessage] = useState("");
  const [userForm, setUserForm] = useState({ name: "", gr: "", course: "", phone: "" });
  const [bookForm, setBookForm] = useState({ title: "", author: "", category: "", shelf: "" });

  function notify(text: string) { setMessage(text); window.setTimeout(() => setMessage(""), 2400); }
  function addUser(event: FormEvent) {
    event.preventDefault();
    if (!userForm.name.trim() || !userForm.gr.trim()) return notify("Name and GR number are required.");
    setUsers([...users, { id: crypto.randomUUID(), ...userForm, blocked: false }]);
    setUserForm({ name: "", gr: "", course: "", phone: "" }); notify("Student added successfully.");
  }
  function addBook(event: FormEvent) {
    event.preventDefault();
    if (!bookForm.title.trim() || !bookForm.author.trim()) return notify("Book title and author are required.");
    const id = `BOOK${String(books.length + 1).padStart(3, "0")}`;
    setBooks([...books, { id, ...bookForm }]);
    setBookForm({ title: "", author: "", category: "", shelf: "" }); notify(`Book added with ID ${id}.`);
  }
  function issueBook() {
    const gr = window.prompt("Enter the student's GR number:")?.trim();
    if (!gr || !selectedBook) return;
    const user = users.find((item) => item.gr.toLowerCase() === gr.toLowerCase());
    if (!user) return notify("Student not found.");
    if (user.blocked) return notify("This student is blocked.");
    if (selectedBook.issuedTo) return notify("This book is already issued.");
    setBooks(books.map((book) => book.id === selectedBook.id ? { ...book, issuedTo: user.gr } : book));
    setSelectedBook({ ...selectedBook, issuedTo: user.gr }); notify("Book issued successfully.");
  }
  function returnBook(book: Book) {
    setBooks(books.map((item) => item.id === book.id ? { ...item, issuedTo: undefined } : item));
    if (selectedBook?.id === book.id) setSelectedBook({ ...book, issuedTo: undefined });
    notify("Book returned successfully.");
  }

  return <section className="library-shell glass-card" aria-label="Library management system">
    <div className="library-header">
      <div><span className="eyebrow">LIBRARY MANAGEMENT SYSTEM</span><h2>Books and members</h2><p>Scan a book as a reader or manage the library as an administrator.</p></div>
      <div className="library-tabs"><button className={mode === "reader" ? "active" : ""} onClick={() => setMode("reader")}>Reader</button><button className={mode === "manager" ? "active" : ""} onClick={() => setMode("manager")}>Manager</button></div>
    </div>
    {message && <p className="library-message" role="status">{message}</p>}
    {mode === "reader" ? <div className="book-grid">{books.map((book) => <button className="book-card" key={book.id} onClick={() => setSelectedBook(book)}><span className="book-qr">▦</span><span><b>{book.title}</b><small>{book.author} · {book.id}</small></span><em className={book.issuedTo ? "issued" : "available"}>{book.issuedTo ? "Issued" : "Available"}</em></button>)}</div> : <div className="manager-grid">
      <div className="manager-panel"><h3>Add student</h3><form onSubmit={addUser} className="mini-form">{(["name", "gr", "course", "phone"] as const).map((field) => <input key={field} placeholder={field === "gr" ? "GR number" : field[0].toUpperCase() + field.slice(1)} value={userForm[field]} onChange={(event) => setUserForm({ ...userForm, [field]: event.target.value })} />)}<button className="small-button">Add student</button></form><h3>Students ({users.length})</h3>{users.map((user) => <div className="admin-row" key={user.id}><span><b>{user.name}</b><small>{user.gr} · {user.course}</small></span><button onClick={() => setUsers(users.map((item) => item.id === user.id ? { ...item, blocked: !item.blocked } : item))} className={user.blocked ? "unblock" : "block"}>{user.blocked ? "Unblock" : "Block"}</button><button onClick={() => setUsers(users.filter((item) => item.id !== user.id))} className="delete">Delete</button></div>)}</div>
      <div className="manager-panel"><h3>Add book</h3><form onSubmit={addBook} className="mini-form">{(["title", "author", "category", "shelf"] as const).map((field) => <input key={field} placeholder={field[0].toUpperCase() + field.slice(1)} value={bookForm[field]} onChange={(event) => setBookForm({ ...bookForm, [field]: event.target.value })} />)}<button className="small-button">Add book</button></form><h3>Books ({books.length})</h3>{books.map((book) => <div className="admin-row" key={book.id}><span><b>{book.title}</b><small>{book.id} · {book.issuedTo ? `Issued to ${book.issuedTo}` : "Available"}</small></span><button onClick={() => book.issuedTo ? returnBook(book) : setSelectedBook(book)} className="return">{book.issuedTo ? "Return" : "Issue"}</button><button onClick={() => setBooks(books.filter((item) => item.id !== book.id))} className="delete">Delete</button></div>)}</div>
    </div>}
    {selectedBook && <div className="book-detail"><button className="close-detail" onClick={() => setSelectedBook(null)}>×</button><span className="book-qr large">▦</span><span className="eyebrow">{selectedBook.id}</span><h3>{selectedBook.title}</h3><p>{selectedBook.author} · {selectedBook.category || "General"} · Shelf {selectedBook.shelf || "Not assigned"}</p><strong className={selectedBook.issuedTo ? "issued" : "available"}>{selectedBook.issuedTo ? `Issued to ${selectedBook.issuedTo}` : "Available"}</strong>{mode === "manager" && !selectedBook.issuedTo && <button className="small-button" onClick={issueBook}>Issue this book</button>}</div>}
  </section>;
}

export default function App() {
  const [value, setValue] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const [error, setError] = useState("");
  const [busy, setBusy] = useState(false);
  const [copied, setCopied] = useState(false);
  const [section, setSection] = useState<"qr" | "library">("qr");

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
          <PredictiveArcCanvas variant="halftone-flow" hue={0} saturation={1.0} brightness={1.0} />
        </Suspense>
      </div>
      <div className="app-shell">
        <header className="topbar">
          <a className="brand" href="#top" aria-label="QR Studio home">
            <span className="brand-mark" aria-hidden="true"><i /><i /><i /><i /></span>
            <span>qr<span className="brand-accent">studio</span></span>
          </a>
          <span className="top-note"><span className="status-dot" /> Free QR code maker</span>
          <nav className="main-nav"><button className={section === "qr" ? "active" : ""} onClick={() => setSection("qr")}>QR Generator</button><button className={section === "library" ? "active" : ""} onClick={() => setSection("library")}>Library System</button></nav>
        </header>

        <main id="top" className="shell">
          {section === "qr" && <section className="intro">
            <span className="eyebrow">MAKE IT SCANNABLE</span>
            <h1>Turn anything into<br /><span>a QR code.</span></h1>
            <p>Create a QR code for a link, event, or message. Download the image and share it anywhere.</p>
            <div className="trust-row"><span>✓ No account needed</span><span>✓ PNG download</span><span>✓ Made for scanning</span></div>
          </section>}

          {section === "qr" && <section className="workspace glass-card" aria-label="QR code generator">
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
          </section>}

          {section === "library" && <><section className="library-intro"><span className="eyebrow">COLLABORATED MODULE</span><h1>Library <span>management.</span></h1><p>Every book has a QR identity. Readers can view details, while managers control members, books, and issue records.</p></section><LibraryManagement /></>}

          {section === "qr" && <section className="use-cases" aria-label="Common uses">
            <span className="use-title">MADE FOR EVERYDAY SHARING</span>
            <div className="use-list"><span><b>↗</b> Share links</span><span><b>▦</b> Promote a business</span><span><b>◎</b> Event registrations</span></div>
          </section>}
        </main>
        <footer><span>QR Studio</span><span>Simple QR codes, ready to share.</span></footer>
      </div>
    </>
  );
}
