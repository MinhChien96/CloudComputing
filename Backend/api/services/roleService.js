'use strict'
const db = require("../entities");

exports.getAll = ()=>{
    return db.roles.findAll();
}

exports.create = (role)=>{
    return db.roles.build(role).save();
}

exports.getObjectByRole = (role_id)=>{
    return db.objects.findAll({
        include: [{
            model: db.role_object,
            require: true,
            where: {
                role_id: role_id,
            }
        }]
    })
}

//
exports.getAllObject = ()=>{
    return db.objects.findAll();
}

exports.update = async (role_id,arrObject)=>{
    try {
        for(let i=0;i<arrObject.length;i++){
            await this.updateObjectRole(role_id,arrObject[i]);
        }
        return true;
    } catch (error) {
        return false;
    }
}

exports.updateObjectRole = async(role_id,object)=>{
    try {
        let result = await db.role_object.findOne({
            where: {
                role_id: role_id,
                object_id: object.object_id
            }
        });
        if(result){
            result.ct_access = object.access ? 1 : 0;
            result.ct_add = object.add ? 1 : 0;
            result.ct_edit = object.edit ? 1 : 0;
            result.ct_delete = object.delete ? 1 : 0;
            console.log(result);
            let rs = await result.save();
            return rs;
        }
        else{
            let result = await db.role_object.build({
                role_id: role_id,
                object_id: object.object_id,
                ct_access : object.ct_access,
                ct_add : object.ct_add,
                ct_edit : object.ct_edit,
                ct_delete : object.ct_delete
            }).save();
            return result;
        }
    } catch (error) {
        console.log(error);
    }
}