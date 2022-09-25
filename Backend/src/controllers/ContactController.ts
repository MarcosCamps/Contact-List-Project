import { Request, Response } from 'express';
import { creatingContacts, getContacts, deletingContact } from '../services/ContactService';

const Contacts = async (req: Request, res: Response) => {
  const contact = await creatingContacts(req.body);
  return res.status(201).json(contact);
};

const allContacts = async (_req: Request, res: Response) => {
  const products = await getContacts();
  res.status(200).json(products);
};

const contactDelete = async (req: Request, res: Response) => {
  const { id } = req.params;
  await deletingContact(Number(id));
  return res.status(204).end();
};

export { Contacts, allContacts, contactDelete };
