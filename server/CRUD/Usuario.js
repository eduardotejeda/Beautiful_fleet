import {supabase} from '../dataBase.js';

/* 

La tupla usuario contiene: id, created_at, nombre_usuario, emial y password.

Inicio asumiendo que id y created_at se creand automaticamente.

*/

// Funcion para leer usuario
async function getUser(user) { 
    // Nombre de la tabla que quieres consultar
    const tableName = "usuario";
    // Realiza una consulta a la tabla especificada
    const { data, error } = await supabase
        .from(tableName)
        .select()
        .eq("id", user);
    if (error) {
        console.error("Error al consultar datos:", error.message);
        return;
    } else {
        // Procesa los datos obtenidos
        console.log("Datos de la tabla:", data);
    }
}

//Funcion para crear usuario. El id y create_at son agregados automaticamente por supabase.

async function createUsurio( nombre_usuario, email, password) {
    const tableName = "usuario";
    const { error } = await supabase.from(tableName).insert({
        nombre_usuario,
        email, password,
    });
    if (error) {
        console.error("Error al consultar datos:", error.message);
        return;
    }
}


// Borrar usuario
async function deleteUsuario(id) {
    // Nombre de la tabla que quieres consultar
    const tableName = "usuario";
    // Realiza una consulta a la tabla especificada
    const { data, error } = await supabase
        .from(tableName)
        .delete()
        .eq("id", id);
    if (error) {
        console.error("Error al eliminar datos:", error.message);
        return;
    }
}

export {getUser, createUsurio, deleteUsuario};