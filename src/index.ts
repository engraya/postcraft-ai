import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-serverless';

// Initialize the Neon client
const sql = neon(process.env.DATABASE_URL!);

// @ts-ignore
const db = drizzle(sql);  // Make sure this passes the `sql` directly
