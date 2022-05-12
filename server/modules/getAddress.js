const os = require("os");

const interfaces = os.networkInterfaces();
let result;
for (let k in interfaces) {
  for (let k2 in interfaces[k]) {
    let address = interfaces[k][k2];
    if (address.family === "IPv4" && !address.internal) {
      result = address.address;
    }
  }
}

module.exports = result;
