const express = require('express');
const router = express.Router();
const habitController = require('../controllers/habitController');

router.get('/', habitController.getHabits);
router.get('/:id', habitController.getHabit);
router.post('/', habitController.createHabit);
router.put('/:id', habitController.updateHabit);
router.delete('/:id', habitController.deleteHabit);

module.exports = router;
