const productos = [
    {nombre: "Hoodie", precio: 120},
    {nombre: "Oversize negra", precio: 100},
    {nombre: "Oversize blanca", precio: 100},
];
let carrito = []

let seleccion = prompt("Deseas comprar algún producto, escribe si o no")

while(seleccion != "si" && seleccion != "no"){
    prompt("Por favor escribir si o no")
}

if(seleccion == "si"){
    alert("A continuación encontraras nuestros productos:")
    console.log(productos)
}else if (seleccion == "no"){
    alert("Gracias por visitarnos!");
}

