// import { sleep } from "@/utils/general.util";

// const fs = require("fs");

// if(process.env.NODE_ENV === 'production'){

//   const writeFilePath ="/tmp/contacts.json";
//   const contactsFromDataFile = require("../data/contacts.json"); 
//   try {
//     fs.writeFileSync(writeFilePath, JSON.stringify(contactsFromDataFile, null, 4));
//   } catch (error) {
//     console.log("CATCH IN COPYING - ", error);
//   }
// }


// // users in JSON file for simplicity, store in a db for production applications
// let contacts = require(process.env.NODE_ENV == "development"
//   ? "../data/contacts.json"
//   : "/tmp/contacts.json");

// console.log({ contacts });
// // import contacts from '../data/contacts.json'
// export const contactRepo = {
//   getAll,
//   getById: function (id) {
//     return contacts.find((x) => String(x.id) === String(id));
//   },
//   find: (x) => contacts.find(x),
//   create,
//   update,
//   delete: _delete,
// };

// async function getAll() {
//   await sleep();
//   return contacts;
// }

// async function create(contact) {
//   await sleep();

//   // generate new contact id
//   contact.id = contacts.length ? Math.max(...contacts.map((x) => x.id)) + 1 : 1;

//   // set date created and updated
//   contact.dateCreated = new Date().toISOString();
//   contact.dateUpdated = new Date().toISOString();

//   // add and save contact
//   contacts = [contact, ...contacts];
//   saveData();
//   return contact;
// }

// async function update(id, params) {
//   await sleep();
//   const contact = contacts.find((x) => x.id.toString() === id.toString());

//   // set date updated
//   contact.dateUpdated = new Date().toISOString();

//   // update and save
//   Object.assign(contact, params);
//   saveData();
//   return contact;
// }

// // prefixed with underscore '_' because 'delete' is a reserved word in javascript
// async function _delete(id) {
//   await sleep();
//   // filter out deleted contact and save
//   contacts = contacts.filter((x) => x.id.toString() !== id.toString());
//   saveData();
//   return { id };
// }

// // private helper functions
// const writeFilePath =
//   process.env.NODE_ENV == "development"
//     ? "../data/contacts.json"
//     : "/tmp/contacts.json";

// console.log({ writeFilePath });
// function saveData() {
//   try {
//     fs.writeFileSync(writeFilePath, JSON.stringify(contacts, null, 4));
//   } catch (error) {
//     console.log("CATCH - ", error);
//   }
// }


export {};