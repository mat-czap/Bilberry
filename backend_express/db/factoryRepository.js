require("dotenv/config");
const defaultRepository = require("./repositories/defaultRepository");

const TYPES = {
	DEFAULT: "default"
};

const USED_DB = process.env.USER_DB_NAME || TYPES.DEFAULT;

function factoryRepository(db) {
	if (db === TYPES.DEFAULT) {
		return new defaultRepository();
	}
	throw new Error(
		`Wrong argument in _factoryRepository, passed: ${db}, should be one of: 
		${Object.values(TYPES)}.`
	);
}

module.exports = factoryRepository(USED_DB);
