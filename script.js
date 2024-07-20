const entrada = document.querySelector(".entry");
const mensaje = document.querySelector(".mensaje");
const copiado = document.querySelector(".copiar");
const texto = document.querySelector(".textos");
copiado.style.display = "none"


function leerTexto(){
    let textEntry = document.querySelector(".entry").value;
    let validar = textEntry.match(/^([a-z]+\s)*[a-z]+$/i);
  
    if(!validar || validar === 0) {
        alert("Apenas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }

}

function botonEncriptar(){
        
    if(!leerTexto()) {
    const textEncriptado = encriptar(entrada.value)
      mensaje.value = textEncriptado
      mensaje.style.backgroundImage= "none";
      entrada.value=" ";
      copiado.style.display = "block";
      texto.style.display= "none"
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
  
  function botonDesencriptar(){
    const textEncriptado = desencriptar(entrada.value)
    mensaje.value = textEncriptado
    entrada.value = "";    
  }
  
  function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
  
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
  }
  
  function copiar () {
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = ""; 
    alert("Texto Copiado")
  }