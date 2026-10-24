import mysql from 'mysql2/promise';
const g = globalThis;
export const pool = g._pool ||= mysql.createPool({
  host: process.env.DB_HOST || 'localhost', user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '', database: process.env.DB_NAME || 'mindspark',
  waitForConnections: true, connectionLimit: 5 });
export async function getState() {
  const [r] = await pool.query('SELECT data FROM game_state WHERE id=1');
  const d = r[0]?.data; return typeof d === 'string' ? JSON.parse(d) : d;
}
export async function setState(s) { await pool.query('UPDATE game_state SET data=? WHERE id=1', [JSON.stringify(s)]); }
