import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { createUser, getUserByEmail } from '@/app/lib/db';

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    const existingUser = await getUserByEmail(email);
    if (existingUser) {
      return NextResponse.json({ error: 'Email already exists' }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await createUser(name, email, hashedPassword);

    return NextResponse.json({ user: { id: user.id, name: user.name, email: user.email } });
  } catch (error) {
    console.error('Signup error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}