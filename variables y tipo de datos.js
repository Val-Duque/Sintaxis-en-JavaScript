// usa const, es para datos que no cambia. Y el let es para poderla cambiar 

const nombre = "Val"; // String (Texto)
let edad = 21; // Number (Número)
const correoElectronico = "val@duque.com"; // String (Texto)
const estadoActivo = true; // Boolean (Verdadero/Falso) - ¡Corregido! "true" va en minúscula

// typeof muestra el tipo de informacion 

console.log ({
    nombre: nombre,
    tipoNombre: typeof nombre,

    edad: edad,
    tipoEdad: typeof edad,

    correoElectronico: correoElectronico,
    tipoCorreo: typeof correoElectronico,

    estadoActivo: estadoActivo, // Mostramos el valor
    tipoEstadoActivo: typeof estadoActivo // Mostramos el tipo
})


/* 

Como usa:

1. Declaramos 4 variables: nombre, edad, correo y estado activo.
2. Usamos 'let' para valores que pueden cambiar (como la edad).
3. Usamos 'const' para valores que no deberían cambiar (como el nombre).
4. Usamos 'typeof' para ver qué tipo de dato tiene cada variable.
5. Mostramos todo en un solo console.log() agrupando la info en un objeto {}.

*/