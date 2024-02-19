import express from 'express'
import cors from 'cors'
import {connectDB} from './Connect.js'
import {Register} from './Controller/Register.js'
import {router} from './router/DataController.js'
const PORT=process.env.PORT || 5000;
const app=express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());

app.use('/', router);

connectDB();
app.get('/', (req, res)=>{
	res.send("This is home page")
})

app.listen(PORT, ()=>{
	console.log("The server is listening at 5000 port");
})