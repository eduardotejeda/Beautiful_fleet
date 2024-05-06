import {supabase} from '../dataBase.js';




/* ----------------Consulta todos los datos de la tabla */
async function reqVehiculos(user) {
    // Nombre de la tabla que quieres consultar
    const tableName = "vehiculo";
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
        console.log("Datos de la tabla:", data);
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
    const tableName = "vehiculo";
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
    // Nombre de la tabla que quieres consultar
    const tableName = "vehiculo";
    // Realiza una consulta a la tabla especificada
    const { data, error } = await supabase
        .from(tableName)
        .delete()
        .eq("id", idVehiculo);
    if (error) {
        console.error("Error al eliminar datos:", error.message);
        return;
    }
}



export { reqVehiculos, createVehiculo, deletVehiculo };