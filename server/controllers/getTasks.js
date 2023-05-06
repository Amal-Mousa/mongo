import ListCollection from "../database/model/task.js";

const getTasksController = async (req, res) => {
  try {
    const getTasks = await ListCollection.find({});
    res.status(200).json({
      error: false,
      tasks: getTasks
    });
  }
  catch (err) {
    res.status(500).json({
      error: true,
      msg: 'Internal Server Error'
    })
  }
};

export default getTasksController;