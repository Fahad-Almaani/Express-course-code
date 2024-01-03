import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  age: Number,
});

const UserModel = mongoose.model("user", userSchema);
export default UserModel;
