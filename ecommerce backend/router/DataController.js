import express from 'express';
const router=express.Router();
import {Register} from '../Controller/register.js'
import {Login} from '../Controller/Login.js'
import {Registrations} from '../Controller/Registrations.js'


router.post('/registration', Register);
router.get('/name', (req,res)=>{
	res.send("My name is shreesant adhikari, son of Sunita Adhikari");
})
router.post('/Login', Login)
router.post('/Registrations', Registrations);


export {router};