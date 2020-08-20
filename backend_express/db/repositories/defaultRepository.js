const db = require('./demo')

module.exports = class defaultRepository{
    constructor() {
		this.model = new db();
    }
    
    async getAllNotes() {
		return await this.model.getData();
	}

	async addNote(data) {
		return await this.model.addData(data);
	}

	async deleteNote(id) {
		return await this.model.deleteData(id);
	}
}