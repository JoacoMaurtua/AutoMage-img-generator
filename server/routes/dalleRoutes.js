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

//Prueba
router.get('/', (req,res)=>{
  res.send('Hello from DALL-E')
})

//Crear una imagen
router.route('/').post(async (req,res)=>{
  try{
    const {prompt} = req.body;

    const aiResponse = await openia.createImage({
      prompt,
      n: 1,
      size: '1024x1024',
      response_format: 'b64_json',
    });

    const image = aiResponse.data.data[0].b64_json;

    res.status(200).json({photo:image});
  }catch(error){
    console.log(error);
    res.status(500).send(error?.response.data.error.message)
  }
});


export default router;