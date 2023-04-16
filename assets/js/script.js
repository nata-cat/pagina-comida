function prueba(){

    let consultarComida = document.getElementById('recetaSolicitada').value;

    let endpoint = 'https://www.themealdb.com/api/json/v1/1/search.php?s='+consultarComida;

    fetch(endpoint)

    .then(respuestaEndpoint => respuestaEndpoint.json())

    .then( data =>{

        console.log(data);

        console.log(data.meals[0].strMeal);

        let imgComida = data.meals[0].strMealThumb;
        let categoriaPlato = data.meals[0].strCategory;
        let paisComida = data.meals[0].strArea;
        let nombreComida = data.meals[0].strMeal;
        let recetaComida = data.meals[0].strInstructions;

        let cambiarFoto = document.getElementById('fotoComida');
        cambiarFoto.src = imgComida;

        let cambiarCategoria = document.getElementById('categoriaComida');
        cambiarCategoria.innerHTML = categoriaPlato;

        let cambiarPais = document.getElementById('paisComida');
        cambiarPais.innerHTML = paisComida;

        let cambiarNombre = document.getElementById('nombreComida');
        cambiarNombre.innerHTML = nombreComida;

        let cambiarReceta = document.getElementById('recetaComida');
        cambiarReceta.innerHTML = recetaComida;

    })

    .catch(unError => console.log(unError))

}

