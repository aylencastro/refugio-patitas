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

        // Si tiene caparazón
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