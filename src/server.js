const app = require("./app.js");

port = process.env.PORT;

app.listen(port, () => {
  console.log("Server is listening on port:", port);
});
