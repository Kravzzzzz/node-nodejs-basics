import fs from 'fs'
import { readdir } from 'fs/promises';


const list = async () => {
    try {
        if (!fs.existsSync('node-nodejs-basics/src/fs/files')) {
            throw 'FS operation failed'
        } else {
            const files = fs.readdirSync('node-nodejs-basics/src/fs/files', e => {
                if(e){
                    console.error(e)
                }
            })
            console.log(files);
        }
    } catch (error) {
        console.error(error)
    }
};

await list();
