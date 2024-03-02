import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql:any = neon(process.env.DRIZZLE_DATABASE_URL!);
export const db = drizzle(sql);

// const result = await db.select().from(...);