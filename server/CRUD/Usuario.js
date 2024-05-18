import { supabase } from "../dataBase.js";
const tableName = "usuario";

/*
La tupla usuario contiene: id, created_at, nombre_usuario, email y password.
Inicio asumiendo que id y created_at se crean automáticamente.
*/

// Función para leer usuario
async function getUser(user) {
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
        return data;
    }
}

//Función para crear usuario. El id y create_at son agregados automáticamente por supabase.

async function createUsurio(nombre_usuario, email, password) {
    const { error } = await supabase.from(tableName).insert({
        nombre_usuario,
        email,
        password,
    });
    if (error) {
        console.error("Error al crear datos:", error.message);
        return;
    }
}

// Borrar usuario
async function deleteUsuario(id) {
    // Realiza una consulta a la tabla especificada
    const { error } = await supabase.from(tableName).delete().eq("id", id);
    if (error) {
        console.error("Error al eliminar datos:", error.message);
        return;
    }
}

//Update usuario
async function updateUsuario(id, newEmail, newPassword, newUserName) {
    const { error } = await supabase
        .from(tableName)
        .update({
            email: newEmail,
            password: newPassword,
            nombre_usuario: newUserName,
        })
        .eq("id", id);

    if (error) {
        console.error("Error al actualizar datos:", error.message);
        return;
    }
}

export { getUser, createUsurio, deleteUsuario, updateUsuario };
