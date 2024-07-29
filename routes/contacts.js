const express = require('express');
const router = express.Router();
const { 
  getAllContacts, 
  getContactById, 
  addContact, 
  updateContact, 
  deleteContact, 
  updateStatusContact 
} = require('../services/contactService');
router.get('/', async (req, res) => {
  try {
    const contacts = await getAllContacts();
    res.json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.get('/:contactId', async (req, res) => {
  try {
    const contact = await getContactById(req.params.contactId);
    if (!contact) {
      return res.status(404).json({ message: 'Not found' });
    }
    res.json(contact);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.post('/', async (req, res) => {
  try {
    const newContact = await addContact(req.body);
    res.status(201).json(newContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.delete('/:contactId', async (req, res) => {
  try {
    const deletedContact = await deleteContact(req.params.contactId);
    if (!deletedContact) {
      return res.status(404).json({ message: 'Not found' });
    }
    res.status(200).json({ message: 'Contact deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});
router.put('/:contactId', async (req, res) => {
  try {
    const updatedContact = await updateContact(req.params.contactId, req.body);
    if (!updatedContact) {
      return res.status(404).json({ message: 'Not found' });
    }
    res.json(updatedContact);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});
router.patch('/:contactId/favorite', async (req, res) => {
    try {
      console.log('Received PATCH request');
      console.log('Contact ID:', req.params.contactId);
      console.log('Request body:', req.body);
  
      const { favorite } = req.body;
      if (favorite === undefined) {
        return res.status(400).json({ message: 'missing field favorite' });
      }
  
      const updatedContact = await updateStatusContact(req.params.contactId, favorite);
      if (!updatedContact) {
        return res.status(404).json({ message: 'Not found' });
      }
  
      res.json(updatedContact);
    } catch (error) {
      console.error('Error:', error);
      res.status(400).json({ message: error.message });
    }
  });
  
module.exports = router;
