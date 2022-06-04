import fs from 'fs/promises';
import path from 'path';
import { pipeline } from 'stream';
import {fileURLToPath} from 'url';

export const write = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname  = path.dirname(__filename);

    fs.open(path.join(__dirname,'files','fileToWrite.txt'),'a')
    .then(
        (file) => 
        {
            let writeableStream = file.createWriteStream({encoding: 'UTF-8'});
            pipeline(
                process.stdin, 
                writeableStream,  
                (err) => {
                    if (err) {
                    console.error('Pipeline failed.', err);
                    }
                }
            );
        }
    )
};