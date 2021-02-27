import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect('mongodb+srv://star001:9347275@cluster10.17mcd.mongodb.net/myshop?retryWrites=true&w=majority', {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        })

        console.log('successfully connected')


    } catch (error) {
        console.error(`Error: ${error.message}`, process.env.MONGO_URI)
        process.exit(1)
    }
}

export default connectDB;