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

const lista = [
    { nombre: "zapatoRojo", precio: 750 },
    { nombre: "botaCowboy", precio: 980 },
    { nombre: "zapatilla", precio: 860 },
    { nombre: "valerina", precio: 600 },
    { nombre: "sandalia", precio: 580 }
  ];
  
  function imprimirLista(lista) { 
    console.log("Estos son los artículos que tenías en la cesta:");
    let total = 0;
    for (let i = 0; i < lista.length; i++) {
      console.log(`${i + 1}. ${lista[i].nombre}: $${lista[i].precio}`);
    }  
  }

  function tCompra(lista) { 
    let total = 0;
    for (let i = 0; i < lista.length; i++) {
     total += lista[i].precio;
    }  
    return  total;
  }

  let totalCompra =  tCompra(lista);

  imprimirLista(lista);
  console.log(`el total de tucarrito es ${totalCompra}`);

  
  const formaPago = prompt(`¿Deseas pagar a meses con interés (escribe si) o en una sola cuota (escribe no)?`);

  function calcularTotalConInteres(total, porcentajeInteres, numeroMeses) {
    const interes = (total * porcentajeInteres) / 100;
    const totalConInteres = total + interes;
    const cuotaMensual = totalConInteres / numeroMeses;
    return { totalConInteres, cuotaMensual };
  }
  
  let porcentajeInteres; 
  
  if (formaPago === "si") {
    let numeroMeses = parseInt(prompt("Ingresa el número de meses: 6, 8 o 12"));
  
    if (numeroMeses == 6) {
      porcentajeInteres = 10; 
    } else if (numeroMeses == 8) {
      porcentajeInteres = 12; 
    } else if (numeroMeses == 12) {
      porcentajeInteres = 15; 
    } else {
      console.log(`Opción no válida`);
    }
  
    const { totalConInteres, cuotaMensual } = calcularTotalConInteres(totalCompra, porcentajeInteres, numeroMeses);
    console.log(`Total con interés: $${totalConInteres}`);
    console.log(`Cuota mensual: $${cuotaMensual}`);
  } else if (formaPago === "no") {
    console.log(`Total a pagar: $${totalCompra}`);
  } else {
    console.log(`Opción de pago no válida`);
  }