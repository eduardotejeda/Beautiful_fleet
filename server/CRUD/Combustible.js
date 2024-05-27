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

// Agregar consumo de vehiculo, hay que tambien agregar metodo para verificar que el vehiculo existe en la tabla vehiculo antes de ejecutar. Para evitar llamas no necesarias

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

// Eliminar consumo

async function deleteConsumo(id) {
    const tableName = "cnsm_combustible";
    const {data, error} = await supabase
    .from(tableName)
    .delete()
    .eq("id", id);
    if (error) {
        console.error("Error al eliminar consumo:", error.message);
        return;
    }

}

// Actualizar consumo

//Update usuario

async function updateConsumo(id) {
    const tableName = "cnsm_combustible"
    const {data, error} = await supabase
    .from(tableName)
    .update({
        id_vehiculo: 2,
        cnsm_galones: 10.7,
        km_vehiculo: 67000
    })
    .eq("id", id)
    .select()
    if (error) {
        console.error("Error al actualizar datos:", error.message);
        return;
    }
}

export { getConsumo, addConsumo, deleteConsumo, updateConsumo };