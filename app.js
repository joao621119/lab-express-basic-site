//Require express
const { request, response } = require("express");
const express = require("express");

const app = express();

//Link public folder
app.use(express.static("public"));

//Creating routes:

//Home
app.get("/home", (request, response) => {
  response.sendFile(__dirname + "/views/home.html");
});

//About
app.get("/about", (request, response) => {
  response.sendFile(__dirname + "/views/about.html");
});

//Works
app.get("/works", (request, response) => {
  response.sendFile(__dirname + "/views/works.html");
});

//Bonus - Photo gallery
app.get("/photogallery", (request, response) => {
  response.sendFile(__dirname + "/views/photogallery.html");
});

//Bonus - Contact
app.get("/contact", (request, response) => {
  response.sendFile(__dirname + "/views/contact.html")
})

//Listen
app.listen(3000, () => console.log("Server running on port 3000"));
