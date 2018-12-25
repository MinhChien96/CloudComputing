'use strict'
const db = require("../entities");

exports.findById = function (id) {//dành cho xác thực
    return db.users.findOne({
        where:{ user_id: id},
    });
}

exports.login = async (user) => {
    let roles = await db.users.findOne({
        where: {
            username: user.username,
            password: user.password
        },
        include: [
            {
                model: db.role_user,
                // required: true,
                // where: { is_active: 1 },
                include: [
                    {
                        model: db.roles,
                        // require: true
                    }
                ]
            }

        ]
    });
    if (roles == null) return false;
    let lstobj = [];
    for (let i = 0; i < roles.role_users.length; i++) {
        let x = roles.role_users[i].role_id;
        let temp = await this.getObject(x);
        if (temp != null) {
            lstobj.push(temp);
        }
    }
    return {
        user: roles,
        objects: lstobj
    }
}

exports.getObject = (role_id) => {
    return db.objects.findAll({
        // where: { role_id: role_id },
        include: [
            {
                model: db.role_object,
                require: true,
                where: {
                    role_id: role_id,
                    ct_access: 1
                }
            }
        ]
    })
}

exports.getAll = () => {
    return db.users.findAll({
        include: [{
            model: db.role_user,
            require: true,
            // where: {is_active: true},
            include: [{
                model: db.roles,
                require: true
            }]
        }]
    })
}

exports.updateRole = async (role_id, user_id) => {
    let result = await db.role_user.findOne({
        where: {
            user_id: user_id,
        }
    })
    if (!result) {
        return db.role_user.build({
            role_id: role_id,
            user_id: user_id,
            is_active: 1
        }).save();
    }
    else {
        let te = await db.role_user.destroy({
            where: {
                user_id: user_id,
            }
        });
        return db.role_user.build({
            role_id: role_id,
            user_id: user_id,
            is_active: 1
        }).save();
    }
}

exports.create = async (user) => {
    let us_id = user.user_id == undefined ? 0 : user.user_id;
    let rs = await db.users.findOne({
        where: {
            user_id: us_id,
        }
    })
    if (rs) {
        rs.fullname = user.fullname;
        rs.username = user.username;
        rs.password = user.password;
        rs.email = user.email;
        rs.adress = user.adress;
        return rs.save();
    } else {
        return db.users.build(user).save();
    }
}

exports.delete = async (userId) => {
    return await db.users.destroy({
        where: {
            user_id: userId,
        }
    });
}
