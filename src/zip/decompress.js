import { createUnzip } from 'zlib';
import * as fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';

export const decompress = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname  = path.dirname(__filename);

    const unzip = createUnzip();
    fs.createReadStream(path.join(__dirname,'files','archive.gz'))
    .pipe(unzip)
    .pipe(fs.createWriteStream(path.join(__dirname,'files','fileToCompress.txt')));
};