import { Router } from 'express';
import {getStatus} from './handlers';

export const router = Router();

router.get('/', getStatus);
