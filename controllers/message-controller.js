const Contact = require("../models/contact-model");
const Message = require("../models/message-model");
const messageService = require("../services/message-service");

class MessageController {
	async getMessages(req, res) {
		const messages = await Message.find()
			.sort({ createdAt: -1 })
			.populate("recipient", "firstName lastName phoneNumber");

		res.json({
			status: "success",
			results: messages.length,
			messages
		});
	}

	async sendOtpMessage(req, res) {
		const { id } = req.params; // id of recipient contact
		const { text } = req.body; // body(text) of message
		try {
			const contact = await Contact.findOne({ _id: id });
			if (!contact) {
				throw new Error("contact not found");
			}
			// create new message
			const newMessage = await Message.create({
				recipient: id,
				text: text
			});

			// send "newMessage" via SMS using some 3rd party service (Twilio)
			messageService.sendSms(contact, text);

			res.json({
				status: "success",
				message: newMessage
			});
		} catch (err) {
			res.status(400).json({
				status: "error",
				message: err.message
			});
		}
	}
}

module.exports = new MessageController();
