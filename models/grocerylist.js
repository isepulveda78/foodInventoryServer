import mongoose from 'mongoose'
const { Schema } = mongoose

const grocerySchema = new Schema({
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
        required: true
    }
})

export default mongoose.model('grocery', grocerySchema)