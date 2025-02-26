import { express } from 'express';
const router = express.Router();
import { postController } from "../controllers/postController.js";

// index
router.get('/', postController.index);

// show
router.get('/:id', postController.show);

// store
router.post('/', postController.store);

// update
router.put('/:id', postController.update);

// modify
router.patch('/:id', postController.modify);

// destroy
router.delete('/:id', postController.destroy);

export default router;