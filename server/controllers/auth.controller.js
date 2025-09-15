import gentoken from "../config/token.js";
import User from "../models/user.model.js";
import bcrypt from "bcrypt"

export const signup_user = async (req, res) => {
    try {
        const body = req.body 
        const salt = await bcrypt.genSalt(10)
        const password_hash = await bcrypt.hash(body.password, salt)
        const new_user = {name : body.name, email : body.email, password_hash : password_hash}
        const response = await User.create(new_user)
        if (!response) return res.status(400).json({message : "error in user creation"})
        res.status(201).json({user : response})
    } catch (error) {
        res.status(500).json({error : error})
    }
}

export const login_user = async (req, res) => {
    try {
        const {email, password} = req.body

        const existing_user = await User.findOne({email : email})
        if (!existing_user) return res.status(404).json({message : "could not find the user with this email"})

        const password_verified = await bcrypt.compare(password, existing_user.password_hash)
        if (!password_verified) return res.status(400).json({message : "wrong credentials"})
        
        const token = await gentoken(existing_user._id)
        res.cookie("token", token, {httpOnly : true, sameSite : true, maxAge : 30*24*60*60*1000})
        res.json({token : token})
    } catch (error) {
        res.status(500).json({error : error})
    }
}