import {supabase} from '../dataBase.js';

async function getConsumo(id_vehiculo) {
    const tableName = "cnsm_combustible";
    const {data, error} = await supabase
    .from(tableName)
    .select()
    .eq("id_vehiculo", id_vehiculo);
    if (error) {
        console.error("Error al consultar datos:", error.message);
        return
    } else { 
        console.log("Datos de la tabla", data);
    }
}

export { getConsumo };