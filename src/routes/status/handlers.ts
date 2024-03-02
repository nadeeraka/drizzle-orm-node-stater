import { Request, Response } from 'express';
import { eq } from 'drizzle-orm';

import { db } from '../../db';
import { insertUserSchema, NewUser, users } from '../../db/schema';


export async function getStatus(
    req: Request,
    res: Response,
): Promise<Response> {

        return res.status(200).send({ message: 'status 👍' });

}