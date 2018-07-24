const fs = require('fs');
const path = require('path');
const url = require('url');

function getContentType(url) {
    let ext = path.parse(url).ext;
    const mimeTypes = {
        '.ico': 'image/x-icon',
        '.png': 'image/png',
        '.jpg': 'image/jpg',
        '.jpeg': 'image/jpeg',
        '.css': 'text/css',
    };
    return mimeTypes[ext] || 'text/plain';
}
/*globals __dirname*/
module.exports = (req, res) => {
    req.pathname = req.pathname || url.parse(req.url).pathname;

    if (req.pathname.startsWith('/content/') && req.method === 'GET') {
        let filePath = path.normalize(path.join(__dirname, `..${req.pathname}`));        
        let readSt = fs.createReadStream(filePath);

        readSt.on('error', () =>{
            res.sendError('Resource not found');   
        });

        res.writeHead(200, {
            'Content-Type': getContentType(req.pathname),
        });

        readSt.pipe(res);
    } else{
        return true;
    }
};