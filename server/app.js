const user = 1;
import express from "express";
import next from "express";
import {getConsumo,createConsumo,deleteConsumo} from "./CRUD/Combustible.js";
import {} from "./CRUD/Kilometraje.js"
import {getMantenimientos,createMantenimientos,deletMantenimiento} from "./CRUD/Mantenimiento.js";
import {getUser,createUsurio,deleteUsuario,updateUsuario} from "./CRUD/Usuario.js";
import {getVehiculos,createVehiculo,deletVehiculo,updateVehiculo,} from "./CRUD/Vehiculos.js";

const app = express();
app.use(express.json());


app.get("/vehiculos/:id", async (req, res) => {
    const vehiculos = await getVehiculos(req.params.id);
    res.status(200).send(vehiculos);
});

app.post("/create/vehiculo", async (req, res) => {
    console.log("se ha realizado una petición para crear un vehiculo")
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
    /* next(); */
    //HAY UN PROBLEMA CON EL SERVIDOR, NO RESPONDE CORRECTAMENTE A LAS PETICIONES POST
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
