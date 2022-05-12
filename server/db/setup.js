import pkg from "pg";
const { Pool } = pkg;
import "dotenv/config";

export const pool = new Pool({
  connectionString: `postgresql://postgres:${process.env.DATABASE_PASSWORD}@localhost:5432/coderscrew`,
});

export default pool;
