import pkg from "pg";
const { Pool } = pkg;

export const pool = new Pool({
  connectionString: `postgresql://postgres:${process.env.DATABASE_PASSWORD}@localhost:5432/coderscrew`,
});

export default pool;
