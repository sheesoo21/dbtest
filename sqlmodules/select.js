const dbconn = require('../dbconnpool');

const connect = async function () {
    try {
        const connection = await dbconn.getConnection(conn => conn);
        console.log('DB접속 성공')
        return connection;
    } catch (error) {
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
            //console.log(rows0);
            return rows;
        }catch(error){
            return error;
        }finally{
            await connection.release();
        }
        
    },
    selectowners : async function(){
        const connection = await connect();
        if(connection.error) return connection.error;

        try{
            const query = 'select * from owners';
            const rows = await connection.query(query);
            //console.log(rows)
            return rows;
        }catch(error){
            return error;
        }finally{
            await connection.release();
        }
    },
    selectreviews :  async function(){
        const connection = await connect();
        if(connection.error) return connection.error;

        try{
            const query = 'select * from reviews';
            const rows = await connection.query(query);
            console.log(rows)
            return rows;
        }catch(error){
            return error;
        }finally{
            await connection.release();
        }
    },
    selectdateplan : async function(){
        const connection = await connect();
        if(connection.error) return connection.error;

        try{
            const query = 'select * from dateplan';
            const rows = await connection.query(query);
            console.log(rows)
            return rows;
        }catch(error){
            return error;
        }finally{
            await connection.release();
        }
    }
}

