const Assignment=require('../models/Assignment');

exports.home = (req, res) => {
    res.render("index");
};

exports.listAssignments = async(req, res) => {
    const assignments = await Assignment.find();
    res.render("assignments", { assignments });
};

exports.addAssignment = async(req, res) => {
    res.render("add");
};

exports.saveAssignment = async (req, res) => {
    try {
        await Assignment.create(req.body);
        res.redirect('/assignments');
    } catch (err) {
        console.log(err);
        res.send("Error saving assignment");
    }
};

exports.editAssignment = (req, res) => {
    res.send("Edit assignment form will go here");
};

exports.deleteAssignment = (req, res) => {
    res.send("Delete assignment will go here");
};

module.exports=exports;