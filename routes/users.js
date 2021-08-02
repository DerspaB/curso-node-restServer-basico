
const { Router } = require('express');
const { check } = require('express-validator');
const { getUsers, putUsers, postUsers, deleteUsers, patchUsers } = require('../controllers/users/users');
const { esRoleValido } = require('../helpers/db-validator');
const { validarCampos } = require('../middleware/validar-campos');


const router = Router();

router.get('/', getUsers);

router.put('/:id', putUsers);

router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('password', 'El password debe tener mas de 6 caracteres').isLength({min: 6}),
    check('correo', 'El correo no es válido').isEmail(),
    // check('rol', 'No es un rol válido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom( esRoleValido ), 
    validarCampos
] ,postUsers);

router.delete('/', deleteUsers);

router.patch('/', patchUsers);

module.exports = router;