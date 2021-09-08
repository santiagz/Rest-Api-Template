const {Schema, model} = require('mongoose')


const Device = new Schema({
    devicename: {type:String,required:true, unique: true},
    location: {type: String, required: true},
    lastseen: {type: String},
    alert: {type: Boolean},
    other: {type: String},
})

module.exports = model('Device', Device)
