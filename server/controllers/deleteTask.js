import mongoose from "mongoose";
import ListCollection from "../database/model/task.js";

const deleteTaskController = async (req, res) => {
  const { id } = req.params;

  try {
    await ListCollection.deleteOne({ _id: new mongoose.Types.ObjectId(id) });
    res.json({
      error: false,
      msg: 'task deleted successfully'
    })
  }
  catch (err) {
    console.log(err);
    res.status(500).json({
      error: true,
      msg: err
    })
  }
}

export default deleteTaskController;