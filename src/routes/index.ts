import { Router } from 'express';

import resizeImageRouter from './api/resize-image';

const router = Router();

router.use('/resize-image', resizeImageRouter);

export default router;
