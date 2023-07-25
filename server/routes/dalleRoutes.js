import express from 'express';
import * as dotenv from 'dotenv';

import {Configuration, OpenAIApi} from 'openai';

dotenv.config();

const router = express.Router();

//Configuracion:
const configuration = new Configuration({
  apiKey: process.env.OPENAIA_API_KEY,
});

const openia = new OpenAIApi(configuration);

//Endpoints:

router.get('/').get((req,res)=>{
  res.send('Hello from DALL-E')
})

export default router;