const mongoose=require('mongoose');
const AssignmentSchema = new mongoose.Schema({
    title: String,
    course: String,
    dueDate: String,
    status: String //some variables that will be tracked for each assignment
});

module.exports = mongoose.model('Assignment', AssignmentSchema);