import { supabase } from "../dataBase.js";
//Nombre de table del CRUD
const tableName = "kilometraje";

//Leer 
async function leerKm(id_vehiculo) {
    const {data, error} = await supabase.from(tableName).select().eq("id_vehiculo",id_vehiculo);
    if (error) {
        console.error("Error al consultar datos:", error.message);
        return;
    } else {
        // Procesa los datos obtenidos
        console.log("Datos de la tabla:", data);
    }
}

//crear
async function createKm(id_vehiculo, kilometraje) {
    const {error} = await supabase
    .from(tableName)
    .insert({ id_vehiculo, kilometraje })
    .select()    

if (error) {
    console.error("Error al insertar datos:", error.message);
    return;
}
};

//Borrar
async function deleteKM(id) {
    const {error} = await supabase
    .from(tableName)
    .delete()
    .eq("id", id)

    if (error) {
        console.error("Error al borrar datos:", error.message);
        return;
    }
}

//Actualiar
async function updateKm(id,kilometraje) {
    const {error} = await supabase
    .from(tableName)
    .update({
        kilometraje
    })
    .eq("id", id)
}


export {leerKm, createKm, deleteKM, updateKm};


