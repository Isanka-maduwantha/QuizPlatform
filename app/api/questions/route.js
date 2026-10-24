import { NextResponse } from 'next/server';
import { pool } from '@/lib/db';
import { isAdmin } from '@/lib/auth';
export const dynamic = 'force-dynamic';
const deny = () => NextResponse.json({ error: 'auth' }, { status: 401 });

export async function GET(req) {
  if (!isAdmin(req)) return deny();
  const [questions] = await pool.query('SELECT q.*, s.name AS subject FROM questions q LEFT JOIN subjects s ON s.id=q.subject_id ORDER BY q.rnd, q.id');
  const [subjects] = await pool.query('SELECT * FROM subjects ORDER BY name');
  return NextResponse.json({ questions, subjects });
}
export async function POST(req) {
  if (!isAdmin(req)) return deny();
  const b = await req.json();
  if (b.kind === 'subject') { await pool.query('INSERT IGNORE INTO subjects(name) VALUES(?)', [b.name]); return NextResponse.json({ ok: true }); }
  const mcq = b.rnd !== 3, opts = mcq ? b.options.filter(Boolean) : null;
  if (!b.text || (mcq && (opts.length < 2 || b.correct >= opts.length)) || (!mcq && !b.answer_text) || (b.rnd === 2 && !b.subject_id))
    return NextResponse.json({ error: 'invalid' }, { status: 400 });
  await pool.query('INSERT INTO questions(rnd,subject_id,text,options,correct,answer_text) VALUES(?,?,?,?,?,?)',
    [b.rnd, b.rnd === 2 ? b.subject_id : null, b.text, mcq ? JSON.stringify(opts) : null, mcq ? b.correct : null, mcq ? null : b.answer_text]);
  return NextResponse.json({ ok: true });
}
export async function DELETE(req) {
  if (!isAdmin(req)) return deny();
  const { id, kind } = await req.json();
  await pool.query(kind === 'subject' ? 'DELETE FROM subjects WHERE id=?' : 'DELETE FROM questions WHERE id=?', [id]);
  return NextResponse.json({ ok: true });
}
