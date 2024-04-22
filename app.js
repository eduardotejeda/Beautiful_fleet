const { createClient } = require('@supabase/supabase-js');
// import dotenv from "dotenv";

require('dotenv').config();




// Inicializa el cliente Supabase
const supabase = createClient(process.env.SUPABASEURL, process.env.SUPABASEKEY);


async function consultarDatos() {
    // Nombre de la tabla que quieres consultar
    const tableName = 'vehiculo';

    // Realiza una consulta a la tabla especificada
    const { data, error } = await supabase.from(tableName).select('*');

    if (error) {
        console.error('Error al consultar datos:', error.message);
        return;
    }

    // Procesa los datos obtenidos
    console.log('Datos de la tabla:', data);
}

// Llama a la función para consultar datos
consultarDatos();
