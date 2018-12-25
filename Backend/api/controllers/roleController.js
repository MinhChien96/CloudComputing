'use strict'
// const jwt = require('jsonwebtoken');
// // const privateKey = require('../../config/auth').privateKey;
// var fs = require('fs');
const roleService = require('../services/roleService');

exports.getAll = async (req, res) => {
    var response = {};
    // console.log(req.body);
    await roleService.getAll().then(result => {
        if (result != "") {
            response = { success: true, data: result }
        }
        else response = { success: false, data: null };
    }).catch(err => {
        response = { success: false, data: null, message: err + '' };
    });
    res.json(response);
}

exports.create = async (req, res) => {
    var response = {};
    // console.log(req.body);
    await roleService.create(req.body).then(result => {
        if (result != "") {
            response = { success: true, data: result }
        }
        else response = { success: false, data: null };
    }).catch(err => {
        response = { success: false, data: null, message: err + '' };
    });
    res.json(response);
}


exports.getObjectByRole = async (req, res) => {
    var response = {};
    // console.log(req.body);
    await roleService.getObjectByRole(req.body.role_id).then(async result => {
        if (result != "") {
            response = { success: true, data: result }
        }
        else {
            let rs = await roleService.getAllObject();
            if(rs!=""){
                response = { success: true, data: rs };
            }
            else
            response = { success: true, data: null };
        }
        // console.log(result);
    }).catch(err => {
        response = { success: false, data: null, message: err + '' };
    });
    res.json(response);
}


exports.update = async (req,res)=>{
    var response = {};
    // console.log(req.body);
    await roleService.update(req.body.role_id,req.body.object).then(result => {
        if (result) {
            response = { success: true, data: result }
        }
        else response = { success: false, data: null };
    }).catch(err => {
        response = { success: false, data: null, message: err + '' };
    });
    res.json(response);
}