import { Router } from 'express';
import { ExchangeController } from '../controllers/exchangeController';
import { container } from '../config/container';
import { TYPES } from '../config/types';

const router = Router();
const exchangeController = container.get<ExchangeController>(TYPES.ExchangeController);

router.get('/exchange', exchangeController.getExchange.bind(exchangeController));
router.post('/exchange', exchangeController.postExchange.bind(exchangeController));
router.post('/sum', exchangeController.sumValues.bind(exchangeController));


export default router;
