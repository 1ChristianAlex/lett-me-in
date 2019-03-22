import * as express from "express";

const app = express.default();
const port:number = 3000;
const hostname:string = 'localhost';

app.listen(port,hostname,()=>{
    console.log(`Server is runing http://${hostname}:${port}`)
})
