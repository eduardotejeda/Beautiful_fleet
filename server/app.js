const user = 1;
import express from 'express';
import {} from "./CRUD/Combustible.js";
import {
    reqMantenimientos,
    createMantenimientos,
    deletMantenimiento,
} from "./CRUD/Mantenimiento.js";
import {} from "./CRUD/Usuario.js";
import {
    reqVehiculos,
    createVehiculo,
    deletVehiculo,
} from "./CRUD/Vehiculos.js";
const app = express();
app.use(express.json()); 



app.get("/vehiculos/:id", async (req, res) =>{
    const vehiculos = await reqVehiculos(req.params.id);
    res.status(200).send(vehiculos);
})

app.listen(8080, () => {
    console.log("Server in port 8080")
})

