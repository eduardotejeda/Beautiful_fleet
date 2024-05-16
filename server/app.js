const user = 1;
import express from "express";
import { 
    getConsumo,
    addConsumo,
    deleteConsumo

 } from "./CRUD/Combustible.js";

//Ejemplos de lectura de tabla cnsm_combustible por id_devehiculo
// getConsumo("1")
// Ejemplo de agregar consumo. El id y el created_at se crean automaticamente
// addConsumo(9, 11.5, 55600)
//Ejemplo de borrar consumo con id
// deleteConsumo(14)

import {
    reqMantenimientos,
    createMantenimientos,
    deletMantenimiento,
} from "./CRUD/Mantenimiento.js";

import { 
    getUser,
    createUsurio,
    deleteUsuario,
    updateUsuario

} from "./CRUD/Usuario.js";

import {
    reqVehiculos,
    createVehiculo,
    deletVehiculo,
} from "./CRUD/Vehiculos.js";

//Ejemplos de funciones para llamar usuario
// getUser(1)
// createUsurio("prueba","ramos@mango.com","password")
//Para borrar usuario
// deleteUsuario(7)
//Para actualizar usuario
// updateUsuario(8)

const app = express();
app.use(express.json());

app.get("/vehiculos/:id", async (req, res) => {
    const vehiculos = await reqVehiculos(req.params.id);
    res.status(200).send(vehiculos);
});

app.listen(8080, () => {
    console.log("Server in port 8080");
});
