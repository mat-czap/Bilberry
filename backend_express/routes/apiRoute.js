const express = require("express");
const note = require("../controllers/noteController");
const inputValidate = require("../middlewares/newItemValidation");
const router = express.Router();

router.get("/notes", note.getAllNotes);
router.post("/notes", inputValidate, note.addNote);
router.delete("/notes/:id", note.deleteNote);

module.exports = router;
