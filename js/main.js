function saludar(){
    console.log("Bienvenido a nuestra tienda virtual");   
}
saludar();

const productos = [
    {nombre: "Hoodie", precio: 120},
    {nombre: "Oversize negra", precio: 100},
    {nombre: "Oversize blanca", precio: 100},
];
let carrito = []

let seleccion = prompt("Deseas comprar algún producto, escribe si o no")

while(seleccion != "si" && seleccion != "no"){
    selection=prompt("Por favor escribir si o no")
}

if(seleccion == "si"){
    alert("A continuación encontraras nuestros productos:")
    let todoslosProductos = productos.map(
        (producto) => producto.nombre + " $"+ producto.precio 
    );
    alert(todoslosProductos.join(" - "))
} else if (seleccion == "no"){
    alert("Gracias por visitarnos, hasta pronto!")
}

while(seleccion != "no"){
    let producto = prompt("Por favor agrega un producto a tu carrito")
    let precio = 0

    if(producto == "Hoodie" || producto == "Oversize negra" || producto == "Oversize blanca" ){
        switch (producto){
            case "Hoodie":
                precio = 120;
                break;
            case "Oversize negra":
                precio = 100;
                break;
            case "Oversize blanca":
                precio = 100;
                break;
            default:
                break;    
        }
    let unidades = parseInt(prompt("¿Cuántas unidades quieres llevar?"))

    carrito.push({producto, unidades, precio})
    console.log(carrito)
    }else{
        alert("No tenemos ese producto")
    }

    seleccion = prompt("¿Deseas seguir comprando?")

    while(seleccion === "no"){
        alert("Gracias por tu compra!")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar por producto ${carritoFinal.unidades* carritoFinal.precio}`)
        })
        break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades,0) 
console.log(`El total a pagar es: ${total}`)