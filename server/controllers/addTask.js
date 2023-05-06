import ListCollection from "../database/model/task.js";

const addTaskController = async (req, res) => {
  const { task } = req.body;

  try {
    const newTask = await ListCollection.create({ task });
    res.status(201).json({
      error: false,
      task: newTask
    });
  }
  catch (err) {
    res.status(500).json({
      error: true,
      msg: 'Internal Server Error',
    });
  }

};

export default addTaskController;
