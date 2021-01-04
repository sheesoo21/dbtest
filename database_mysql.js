var mysql = require('mysql2');
var conn = mysql.createConnection({
    host: '52.79.40.60',
    user: 'root',
    password: 'vmfhwprxm',
    database: 'heesootest',
    connectionLimit: 100
});

conn.connect();

var selectcust = 'select * from Customers';
const result = conn.query(selectcust, function(err, rows, fields){
                    if(err){
                        return err;
                    }else{
                        const [rows] = rows;
                        return rows[0];                        
                    }
                });

conn.end();
console.log(result);


// try{
//     conn.query(selectcust, (err, rows, fields) => {
//         console.log(err, rows, fields)
//     });
// }catch(e){
//     console.log(e)
//     const rows = rows[0]
//     return rows;
// }

// console.log()


