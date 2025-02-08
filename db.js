import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://adenugawilly431:BcF95c7PdwmtDgBc@learningcluster.k10vr.mongodb.net/', {
       
    });
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

export default connectDB;


