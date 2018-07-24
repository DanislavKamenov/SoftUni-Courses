const url = require('url');
const database = require('../config/database');
const fs = require('fs');
const path = require('path');
const multiparty = require('multiparty');
const shortid = require('shortid');

module.exports = (req, res) => {
    req.pathname = req.pathname || url.parse(req.url).pathname;
    
    if (req.pathname === '/product/add' && req.method === 'GET') {
        let filePath = path.normalize(path.join(__dirname, '../views/products/add.html'));
        let readSt = fs.createReadStream(filePath, {encoding: 'ascii'});

        readSt.on('error', () => {
            res.sendError('404 not found!');
        });

        res.writeHead(200, {
            'Content-Type': 'text/html',
        });
        
        readSt.pipe(res);        
    } else if (req.pathname === '/product/add' && req.method === 'POST') {
        let form = new multiparty.Form();
        let product = {};        

        form.on('part', (part) => {           
            if (part.filename) {
                let fileExtension = path.parse(part.filename).ext;
                let fileName = shortid.generate() + fileExtension;
                let filePath = `./content/images/${fileName}`;  
                let writeSt = fs.createWriteStream(filePath, {encoding: 'binary'});              
                
                product.image = filePath;
                part.setEncoding('binary');
                part.pipe(writeSt);                
            } else {                              
                part.setEncoding('utf-8');
                let field = '';                      

                part.on('data', (data) => {
                    field += data;                   
                });

                part.on('end', () => {                    
                    product[part.name] = field;                                
                });
            }
        });
        
        form.on('close', () => {            
            database.products.add(product);
            res.writeHead(302, {
                Location: '/'
            });

            res.end();
        });

        form.parse(req);
    } else {
        return true;
    }   
};