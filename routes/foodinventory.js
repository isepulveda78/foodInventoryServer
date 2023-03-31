import express from 'express'

import { getFoodInventory, postFoodInventory, updateFoodInventory, deleteFoodInventory, getFoodItem } from '../controllers/foodinventory'
const router = express.Router()

router.get('/foodinventory', getFoodInventory)

router.get('/foodinventory/:id', getFoodItem)

router.post('/foodinventory/add', postFoodInventory)

router.put('/foodinventory/update/:id', updateFoodInventory)

router.delete('/foodinventory/delete/:id', deleteFoodInventory)

module.exports = router