import {LoginModel} from '../Rulesfordatabase.js'

const Login=(req,res)=>{
	console.log(req.body);
	const {email, password}=req.body;
	const data=new LoginModel({
		email, password
	})

	data.save();
}

export {Login}