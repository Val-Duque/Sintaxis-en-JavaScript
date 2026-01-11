// Definimos la contraseña correcta
const passwordCorrecto = "1234";

// Contador de intentos
let intentos = 0;
let accesoConcedido = false;

// Ciclo while que se ejecuta mientras los intentos sean menores a 3
while (intentos < 3) {
    // Pedimos la contraseña al usuario
    let passwordIngresada = prompt("Ingresa tu contraseña: ");

    // Verificamos si la contraseña es correcta
    if (passwordIngresada === passwordCorrecto) {
        console.log("¡Éxito! Acceso concedido.");
        accesoConcedido = true;
        break; // Rompemos el ciclo porque acertó
    } else {
        console.log("Error: Contraseña incorrecta.");
        intentos++; // Aumentamos el contador de intentos

        // Mensaje opcional: mostrar intentos restantes
        if (intentos < 3) {
            console.log("Te quedan " + (3 - intentos) + " intentos.");
        }
    }
}

// Mensaje final si falló los 3 intentos
if (!accesoConcedido) {
    console.log("Has agotado tus 3 intentos. Acceso denegado.");
}