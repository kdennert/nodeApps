var ToDoSchema = new Schema({
todo: {type: String},
priotity: { type: String, enum: ['High', 'Medium', 'Low'] },
done: { type: Boolean, default: false }
});
module.exports = Mongoose.model('Todo', Schema);