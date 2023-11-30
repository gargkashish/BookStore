const express = require("express");//importing express module
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express(); //contain all functionality that is in express

// Middlewares
app.use(express.json());
app.use(cors());


mongoose
  .connect(
    "mongodb+srv://kashishgarg1155:kashish11@cluster0.vjnj829.mongodb.net/bookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database"))
  .catch((err) => console.log(err));

app.get("/",(req,res)=>{
  res.send("Hello api is working");
}) 
app.use("/books", router); // localhost:5000/books



app.listen(5000,(req,res)=>{
  console.log("Server Started on port 5000 ")  //appliaction is satted on port5000
})