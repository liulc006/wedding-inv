const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use(cors());
app.use('/dist', express.static(path.join(__dirname, '../dist')));
app.use('/public', express.static(path.join(__dirname, '../public')));

app.get('/', (req,res) => res.sendFile(path.join(__dirname, '../public/index.html')));

const init = async() => {
    try{
        const PORT = process.env.PORT || 8888;
        app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
    } catch(err){
        console.log(err);
    };
};

init();