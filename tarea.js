const botonEmpezar = document.querySelector("#empezar");
botonEmpezar.onclick = function(){
    mostrarTarjetas();
    asginarImagenesATarjetas();
    setInterval(iniciarTiempo, 1000);
    

}

function mostrarTarjetas(){
    document.querySelector("#tablero").className = "container"
}

function ocultarTarjetas(){
    document.querySelector("#tablero").className = "oculto"
}

function asginarImagenesATarjetas(){
   
    let misImgs = new Array("imgs/aguila.jpg", "imgs/cocodrilo.jpg", "imgs/elefante.jpg", "imgs/hipo.jpg", "imgs/leon.jpg");
    let nroAnimales = {
        0: 0,
        1: 0,
        2: 0,
        3: 0,
        4: 0,
    }

   


    for (i=1; i <= (misImgs.length *2); i++){
        let nroRandom = Math.floor(Math.random() * misImgs.length);
        
        if (nroAnimales[nroRandom] == 2){
            i--
            continue;
       } else {
        nroAnimales[nroRandom]++
        document.getElementById(`imagen${i}`).src = misImgs[nroRandom];
       }
        
    }
  
}


let segundos = 0;
let $tiempo = document.getElementById("tiempo");

function iniciarTiempo() {
    segundos += 1;
    $tiempo.innerText = segundos + " segundos";

   
}



function sumarIntento(){
   return document.querySelector("#intento").innerText = Number(document.querySelector("#intento").innerText) + 1

}

let secuenciaClicks = []

function flip(event){


    var element = event.currentTarget
	if (element.className === "flip-card-inner") {
        if(element.style.transform == "rotateY(180deg)") {
            element.style.transform = "rotateY(0deg)";
        }
    else {
      element.style.transform = "rotateY(180deg)";
    }
    } 
    secuenciaClicks.push(element);

    if (secuenciaClicks.length === 2){
        encontrarMatch();
    }
}


function encontrarMatch(){
  
  let imagenDeAnimal1 = secuenciaClicks[0].getElementsByClassName("reverso")[0].src
  var imagenDeAnimal2 = secuenciaClicks[1].getElementsByClassName("reverso")[0].src
  let $click1 = secuenciaClicks[0]
  let $click2 = secuenciaClicks[1]
  if (imagenDeAnimal1 === imagenDeAnimal2 ){
   
    setTimeout(function(){$click1.className = "oculto"
    $click2.className = "oculto", ganar();}, 500);
    secuenciaClicks.pop()
    secuenciaClicks.pop()
  }
  else if (imagenDeAnimal1 !== imagenDeAnimal2){
             
    setTimeout(function(){$click1.style.transform = "rotateY(0deg)"
    $click2.style.transform = "rotateY(0deg)"}, 500);
    secuenciaClicks.pop()
    secuenciaClicks.pop()
    sumarIntento();
    }
 
    

 
  

};




function ganar(){
    if (document.querySelectorAll(".oculto").length === 10){ 
        document.querySelector("#victoria").innerText = "GANASTE, FELICITACIONES!"

    }
}






const botonReset = document.querySelector("#reset");
botonReset.onclick = function(){
    
    location.reload()
}


