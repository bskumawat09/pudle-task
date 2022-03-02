# Pudle Backend Task

> Build a simple contact app with OTP SMS sending functionality.

## API collection

The application uses multiple Restful APIs to perform various actions. APIs working in this application are listed as follows:

| API Endpoint         | Request  | Operation                                          |
| -------------------- | -------- | -------------------------------------------------- |
| `/api/contacts`      | `GET`    | Get all contacts in alphabetical order by the name |
| `/api/contacts/{id}` | `GET`    | Get single contact with id                         |
| `/api/contacts`      | `POST`   | Create new contact                                 |
| `/api/contacts/{id}` | `DELETE` | Delete contact with {id}                           |
| `/api/messages`      | `GET`    | Get all messages in descending order by their time |
| `/api/messages/{id}` | `POST`   | Send OTP message to contact with {id}              |
