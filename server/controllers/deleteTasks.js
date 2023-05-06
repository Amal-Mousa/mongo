import ListCollection from "../database/model/task.js";

const deleteTasksController = async (req, res) => {
  try {
    await ListCollection.deleteMany({});
    res.json({
      error: false,
      msg: 'Tasks Deleted Successfully',
    });
  }
  catch (err) {
    res.status(500).json({
      error: true,
      msg: 'Internal Server Error'
    });
  }
};

export default deleteTasksController;