const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema(
	{
		recipient: {
			type: Schema.Types.ObjectId,
			ref: "Contact"
		},
		text: {
			type: String,
			required: true
		}
	},
	{ timestamps: true }
);

module.exports = mongoose.model("Message", messageSchema, "messages");
