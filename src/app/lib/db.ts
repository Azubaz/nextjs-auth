import { sql } from '@vercel/postgres';

export async function createUser(name: string, email: string, hashedPassword: string) {
  try {
    const result = await sql`
      INSERT INTO users (name, email, password)
      VALUES (${name}, ${email}, ${hashedPassword})
      RETURNING id, name, email, created_at
    `;
    return result.rows[0];
  } catch (error) {
    console.error('Failed to create user:', error);
    throw new Error('Failed to create user.');
  }
}

export async function getUserByEmail(email: string) {
  try {
    const result = await sql`
      SELECT id, name, email, password, created_at FROM users WHERE email = ${email}
    `;
    return result.rows[0];
  } catch (error) {
    console.error('Failed to get user:', error);
    throw new Error('Failed to get user.');
  }
}