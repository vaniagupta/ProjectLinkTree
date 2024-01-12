const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
const { registerUser, loginUser } = require('./controllers/auth');

mongoose.connect('mongodb://127.0.0.1:27017/linkTree-9').then( ()=>{console.log('mongoDb connected')}).catch( err=> console.log(err));

app.get('/',(req,res) => {
    res.send(`Server is running on port ${port}`);
})



app.post('/api/register', registerUser);
app.post('/api/login', loginUser);

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})