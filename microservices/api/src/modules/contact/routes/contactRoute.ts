import { AsyncRouter } from 'express-async-router';

import validate from '../../../middlewares/validationHandler';
import { ContactEmailDTO } from '../types/contactType';

import ContactController from '../controllers/contactController';

const contactRouter = AsyncRouter();

contactRouter.post('/', validate(ContactEmailDTO), ContactController.sendEmail);

export default contactRouter;
