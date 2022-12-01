// Fetch para Historias Animales
fetch('../js/animalitos.json')
    .then( respuesta => respuesta.json())
    .then( data => {
        console.log('¡Abracadabra!:', data);
        mostrarAnimales(data);
      })
      .catch((error) => {
        console.error('Houston tenemos un problema:', error);
      });

function mostrarAnimales(data) {
    const listadoAnimalitos = document.createElement("ul");
    
    for (i = 0; i < data.animales.length; i++) {
        // Listado de Animales
        let listaAnimalitos = document.createElement('li');
        let linkAnimal = document.createElement('a');
        linkAnimal.setAttribute("href", '#' + data.animales[i].id);
        listaAnimalitos.appendChild(linkAnimal);
        linkAnimal.innerHTML = data.animales[i].nombre;
        listadoAnimalitos.appendChild(listaAnimalitos);
        
        // Crea section que engloba cada sección animal
        const seccionAnimal = document.createElement('div');
        seccionAnimal.setAttribute("class", "animalitoRefugio")

        // Nombre Animal
        const nombreAnimal = document.createElement('h3');
        nombreAnimal.innerHTML = data.animales[i].nombre;
        nombreAnimal.setAttribute("id", data.animales[i].id)

        // Especie
        const especieAnimal = document.createElement('h4');
        especieAnimal.innerHTML = "Especie: " + data.animales[i].especie;

        // Edad
        const edadAnimal = document.createElement('h4');
        edadAnimal.innerHTML = "Edad: " + data.animales[i].edad + " años";
        
        // Sexo
        const sexoAnimal = document.createElement('h4');
        sexoAnimal.innerHTML = "Sexo: " + data.animales[i].sexo;

        // Historia del animal
        const historiaTitulo = document.createElement('h4');
        historiaTitulo.innerHTML = "Su historia: ";
        const historiaTexto = document.createElement('p');
        historiaTexto.innerHTML = data.animales[i].historia;
        const historiaAnimal = document.createElement('div');
        historiaAnimal.appendChild(historiaTitulo);
        historiaAnimal.appendChild(historiaTexto);

        // Imagen
        const fotoAnimal = document.createElement('img');
        fotoAnimal.setAttribute("src", data.animales[i].img);

        // Volcar listado Animalitos
        document.getElementById("listaAnimales").appendChild(listadoAnimalitos);
        
        // Volcar animales en Section
        document.getElementById("animalitosHistorias").appendChild(seccionAnimal);
        seccionAnimal.appendChild(nombreAnimal);
        seccionAnimal.appendChild(especieAnimal);
        seccionAnimal.appendChild(edadAnimal);
        seccionAnimal.appendChild(sexoAnimal);

        // Si tiene colores
        if (data.animales[i].colores != null){
            const coloresAnimal = document.createElement('h4');
            coloresAnimal.innerHTML = "Sus colores: " + data.animales[i].colores;
            seccionAnimal.appendChild(coloresAnimal);
        }

        // Si tiene caparazón
        if (data.animales[i].caparazon != null){
            const caparazonAnimal = document.createElement('h4');
            caparazonAnimal.innerHTML = "Estado de su caparazón: " + data.animales[i].caparazon;
            seccionAnimal.appendChild(caparazonAnimal);
        }

        // Si tiene parecido a otras razas
        if (data.animales[i].raza != null){
            const razaAnimal = document.createElement('h4');
            razaAnimal.innerHTML = "Razas similares: " + data.animales[i].raza;
            seccionAnimal.appendChild(razaAnimal);
        } 

        seccionAnimal.appendChild(historiaAnimal);
        seccionAnimal.appendChild(fotoAnimal);       
    }
}


// Parte de e-commerce
// Fetch y muestra de productos
fetch('../js/alimentos.json')
    .then( r => r.json())
    .then( d => {
        console.log('Productos:', d);
        mostrarProductos(d);
    })
    .catch( e => {
        console.error('Problema:', e);
    });


