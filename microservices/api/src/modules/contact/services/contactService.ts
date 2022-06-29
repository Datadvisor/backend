import sendgrid from '@sendgrid/mail';

import { API_CONFIG } from '../../../config/config';
import { ContactEmailDTO } from '../types/contactType';

async function sendEmail(payload: ContactEmailDTO): Promise<void> {
	sendgrid.setApiKey(API_CONFIG.sendGridApiKey);
	await sendgrid.send({ ...payload, from: 'noreply@datadvisor.me', to: 'lorenzo.carneli@epitech.eu' });
}

export default { sendEmail };
