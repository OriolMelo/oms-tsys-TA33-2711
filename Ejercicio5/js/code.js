window.onload = function(){
    const fotos = document.getElementsByTagName("img");
    console.log(fotos)
    for(let i=0; i<fotos.length; i++){
        fotos[i].onclick = () =>{
            document.getElementById("foto_main").src=fotos[i].src;
            document.getElementById("comentario").innerHTML=fotos[i].alt;
        }
    }
}