const Joi = require("@hapi/joi");

const newItemValidation = (passingValues) => {
	const schema = Joi.object({
		name: Joi.required(),
		language: Joi.string(),
		description: Joi.string(),
		initRelease: Joi.number().integer()
	});

    const { error } = schema.validate(passingValues)
    if (error) throw error.details[0].message;
};

module.exports.validation = newItemValidation;