import mongoose from 'mongoose';

const connectData = async () => {
    
   mongoose.connect("mongodb+srv://adilsonjuniorcomunicacao:EkTPKpo7R26EVZgV@cluster0.c16kxtk.mongodb.net/")
   .then(() => console.log("MongoDB connected"))
   .catch((err) => console.log(err));
}

export default connectData;