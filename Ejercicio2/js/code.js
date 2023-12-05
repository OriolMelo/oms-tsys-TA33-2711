//1
const regex_date = /(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[12])\/([01][0-9]|20)\d{2}/g;

console.log(regex_date.test("Nací el 05/04/1982 en Donostia"));

//2
const regex_email = /^[\w\.-]+\@(\w+)\.(\w){2,3}$/g;

console.log(regex_email.test("e-m.ai1@hotmail.es"));

//3
const regex_replace = /(\&)*(\")*(\<)*(\>)*/;

function escapeHTML(text){
    switch(text){
        case "&":
            let sustituto = "&amp";
            console.log(text.replace(regex_replace, "&amp"));
        break;
        case "\"":
            console.log(text.replace(regex_replace, "&quot"));
        break;
        case "\<":
            console.log(text.replace(regex_replace, "&lt"));
        break;
        case "\>":
            console.log(text.replace(regex_replace, "&gt"));
        break;
    }

}

escapeHTML("\>");

//4
const regex_invert = /(\w+)\s(\w+)/;
let nombre= "John Smith";
console.log(nombre.replace(regex_invert, "$2, $1"));

//5
const regex_tags = /\<(script).*>.*\<\/(script)\>/g;

let html = "<head> <script src='./js/code.js'></script> <title>Document</title> </head>";
console.log(html.replace(regex_tags, ""));