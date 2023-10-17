const addanime= document.querySelector('#btnAddAnime')
const nvoNombreAnime =  document.getElementById('animeNombre');
const nvoImagenAnime =  document.getElementById('animeImagen');
const nvoEscritorAnime =  document.getElementById('animeEscritor');
const nvoEstadoAnime =  document.getElementById('animeEstado');
const nvoEstadoAventuraAnime =  document.getElementById('Aventura');


const llamarEliminar=document.querySelector('#eliminarAgregados');


llamarEliminar.addEventListener('click',function(){
    localStorage.clear();
})

addanime.addEventListener('click',function(){
    var array = localStorage.getItem('myArray');
    array = JSON.parse(array);
    console.log(array);
    let nvoNombre= nvoNombreAnime.value;
    let nvoImagen= nvoImagenAnime.value;
    let nvoEscritor= nvoEscritorAnime.value;
    let nvoEstado= nvoEstadoAnime.value;
    let nvoGeneroAnime =[];

    if(Accion.checked=== true){
        nvoGeneroAnime.push('Accion');
    }
    if(Aventura.checked=== true){
        nvoGeneroAnime.push('Aventura');
    }
    if(Artes_Marciales.checked=== true){
        nvoGeneroAnime.push('Artes Marciales');
    }
    if(Comedia.checked=== true){
        nvoGeneroAnime.push('Comedia');
    }
    if(Misterio.checked=== true){
        nvoGeneroAnime.push('Misterio');
    }
    if(Sobrenatural.checked=== true){
        nvoGeneroAnime.push('Sobrenatural');
    }





    array.push({
        "animeName": nvoNombre, 
        "animeImagen": nvoImagen,
        "animeEscritor": nvoEscritor,
        "animeEstado": nvoEstado,
        "animeGenero": nvoGeneroAnime
    }
    )

    localStorage.removeItem('myArray');

    localStorage.setItem('myArray', JSON.stringify(array));
    var arrayMostrar = localStorage.getItem('myArray');
    array = JSON.parse(arrayMostrar);
    console.log(arrayMostrar);

   localStorage.setItem('myArray', JSON.stringify(array));
    });
    

    
    