function mostrarProductos(d){
    for (i = 0; i < d.alimentos.length; i++) {
        // Crea div que engloba cada producto
        const productoAnimal = document.createElement('div');

        // Nombre Producto
        const nombreProducto = document.createElement('h3');
        nombreProducto.innerHTML = d.alimentos[i].producto;

        // Cantidad de Producto
        const kgProducto = document.createElement('h5');
        kgProducto.innerHTML = d.alimentos[i].cantidad + " kg";

        // Precio de Producto
        const precioProducto = document.createElement('h4');
        precioProducto.innerHTML = "Precio: $" + d.alimentos[i].precio;

        // Marca de Producto
        const marcaProducto = document.createElement('h6');
        marcaProducto.innerHTML = "Marca: " + d.alimentos[i].marca;

        // Imagen
        const fotoProducto = document.createElement('img');
        fotoProducto.setAttribute("src", d.alimentos[i].img);

        // Botón de Comprar
        const btnComprar = document.createElement('button');
        btnComprar.innerHTML = "Comprar";
        btnComprar.setAttribute("class", "btnComprar");
        btnComprar.setAttribute("value", d.alimentos[i].producto + " | " + d.alimentos[i].precio);
        btnComprar.addEventListener("click", agregarCarrito);

        // Mostrar los Productos
        document.getElementById("ventaProductos").appendChild(productoAnimal);
        productoAnimal.appendChild(nombreProducto);
        productoAnimal.appendChild(precioProducto);
        productoAnimal.appendChild(marcaProducto);
        productoAnimal.appendChild(kgProducto);

        // Si es para cierta edad
        if (d.alimentos[i].edad != null){
            const edadProducto = document.createElement('h6');
            edadProducto.innerHTML = "Edades: " + d.alimentos[i].edad;
            productoAnimal.appendChild(edadProducto);
        }

        // Si es un combo
        if (d.alimentos[i].combo != null){
            const comboProducto = document.createElement('h6');
            const listaCombo = document.createElement('ul');
            comboProducto.innerHTML = "El combo trae: ";
            comboProducto.appendChild(listaCombo);
            d.alimentos[i].combo.forEach( (j) => {
                const prodCombo = document.createElement('li');
                prodCombo.innerHTML = j;
                listaCombo.appendChild(prodCombo);
            });
            productoAnimal.appendChild(comboProducto);
        }

        // Si viene en distintos sabores
        if (d.alimentos[i].sabores != null){
            const saboresProducto = document.createElement('h6');
            const listaSabores = document.createElement('ul');
            saboresProducto.innerHTML = "Sabores para elegir: ";
            saboresProducto.appendChild(listaSabores);
            d.alimentos[i].sabores.forEach( (k) => {
                const sabor = document.createElement('li');
                sabor.innerHTML = k;
                listaSabores.appendChild(sabor);
            });
            productoAnimal.appendChild(saboresProducto);
        }

        productoAnimal.appendChild(fotoProducto);
        productoAnimal.appendChild(btnComprar);

        //Si no hay stock
        if (d.alimentos[i].stock == false){
            const faltaStock = document.createElement('p');
            faltaStock.innerHTML = "Por el momento no contamos con stock de este producto. Vuelva a intentarlo más tarde.";
            btnComprar.setAttribute("disabled", "");
            btnComprar.setAttribute("class", "noStock");
            productoAnimal.appendChild(faltaStock);
        }

        // Si el producto tiene PROMO
        if (d.alimentos[i].promo == true) {
            precioProducto.setAttribute("class", "promo");
            precioProducto.innerHTML = "¡¡¡Precio: $" + d.alimentos[i].precio + "!!!";
        }
    }
}

// Actualización del contador del Carrito
let contador = document.getElementById("contador");
var conteo = 0;
contador.innerHTML = conteo;

function agregarCarrito(){
    conteo++;
    contador.innerHTML = conteo;
    return true
}