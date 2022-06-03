import crypto from 'crypto';
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

export const calculateHash = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname  = path.dirname(__filename);

    const hashSum = crypto.createHash('sha256');
    hashSum.update(fs.readFileSync(path.join(__dirname,'files','fileToCalculateHashFor.txt')));
    const hex = hashSum.digest('hex');
    return hex;
};