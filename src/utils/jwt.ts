import jwt, { SignOptions } from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || "ttto";

function generateToken(payload: string | object | Buffer): string {
    return jwt.sign(
        payload,
        JWT_SECRET,
        { expiresIn: '24h' }
    );
}
function verifyToken(token: string): object | null {
    try {
        const decoded = jwt.verify(token, JWT_SECRET);
        return decoded as object;
    } catch (error) {
        console.error('Token verification failed:', error);
        return null;
    }
}

export default{ 
    generateToken, 
    verifyToken 
};