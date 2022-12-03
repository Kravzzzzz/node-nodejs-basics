import {exists, createWriteStream} from 'fs'
import {dirname} from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

const create = async () => {
    const path = __dirname + '/files/fresh.txt'
    exists(path, (err) => {
        if(err){
            console.error(new Error('FS operation failed'))
        } else {
            createWriteStream(path).write('I am fresh and young')
        }
    }) 
};

await create();