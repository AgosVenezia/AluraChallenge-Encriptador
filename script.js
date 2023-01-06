function encriptar(encriptacion){
    document.querySelector("#alerta").removeAttribute("style");
    document.querySelector("#iconexc").removeAttribute("style");
    var textarea = document.querySelector("#texto");
    const texto = textarea.value;
    var area_default = document.querySelector("#default");
    var area_result = document.querySelector("#result");
    var texto_out = document.querySelector("#texto_out");
    if (texto != ""){
        var out = ""
        for(var i=0; i < texto.length; i++){
            if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){
                document.querySelector("#alerta").style.color = "#CB3234";
                document.querySelector("#alerta").style.fontSize = "14px";
                document.querySelector("#iconexc").style.color = "#CB3234";
                document.querySelector("#iconexc").style.fontSize = "14px";
                return;
            }
            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                area_default.classList.remove("invisible");
                area_result.classList.add("invisible");
                return;
            }
            if(texto[i] == 'a'){
                out += encriptacion["a"] ;
            }
            else if(texto[i] == 'e'){
                out += encriptacion["e"];
            }
            else if(texto[i] == 'i'){
                out += encriptacion["i"]; 
            }
            else if(texto[i] == 'o'){
                out += encriptacion["o"]; 
            }
            else if(texto[i] == 'u'){
                out += encriptacion["u"]; 
            }
            else{
                out += texto[i];
            }
        }

        area_default.classList.add("invisible");
        area_result.classList.remove("invisible");
        texto_out.innerHTML = out;
    }
    return;
}

function desencriptar(encriptacion){
    document.querySelector("#alerta").removeAttribute("style");
    var textarea = document.querySelector("#texto");
    var texto = textarea.value;
    var area_default = document.querySelector("#default");
    var area_result = document.querySelector("#result");
    var texto_out = document.querySelector("#texto_out");
    if (texto != ""){
        for(var i=0; i < texto.length; i++){
            if(((texto[i] < 'a') || (texto[i] > 'z')) && (texto[i] != ' ')){
                document.querySelector("#alerta").style.color = "#CB3234";
                document.querySelector("#alerta").style.fontSize = "14px";
                document.querySelector("#iconexc").style.color = "#CB3234";
                document.querySelector("#iconexc").style.fontSize = "14px";
                return;
            }
            else if((texto.length == 1 && texto == " ") || texto.replace(/ /g, "") == ""){
                area_default.classList.remove("invisible");
                area_result.classList.add("invisible");
                return;
            }
        }
        area_default.classList.add("invisible");
        area_result.classList.remove("invisible");
        texto = texto.replace(new RegExp(encriptacion["a"], "g"), "a");
        texto = texto.replace(new RegExp(encriptacion["e"], "g"), "e");
        texto = texto.replace(new RegExp(encriptacion["i"], "g"), "i");
        texto = texto.replace(new RegExp(encriptacion["o"], "g"), "o");
        texto = texto.replace(new RegExp(encriptacion["u"], "g"), "u");
        texto_out.innerHTML = texto;
    }
    return;
}

function clipboard(){
    const texto_out = document.querySelector("#texto_out");
    navigator.clipboard.writeText(texto_out.value);
}

const enc = document.querySelector('#boton_encriptar');
const des = document.querySelector('#boton_desencriptar');
const copy = document.querySelector('#boton_copiar');

var encriptacion = {"a": "ai", "e": "enter", "i": "imes", "o": "ober", "u": "ufat"};

enc.addEventListener( 'click', function() {encriptar(encriptacion);} );
des.addEventListener( 'click', function() {desencriptar(encriptacion);} );
copy.addEventListener( 'click', function() {clipboard();} );