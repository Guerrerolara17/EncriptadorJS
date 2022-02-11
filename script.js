function procesoEncriptar() {
        
    var textoencriptar = document.getElementById("input-texto").value;
  
        
    if (!textoencriptar) {
      console.log("textoencriptado")

    } else {
      var encriptando = textoencriptar

      encriptando = encriptando.replace(/e/g, "enter");
  
      encriptando = encriptando.replace(/i/g, "imes");

      encriptando = encriptando.replace(/a/g, "ai");
      
      encriptando = encriptando.replace(/o/g, "ober");
     
      encriptando = encriptando.replace(/u/g, "ufat");
  
      document.getElementById("msg").value=encriptando;
      document.getElementById("input-texto").value="";

      console.log(encriptando)
      
    }
}  

function procesoDesencriptar() {

    var textodesencriptar = document.getElementById("input-texto").value;
    
    
    if (!textodesencriptar) {
      console.log("textodesencriptado")
      
    }else {
      var encriptando = textodesencriptar
    
      encriptando = encriptando.replace(/enter/g, "e");
      encriptando = encriptando.replace(/imes/g, "i");
      encriptando = encriptando.replace(/ai/g, "a");
      encriptando = encriptando.replace(/ober/g, "o");
      encriptando = encriptando.replace(/ufat/g, "u");
    
      document.getElementById("msg").value=encriptando;
      document.getElementById("input-texto").value="";
     
    }
}

function copiarPortapapeles() {

    var content = document.getElementById('msg');
    
    content.select();
    document.execCommand('copy');
}
