
const { Router } = require('express');
const { check } = require('express-validator');
const { postStudents, getStudents, deleteStudents } = require('../controllers/students/Student');
const { validarCampos } = require('../middleware/validar-campos');


const router = Router();


router.post('/', [
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('grado', 'El grado es obligatorio').not().isEmpty(),
    check('numeroAcudiente', 'El telefono debe tener 10 caracteres').isLength({min: 10}),
    check('fechaClase', 'La fecha de clase es obligatoria').not().isEmpty(),
    validarCampos
] ,postStudents);

router.get('/' ,getStudents);
router.delete('/' ,deleteStudents);


module.exports = router;