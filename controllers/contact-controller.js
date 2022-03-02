const Contact = require("../models/contact-model");

class ContactController {
	async getAllContacts(req, res) {
		try {
			const contacts = await Contact.find().sort({ firstName: 1, lastName: 1 });

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
			const contact = await Contact.findOne({ _id: id });
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
			const contact = await Contact.create(req.body);

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
			const contact = await Contact.findByIdAndDelete(id);
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
