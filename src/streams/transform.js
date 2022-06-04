import { Transform, pipeline } from 'stream';

export const transform = async () => {
    const transformStream = new Transform({
        transform(chunk, encoding, callback) {
            const newString = `${chunk.toString('utf8')}`.trim().split('').join(' - ');
            callback(null,newString);
          }
        }
    );
    pipeline(
        process.stdin, 
        transformStream, 
        process.stdout,  
        (err) => {
            if (err) {
            console.error('Pipeline failed.', err);
            }
        }
    );
};