// pegando o valor que foi dado pelo usuário para fazer o calculo
const valor = document.getElementById ("valor").value

resultado = document.getElementById ("resultado") //docuemnt.write

var categoria = document.getElementById ("categoria").value

var uniEntrada = document.getElementById ("uniEntrada").value

var uniSaida = document.getElementById ("uniSaida").value

//funcão que realizará o calculo 
function converter() {
   // caso nao tenha nada no input
   if (valor.value == " "){
      return
   }
   // Conversão da string do input para número
   numero = valor.value
   numero = parseFloat(numero)


   if (categoria.value == "COMP"){
      if (uniEntrada === "m" & uniSaida === "cm"){
         metrosParaCentimetros()
      }
      else if (uniEntrada === "cm" & uniSaida ==="m"){
         centimetrosParaMetros()
      }
      else if
   }


   else if (categoria.value == "PESO"){

   }
   else (categoria.value == "TEMP"){

   }
}



// Funções de conversão COMPRIMENTO

// Função para converter metros para centímetros
function metrosParaCentimetros (valor) { 
   const fatorConversao = 100; // 1 metro equivale a 100 centímetros
   const centimetros = valor * fatorConversao;
   // Exibir o resultado na página HTML
   document.getElementById("resultado").textContent = `${valor} metros equivalem a ${centimetros} centímetros.`;
}

// Função para converter centímetros para metros
function centimetrosParaMetros (valor) { 
   const fatorConversao = 100; // 1 metro equivale a 100 centímetros
   const metros = valor / fatorConversao;
   // Exibir o resultado na página HTML
   document.getElementById("resultado").textContent = `${valor} centímetros equivalem a ${metros} metros.`;
}

// Função para converter polegada para metros
function polegadasParaMetros (valor) { 
   const fatorConversao = 39.37; // 1 metro equivale a 39,37 polegadas
   const metros = valor / fatorConversao;
   // Exibir o resultado na página HTML
   document.getElementById("resultado").textContent = `${valor} polegadas equivalem a ${metros} metros.`;
}

// Função para converter metros para polegadas
function metrosParaPolegadas (valor) { 
   const fatorConversao = 39.37; // 1 metro equivale a 39,37 polegadas
   const polegadas = valor * fatorConversao;
   // Exibir o resultado na página HTML
   document.getElementById("resultado").textContent = `${valor} metros equivalem a ${polegadas} polegadas.`;
}

// Função para converter centímetros para polegadas
function centimetrosParaPolegadas (valor) { 
   const fatorConversao = 2.54; // 1 polegada equivale a 2,54 centímetros 
   const polegadas = valor * fatorConversao;
   // Exibir o resultado na página HTML
   document.getElementById("resultado").textContent = `${valor} metros equivalem a ${polegadas} polegadas.`;
}

// Função para converter polegadas para centímetros
function centimetrosParaPolegadas (valor) { 
   const fatorConversao = 2.54; // 1 polegada equivale a 2,54 centímetros 
   const centimetros = valor / fatorConversao;
   // Exibir o resultado na página HTML
   document.getElementById("resultado").textContent = `${valor} polegadas equivalem a ${centimetros} centímetros.`;
}

// Funções de conversão PESO

// Função para converter xxxxx para xxxxxx
function xxxxxxParaxxxxx (valor) { 
   const fatorConversao = xxxxxx; // 1 xxxxx equivale a xxxxx xxxxxx 
   const xxxxxxx = valor * fatorConversao;
   // Exibir o resultado na página HTML
   document.getElementById("resultado").textContent = `${valor} xxxxxx equivalem a ${xxxxx} xxxxxxxx.`;
}

// Função para converter xxxxx para xxxxxx
function xxxxxxParaxxxxx (valor) { 
   const fatorConversao = xxxxxx; // 1 xxxxx equivale a xxxxx xxxxxx 
   const xxxxxxx = valor * fatorConversao;
   // Exibir o resultado na página HTML
   document.getElementById("resultado").textContent = `${valor} xxxxxx equivalem a ${xxxxx} xxxxxxxx.`;
}