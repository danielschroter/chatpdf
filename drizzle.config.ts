import type { Config } from "drizzle-kit";
import { drizzle } from "drizzle-orm/better-sqlite3";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env" });

export default {
  driver: "pg",
  schema: "./src/lib/db/schema.ts",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!, //env variable only inside of src visible -> install dotenv
  },
} satisfies Config;

//  npx drizzle-kit push:pg
