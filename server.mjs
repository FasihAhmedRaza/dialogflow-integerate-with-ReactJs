import express from 'express'
import cors from 'cors';
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.post( '/talktochatbot', (req,res) => {
   
    res.send({
      messages : 'I am hello world this is server respone',
      
    });
})


app.get('/profile', (req, res) => {

        res.send("this is profile");
      
})

app.get( '/about', (req,res) => {
    res.send("about me");
})


app.listen(PORT ,() =>{
  console.log(`server is tunning  on port ${PORT}`);
});

