import { Request, Response } from 'express';
import { ContactEmailDTO } from '../types/contactType';

import ContactService from '../services/contactService';
import { StatusCodes } from 'http-status-codes';

async function sendEmail(req: Request, res: Response): Promise<void> {
	const payload: ContactEmailDTO = req.body;

	await ContactService.sendEmail(payload);
	res.sendStatus(StatusCodes.NO_CONTENT);
}

export default { sendEmail };
