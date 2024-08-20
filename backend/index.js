const express = require("express");
const app = express();

const productRoute = require('./routes/productRoutes')
app.use(express.json());

app.use('/categories', productRoute);

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log(`Server is running at port 3000`);
});