const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
const address = require("./modules/getAddress");
const PORT = 8088;

app.use(express.static(path.join(__dirname, "./static")));

app.post("/getProducts", async (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  await fs.readFile("./json/products.json", "utf-8", (err, data) => {
    if (err) {
      res.send(JSON.stringify([]));
    } else {
      data = JSON.parse(data.toString()).map((product) => {
        product.imgSrc = `http://${address}:${PORT}/${product.imgSrc}`;
        return product;
      });
      res.send(JSON.stringify(data));
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at https://localhost:${PORT}.`);
  console.log(`Server is running at https://${address}:${PORT}.`);
});
