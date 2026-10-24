import crypto from 'crypto';
export const token = () => crypto.createHmac('sha256', process.env.AUTH_SECRET || 'dev').update(process.env.ADMIN_PASSWORD || 'admin').digest('hex');
export const isAdmin = (req) => req.cookies.get('adm')?.value === token();
