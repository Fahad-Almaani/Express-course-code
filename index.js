import express from "express";
import UserModel from "./model/user.js";
import cors from "cors";
import mongoose from "mongoose";
const server = express();

// use libraries
server.use(express.json());
server.use(cors());

// mongoose connection
mongoose.connect(
  "mongodb+srv://user1:user1234@cluster0.1by5gyl.mongodb.net/MyDatabase"
);

// GET
server.get("/get-user", (req, res) => {
  UserModel.find() // if u use findOneById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json({ message: "failed to get data" });
    });
});

// POST
server.post("/new-user", (req, res) => {
  const newUser = new UserModel({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    age: req.body.age,
  });
  try {
    newUser.save();
    console.log("done");
    res.status(200).json(newUser);
  } catch (err) {
    console.log("err");
    res.status(400).json({ message: "error" });
  }
});

// DELETE
server.delete("/delete-user/:id", (req, res) => {
  let user_id = req.params.id;
  UserModel.findByIdAndDelete(user_id)
    .then((response) => {
      console.log("user Deleted");
      res.status(200).json({ message: "user deleted" });
    })
    .catch((err) => {
      console.log("Failed to delete user");
      res.status(400).json({ message: "Failed to delete user" });
    });
});

server.listen(8000, () => console.log("server is running..."));
