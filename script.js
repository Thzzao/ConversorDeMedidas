// pegando o valor que foi dado pelo usuário para fazer o cálculo
const valor = parseFloat (document.getElementById ("valor").value)
// pegando as categorias e as unidades de medida requeridas para o cálculo
const categoria = document.getElementById ("categoria").value
const uniEntrada = document.getElementById ("uniEntrada").value
const uniSaida = document.getElementById ("uniSaida").value


//funcão que realizará o conversão 
function converter() {
   //validação dos campos
   if (categoria === "COMP"){
      if (uniEntrada === "m" & uniSaida === "cm"){
         metrosParaCentimetros()
      }
      else if (uniEntrada === "cm" & uniSaida ==="m"){
         centimetrosParaMetros()
      }
      else if (uniEntrada === "pol" & uniSaida ==="m"){
         polegadasParaMetros()
      }
      else if (uniEntrada === "m" & uniSaida ==="pol"){
         metrosParaPolegadas()
      }
      else if (uniEntrada === "cm" & uniSaida ==="pol"){
         centimetrosParaPolegadas()
      }
      else if (uniEntrada === "pol" & uniSaida ==="cm"){
         polegadasParaCentimetros()
      }
      else if (uniEntrada === uniSaida){
         document.getElementById("resultado").textContent = `Selecione uma unidade diferente`;
      }
   }
   else if (categoria === "PESO"){
      if (uniEntrada === "kg" & uniSaida ==="g"){
         quiloParaGramas()
      }
      else if (uniEntrada === "g" & uniSaida ==="kg"){
         gramasParaQuilo()
      }
      else if (uniEntrada === "kg" & uniSaida ==="li"){
         quiloParaLibras()
      }
      else if (uniEntrada === "li" & uniSaida ==="kg"){
         librasParaQuilo()
      }
      else if (uniEntrada === "g" & uniSaida ==="li"){
         gramasParaLibras()
      }
      else if (uniEntrada === "li" & uniSaida ==="g"){
         librasParaGramas()
      }
   }
   else { //categoria === "TEMP"
      if (uniEntrada === "C" & uniSaida ==="F"){
         celsiusParaFahren()
      }
      else if (uniEntrada === "F" & uniSaida ==="C"){
         fahrenParaCelsius()
      }
      else if (uniEntrada === "K" & uniSaida ==="F"){
         kelvinParaFahren()
      }
      else if (uniEntrada === "F" & uniSaida ==="K"){
         fahrenParaKelvin()
      }
      else if (uniEntrada === "C" & uniSaida ==="K"){
         celsiusParaKelvin()
      }
      else if (uniEntrada === "K" & uniSaida ==="C"){
         kelvinParaCelsius()
      }
   }
}


//Funções contendo as fórmulas dos cálculos 


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
function polegadasParaCentimetros (valor) { 
   const fatorConversao = 2.54; // 1 polegada equivale a 2,54 centímetros 
   const centimetros = valor / fatorConversao;
   // Exibir o resultado na página HTML
   document.getElementById("resultado").textContent = `${valor} polegadas equivalem a ${centimetros} centímetros.`;
}


// Funções de conversão PESO

// Função para converter quiligramas para gramas
function quiloParaGramas (valor) { 
   const fatorConversao = 1000; // 1 kg equivale a 1000 gramas 
   const gramas = valor * fatorConversao;
   // Exibir o resultado na página HTML
   document.getElementById("resultado").textContent = `${valor} quilogramas equivalem a ${gramas} gramas.`;
}

// Função para converter gramas para quilogramas
function gramasParaQuilo (valor) { 
   const fatorConversao = 1000; // 1 kg equivale a 1000 gramas 
   const quilos = valor / fatorConversao;
   // Exibir o resultado na página HTML
   document.getElementById("resultado").textContent = `${valor} gramas equivalem a ${quilos} quilogramas.`;
}

// Função para converter quilogramas para libras
function quiloParaLibras (valor) { 
   const fatorConversao = 2.205; // 1 quilograma equivale a 2,205 libras 
   const libras = valor * fatorConversao;
   // Exibir o resultado na página HTML
   document.getElementById("resultado").textContent = `${valor} quilogramas equivalem a ${libras} libras.`;
}

// Função para converter libras para quilogramas
function librasParaQuilo (valor) { 
   const fatorConversao = 2.205; // 1 quilograma equivale a 2,205 libras 
   const quilos = valor / fatorConversao;
   // Exibir o resultado na página HTML
   document.getElementById("resultado").textContent = `${valor} libras equivalem a ${quilos} quilogramas.`;
}

// Função para converter gramas para libras
function gramasParaLibras (valor) { 
   const fatorConversao = 453.6; // 1 grama é igual a 0,0022046 libras 
   const libras = valor / fatorConversao;
   // Exibir o resultado na página HTML
   document.getElementById("resultado").textContent = `${valor} gramas equivalem a ${libras} libras.`;
}

// Função para converter libras para gramas
function librasParaGramas (valor) { 
   const fatorConversao = 453.6; // 1 grama é igual a 0,0022046 libras 
   const gramas = valor * fatorConversao;
   // Exibir o resultado na página HTML
   document.getElementById("resultado").textContent = `${valor} libras equivalem a ${gramas} gramas.`;
}


// Funções de conversão TEMPERATURA

// Função para converter celsius para fahren
function celsiusParaFahren (valor) { 
   const fahren = valor * 1.8 + 32 
   // Exibir o resultado na página HTML
   document.getElementById("resultado").textContent = `${valor} graus Celsius equivalem a ${fahren} graus Fahrenheit.`;
}

// Função para converter fahren para celsius
function fahrenParaCelsius (valor) { 
   const celsius = (valor - 32) / 1.8 
   // Exibir o resultado na página HTML
   document.getElementById("resultado").textContent = `${valor} graus Fahrenheit equivalem a ${celsius} graus Celsius.`;
}

// Função para converter kelvin para fahren
function kelvinParaFahren (valor) { 
   const fahren = 1.8 * (valor - 273) + 32
   // Exibir o resultado na página HTML
   document.getElementById("resultado").textContent = `${valor} Kelvin equivalem a ${fahren} graus Fahrenheit.`;
}

// Função para converter fahren para kelvin
function fahrenParaKelvin (valor) { 
   const kelvin = (valor + 459.67) * 5/9
   // Exibir o resultado na página HTML
   document.getElementById("resultado").textContent = `${valor} graus Fahrenheit equivalem a ${kelvin} Kelvin`;
}

// Função para converter celsius para kelvin
function celsiusParaKelvin (valor) { 
   const kelvin = valor + 273
   // Exibir o resultado na página HTML
   document.getElementById("resultado").textContent = `${valor} graus Celsius equivalem a ${kelvin} Kelvin`;
}

// Função para converter kelvin para celsius
function kelvinParaCelsius (valor) { 
   const celsius = valor - 273
   // Exibir o resultado na página HTML
   document.getElementById("resultado").textContent = `${valor} Kelvin equivalem a ${celsius} graus Celsius`;
}
