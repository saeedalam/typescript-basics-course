import { Router } from 'express';
import { ServiceProvider } from '../../ServiceProvider/ServiceProvider';
import { EventController } from '../../../Application/Controllers/EventController';
import { TYPES } from '../../../Application/Config/types';

const router = Router();
const serviceProvider = new ServiceProvider();

// Get the EventController from the ServiceProvider
const eventController = serviceProvider.getContainer().get<EventController>(TYPES.EventController);

router.post('/', eventController.post.bind(eventController));

export default router;
