import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    lastName: {
        type: String,
        required: true,
        min: 2,
        max: 50,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        max: 50,
    },
    password: {
        type: String,
        required: true,
        unique: false,
        min: 5,
        max: 16,
    },
    picturePath: {
        type: String,
        default: "",
    },
    friends: {
        type: Array,
        default: [], //check later
    },
    location: String,
    occupation: String,
    viewedProfile: Number,
    impressions: Number,
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;
