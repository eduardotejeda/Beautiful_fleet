const { createClient } = require('@supabase/supabase-js');

// Obten las credenciales de tu proyecto Supabase
const supabaseUrl = 'https://xhwltyyjlzvvghsqpmep.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhod2x0eXlqbHp2dmdoc3FwbWVwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDkxNzIwOTAsImV4cCI6MjAyNDc0ODA5MH0.ira4h05DTWbnLs58ZAGsc8y69Fgdc3hFGHCeWYP08SE';

// Inicializa el cliente Supabase
const supabase = createClient(supabaseUrl, supabaseKey);

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
