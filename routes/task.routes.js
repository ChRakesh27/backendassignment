const taskController = require('../controllers/task.controller')

const express = require('express');
const router = express.Router()


router.route('/')
    .get(taskController.getAllTasks)
    .post(taskController.createTask)

router.route('/:id')
    .get(taskController.getTaskById)
    .put(taskController.updateTaskById)
    .delete(taskController.deleteTaskById)

module.exports = router;