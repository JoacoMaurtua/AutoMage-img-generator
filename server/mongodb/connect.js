//Conectando el servidor con la base de datos
import mongoose from 'mongoose';

const connectDB = (urlDB) =>{
  mongoose.set('strictQuery',true);

  mongoose.connect(urlDB)
    .then(() => console.log('MongoDB connected!'))
    .catch((err) => console.log(err))
};

export default connectDB;