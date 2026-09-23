type Env = { DB: D1Database };

const seedUsers = [{ id: "u1", name: "Demo Student", gr: "GR1001", course: "Computer Engineering", phone: "0000000000", blocked: false }];
const seedBooks = [
  { id: "BOOK001", title: "Python Programming", author: "Mark Lutz", category: "Programming", shelf: "A-01", issuedTo: null },
  { id: "BOOK002", title: "Clean Code", author: "Robert C. Martin", category: "Programming", shelf: "A-02", issuedTo: null },
  { id: "BOOK003", title: "Data Structures", author: "Narasimha Karumanchi", category: "Computer Science", shelf: "B-01", issuedTo: null },
  { id: "BOOK004", title: "Computer Networks", author: "Andrew S. Tanenbaum", category: "Networking", shelf: "B-02", issuedTo: null },
  { id: "BOOK005", title: "Database System Concepts", author: "Abraham Silberschatz", category: "Database", shelf: "C-01", issuedTo: null },
];

async function ensure(db: D1Database) {
  await db.batch([
    db.prepare("CREATE TABLE IF NOT EXISTS library_state (id INTEGER PRIMARY KEY, users TEXT NOT NULL, books TEXT NOT NULL)"),
    db.prepare("INSERT OR IGNORE INTO library_state (id, users, books) VALUES (1, ?, ?)").bind(JSON.stringify(seedUsers), JSON.stringify(seedBooks)),
  ]);
}

export async function onRequestGet({ env }: { env: Env }) {
  if (!env.DB) return Response.json({ error: "D1 database is not connected" }, { status: 503 });
  await ensure(env.DB);
  const row = await env.DB.prepare("SELECT users, books FROM library_state WHERE id = 1").first<{ users: string; books: string }>();
  return Response.json({ users: JSON.parse(row?.users || "[]"), books: JSON.parse(row?.books || "[]") });
}

export async function onRequestPut({ request, env }: { request: Request; env: Env }) {
  if (!env.DB) return Response.json({ error: "D1 database is not connected" }, { status: 503 });
  if (request.headers.get("X-Manager-Pin") !== "1to8") return Response.json({ error: "Manager authentication required" }, { status: 401 });
  const payload = await request.json() as { users?: unknown[]; books?: unknown[] };
  if (!Array.isArray(payload.users) || !Array.isArray(payload.books)) return Response.json({ error: "Invalid library data" }, { status: 400 });
  await ensure(env.DB);
  await env.DB.prepare("UPDATE library_state SET users = ?, books = ? WHERE id = 1").bind(JSON.stringify(payload.users), JSON.stringify(payload.books)).run();
  return Response.json({ ok: true });
}
