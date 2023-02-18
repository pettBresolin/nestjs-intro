//const { response } = require("express");

fetch("http://localhost:3333")
.then ((response) => response.text())
.then(console.log);