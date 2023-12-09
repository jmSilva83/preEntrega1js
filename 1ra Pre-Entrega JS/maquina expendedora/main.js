//Maquina Expendedora.
let productos = [];

function agregarProducto(nombre, numero, precio) {
    let producto = {
        nombre: nombre,
        numero: numero,
        precio: precio,
    };
    productos.push(producto);
}

agregarProducto("Coca-Cola", 1, 1350.0);
agregarProducto("Fernet Branca", 2, 7800.0);
agregarProducto("Cerveza Quilmes", 3, 950.0);
agregarProducto("Vino Trumpeter", 4, 3500.0);
agregarProducto("Hielo", 5, 300.0);

//Lista de productos a mostrar al usuario para que sepa que tiene la maquina.
function mostrarProductos() {
    let mensaje = "Aquí están los productos disponibles:\n\n";

    productos.forEach((producto) => {
        mensaje += `${producto.numero} ${producto.nombre} $${producto.precio}\n`;
    });

    alert(mensaje);
}

//saludo al usuario
let nombre = prompt("¡Hola! ¿Cuál es tu nombre?");

while (nombre === null || nombre.trim() === "") {
    alert("Por favor, ingrese un nombre válido.");
    nombre = prompt("¡Hola! ¿Cuál es tu nombre?");
}

alert(
    `¡Hola ${nombre.trim()}! ¡Soy tu máquina expendedora, tengo estos productos para vos!`
);
mostrarProductos();

//aquí dejamos al usuario que ingrese un nro o nombre para la selección del producto.
let seleccion = prompt("Coloque el número o nombre del producto:");

while (seleccion === null) {
    alert("Operación cancelada. Gracias por visitarnos. ¡Hasta luego!");
    seleccion = prompt("Coloque el número o nombre del producto:");
}

let productoSeleccionado = productos.find(
    (producto) =>
        producto.nombre.toLowerCase() === seleccion.toLowerCase() ||
        producto.numero === parseInt(seleccion)
);

while (productoSeleccionado === undefined) {
    alert(
        "Producto no encontrado. Por favor, verifique el número o nombre del producto."
    );
    seleccion = prompt("Coloque el número o nombre del producto:");

    while (seleccion === null) {
        alert("Operación cancelada. Gracias por visitarnos. ¡Hasta luego!");
        seleccion = prompt("Coloque el número o nombre del producto:");
    }

    productoSeleccionado = productos.find(
        (producto) =>
            producto.nombre.toLowerCase() === seleccion.toLowerCase() ||
            producto.numero === parseInt(seleccion)
    );
}

//aquí el usuario tiene que ingresar la cantidad de productos que quiere del mismo.
let cantidad = parseInt(prompt("¿Cuántos productos desea?"));

while (isNaN(cantidad) || cantidad <= 0 || !Number.isInteger(cantidad)) {
    alert("Por favor, ingrese una cantidad válida mayor a cero.");
    cantidad = parseInt(prompt("¿Cuántos productos desea?"));
}

//aquí dejamos saber al cliente la selección y su cambio.
let cambio = solicitarPago(productoSeleccionado.precio, cantidad);
alert(`Aquí está su ${productoSeleccionado.nombre}. Su cambio es $${cambio}.`);

let dinero = [
    { nombre: "Billete de 50 Pesos", valor: 50.0 },
    { nombre: "Billete de 100 Pesos", valor: 100.0 },
    { nombre: "Billete de 500 Pesos", valor: 500.0 },
    { nombre: "Billete de 1000 Pesos", valor: 1000.0 },
    { nombre: "Billete de 2000 Pesos", valor: 2000.0 },
];

//aquí solicitamos el pago.
function solicitarPago(precio, cantidad) {
    let saldo = 0;
    let totalAPagar = precio * cantidad;

    while (saldo < totalAPagar) {
        let pago = parseFloat(prompt(`Inserte $${totalAPagar - saldo} más:`));

        while (pago === null) {
            alert("Operación cancelada. Gracias por visitarnos. ¡Hasta luego!");
            return 0;
        }

        if (!isNaN(pago) && pago > 0) {
            saldo += pago;
        } else {
            alert("Por favor, ingrese un valor numérico válido mayor a cero.");
        }
    }

    let cambio = saldo - totalAPagar;
    return cambio;
}

//aquí dejamos un saludo de despedida.
alert("¡Gracias por su compra, vuelva pronto!");
