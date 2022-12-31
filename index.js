const express = require('express');

const app = express();

app.get('/getSystemTime', (req, res) => {

    res.json({pcTime: new Date().toLocaleTimeString()});
    res.end();
})
console.log('getting call')

app.listen(process.env.PORT || 8000);
