const express = require('express');

const app = express();

app.get('/', (req, res) =>{
    res.send('I know How to use node server.....');
})
app.listen(4200, () => console.log('Port 4200 is now open.'))
