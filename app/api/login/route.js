import { NextResponse } from 'next/server';
import { token } from '@/lib/auth';
export async function POST(req) {
  const { password } = await req.json();
  if (password !== (process.env.ADMIN_PASSWORD || 'admin')) return NextResponse.json({ ok: false }, { status: 401 });
  const res = NextResponse.json({ ok: true });
  res.cookies.set('adm', token(), { httpOnly: true, sameSite: 'lax', path: '/', maxAge: 60 * 60 * 12 });
  return res;
}
