const express = require('express');
const say = require('say');

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.set('view engine', 'ejs');

app.get('/', (req,res) =>{
    res.render('index');
});
app.post('/', (req,res)=>{

    const text = req.body.text;
    console.log(text);
    say.speak(text);
    
    
});
app.listen(5000, _ =>{
    console.log("listening at port 5000");
})