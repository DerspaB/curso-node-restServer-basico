
const { Schema, model } = require('mongoose');

const estudianteSchema = Schema({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    grado:{
        type: Number,
        required: [true, 'El grado es obligatorio']
    },
    numeroAcudiente: {
        type: String,
        required: [true, 'El correo es obligatorio'],
    },
    fechaClase: {
        type: Date,
        required: [true, 'la fecha de clase es obligatoria'],
    },
    estado: {
        type: Boolean,
        default: true
    }
});

estudianteSchema.methods.toJSON = function (){
    debugger;
    const { __v, ...estudiante } =  this.toObject();
    return estudiante;
}

module.exports = model('Estudiante', estudianteSchema);