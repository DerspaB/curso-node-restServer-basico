const {response, request} = require('express');
const bcryptjs = require('bcryptjs');
const Usuario = require('../../models/usuario');


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

const postUsers = async (req, res = response) => {

    
    const {nombre, correo, password, rol}  = req.body;
    const usuario = new Usuario( {nombre, correo, password, rol} );

    // Verificar si el correo existe
    const existeEmail = await Usuario.findOne( {correo} );

    if( existeEmail){
        return res.status(400).json({
            msg: 'El correo ya esta registrado',
        })
    }

    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    usuario.password = bcryptjs.hashSync( password, salt);
    //Guardar en BD
    await usuario.save();


    res.json({
        usuario
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