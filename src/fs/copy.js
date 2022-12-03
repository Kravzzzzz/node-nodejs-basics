import fs from 'fs'

const copy = async () => {
    if (fs.existsSync('node-nodejs-basics/src/fs/files_copy' || !'node-nodejs-basics/src/fs/files')) {
        console.error(new Error('FS operation failed'))
    } else {
        fs.cpSync('node-nodejs-basics/src/fs/files', 'node-nodejs-basics/src/fs/files_copy', {recursive: true})
    }
}

copy();
