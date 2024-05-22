import { Router } from "express"
import { home } from "../controllers/homeController.js";
import { contato } from "../controllers/infoController.js";

const router = Router();

router.get('/', home)

router.get('/contato', contato);

// Voos
// router.get('/voos/:origem-:destino', (req, res) => {
//     let { origem, destino } = req.params;
//     res.send(`Pesquisando vôos de ${origem} ate ${destino}`);
// });

export default router;