import mongoose from 'mongoose'


const connectDB=async ()=>{
await mongoose.connect('mongodb+srv://adhikarishreesant45:d1xdv6dLlQcXaHtW@cluster0.olhxqe4.mongodb.net/FindEveryThing?retryWrites=true&w=majority',
).then(
()=>{console.log("Connected successfully");}
).catch((error)=>{console.log("Problem occured")})
}

export {connectDB};