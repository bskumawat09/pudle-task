const contactController = require("./controllers/contact-controller");
const messageController = require("./controllers/message-controller");

const router = require("express").Router();

// @request GET "/api/contacts"
// @desc get all the contacts
router.get("/contacts", contactController.getAllContacts);

// @request GET "/api/contacts/{id}"
// @desc get single contact with {id}
router.get("/contacts/:id", contactController.getContact);

// @request GET "/api/messages"
// @desc get all the messages
router.get("/messages", messageController.getMessages);

// @request POST "/api/messages/{id}"
// @desc send message to the contact with {id}
router.post("/messages/:id", messageController.sendOtpMessage);

// @request POST "/api/contacts"
// @desc create new contact
router.post("/contacts", contactController.createContact);

// @request DELETE "/api/contacts/{id}"
// @desc delete the contact with {id}
router.delete("/contacts/:id", contactController.deleteContact);

module.exports = router;
