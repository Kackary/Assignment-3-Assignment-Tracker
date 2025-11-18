const express = require('express');
const router = express.Router();
const assignmentsController = require('../controllers/assignmentsController');

router.get('/', (req, res) => {
    res.render("index");
});

router.get('/assignments', assignmentsController.listAssignments);
router.get('/assignments/add', assignmentsController.addAssignment);
router.post('/assignments/add', assignmentsController.saveAssignment);
router.get('/assignments/edit/:id', assignmentsController.editAssignment);
router.get('/assignments/delete/:id', assignmentsController.deleteAssignment);

module.exports = router;