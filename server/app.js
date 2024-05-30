const user = 1;
import express from "express";
import {
    getConsumo,
    createConsumo,
    deleteConsumo,
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
    getMantenimientos,
    createMantenimientos,
    deletMantenimiento,
} from "./CRUD/Mantenimiento.js";

import {
    getUser,
    createUsurio,
    deleteUsuario,
    updateUsuario,
} from "./CRUD/Usuario.js";

import {
    getVehiculos,
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

import {
    leerKm, 
    createKm
} from "./CRUD/Kilometraje.js";

//Ejemplos
// leerKm(1)
createKm(3,120566) 

const app = express();
app.use(express.json());

app.get("/vehiculos/:id", async (req, res) => {
    const vehiculos = await getVehiculos(req.params.id);
    res.status(200).send(vehiculos);
});

app.post("/create/vehiculo", async (req, res) => {
    console.log("se ha realizado una petición para crear un vehiculo");
    console.log("lo datos enviados son: " + toString(req.body));

    createVehiculo(
        req.body.creado_por,
        req.body.created_at,
        req.body.ficha,
        req.body.chasis,
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
/* crea un bucle for que imprima los números del 1 al 5 */

//-----------------ejemplo de post
/* 
app.post("/prueba", async (req, res) => {
    console.log("nueva consulta de data===========>" )
    res.status(200).send(req.body);
});
 */

//Ejemplo de fetch para enviar datos hacia el backend junto con el fetch
fetch("http://localhost:8080/create/vehiculo", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
        created_at: "2024-03-02T02:00:00+00:00",
        ficha: "DDD",
        chasis: "A3142324FG4545",
        placa: "DDD",
        marca: "Hyundai",
        modelo: "H-100",
        ano: 2010,
        fecha_actual: "2024-05-20",
        fecha_ultimo_matenimiento: "2024-02-24",
        km_mantenimiento: 20000,
        creado_por: 3,
    }),
})
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    });

//createCombustible("2024-03-08 00:00:00+00", 1, 777, 111);
//createUsurio("nombreusuario","nombreusuario@gmasil.com", "password123123")
