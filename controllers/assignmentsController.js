exports.listAssignments = (req, res) => {
    res.render("assignments");
};

exports.addAssignment = (req, res) => {
    res.send("Add assignment form will go here");
};

exports.editAssignment = (req, res) => {
    res.send("Edit assignment form will go here");
};

exports.deleteAssignment = (req, res) => {
    res.send("Delete assignment will go here");
};