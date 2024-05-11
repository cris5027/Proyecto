const express = require (' express')
const mysql = require (' mysql ')
const bodyParser = require (' body-parser')

const app = express ()

app.use(function(res, res, next) {
res.setHeader('Access-Control-Allow-Origin', '*')
res.setHeader('Access-Control-Allow-Methods','*')
next ()
})

{

}


app.use(bodyParser.json())

const PUERTO = 3000

const conexion = mysql.createConnection(
{
host: 'localhost',
database:'encuesta', //poner el nombre de la base de datos creado en mysql
user: 'root',
password: ' '

}
)

app.listen(PUERTO, () => {
console.log('servidor corriendo en el puerto: ${PUERTO}')
})

conexion.connect(error =>{
    if(error) throw error
    console.log('conexion exitosa a la base de datos')
})

app.get('/ ', (req, res) => {
res.send ('API')
} )

//luego corremos el servidor con:   npm run dev

app.get('/entrevistado', (req, res) => {    	//nombre de la base de datos
const query = 'SELECT -FROM entrevistados'    	//para seleccionar la base de datos
conexion.query(query, (error, resultado) => {
if (error) return console.error(error.message)

    if (resultado > 0){
        res.json(resultado)
     } else {
            res.json('NO HAY REGISRO INSERTADO ')
        }
    })
})
 
    app.get('/entrevistado (:id2', (req, res) => {    	//nombre de la base de datos, para ingresar primer dato
    const {id} = req.params

    const query = 'SELECT * FROM entrevistado WHERE id=${id2}'
    conexion.query(query, (error, resultado) => {
    if (error) return console.error(error.message)

    if (resultado > 0){
    res.json(resultado)
    } else {
        res.json('NO HAY REGISTRO INSERTADO ')
    }
})

})

    app.post('/entrevistado/agregar', (req, resp) => {
        const entrevistado = {
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            ciudad: req.body.ciudad,
            fecha: req.body.fecha
        }

        const query = 'INSERTAR INTO entrevistado SET ?'
        conexion.query(query, entrevistado,(error, resultado) => {
            if (error) return console.error(error.message)

            resp.json('Se agrego correctamente la informacion')
        })

    })

   app.put('entrevistado/actualizar/:id2',(req, resp)=>{ // para modificar el registro de una tabla

   const {id2} = req.params
   const { nombre, apellido, ciudad, date} = req.body   

   const query = 'UPDATE entrevistado SET nombre = nombre, apellido = apellodo, ciudad = ciudad  WHERE id = id' 
   conexion.query(query, (error, resultado) => {
   if (error) return console.error(error.message)

   res.json('se actualizo correctamente el entrevistaso')
   })
})

app.delete(' /entrevistado/borrar/:id2', (requ, res) =>{
    conexion.query(query, (error, resultado)=>{
        if (error) return console.error(error.message)

        res.json('se elimino correctamente el usuario')
    })
})