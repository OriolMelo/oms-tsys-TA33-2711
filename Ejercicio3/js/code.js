window.onload = function(){
    
    const parrafo = document.getElementsByTagName("p");
    for(let i=0; i<parrafo.length; i++){
        parrafo[i].onclick = () =>{
            console.log("Se presionó un párrafo del documento");
        }
    }
    // parrafo[0].onClick = () =>{
    //     console.log("Clicado parrafo");
    //     document.getElementsByTagName("p").innerHTML ="AA";
    // }

    const tabla2 = document.getElementsByClassName("tabla");
    for(let i=0; i<tabla2.length; i++){
        tabla2[i].onclick = () =>{
            console.log("Se presionó un párrafo contenido en la segunda tabla");
        }
    }
}
