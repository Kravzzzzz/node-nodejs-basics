import fs from 'fs'

const rename = async () => {
    try {
        if (fs.existsSync('node-nodejs-basics/src/fs/files/properFilename.md' 
        || !'node-nodejs-basics/src/fs/files/wrongFilename.txt')) {
            throw 'FS operation failed'
        } else {
            fs.rename('node-nodejs-basics/src/fs/files/wrongFilename.txt', 'node-nodejs-basics/src/fs/files/properFilename.md', (e) => {
                if (e) {
                    console.error(e)
                    return
                  }
            })
        }
    } catch (e) {
        console.error(e)
    }
};

await rename();