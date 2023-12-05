function dados(){
    let dado1 = Math.floor(Math.random()*6+1);
    let dado2 = Math.floor(Math.random()*6+1);
    return dado1+dado2;
}

let array = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
function añadir_array(suma){
    array[suma]++;
}

for(let i=0; i<36000; i++){
    añadir_array(dados());
}

console.log(array);
for(let i=2; i<=12; i++){
    console.log("Numero de "+i+": "+ array[i]);
}