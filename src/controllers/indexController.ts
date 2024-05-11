import {Request, Response} from 'express';


class IndexController {

    index (req: Request, res: Response) {

    res.send('bienvenido a la pagina de encuestas para crear una encuesta ingrese al siguiente link:');

    } 
}

export const indexController = new IndexController();