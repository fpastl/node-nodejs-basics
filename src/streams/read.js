import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from 'url';

export const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname  = path.dirname(__filename);

    fs.open(path.join(__dirname,'files','fileToRead.txt'))
    .then(
        (file) => {
            let readableStream = file.createReadStream({encoding: 'UTF-8'});
            readableStream.pipe(process.stdout);
        }
    )
};