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

exports.editAssignment = async(req, res) => {
    try {
        const assignment = await Assignment.findById(req.params.id);
        res.render("edit", { assignment });
    } catch (err) {
        console.log(err);
        res.send("Error finding assignment");
    }
};

exports.updateAssignment = async(req, res) => {
    try {
        await Assignment.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/assignments');
    } catch (err) {
        console.log(err);
        res.send("Error updating assignment");
    }
};

exports.deleteAssignment = async(req, res) => {
    try {
        await Assignment.findByIdAndDelete(req.params.id);
        res.redirect('/assignments');
    } catch (err) {
        console.log(err);
        res.send("Error deleting assignment");
    }
};

module.exports=exports;