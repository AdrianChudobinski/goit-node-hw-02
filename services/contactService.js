
const Contact = require('../models/contact');

const getAllContacts = async () => {
  return await Contact.find({});
};

const getContactById = async (contactId) => {
  return await Contact.findById(contactId);
};

const addContact = async (contactData) => {
  return await Contact.create(contactData);
};

const updateContact = async (contactId, contactData) => {
  return await Contact.findByIdAndUpdate(contactId, contactData, { new: true });
};

const deleteContact = async (contactId) => {
  return await Contact.findByIdAndRemove(contactId);
};

const updateStatusContact = async (contactId, favorite) => {
  return await Contact.findByIdAndUpdate(contactId, { favorite }, { new: true });
};

module.exports = {
  getAllContacts,
  getContactById,
  addContact,
  updateContact,
  deleteContact,
  updateStatusContact,
};
