import {RegistrationModel} from '../Rulesfordatabase.js'

const Registrations=(req, res)=>{
	console.log(req.body);
	const {name, email, password, confirmpassword}=req.body;
	const data=new RegistrationModel({
		name, email, password, confirmpassword
	})

	data.save();
}

export {Registrations};