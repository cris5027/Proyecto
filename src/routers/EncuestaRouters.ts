import { Router } from 'express';

class IncuestaRouters {

    public router : Router = Router ();


    constructor () {

            this.config(); 

    }
    
    config (): void {

        this.router.get('/', (req, res) => res.send('crea encuesta'));


    }
    

} 

const EncuestaRouters = new IncuestaRouters ();
export default EncuestaRouters.router ;

