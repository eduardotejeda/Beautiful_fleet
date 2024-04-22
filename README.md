# Beautiful_fleet

Para poder tener acceso a los datos de la DB hay que desabilitar la opcion RLS (Row-level security) en Authentication -> Policies. Esto es necesario hasta que podamos autentificar usuarios.

[![Ejemplo de policies](https://github.com/eduardotejeda/Beautiful_fleet/blob/main/fotos/Policies.png)]

## Como correr la app

Para correr el app se debe instalar Express y Nodemon. Seguido de modificar package.json agregando: "dev": "npx nodemon app.js", luego en la terminal se escribe:

```npm run dev```