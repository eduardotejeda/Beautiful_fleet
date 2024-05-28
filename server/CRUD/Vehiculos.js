import { supabase } from "../dataBase.js";

// Nombre de la tabla que quieres consultar
const tableName = "vehiculo";

/* ----------------Consulta todos los datos de la tabla */
async function getVehiculos(user) {
    // Realiza una consulta a la tabla especificada
    const { data, error } = await supabase
        .from(tableName)
        .select()
        .eq("creado_por", user);
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
    user,
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
    console.log("entro a la  funcion")
    const { error } = await supabase.from(tableName).insert({
        created_at: created_at,
        ficha: ficha,
        chasis: chasis,
        placa: placa,
        marca: marca,
        modelo: modelo,
        ano: ano,
        fecha_actual: fecha_actual,
        fecha_ultimo_matenimiento: fecha_ultimo_matenimiento,
        km_mantenimiento: km_mantenimiento,
        creado_por: user,
    });
    console.log("1")
    if (error) {
        return { nameError: error.message, error: error };
    }
}
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
