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

const loginUsers = async(req, res = response) => {

    const {correo, password} = req.body

    const user = await Usuario.findOne({correo})

    const isValidPassword = await bcryptjs.compare(password, user.password);

    if(isValidPassword){
        const {estado, nombre, usuario} = user
        res.status(200).json({
            msg: 'Login exitoso',
            usuario: {
                estado,
                nombre,
                usuario,
                correo
            }
        })
    }
    else{
        res.status(400).json({
            msg: 'Contraseña incorrecta'
        })
    }


    
}

const postUsers = async (req, res = response) => {

    
    const {nombre, correo, password, usuario}  = req.body;
    const user = new Usuario( {nombre, correo, password, usuario} );

    //Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync( password, salt);
    //Guardar en BD
    await user.save();

    res.json({
        user
    });
}
const deleteUsers = (req,res = response) => {
    res.json({
        msg: 'post API - controlador',
        jjfalkf: 'es un delete'
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
    loginUsers
}