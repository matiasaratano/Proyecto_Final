import { Router } from 'express';
import ReportController from '../controllers/ReportController.js';

const router = Router();
const reportController = new ReportController();

router.get('/:month/:year', reportController.generateReport);

export default router;