import mongoose from "mongoose";
const { Schema } = mongoose

const foodSchema = new Schema({
    item: {
        type: String,
        required: true,
    },
    quantity: {
        type: Number,
        required: true,
    },
    units: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    }
})
export default mongoose.model('food', foodSchema)