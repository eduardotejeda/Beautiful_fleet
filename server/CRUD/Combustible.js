import { supabase } from "../dataBase.js";
const tableName = "cnsm_combustible";

async function getConsumo(idVehiculo) {
    const { data, error } = await supabase
        .from(tableName)
        .select()
        .eq("id_vehiculo", idVehiculo);
    if (error) {
        console.error("Error al consultar datos:", error.message);
        return error;
    } else {
        // Procesa los datos obtenidos
        console.log(data);
        return data;
    }
}

async function createConsumo(created_at, id_vehiculo, cnsm_galones, km_vehiculo) {
    const { error } = await supabase.from(tableName).insert({
                created_at, //"2024-04-17T00:00:00+00:00"
                id_vehiculo, //1
                cnsm_galones, //777,
                km_vehiculo, //111,
            }
        )
        
    if (error) {
        console.log("ha ocurrido un error: ", error.message);
        return (error.message);
    }
    
}

async function deleteConsumo(id) {
    // Realiza una consulta a la tabla especificada
    const { error } = await supabase.from(tableName).delete().eq("id", id);
    if (error) {
        console.error("Error al eliminar datos:", error.message);
        return (error.message);
    }
}

export { getConsumo, createConsumo, deleteConsumo };
