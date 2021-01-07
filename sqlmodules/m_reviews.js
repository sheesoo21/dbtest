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
/**
 * 리뷰 테이블에 필요한 기능
 * 리뷰작성, 리뷰검색, 수정 및 삭제는 필요없을 듯
 */
module.exports = {

    select: async function (email) {
        if (!email || '') return { error: "Unregistered email ID" };
        const connection = await connect();
        if (connection.error) return connection.error;

        try {
            const query = 'select * from reviews';
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
            const query = 
            'insert into reviews(storeid,writer,title,content,review_img,score,writeday) values (?,?,?,?,?,?,?)';

            const data = await connection.query(
                query,
                [user.storeid,
                user.custid,
                user.title,
                user.content,
                user.review_img,
                user.score,
                user.writeday]
                );
            return data;
        } catch (error) {
            return error;
        } finally {
            connection.release();
        }
    },

    inserttest : async function () {
        
        const connection = await connect();
        if (connection.error) return;

        try {
            const query = 
            'insert into reviews values(25,3,3,"리뷰테스트","sysdate테스트","www.naver.com",3,sysdate())';

            const data = await connection.query(query);
            return data;
        } catch (error) {
            console.log(error);
            return error;
        } finally {
            connection.release();
        }
    }
    
}

    // delete: async function (user) {
    //     if (!user) return;
    // }
