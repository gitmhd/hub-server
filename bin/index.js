#!/usr/bin/env node

/**
 * Require modules
 */
const HubServer = require("../main"),
   server = new HubServer();

// Parses the arguments
let args = process.argv.slice(2);

if (args.length === 0) {
   console.log(`Required arguments not set!`);
} else {
   args.forEach((v, i, arr) => {
      let port, folder;

      if (v.startsWith("port=")) {
         port = parseInt(v.substr(v.indexOf("=") + 1));
      } else if (v.startsWith("assets=")) {
         folder = v.substr(v.indexOf("=") + 1);
      }

      if (i === arr.length - 1) {
         if (port) {
            if (folder) {
               // Sets the assets folder
               server.assets(folder);
            }

            // Starts serving
            server.serve(port);

            // Outputs the result
            console.log(`Server running at => http://localhost:${port}`);
         } else {
            console.log(`Port not set!`);
         }
      }
   });
}
