let user;
let password;

do {
    user = prompt("Ingrese su nombre de usuario");
    password = prompt("Ingrese su contraseña");

    if (user === "usuario prototipo" && password === "HolaMundo123") {
        alert("Hola Usuario Prototipo, Bienvenido a tu carrito");
    } else {
        alert("Usuario o contraseña no válidos");
    }
} while (!(user === "usuario prototipo" && password === "HolaMundo123"));