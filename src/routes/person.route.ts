import express from 'express';
import PersonController from '../controllers/person.controller';

const router = express.Router();

router.post('/', PersonController.create);
router.get('/', PersonController.findAll);
router.get('/:id', PersonController.findOne);
router.put('/:id', PersonController.update);
router.delete('/:id', PersonController.delete);

export default router;
