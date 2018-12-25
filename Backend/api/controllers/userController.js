'use strict';
const userService = require('../services/userService');
const jwt = require('jsonwebtoken');
const privateKey = require('../../config/auth').privateKey;
var fs = require('fs');

exports.login = async (req, res) => {
  var response = {};
  await userService
    .login(req.body)
    .then((result) => {
      if (result) {
        let exp = Date.now() + 86400000; //1 ngay
        let playload = { id: result.user.user_id, exp: exp };
        let token = jwt.sign(playload, privateKey);
        response = { success: true, message: 'Thanh cong', data:{
            token,
            exp,
            result
        } };
      } else response = { success: false, message: 'Thất bại' };
    })
    .catch((err) => {
      response = { success: false, message: 'Thất bại' };
    });
  res.json(response);
};

exports.getAll = async (req, res) => {
  var response = {};
  await userService
    .getAll()
    .then((result) => {
      if (result)
        response = { success: true, message: 'Thanh cong', data: result };
      else response = { success: false, message: 'Thất bại' };
    })
    .catch((err) => {
      response = { success: false, message: 'Thất bại' };
    });
  res.json(response);
};

exports.updateRole = async (req, res) => {
  var response = {};
  await userService
    .updateRole(req.body.role_id, req.body.user_id)
    .then((result) => {
      if (result)
        response = { success: true, message: 'Thanh cong', data: result };
      else response = { success: false, message: 'Thất bại' };
    })
    .catch((err) => {
      response = { success: false, message: 'Thất bại' };
    });
  res.json(response);
};

exports.create = async (req, res) => {
  var response = {};
  await userService
    .create(req.body)
    .then((result) => {
      if (result)
        response = { success: true, message: 'Thanh cong', data: result };
      else response = { success: false, message: 'Thất bại' };
    })
    .catch((err) => {
      response = { success: false, message: 'Thất bại' };
    });
  res.json(response);
};

exports.delete = async (req, res) => {
  var response = {};
  await userService
    .delete(req.body.userId)
    .then((result) => {
      if (result)
        response = { success: true, message: 'Thanh cong', data: result };
      else response = { success: false, message: 'Thất bại' };
    })
    .catch((err) => {
      response = { success: false, message: 'Thất bại' };
    });
  res.json(response);
};
