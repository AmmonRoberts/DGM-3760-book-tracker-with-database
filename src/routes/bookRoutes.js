import express from "express";
import bookController from '../controllers/bookController.js'

let router = express.Router();


router.get('/', bookController.getAll);

router.get('/:id', bookController.getOne);

router.post('/', bookController.create);

router.put('/:id', bookController.update);

router.delete('/:id', bookController.remove);

export default router;
