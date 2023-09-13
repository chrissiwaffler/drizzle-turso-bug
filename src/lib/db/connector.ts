import { createClient } from "@libsql/client/web";
import { drizzle } from "drizzle-orm/libsql";

import * as schema from "@/lib/db/schema/schema";

import { DATABASE_AUTH_TOKEN, DATABASE_URL } from "@/constant/env";

const client = createClient({
  url: DATABASE_URL,
  authToken: DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client, { schema: schema, logger: true });
