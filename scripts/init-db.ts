import { getDb } from "../lib/db";

async function main() {
  console.log("Initializing database...\n");

  const db = await getDb();

  const tables = db.exec(`
    SELECT name FROM sqlite_master
    WHERE type='table' AND name NOT LIKE 'sqlite_%'
  `);

  console.log("Tables created:");
  console.log("┌──────────────┬───────────┐");
  console.log("│ Table        │ Row Count │");
  console.log("├──────────────┼───────────┤");

  const tableNames = tables[0]?.values.map((v) => v[0] as string) || [];

  for (const tableName of tableNames) {
    const countResult = db.exec(`SELECT COUNT(*) FROM ${tableName}`);
    const count = countResult[0]?.values[0]?.[0] || 0;
    console.log(`│ ${tableName.padEnd(12)} │ ${String(count).padStart(9)} │`);
  }

  console.log("└──────────────┴───────────┘");
  console.log("\n✓ Database initialized successfully");
}

main().catch(console.error);
