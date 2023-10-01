const Task = require('../model/task.model')


const getAllTasks = async (req, res, next) => {
    try {
        const docs = await Task.find()
        res.json(docs);
    } catch (error) {
        next(error);
    }
}

const createTask = async (req, res, next) => {
    try {
        const obj = req.body;
        const newTask = await Task.create(obj)
        res.status(201).json(newTask)

    } catch (error) {
        next(error);
    }
}

const getTaskById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const task = await Task.findById(id)
        res.json(task)

    } catch (error) {
        next(error);
    }
}

const updateTaskById = async (req, res, next) => {
    try {
        const id = req.params.id;
        const obj = req.body;
        const updatedTask = await Task.findByIdAndUpdate(id, obj, { new: true })
        res.json(updatedTask)
    } catch (error) {
        next(error);
    }
}

const deleteTaskById = async (req, res, next) => {
    try {
        const id = req.params.id;
        await Task.findByIdAndDelete(id)
        res.status(204).json({})
    } catch (error) {
        next(error)
    }
}


module.exports = { getAllTasks, createTask, getTaskById, updateTaskById, deleteTaskById }