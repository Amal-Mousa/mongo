import express from 'express';
import { addTaskController, deleteTaskController, getTasksController, deleteTasksController } from '../controllers/index.js';

const router = express.Router();

router.get('/tasks', getTasksController);
router.post('/tasks', addTaskController);
router.delete('/task/:id', deleteTaskController);
router.delete('/tasks', deleteTasksController);

export default router;
