import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';

import Post from '../mongoDB/models/post.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

//Endpoints:

//Obtener todos los posts
router.route('/').get(async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).json({ success: true, data: posts });
        console.log(posts);
    } catch (err) {
        res.status(500).json({ success: false, message: 'Fetching posts failed, please try again' });
        console.error(err);
    }
});

//Crear un post
router.route('/').post(async (req, res) => {
    const { name, prompt, photo } = req.body;

    // Valida los datos de entrada
    if (!name || !prompt || !photo) {
        return res.status(400).json({ success: false, message: 'Missing required fields: name, prompt, photo' });
    }

    let photoUrl;
    try {
        photoUrl = await cloudinary.uploader.upload(photo);
    } catch (error) {
        console.error('Error uploading image to Cloudinary:', error);
        return res.status(500).json({ success: false, message: 'Error uploading image', details: error.message });
    }

    try {
        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl.url,
        });

        res.status(200).json({ success: true, data: newPost });
    } catch (err) {
        console.error('Error creating post:', err);
        return res.status(500).json({ success: false, message: 'Unable to create a post, please try again', details: err.message });
    }
});

export default router;


