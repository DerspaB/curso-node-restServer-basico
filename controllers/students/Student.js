const {response, request} = require('express');
const Estudiante = require('../../models/estudiante');


const getStudents = async (req = request ,res = response) => {

    const students = await Estudiante.find()
    res.json({
        msg: 'get API - controlador',
        students
    });

}
const deleteStudents = async (req = request ,res = response) => {

      await Estudiante.deleteMany()
    res.json({
        msg: 'Se eliminaron los estudiantes',
    });

}


const postStudents = async (req, res = response) => {

    
    const {nombre, grado, numeroAcudiente, fechaClase}  = req.body;
    const student = new Estudiante( {nombre, grado, numeroAcudiente, fechaClase} );

    //Guardar en BD
    try {

        await student.save();
        res.json({
            msg: 'Se agendo correctamente'
        });
    } catch (error) {
        res.status(404).json({
            msg: error
        })
        
    }
    
}

module.exports = {
    getStudents,
    postStudents,
    deleteStudents
}