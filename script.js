// pegando o valor que foi dado pelo usuário para fazer o calculo
var valor = document.getElementById ("valor")

resultado = document.getElementById ("resultado") //docuemnt.write

var categoria = document.getElementById ("categoria")

var uniEntrada = document.getElementById ("uniEntrada")

var uniSaida = document.getElementById ("uniSaida")

// Variável de onde se vai calcular o resultado 
var resultado

//funcão que realizará o calculo 
function converter() {
   // caso nao tenha nada no input
   if (valor.value == " "){
      return
   }
   // Conversão da string do input para número
   numero = valor.value
   numero = parseFloat(numero)

   if (categoria.value == "Comprimento"){

   }
   else if (categoria.value == "Peso"){

   }
   else (categoria.value == "Temperatura"){

   }
}

