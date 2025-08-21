import express from 'express';
const app = express();

app.get('/', (req, res) => {
     res.send('Hello, World!');
 });

app.listen(3000, function() {
    console.log('app is listening on port 3001');
});