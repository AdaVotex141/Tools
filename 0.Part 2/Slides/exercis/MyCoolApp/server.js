const http = require('http');
const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');


dotenv.config();

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        res.writeHead(404, {'Content-Type': 'text/html'});
        res.end('<h1>404 Not Found</h1>');
      } else {
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      let contentType = 'text/html';
      if (filePath.endsWith('.js')) {
        contentType = 'text/javascript';
      } else if (filePath.endsWith('.css')) {
        contentType = 'text/css';
      } else if (filePath.endsWith('.jpg') || filePath.endsWith('.jpeg')) {
        contentType = 'image/jpeg';
      } else if (filePath.endsWith('.png')) {
        contentType = 'image/png';
      }


      res.writeHead(200, {'Content-Type': contentType});
      res.end(content, 'utf-8');
    }
  });
});


server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
