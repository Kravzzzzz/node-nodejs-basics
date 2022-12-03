import fs from 'fs'

const remove = async () => {
    try {
        if (!fs.existsSync('node-nodejs-basics/src/fs/files/fileToRemove.txt')) {
            throw 'FS operation failed'
        } else {
            fs.unlink('node-nodejs-basics/src/fs/files/fileToRemove.txt', e => {
                if(e){
                    console.error(e)
                }
            })
        }
    } catch (error) {
        console.error(error)
    }
};

await remove();