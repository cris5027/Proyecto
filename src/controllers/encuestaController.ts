import {Request, Response} from 'express';

import pool from '../database';


class encuestaController {

    public Index (req: Request, res: Response) {

    res.send('Bienvenido a crear su encuesta')
    pool.query('DESCRIBE encuesta ');
    res.json('encuesta');


    } 
}

const EncuestaController = new encuestaController();
export default encuestaController;