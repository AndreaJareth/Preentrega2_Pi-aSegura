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
} while (!(user === "usuario prototipo" && password === "HolaMundo123"))

const carrito = [];

const lista = [
    { nombre: "zapatoRojo", precio: 750 },
    { nombre: "botaCowboy", precio: 980 },
    { nombre: "zapatilla", precio: 860 },
    { nombre: "valerina", precio: 600 },
    { nombre: "sandalia", precio: 580 }
];

function imprimirLista(lista) { 
    console.log("Estos son los artículos que tenías en la cesta:");
    for (let i = 0; i < lista.length; i++) {
        const item = lista[i];
        const cantidadEnCarrito = carrito.filter(itemCarrito => itemCarrito.nombre === item.nombre).length;
        console.log(`${i + 1}. ${item.nombre} (Cantidad: ${cantidadEnCarrito}): $${item.precio}`);
    }  
}

function calcularTotalConDescuento(total, descuento) {
    const descuentoAplicado = (total * descuento) / 100;
    return total - descuentoAplicado;
}

let totalCompra = 0;

imprimirLista(lista);

while (true) {
    const accion = prompt("¿Deseas agregar un artículo al carrito (agregar), eliminar un artículo (eliminar), aplicar descuento (descuento), o finalizar la compra (finalizar)?");

    if (accion === "agregar") {
        const nombreArticulo = prompt("Ingrese el nombre del artículo que desea agregar:");
        const item = lista.find(item => item.nombre === nombreArticulo);

        if (item) {
            carrito.push(item);
            console.log(`${nombreArticulo} ha sido agregado al carrito.`);
        } else {
            console.log("Artículo no encontrado en la lista.");
        }
    } else if (accion === "eliminar") {
        const nombreArticulo = prompt("Ingrese el nombre del artículo que desea eliminar:");
        const index = carrito.findIndex(item => item.nombre === nombreArticulo);

        if (index !== -1) {
            carrito.splice(index, 1);
            console.log(`${nombreArticulo} ha sido eliminado del carrito.`);
        } else {
            console.log("Artículo no encontrado en el carrito.");
        }
    } else if (accion === "descuento") {
        const porcentajeDescuento = parseFloat(prompt("Ingrese el porcentaje de descuento a aplicar:"));
        if (!isNaN(porcentajeDescuento)) {
            totalCompra = calcularTotalConDescuento(totalCompra, porcentajeDescuento);
            console.log(`Se ha aplicado un descuento del ${porcentajeDescuento}%.`);
        } else {
            console.log("Porcentaje de descuento no válido.");
        }
    } else if (accion === "finalizar") {
        break;
    } else {
        console.log("Acción no válida.");
    }
}

const listaDeCompras = carrito.map(item => ({ nombre: item.nombre, precio: item.precio }));

console.log(`El total de tu carrito es $${totalCompra}`);
console.log("Lista de compras realizadas:");
console.log(listaDeCompras);