
import mysql, { Connection } from 'promise-mysql';
import keys from './keys'; 

//mysql.createPool(keys.database);

const pool = mysql.createPool(keys.database);

 pool.getConnection()
  .then(Connection =>{
    pool.releaseConnection(Connection);
    console.log('DB esta conectada');
  });

 export default pool;
