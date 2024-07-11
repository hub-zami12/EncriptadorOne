const entry = document.querySelector(".entry");
const mensaje = document.querySelector(".mensaje");
const copiar = document.querySelector(".copiar");
copia.style.display = "none"


function leerTexto(){
    let textEntry = document.querySelector(".entry").value;
    let validar = textEntry.match(/^[ a-z]*$/);
  
    if(!validar || validar === 0) {
        alert("Apenas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

function bEncriptar(){
    if(!leerTexto()) {
      const textEncriptado = encriptar(textArea.value)
      mensaje.value = textEncriptado
      mensaje.style.backgroundImage= "none";
      textArea.value=" ";
      copia.style.display = "block";
    }
  }

  function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
  
        }
  
    }
    return stringEncriptada
  }
  
  
  
    


 


