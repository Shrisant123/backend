import {contactModel} from '../Rulesfordatabase.js'
// import {contactModel} from '../Rulesfordatabase.js'

const Register= async (req,res)=>{
	console.log(req.body);
	const {firstName, lastName, Address, email, Phone,}=req.body;
	const data=new contactModel({
		firstName, lastName, Address, email, Phone
	})
	data.save();
}

export {Register};