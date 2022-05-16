import pkg from "pg";
import "dotenv/config";
const { Pool } = pkg;

export const pool = new Pool({
  connectionString: `postgres://${process.env.DATABASE_USERNAME}:${process.env.PASSWORD}@${process.env.HOST}:5432/db69l3jbpjp7rh`,
  ssl: {
    rejectUnauthorized: false,
  },
});
export default pool;
