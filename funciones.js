// 1. Función para validar la edad del usuario
// Responsabilidad: Verificar si el número es mayor o igual a 18.
function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

// 2. Función para validar el acceso del usuario
// Verificar que el usuario esté activo Y tenga permiso.
function tieneAcceso(estaActivo, tienePermiso) {
    if (estaActivo && tienePermiso) {
        return true;
    }
    return false;
}

// 3. Función para mostrar mensajes personalizados
// Devolver un texto según el código recibido.
function obtenerMensaje(codigo) {
    if (codigo === "exito") {
        return "¡Operación realizada correctamente!";
    } else if (codigo === "error") {
        return "Ha ocurrido un error en el sistema.";
    } else if (codigo === "bienvenida") {
        return "¡Bienvenido al sistema!";
    } else {
        return "Código de mensaje desconocido.";
    }
}

// --- Pruebas (Verificación) ---
console.log("¿Es mayor de 20?:", esMayorDeEdad(20)); // Debería ser true
console.log("¿Acceso (Activo+Permiso)?:", tieneAcceso(true, true)); // Debería ser true
console.log("Mensaje de éxito:", obtenerMensaje("exito")); // Debería mostrar mensaje de éxito
