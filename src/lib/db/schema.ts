import { pgTable, serial, text, timestamp, integer } from 'drizzle-orm/pg-core'

export const waitlist = pgTable('waitlist', {
  id: serial('id').primaryKey(),
  email: text('email').notNull().unique(),
  referralCode: text('referral_code').notNull().unique(),
  referredBy: text('referred_by'),
  position: integer('position').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
})