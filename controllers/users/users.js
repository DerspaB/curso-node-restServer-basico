const {response, request} = require('express');

const getUsers = (req = request ,res = response) => {

    const {q, nombre, apikey} = req.query;
    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey
    });
}

const putUsers = (req,res = response) => {

    const { id } = req.params

    res.json({
        msg: 'put API - controlador',
        id
    });
}

const postUsers = (req, res = response) => {

    const { nombre, edad}  = req.body;
    res.json({
        msg: 'post API - controlador',
        nombre,
        edad,
    });
}
const deleteUsers = (req,res = response) => {
    res.json({
        msg: 'post API - controlador',
    });
}
const patchUsers = (req,res = response) => {
    res.json({
        msg: 'patch API - controlador',
    });
}

module.exports = {
    getUsers,
    putUsers,
    postUsers,
    deleteUsers,
    patchUsers,
}