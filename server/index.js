import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongodb/connect.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:'50mb'}));

//Asegurarnos de que el server esta ejecutandose bien
app.get('/', async(req,res)=>{
  res.send('Hello from NebuLabs image-generator');
});


//Corriendo el puerto
const startServer = async()=>{
  try{
    connectDB(process.env.MONGODB_URL);
    app.listen(8080, ()=> console.log('Server running in port 8080'))
  }catch(err){
    console.log(err);
  }
};

startServer();