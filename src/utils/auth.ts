import { verifyToken } from './jwt.js';

export function getUser(token: string | undefined) {
    if (!token) return null;
    const decoded = verifyToken(token);
    return decoded as { id: string; role: string } | null;
}

export function requireAuth(user: any) {
    if (!user) {
        throw new Error('Authentication required');
    }
}

export function requireAdmin(user: any) {
    if (!user || user.role !== 'admin') {
        throw new Error('Admin access required');
    }
}
