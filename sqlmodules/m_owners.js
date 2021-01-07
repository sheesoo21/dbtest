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

    select: async function (email) {
        if (!email || '') return { error: "Unregistered email ID" };
        const connection = await connect();
        if (connection.error) return connection.error;

        try {
            const query = 'select * from owners';
            const rows = await connection.query(query);
            //console.log(rows0);
            return rows;
        } catch (error) {
            return error;
        } finally {
            await connection.release();
        }
    },

    insert: async function (user) {
        if (!user) return;

        const connection = await connect();
        if (connection.error) return;

        try {
            const query = 'insert into owners(email, password, tel, nickname) values (?, ?, ?, ?)';

            const data = await connection.query(query, [user.email, user.password, user.tel, user.nickname]);
            return data;
        } catch (error) {
            return error;
        } finally {
            connection.release();
        }
    },

    update: async function (user) {
        if (!user) return;

        const connection = await connect();
        if (connection.error) return;

        try {
            const query = ' ';
            const data = await connection.query(query,)
            return data;
        } catch (error) {
            return error;
        } finally {
            connection.release();
        }
    },

    delete: async function (user) {
        if (!user) return;
    }
}