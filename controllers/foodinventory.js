import foodSchema from '../models/foodinventory'
import moment from 'moment'
export const getFoodInventory = async (req, res) => {
    foodSchema.find()
        .then((food) => res.json(food))
        .catch((err) => console.log(err))
}

export const getFoodItem = async (req, res) => {
    foodSchema.findById({_id: req.params.id})
        .then((food) => res.json(food))
        .catch((err) => console.log(err))
}
export const postFoodInventory = async (req, res) => {
    const newFoodInventory = new foodSchema({
            item: req.body.item,
            quantity: req.body.quantity,
            units: req.body.units,
            location: req.body.location,
            date: req.body.date
        })
        newFoodInventory
        .save()
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
}
export const updateFoodInventory = async (req, res) => {
    foodSchema.findByIdAndUpdate(
            { _id: req.params.id },
            {
                item: req.body.item,
                quantity: req.body.quantity,
                units: req.body.units,
                location: req.body.location,
                date: req.body.date
            }
            )
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
}
export const deleteFoodInventory = async (req, res) => {
    foodSchema.findByIdAndDelete({_id: req.params.id})
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}