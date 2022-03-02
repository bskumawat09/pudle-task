const Contact = require("../models/contact-model");

class ContactService {
	async findAllContacts() {
		// find all contacts and sort them in alphabetical order of name
		const contacts = await Contact.find().sort({ firstName: 1, lastName: 1 });
		return contacts;
	}

	async findContact(id) {
		const contact = await Contact.findOne({ _id: id });
		return contact;
	}

	async createContact(payload) {
		const contact = await Contact.create(payload);
		return contact;
	}

	async deleteContact(id) {
		const contact = await Contact.findByIdAndDelete(id);
		return contact;
	}
}

module.exports = new ContactService();
