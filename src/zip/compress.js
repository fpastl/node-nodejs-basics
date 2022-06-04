import { createGzip } from 'zlib';
import * as fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

export const compress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname  = path.dirname(__filename);

    const gzip = createGzip();
    fs.createReadStream(path.join(__dirname,'files','fileToCompress.txt'))
    .pipe(gzip)
    .pipe(fs.createWriteStream(path.join(__dirname,'files','archive.gz')));
};