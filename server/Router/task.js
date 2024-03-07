import express from 'express';
import {
  createTask,
  getTask,
  getTaskCompleted,
  getTaskImportant,
  getAllTask,
  updateTask,
  deleteTask,
} from '../Controllers/TaskController.js';

const router = express.Router();

router.get('/', getAllTask);
router.get('/:id', getTask);
router.get('/completed', getTaskCompleted);
router.get('/important', getTaskImportant);
router.post('/', createTask);
router.put('/:id', updateTask);
router.delete('/:id', deleteTask);
export default router;
