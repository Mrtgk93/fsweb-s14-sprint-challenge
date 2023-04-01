// Server'ı buradan başlatın
const server = require("./api/server");

const port = 9001;

server.listen(port, () => {
  console.log("listenin on port ", port);
});
