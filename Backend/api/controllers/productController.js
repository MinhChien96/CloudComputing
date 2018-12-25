'use strict'
const productService = require('../services/productService');

exports.getAll = async (req,res) => {
    var response = {};
    // console.log(req.body);
    await productService.getAll().then(result=>{
        if(result!=""){
            response = { success: true, data: result}
        }
        else response = { success: false, data: null };
    }).catch(err=>{
        response = { success: false, data: null, message: err+'' };
    });
    res.json(response);
}

// exports.create = async (req,res) => {
//     var response = {};
//     console.log(req.body);
//     await userService.findByUserName(req.body.userName).then(result=>{
//         if(result!=""){
//             if(result.password == req.body.passWord){
//                 response = { success: true, data: null};
//             }
//             else response = { success: false, message: "Sai mat khau" };
//         }
//     }).catch(err=>{
//         response = { success: false, data: null, message: err+'' };
//     });
//     res.json(response);
// }


// exports.delete = async (req,res) => {
//     var response = {};
//     console.log(req.body);
//     await userService.findByUserName(req.body.userName).then(result=>{
//         if(result!=""){
//             if(result.password == req.body.passWord){
//                 response = { success: true, data: null};
//             }
//             else response = { success: false, message: "Sai mat khau" };
//         }
//     }).catch(err=>{
//         response = { success: false, data: null, message: err+'' };
//     });
//     res.json(response);
// }
