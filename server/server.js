/**
 * - Requiring lookup module
 * --- Uses for finding a mime-type of specific file
 */
const lookUp = require("./lookup"),
   http = require("http"),
   fs = require("fs"),
   path = require("path");

/**
 * - Server constructor
 * --- Uses for creating server.
 */
module.exports = class Server {
   constructor() {
      this.assetsDir;
   }
   assets(path) {
      if (path) {
         this.assetsDir = path;
      }
   }
   serve(port) {
      let dir = process.cwd(),
         URL;

      // Starts creating the server
      this.server = http.createServer((req, res) => {
         if (this.assetsDir) {
            URL = path.join(dir, this.assetsDir, req.url);
         } else {
            URL = path.join(dir, req.url);
         }

         if (req.url === "/" || lookUp(req.url) === undefined) {
            URL = path.normalize(`${dir}/index.html`);
            res.writeHead(200, { "Content-Type": lookUp(URL) });
            fs.readFile(URL, (err, data) => {
               if (err) {
                  res.writeHead(404, { "Content-Type": lookUp(URL) });
                  res.end();
               }
               res.end(data);
            });
         } else if (lookUp(req.url) !== undefined) {
            res.writeHead(200, { "Content-Type": lookUp(URL) });
            fs.readFile(URL, (err, data) => {
               if (err) {
                  res.writeHead(404, { "Content-Type": lookUp(URL) });
                  res.end();
               }
               res.end(data);
            });
         } else {
            res.writeHead(404, { "Content-Type": "text/plain" });
            res.end("Something wrong :(");
         }
      });

      // Starts listening to the server
      this.listen(port);
   }
   listen(port) {
      this.server.listen(port);
   }
};
