const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const contactSchema = new Schema(
	{
		firstName: {
			type: String,
			required: true
		},
		lastName: {
			type: String,
			required: true
		},
		phoneNumber: {
			type: String,
			required: true,
			unique: true,
			minlength: 10,
			maxlength: 13
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Contact", contactSchema, "contacts");
