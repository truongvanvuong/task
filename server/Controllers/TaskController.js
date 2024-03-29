import Task from '../Models/Task.js';

const createTask = async (req, res) => {
  const newTask = new Task(req.body);

  try {
    const savedTask = await newTask.save();
    res.status(200).json({
      success: true,
      data: savedTask,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err,
    });
  }
};

const getTask = async (req, res) => {
  const id = req.params.id;
  try {
    const task = await Task.findById(id);
    res.status(200).json({
      success: true,
      data: task,
    });
  } catch (err) {}
};
const getTaskCompleted = async (req, res) => {
  try {
    const taskCompletes = await Task.find({ iscompleted: true });
    res.status(200).json({
      success: true,
      data: taskCompletes,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err,
    });
  }
};
const getTaskImportant = async (req, res) => {
  try {
    const taskImportants = await Task.find({ isimportant: true });
    res.status(200).json({
      success: true,
      data: taskImportants,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err,
    });
  }
};
const getAllTask = async (req, res) => {
  try {
    const allTasks = await Task.find({});
    res.status(200).json({
      success: true,
      data: allTasks,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err,
    });
  }
};
const updateTask = async (req, res) => {
  try {
    const id = req.params.id;
    const updateTask = await Task.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json({
      success: true,
      data: updateTask,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err,
    });
  }
};
const deleteTask = async (req, res) => {
  const id = req.params.id;
  try {
    await Task.findByIdAndDelete(id);
    res.status(200).json({
      success: true,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err,
    });
  }
};
export {
  createTask,
  getTask,
  getTaskCompleted,
  getTaskImportant,
  getAllTask,
  updateTask,
  deleteTask,
};
