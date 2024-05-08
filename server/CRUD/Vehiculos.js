import {supabase} from '../dataBase.js';

    // Nombre de la tabla que quieres consultar
    const tableName = "vehiculo";


/* ----------------Consulta todos los datos de la tabla */
async function reqVehiculos(user) {

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
        return(data);
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
    if (error) {
        console.error("Error al consultar datos:", error.message);
        return;
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



export { reqVehiculos, createVehiculo, deletVehiculo };