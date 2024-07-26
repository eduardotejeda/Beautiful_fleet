import { supabase } from "../dataBase.js";

// Nombre de la tabla que quieres consultar
const tableName = "vehiculo";

/* ----------------Consulta todos los datos de la tabla */
async function reqVehiculos(ficha) {
    // Realiza una consulta a la tabla especificada
    const { data, error } = await supabase
        .from(tableName)
        .select()
        .eq("ficha", ficha);
        console.log(data)
    if (error) {
        console.error("Error al consultar datos:", error.message);
        return;
    } else {
        // Procesa los datos obtenidos
        return data;
    }
}

/* --------- crear vehiculo---------- */
async function createVehiculo(
    creado_por,
    created_at,
    ficha,
    chasis,
    placa,
    marca,
    modelo,
    ano,
    fecha_actual,
    fecha_ultimo_matenimiento,
    km_mantenimiento
) {
    
    console.log("entro a la  función")
    const { data , error } = await supabase.from(tableName).insert({
        created_at,
        ficha,
        chasis,
        placa,
        marca,
        modelo,
        ano,
        fecha_actual,
        fecha_ultimo_matenimiento,
        km_mantenimiento,
        creado_por,
    });
    console.log("1")
    console.log("esta es la data: " + data)

    if (error) {
        console.log("ha ocurrido un error");
        console.log(error);
        return { nameError: error.message, error: error };
    }
}
/* {
    "id": 4,
    "created_at": "2024-03-08T17:25:40.961469+00:00",
    "ficha": "Ficha3",
    "chasis": "Chasis789",
    "placa": "123XYZ",
    "marca": "Marca3",
    "modelo": "Modelo3",
    "ano": 2023,
    "fecha_actual": "2024-03-08",
    "fecha_ultimo_matenimiento": "2024-01-30",
    "km_mantenimiento": 45000,
    "creado_por": 3
  } */











/* --------borrar vehiculo---------- */
async function deletVehiculo(idVehiculo) {
    // Realiza una consulta a la tabla especificada
    const { error } = await supabase
        .from(tableName)
        .delete()
        .eq("id", idVehiculo);
    if (error) {
        console.error("Error al eliminar datos:", error.message);
        return;
    }
}

async function updateVehiculo(
    id,
    newCreated_at,
    newFicha,
    newChasis,
    newPlaca,
    newMarca,
    newModelo,
    newAno,
    newFecha_actual,
    newFecha_ultimo_matenimiento,
    newKm_mantenimiento
) {
    const { error } = await supabase
        .from(tableName)
        .update({
            created_at: newCreated_at,
            ficha: newFicha,
            chasis: newChasis,
            placa: newPlaca,
            marca: newMarca,
            modelo: newModelo,
            ano: newAno,
            fecha_actual: newFecha_actual,
            fecha_ultimo_matenimiento: newFecha_ultimo_matenimiento,
            km_mantenimiento: newKm_mantenimiento,
            creado_por: user,
        })
        .eq("id", id);

    if (error) {
        console.error("Error al actualizar datos:", error.message);
        return;
    }
}

export { getVehiculos, createVehiculo, deletVehiculo, updateVehiculo };
