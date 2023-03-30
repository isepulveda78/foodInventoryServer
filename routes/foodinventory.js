import express from 'express'

import { getFoodInventory, postFoodInventory, updateFoodInventory, deleteFoodInventory } from '../controllers/foodinventory'
const router = express.Router()

router.get('/foodinventory', getFoodInventory)

router.post('/foodinventory/add', postFoodInventory)

router.put('/foodinventory/update/:id', updateFoodInventory)

router.delete('/foodinventory/delete/:id', deleteFoodInventory)

module.exports = router