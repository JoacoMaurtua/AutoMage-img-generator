import mongoose from 'mongoose';


//Conexion con la base de datos
const connectDB = (dbUrl) => {
  mongoose.set('strictQuery', true);
  mongoose.connect(dbUrl)
    .then(() => console.log('connected to mongo'))
    .catch((err) => {
      console.error('failed to connect with mongo');
      console.error(err);
    });
};

export default connectDB;
