import { Router } from "express";
import * as controller from "../controller/productsController.js"
const router = Router();
router.get("/",controller.getAllProducts)

export default router