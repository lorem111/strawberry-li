import initSqlJs, { Database } from "sql.js";
import { existsSync, readFileSync, writeFileSync, mkdirSync } from "fs";
import { dirname } from "path";

const DB_PATH = process.env.DATABASE_PATH || "./data/voiceassist.db";

let db: Database | null = null;

const SCHEMA = `
CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  name TEXT,
  password_hash TEXT,
  email_verified_at DATETIME,
  stripe_customer_id TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS purchases (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  user_id INTEGER REFERENCES users(id),
  product_key TEXT NOT NULL,
  stripe_payment_id TEXT,
  amount_cents INTEGER,
  status TEXT DEFAULT 'pending',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS leads (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT NOT NULL,
  source TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
`;

async function initDb(): Promise<Database> {
  if (db) return db;

  const SQL = await initSqlJs();

  const dir = dirname(DB_PATH);
  if (!existsSync(dir)) {
    mkdirSync(dir, { recursive: true });
  }

  let newDb: Database;
  if (existsSync(DB_PATH)) {
    const buffer = readFileSync(DB_PATH);
    newDb = new SQL.Database(buffer);
  } else {
    newDb = new SQL.Database();
    newDb.run(SCHEMA);
  }

  db = newDb;
  saveDb();
  return db;
}

function saveDb(): void {
  if (!db) return;
  const data = db.export();
  const buffer = Buffer.from(data);
  writeFileSync(DB_PATH, buffer);
}

export async function getDb(): Promise<Database> {
  return initDb();
}

export interface User {
  id: number;
  email: string;
  name: string | null;
  password_hash: string | null;
  email_verified_at: string | null;
  stripe_customer_id: string | null;
  created_at: string;
}

export interface Lead {
  id: number;
  email: string;
  source: string | null;
  created_at: string;
}

export interface Purchase {
  id: number;
  user_id: number;
  product_key: string;
  stripe_payment_id: string | null;
  amount_cents: number | null;
  status: string;
  created_at: string;
}

export async function createLead(email: string, source?: string): Promise<number> {
  const database = await getDb();
  database.run("INSERT INTO leads (email, source) VALUES (?, ?)", [email, source || null]);
  const result = database.exec("SELECT last_insert_rowid() as id");
  saveDb();
  return result[0]?.values[0]?.[0] as number;
}

export async function getLeads(): Promise<Lead[]> {
  const database = await getDb();
  const result = database.exec("SELECT * FROM leads ORDER BY created_at DESC");
  if (!result[0]) return [];

  const columns = result[0].columns;
  return result[0].values.map((row) => {
    const obj: Record<string, unknown> = {};
    columns.forEach((col, i) => {
      obj[col] = row[i];
    });
    return obj as unknown as Lead;
  });
}

export async function createUser(email: string, name?: string, passwordHash?: string): Promise<number> {
  const database = await getDb();
  database.run(
    "INSERT INTO users (email, name, password_hash) VALUES (?, ?, ?)",
    [email, name || null, passwordHash || null]
  );
  const result = database.exec("SELECT last_insert_rowid() as id");
  saveDb();
  return result[0]?.values[0]?.[0] as number;
}

export async function getUserByEmail(email: string): Promise<User | null> {
  const database = await getDb();
  const result = database.exec("SELECT * FROM users WHERE email = ?", [email]);
  if (!result[0] || !result[0].values[0]) return null;

  const columns = result[0].columns;
  const row = result[0].values[0];
  const obj: Record<string, unknown> = {};
  columns.forEach((col, i) => {
    obj[col] = row[i];
  });
  return obj as unknown as User;
}

export async function getUserById(id: number): Promise<User | null> {
  const database = await getDb();
  const result = database.exec("SELECT * FROM users WHERE id = ?", [id]);
  if (!result[0] || !result[0].values[0]) return null;

  const columns = result[0].columns;
  const row = result[0].values[0];
  const obj: Record<string, unknown> = {};
  columns.forEach((col, i) => {
    obj[col] = row[i];
  });
  return obj as unknown as User;
}

export { saveDb };
