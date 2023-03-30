import grocerySchema from '../models/grocerylist'

export const getGroceryList = async (req, res) => {
    grocerySchema.find()
        .then((food) => res.json(food))
        .catch((err) => console.log(err))
}

export const postGroceryList = async (req, res) => {
    const newGrocerySchema = new grocerySchema({
            item: req.body.item,
            quantity: req.body.quantity,
            units: req.body.units,
        })
        newGrocerySchema
        .save()
        .then((res) => console.log(res))
        .catch((err) => console.log(err))
}

export const updateGroceryList = async (req, res) => {
    grocerySchema.findByIdAndUpdate(
            { _id: req.params.id },
            {
                item: req.body.item,
                quantity: req.body.quantity,
                units: req.body.units,
            }
            )
            .then((res) => console.log(res))
            .catch((err) => console.log(err))
}

export const deleteGroceryList = async (req, res) => {
    grocerySchema.findByIdAndDelete({ _id: req.params.id })
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
}