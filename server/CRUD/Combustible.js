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

// Agregar consumo de vehiculo, hay que tambien agregar metodo para verificar que el vehiculo existe en la tabla vehiculo antes de ejecutar
async function addConsumo(id_vehiculo, cnsm_galones, km_vehiculo) {
    const tableName = "cnsm_combustible";
    const {data, error} = await supabase
    .from(tableName)
    .insert({
        id_vehiculo,
        cnsm_galones,
        km_vehiculo
    });
    if(error) {
        console.error("Error en crear consumeo:", error.message);
        return;
    }
}

export { getConsumo, addConsumo };