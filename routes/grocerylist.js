import express from 'express'
import { getGroceryList, postGroceryList, updateGroceryList, deleteGroceryList, getGroceryItem } from '../controllers/grocerylist'

const router = express.Router()

router.get('/grocerylist', getGroceryList)

router.get('/grocerylist/:id', getGroceryItem)

router.post('/grocerylist/add', postGroceryList)

router.put('/grocerylist/update/:id', updateGroceryList)

router.delete('/grocerylist/delete/:id', deleteGroceryList)

module.exports = router