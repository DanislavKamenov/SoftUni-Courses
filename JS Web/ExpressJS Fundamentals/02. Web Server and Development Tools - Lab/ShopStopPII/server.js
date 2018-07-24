const http = require('http');
const port = 3000;
const handlers = require('./handlers');

http.createServer((req, res) => {
    res.sendError = (errorMsg) => {
        res.writeHead(404, {
            'Content-Type': 'text/plain',
        });

        res.write(errorMsg);
        res.end();         
    };

    for (let handler of handlers) {
        if (!handler(req, res)) {
            break;
        }
    }
}).listen(port, () => console.log('Listening on port 3000'));