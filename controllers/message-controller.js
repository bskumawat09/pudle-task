const contactService = require("../services/contact-service");
const messageService = require("../services/message-service");

class MessageController {
	async getMessages(req, res) {
		const messages = await messageService.findMessages();

		res.json({
			status: "success",
			results: messages.length,
			messages
		});
	}

	async sendOtpMessage(req, res) {
		const { id } = req.params; // id of recipient contact
		const { text } = req.body; // body(text) of message e.g "Hi, Your OTP is 985604"
		try {
			const contact = await contactService.findContact(id);
			if (!contact) {
				throw new Error("contact not found");
			}
			// create new message
			const newMessage = await messageService.createMessage({ id, text });

			// send "newMessage" via SMS using some 3rd party service (e.g Twilio)
			const sid = await messageService.sendSms(contact, text);

			res.json({
				status: "success",
				sid,
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
