import { Router } from "express"
import { getProductById, index } from "../controllers/produtosController.js";

const router = Router();

router.get('/', index);

router.get('/:id', getProductById);

export default router;