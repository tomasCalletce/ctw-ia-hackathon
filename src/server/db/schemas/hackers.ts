import { pgTable, uuid, timestamp, varchar } from "drizzle-orm/pg-core";
import { createSelectSchema } from "drizzle-zod";

export const hackers = pgTable("hackers", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 100 }).notNull(),
  role: varchar("role", { length: 80 }).notNull(),
  email: varchar("email", { length: 254 }).notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
  updated_at: timestamp("updated_at")
    .notNull()
    .defaultNow()
    .$onUpdate(() => new Date()),
});

export const verifyHackersSchema = createSelectSchema(hackers).omit({
  id: true,
  created_at: true,
  updated_at: true,
});

export const fromHackerSchema = createSelectSchema(hackers).omit({
  id: true,
  created_at: true,
  updated_at: true,
});
