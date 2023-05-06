import mongoose, { mongo } from "mongoose";

const listCollectionSchema = new mongoose.Schema({
  task: {
    type: String,
    required: true
  } //! task is not the name for the collection, its an var we can named it as we need and make the constraint as we want .
});

const ListCollection = mongoose.model('lists', listCollectionSchema); //! the name for the collection and th schema for this collection. 

export default ListCollection;
