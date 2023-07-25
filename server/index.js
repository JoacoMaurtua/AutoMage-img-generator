import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongoDB/config.js'

dotenv.config();

const app = express();
app.use(cors());


//Probando el server
app.get('/',async (req,res)=>{
  res.status(200).json({
    message: 'Hello from Nebulabs AI',
  });
});

const startServer = async () =>{
  try{
    connectDB(process.env.MONGODB_URL);
    app.listen(process.env.PORT, () =>{
      console.log(`Port running in ${process.env.PORT}`);
    })

  }catch(err){
    console.log(err);
  }
}

startServer();