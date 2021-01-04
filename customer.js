const dbconn = require('./dbconnpool');

const connect = async function(){
    try{
        const connection = await dbconn.getConnection(conn=>conn);
        console.log('DB접속 성공')
        return connection;
    } catch(error){
        return error
    }
}

module.exports = {
    selectcust : async function(){
        const connection = await connect();
        if (connection.error) return connection.error;

        try{
            const query = 'select * from customers';
            const rows = await connection.query(query);
            console.log(rows);
            return rows;
        }catch(error){
            return error;
        }finally{
            await connection.release();
        }
        
    }
}



// const fun = function () {
//     var selectcust = 'select * from Customers';

//     const result = conn.query(selectcust, function (err, rows, fields) {
//         if (err) {
//             return err;
//         } else {
//             console.log(rows[0]);
//             return rows[0];

//             //인덱스 0부터 9까지 i를 1씩 더해가면서 반복해라
//             //qresult라는 변수에 rows[0]을 대입해라
//             //qresult를 반환하고 함수를 종료해라
//             for (var i = 0; i < rows.length; i++) {
//                 const qresult = rows[i];
//                 console.log(qresult);
//                 return qresult;
//                 //return rows;
//                 //const [qresult] = rows[i];
//                 //console.log([qresult]);
//             }
//         }
//     });

//     conn.end();
//     //console.log(result);
// }

// fun()




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