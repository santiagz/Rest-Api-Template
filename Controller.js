const services = require('./Services')

class controller {

    //================================POST=====================================
    async Create(req,res){
        const service = await services.S_Create(req,res)
    }

    async Update(req,res){
        const service = await services.S_Update(req,res)

    }

    async Obtain_Post(req,res){
        const service = await services.S_Obtain_Post(req,res)
    }

    async Test_Post(req,res){
        const service = await services.S_Test_Post(req,res)
    }

    //================================GET======================================

    async Obtain_Get(req,res){
        const service = await services.S_Obtain_Get(req,res)
    }

    async Test_Get(req,res){
        const service = await services.S_Test_Get(req,res)
    }

}

module.exports = new controller()
