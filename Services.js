const fs = require('fs')

const Device = require('./models/Device')
const User = require('./models/User')



class services {

    //================================POST=====================================

    async S_Create(req,res){
        try {
            const {admin_token, device,location,other} = req.body

            const candidate = await User.findOne({token:admin_token})
            if (!candidate) {
                return res.status(400).json({message: "Access blocked."})
            }

            const candidate_device = await Device.findOne({device:device})
            if (candidate_device) {
                return res.status(400).json({message: "Device with that name already exist."})
            }else {
                const dev = new Device({devicename:device, location: location, lastseen:'never', alert:'false', other:other})
                await dev.save()

                return res.status(200).json({dev})
            }
        }
        catch (e) {
            return res.status(500).json({message:'Internal error idi na hiu'})
        }
    }

    async S_Update(req,res){
        try {
            const {username,root_token} = req.body

            const candidate = await User.findOne({username:username})
            if (!candidate) {
                return res.status(400).json({message: "User does not exist."})
            }

            const new_token = "GenerateAccessToken(username)"

            const user = await User.updateOne({username:username}, {token:new_token})

            return res.status(200).json({"new user token":new_token})
        }
        catch (e) {
            console.log(e)
            res.status(500).json({message:'Internal error idi na hiu'})
        }
    }

    async S_Obtain_Post(req,res){
        try {
            const {admin_token, device} = req.body

            const dev = await Device.findOne({devicename:device})
            return res.status(200).json({dev})
        }
        catch (e) {
            return res.status(500).json({message:'Internal error idi na hiu'})
        }
    }

    async S_Test_Post(req,res){
        const {token, device} = req.body
        return res.status(200).json({message : token})
    }

    //================================GET======================================

    async S_Obtain_Get(req,res){
        try {
            const candidate = await User.findOne({token : req.params.token})
            if (!candidate) {
                return res.status(500).json({message : "Access blocked. sosi hui"})
            }

            const dev = await Device.findOne({devicename : req.params.device})

            return res.status(200).json({dev})

        }
        catch (e) {
            return res.status(500).json({message:'Internal error idi na hiu'})
        }
    }

    async S_Test_Get(req,res){
        
        return res.status(200).json({message:'S_Test_get working'})
    }




}

module.exports = new services()