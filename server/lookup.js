const fs = require("fs"),
   path = require("path"),
   fileURL = path.join(__dirname, "/..", "/utils/mime-types.json"),
   mimeTypes = JSON.parse(fs.readFileSync(fileURL));

/**
 * - Exports the function
 * --- This function returns a mime-type of the passed file
 */
module.exports = (file) => {
   let extname = path.extname(file);
   return mimeTypes[extname];
};
