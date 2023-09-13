import { sqliteTable, integer } from "drizzle-orm/sqlite-core";

export const platformHistory = sqliteTable("platform_history", {
  timestamp: integer("timestamp").primaryKey().notNull(),
  apy: integer("apy"),
  totalValueLocked: integer("total_value_locked"),
});
