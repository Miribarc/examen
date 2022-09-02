console.log("Pagina cargada");

function acceptCookie() {
    var cookie_element = document.querySelector('.cookie'); 
    cookie_element.remove();
}

function alerta(elemento_id){
    console.log(elemento_id);
    var locacion= elemento_id.innerText;
    alert("Tu Carro está vacío");
    }

function over(imagen){
    document.getElementById(imagen).src ='images/assets/succulents-2.jpg';
    
}
function out(imagen){
    document.getElementById(imagen).src ='images/assets/succulents-1.jpg';
    
}


