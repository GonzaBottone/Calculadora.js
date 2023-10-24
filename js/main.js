const productos = [
    {
      nombre: "medialunas",
      precio: 100,
    },
    {
      nombre: "galletitas",
      precio: 60,
    },
    {
      nombre: "chocolate",
      precio: 150,
    },
    {
      nombre: "palmeritas",
      precio: 400,
    },
    {
      nombre: "Bolas de fraile",
      precio: 300,
    },
  ];
  let carrito = [];
  
  
  let seleccion = prompt("hola desea comprar algo si o no");
  
  while (seleccion != "si" && seleccion != "no") {
    alert("por favor ingresa una de las opciones, si o no");
    seleccion = prompt("hola desea comprar algo si o no");
  }
  
  if (seleccion == "si") {
    alert("a continuación lista de productos");
    let todosLosProductos = productos.map((producto) => producto.nombre + " " + producto.precio + "$");
    alert(todosLosProductos.join(" - "));
  } else if (seleccion == "no") {
    alert("gracias por venir al supermecado! hasta luego!");
  }
  
  
  while (seleccion != "no") {
    let producto = prompt("agrega un producto a tu carrito!");
    let precio = 0;
  
    if (
      producto == "medialunas" ||
      producto == "galletitas" ||
      producto == "chocolate" ||
      producto == "palmeritas" ||
      producto == "Bolas de fraile"
    ) {
   
      switch (producto) {
        case "medialunas":
          precio = 50;
          break;
        case "galletitas":
          precio = 100;
          break;
        case "chocolate":
          precio = 150;
          break;
        case "palmeritas":
          precio = 400;
          break;
        case "Bolas de fraile":
          precio = 500;
          break;
        default:
          break;
      }
      let unidades = parseInt(prompt("cuantas unidades de ese producto quieres llevar"));
  
      carrito.push({ producto, unidades, precio });
      console.log(carrito);
    } else {
      alert("no tenemos ese prodcto");
    }
  
    
   seleccion = prompt("desea seguir comprando si o no");
  
  
   carrito.forEach((carritoFinal) =>  {
        console.log(
          `"producto:" ${carritoFinal.producto}, "unidades:" ${carritoFinal.unidades}, "total a pagar por producto:" ${
            carritoFinal.unidades * carritoFinal.precio
          }`
        );
      });
      break;
    }

  
  
  const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0);
  console.log(`el total a pagar por su compra es de:  ${total}`);  