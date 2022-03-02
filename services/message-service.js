const twilio = require("twilio");

class MessageService {
	sendSms(recipient, text) {
		const accountSid = process.env.TWILIO_ACCOUNT_SID;
		const authToken = process.env.TWILIO_AUTH_TOKEN;

		const client = new twilio(accountSid, authToken);
		client.messages
			.create({
				body: text,
				from: process.env.FROM_PHONE,
				to: recipient.phoneNumber
			})
			.then((message) => console.log(message.sid));
	}
}

module.exports = new MessageService();
