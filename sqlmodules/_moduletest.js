const { select } = require('async');
const dbconn = require('../dbconnpool');
const selectmodule = require('./select');
const customerupdate = require('./m_customers');
const review = require('./m_reviews');


const connect = async function(){
    try{
        const connection = await dbconn.getConnection(conn=>conn);
        console.log('DB접속 성공')
        return connection;
    } catch(error){
        return error
    }
}

//console.log(selectmodule.selectreviews())
//console.log(customerupdate.update());

//customerupdate.update();

review.inserttest();
