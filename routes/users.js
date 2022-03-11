
const { Router } = require('express');
const { check } = require('express-validator');
const { getUsers, putUsers, postUsers, deleteUsers, patchUsers, loginUsers } = require('../controllers/users/users');
const {  emailExiste, emailExisteLogin } = require('../helpers/db-validator');
const { validarCampos } = require('../middleware/validar-campos');


const router = Router();

router.get('/', getUsers);

router.put('/:id', putUsers);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('usuario', 'El usuario es obligatorio').not().isEmpty(),
    check('password', 'El password debe tener mas de 6 caracteres').isLength({min: 6}),
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom( emailExiste ),
    validarCampos
] ,postUsers);

router.post('/login',[
    check('correo', 'El correo no es válido').isEmail(),
    check('correo').custom( emailExisteLogin ),
    check('password', 'El password debe tener mas de 6 caracteres').isLength({min: 6}),
    validarCampos
],loginUsers);

router.delete('/', deleteUsers);

router.patch('/', patchUsers);

module.exports = router;