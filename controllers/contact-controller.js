const contactService = require("../services/contact-service");

class ContactController {
	async getAllContacts(req, res) {
		try {
			const contacts = await contactService.findAllContacts();

			res.json({
				status: "success",
				results: contacts.length,
				contacts
			});
		} catch (err) {
			res.status(400).json({
				status: "error",
				message: err.message
			});
		}
	}

	async getContact(req, res) {
		const { id } = req.params;
		try {
			const contact = await contactService.findContact(id);
			if (!contact) {
				throw new Error("contact not found");
			}

			res.json({
				status: "success",
				contact
			});
		} catch (err) {
			res.status(400).json({
				status: "error",
				message: err.message
			});
		}
	}

	async createContact(req, res) {
		try {
			const { firstName, lastName, phoneNumber } = req.body;
			const contact = await contactService.createContact({
				firstName,
				lastName,
				phoneNumber
			});

			res.json({
				status: "success",
				contact
			});
		} catch (err) {
			res.status(400).json({
				status: "error",
				message: err.message
			});
		}
	}

	async deleteContact(req, res) {
		const { id } = req.params;
		try {
			const contact = await contactService.deleteContact(id);
			if (!contact) {
				throw new Error("contact not found");
			}

			res.json({
				status: "success",
				contact
			});
		} catch (err) {
			res.status(400).json({
				status: "error",
				message: err.message
			});
		}
	}
}

module.exports = new ContactController();
