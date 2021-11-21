import express from "express";
import bookController from '../controllers/bookController.js'

let router = express.Router();


router.get('/', bookController.getAll);

router.get('/:key', bookController.getOne);

router.post('/', bookController.create);

router.put('/:key', bookController.update);

router.delete('/:key', bookController.remove);

export default router;
