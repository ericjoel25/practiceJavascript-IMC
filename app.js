

// Clase que definer los elementos 
class IMC {
    constructor(nombre, altura, peso){
        this.nombre = nombre;
        this.altura = altura;
        this.peso = peso;
    }
}

//Class que captura el contenido del usuario

class UI {

    // Función para calcular el IMC

    static calcularImc(Info){

        function operación(Info){
            this.dividir = function(altura, peso){
                return ( (peso * 0.453592) / ((altura * 0.3040) * (altura * 0.3040)) );
            }

        }
        
        let operación2 = new operación(Info);
        let IMC = operación2.dividir(altura.value, peso.value);

    // Funcion para obtener el nombre del usuario  

        function información(Info){
          this.nombre = function(n){
              return n;
          }

        }

        let persona = new información(Info);
        let nombre1 = persona.nombre(nombre.value);

    //Mostrar el resultado
        
    let mostrarResultado = document.querySelector('#mostrar-resulotado');

    if((IMC >= 25) && (IMC <= 29.9)){
        mostrarResultado.innerHTML=`<p class='text'>${nombre1} tu IMC es de ${IMC.toPrecision(4)} tienes sobrepeso. </p>`;

    }else if(IMC <= 15){
        mostrarResultado.innerHTML=`<p class='text'>${nombre1} tu IMC es de ${IMC.toPrecision(4)} tienes delgadez muy severa. </p>`;

    }else if((IMC >= 15) && (IMC <= 15.9)){
        mostrarResultado.innerHTML=`<p class='text'>${nombre1} tu IMC es de ${IMC.toPrecision(4)} tienes delgadez severa. </p>`;

    } else if((IMC >= 16) && (IMC <= 18.4)){
        mostrarResultado.innerHTML=`<p class='text'>${nombre1} tu IMC es de ${IMC.toPrecision(4)} tienes delgadez. </p>`;

    }else if ((IMC >= 30) && (IMC <= 34.9)){
        mostrarResultado.innerHTML=`<p class='text'>${nombre1} tu IMC es de ${IMC.toPrecision(4)} tienes obesidad moderada. </p>`;

    } else if((IMC >= 35) && (IMC <= 39.9)){
        mostrarResultado.innerHTML=`<p class='text'>${nombre1} tu IMC es de ${IMC.toPrecision(4)} tienes obesidad severa. </p>`;

    } else if (IMC >= 40) {
        mostrarResultado.innerHTML=`<p class='text'>${nombre1} tu IMC es de ${IMC.toPrecision(4)} tienes obesidad muy severa. </p>`;
        
    }else if ((IMC >= 18.5) && (IMC <= 24.9)){
        mostrarResultado.innerHTML=`<p class='text'>${nombre1} tu IMC es de ${IMC.toPrecision(4)} tienes un peso saludable. </p>`;
    }
 
          
    }

    // Funcion para limpiar los campos 

    static limpiarCampos (){
       document.querySelector('#nombre').value= ''; 
       document.querySelector('#altura').value = '';
       document.querySelector('#peso').value = '';  

    }

    // Alerta para completar todos los campos
    static mostrarAlerta(mensaje, className){
        const div = document.createElement('div');
        div.className =`alert ${className}`;
        div.appendChild(document.createTextNode(mensaje));

        const container = document.querySelector('.container');
        const form = document.querySelector('#lista-presupuesto');
        container.insertBefore(div, form);

        setTimeout(()=>document.querySelector('.alert').remove(), 3000);

    }


}

//controlar el evento submit.
document.querySelector('#lista-presupuesto').addEventListener('submit', (e) =>{
e.preventDefault();

//obtener el valor de los campos.
const nombre = document.querySelector('#nombre').value;
const altura = document.querySelector('#altura').value;
const peso = document.querySelector('#peso').value;
const modal = document.getElementById("myModal");

if(nombre === '' || altura === '' || peso === '' ){
    UI.mostrarAlerta('Por favor ingrese todos los datos', 'alert');
    modal.style.display = "none";
}else {
        let Info = new IMC (nombre, altura, peso);
        console.log(Info);
        UI.calcularImc(Info);
        UI.limpiarCampos();
    
    
    }

});


// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal

const btn = document.querySelector('.btn');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



