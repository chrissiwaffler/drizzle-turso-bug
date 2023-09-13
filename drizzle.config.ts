import { Config } from "drizzle-kit";

import { DATABASE_AUTH_TOKEN, DATABASE_URL } from "./src/constant/env";

export default {
  schema: "./src/lib/db/schema/*",
  out: "./src/lib/db/schema",
  driver: "turso",
  dbCredentials: {
    url: DATABASE_URL,
    authToken: DATABASE_AUTH_TOKEN,
  },
} satisfies Config;
