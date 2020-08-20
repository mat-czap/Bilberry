const { validation } = require("../validation/noteValidate");

const validateInput = async (req, res, next) => {
	try {
		validation(req.body);
		next();
	} catch (err) {
		return res.status(400).send(err);
	}
};

module.exports = validateInput;
