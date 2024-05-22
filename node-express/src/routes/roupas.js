import { Router } from 'express'
import { insert, index, camisetas } from "../controllers/roupasController.js";

const router = Router();

router.get('/', index);

router.post('/', insert);

router.get('/camisetas', camisetas);

export default router;