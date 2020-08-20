const { v4: uuidv4 } = require('uuid');
const db = require("../db/factoryRepository");

const note = {
	getAllNotes: async (req, res) => {
		try {
			const allNotes = await db.getAllNotes();
			res.send({ allNotes });
		} catch {
			res.sendStatus(500);
		}
	},
	addNote: async (req, res) => {
		const newId = uuidv4()
		console.log(req.body)
		const content = {
			id: newId,
			name: req.body.name,
			language: req.body.language,
			description: req.body.description,
			initRelease: req.body.initRelease,
		};
		try {
			const newNote = await db.addNote(content);
			console.log(content)
			newNote ? res.send({content}) : null;
		} catch (err) {
			res.sendStatus(500);
		}
	},
	deleteNote: async (req, res) => {
		try {
			removedNoteStatus = await db.deleteNote(req.params.id);
			res.sendStatus(200);
		} catch (err) {
			res.sendStatus(404);
		}
	},
};

module.exports = note;
