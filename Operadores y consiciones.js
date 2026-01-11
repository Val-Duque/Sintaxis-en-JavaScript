let edad = 18;
let activo = true; // Booleano: true (verdadero) o false (falso)

// Condicionales explicados:
// && (AND): Ambas condiciones deben ser verdaderas
// || (OR): Al menos una condición debe ser verdadera

// Corregido: "edada" -> "edad"
if (edad >= 18 && activo === true) {
    console.log("Acceso permitido: eres mayor de edad y estas activo");
}
else if (edad >= 18 && activo === false) {
    console.log("Eres mayor de edad, pero tu usuario esta inactivo");
}
else {
    console.log("Acceso no permitido por ser menor de edad.")
}