import express from 'express';
const app = express()


app.get('/api', (req, res) => {
  res.send('Hello World!')
})
app.get('/api/jokes', (req, res) => {
    
    const jokes = [
        {
         id:1,
         title:'a joke',
         content:'this is a joke'
        },
        {
            id:2,
            title:'a2 joke',
            content:'this is a joke'
        },
        {
            id:3,
            title:'a3 joke',
            content:'this is a joke'
        },
        {
            id:4,
            title:'a4 joke',
            content:'this is a joke'
        },
        {
            id:5,
            title:'a5 joke',
            content:'this is a joke'
        }
     ]

     res.send(jokes);
})
 


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})