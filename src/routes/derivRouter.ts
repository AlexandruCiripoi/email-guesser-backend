
import { Router } from 'express';
import { getDerivation } from '../controllers/derivations.js';

const derivRouter = Router();

derivRouter.post('/', getDerivation);


export default derivRouter