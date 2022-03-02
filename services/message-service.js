const Message = require("../models/message-model");
const twilio = require("twilio");

class MessageService {
	async findMessages() {
		const messages = await Message.find()
			.sort({ createdAt: -1 })
			.populate("recipient", "firstName lastName phoneNumber");

		return messages;
	}

	async createMessage({ id, text }) {
		const message = await Message.create({
			recipient: id,
			text: text
		});
		return message;
	}

	async sendSms(recipient, text) {
		const accountSid = process.env.TWILIO_ACCOUNT_SID;
		const authToken = process.env.TWILIO_AUTH_TOKEN;

		const client = new twilio(accountSid, authToken);

		const response = await client.messages.create({
			body: text,
			from: process.env.TWILIO_PHONE_NUMBER,
			to: recipient.phoneNumber
		});

		console.log(response.sid);
		return response.sid;
	}
}

module.exports = new MessageService();
