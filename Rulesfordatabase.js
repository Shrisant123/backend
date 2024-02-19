import mongoose from 'mongoose'

const contactRules=mongoose.Schema({
	firstName:{type:String},
	lastName:{type:String},
	Address:{type:String},
	email:{type:String},
	Phone:{type:Number},
})

const LoginRules=mongoose.Schema({
	email:{type:String, required:true},
	password:{type:String, required:true},
})

const RegistrationRules=mongoose.Schema({
	name:{type:String, required:true},
	email:{type:String, required:true},
	password:{type:String, required:true},
	confirmPassword:{type:String},
})

const contactModel=mongoose.model('ContactData', contactRules);
const LoginModel=mongoose.model('LoginData', LoginRules);
const RegistrationModel=mongoose.model('RegistrationData', RegistrationRules);

export {contactModel, LoginModel, RegistrationModel};