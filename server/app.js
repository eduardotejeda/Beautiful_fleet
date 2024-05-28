const user = 1;
import express from "express";
import { 
    getConsumo,
    addConsumo,
    deleteConsumo,
    updateConsumo

 } from "./CRUD/Combustible.js";

//Ejemplos de lectura de tabla cnsm_combustible por id_devehiculo
// getConsumo("1")
// Ejemplo de agregar consumo. El id y el created_at se crean automaticamente
// addConsumo(9, 11.5, 55600)
//Ejemplo de borrar consumo con id
// deleteConsumo(14)
//Ejemplo actualiza consumo con datos pre definidos
// updateConsumo(15)

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

const app = express();
app.use(express.json());

app.get("/vehiculos/:id", async (req, res) => {
    const vehiculos = await getVehiculos(req.params.id);
    res.status(200).send(vehiculos);
});

app.post("/create/vehiculo", async (req, res) => {
    createVehiculo(
        req.body.user,
        req.body.created_at,
        req.body.ficha,
        req.body.placa,
        req.body.marca,
        req.body.modelo,
        req.body.ano,
        req.body.fecha_actual,
        req.body.fecha_ultimo_mantenimiento,
        req.body.km_mantenimiento
    );
});

app.listen(8080, () => {
    console.log("Server in port 8080");
});

//-----------------ejemplo de post
/* 
app.post("/prueba", async (req, res) => {
    console.log("nueva consulta de data===========>" )
    res.status(200).send(req.body);
});
 */

//Ejemplo de fetch para enviar datos hacia el backend junto con el fetch
/* fetch("8080/prueba", {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({mensaje:"Hola desde fetch", hora:"esta es la hora"})
})
    .then(response => response.json())
    .then(data =>{
        console.log(data);
    }) */

//createCombustible("2024-03-08 00:00:00+00", 1, 777, 111);
//createUsurio("nombreusuario","nombreusuario@gmasil.com", "password123123")
