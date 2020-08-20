const Joi = require("@hapi/joi");

const newItemValidation = (passingValues) => {
	const schema = Joi.object({
		name: Joi.string().required(),
		language: Joi.string().required(),
		description: Joi.string().required(),
		initRelease: Joi.number().integer().required()
	});

    const { error } = schema.validate(passingValues)
    if (error) throw error.details[0].message;
};

module.exports.validation = newItemValidation;