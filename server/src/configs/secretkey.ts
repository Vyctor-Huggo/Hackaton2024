import crypto from 'crypto';

const SECRET_KEY = crypto.randomBytes(32).toString('hex');

export default SECRET_KEY;