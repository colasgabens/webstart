import express ,{ Application,Request,Response,NextFunction}from 'express';
import path from 'path'


const app : Application = express();


app.use('/',express.static(path.join(__dirname,'../public')));
console.log(path.join(__dirname,'../public'));

app.listen(8789,()=>console.log("sever runnnnnnnnnnnnnnnnnn"));