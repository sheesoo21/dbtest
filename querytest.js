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
/*
const selectowners = async function(){
    const connection = await connect();
    if(connection.error) return connection.error;

    try{
        const query = 'select * from owners';
        const rows = await connection.query(query);
        console.log(rows)
        return rows;
    }catch(error){
        return error;
    }finally{
        await connection.release();
    }
}
*/
const insertcust = async function(){
    const connection = await connect();
    if(connection.error) return connection.error;

    try{
        const query = 
            'insert into customers (email,password,tel,nickname,token) values (?,?,?,?,?)';
         const params = ['okman@cashback.net','1234','0109998787','babo','dalk33'];
        
        // await connection.query(
        //         query,
        //         [data.email,
        //         data.password,
        //         data.tel,
        //         data.nickname,
        //         data.token]);
        const data = await connection.query(query,params);        
        console.log(data)
        return data;
    }catch(error){
        console.log(err);
        return error;
    }finally{
        await connection.release();
    }
}

insertcust();