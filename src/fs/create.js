import fs from 'fs'

const create = async () => {
    try {
        if (fs.existsSync('node-nodejs-basics/src/fs/files/fresh.txt')) {
            throw 'FS operation failed'
        } else {
            fs.createWriteStream('node-nodejs-basics/src/fs/files/fresh.txt').write('I am fresh and young')
        }
    } catch (error) {
        console.error(error)
    }

};

await create();