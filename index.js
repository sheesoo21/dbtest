const express = require('express');
const app = express();
const Customers = require('./customer')

app.set('views', __dirname + '/views');

app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', async (req, res) => {
    const [rows] = await Customers.selectowners();
    console.log(rows);
    res.json(rows);
})

app.listen(3000, async () => {
    console.log('###### server on 3000 ########')
    const [rows] = await Customers.selectowners();
    //const result = await Customers.selectcust();
    console.log(rows)
    //return result.rows;
    // const [rows] = await Store();
    // const result = await Store();
    // return result.affectedRows;
    
})