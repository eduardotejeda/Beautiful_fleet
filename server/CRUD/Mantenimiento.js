import { supabase } from "../dataBase.js";
// Nombre de la tabla que quieres consultar
const tableName = "mantenimiento";



/* ----------consultar todos los mantenimientos del vehiculo------------ */
async function getMantenimientos(idVehiculo) {
    // Realiza una consulta a la tabla especificada
    const { data, error } = await supabase
        .from(tableName)
        .select()
        .eq("id_vehiculo", idVehiculo);
    if (error) {
        console.error("Error al consultar datos:", error.message);
        return;
    } else {
        // Procesa los datos obtenidos
        console.log("Datos de la tabla:", data);
    }
}


/* --------crear mantenimiento------------- */
async function createMantenimientos(
    created_at,
    id_vehiculo,
    km_vehiculo,
    descripcion
) {
    
    const { error } = await supabase
        .from(tableName)
        .insert({
            created_at: created_at,
            id_vehiculo: id_vehiculo,
            km_vehiculo: km_vehiculo,
            descripcion: descripcion,
        });
        //Para ver la data enviada en la terminal
        console.log('created_at:', created_at,
            'id_vehiculo:', id_vehiculo,
            'km_vehiculo:', km_vehiculo,
            'descripcion:', descripcion)
    if (error) {
        console.error("Error al insertar datos:", error.message);
        return;
    }
}

/* -------------borrar mantenimiento-------------- */
async function deletMantenimiento(idMantenimiento) {
    // Realiza una consulta a la tabla especificada
    const { data, error } = await supabase
        .from(tableName)
        .delete()
        .eq("id", idMantenimiento);
    console.log(data)
    if (error) {
        console.error("Error al eliminar datos:", error.message);
        return;
    }
}


export { getMantenimientos, createMantenimientos, deletMantenimiento };
