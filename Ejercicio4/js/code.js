function add(event){
    const source = event.target || event.srcElement;
    if (source.innerHTML == '0' || source.innerHTML == '1' || source.innerHTML == '2' || source.innerHTML == '3' || source.innerHTML == '4' || 
        source.innerHTML == '5' || source.innerHTML == '6' || source.innerHTML == '7' || source.innerHTML == '8' || source.innerHTML == '9' || 
        source.innerHTML == '+' || source.innerHTML == '-' || source.innerHTML == '*' || source.innerHTML == '/' || source.innerHTML == '.') 
        document.getElementById("resultado").value += source.innerHTML; 
}

function solve(){
    document.getElementById("resultado").value = calcString(document.getElementById("resultado").value);
}

function calcString(fn) {
    return new Function('return ' + fn)();
}

function extra(event){
    const source = event.target || event.srcElement;
    const valor = document.getElementById("resultado");
    switch(source.innerHTML){
        case "C":
            valor.value= "";
            break;
        case "&lt;-":
            valor.value = valor.value.substring(0, valor.value.length-1);
            break;
        case "+/-":
            valor.value = valor.value*-1;
            break;
        case "%":
            valor.value = valor.value/100;
    }

}