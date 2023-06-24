// pegando o valor que foi informado pelo usuário no html e trazendo para o js para fazer a operação
const valor = document.getElementById ("valor")
// pegando as categorias e as unidades de medida requeridas para o cálculo
const categoria = document.getElementById ("categoria")
const uniEntrada = document.getElementById ("uniEntrada")
const uniSaida = document.getElementById ("uniSaida")

//funcão que realizará o conversão 
function converter(event) {
   event.preventDefault()
   //validação dos campos
   if (categoria.value === "COMP"){
      if (uniEntrada.value === "m" & uniSaida.value === "cm"){
         metrosParaCentimetros(valor.value)
      }
      else if (uniEntrada.value === "cm" & uniSaida.value ==="m"){
         centimetrosParaMetros(valor.value)
      }
      else if (uniEntrada.value === "pol" & uniSaida.value ==="m"){
         polegadasParaMetros(valor.value)
      }
      else if (uniEntrada.value === "m" & uniSaida.value ==="pol"){
         metrosParaPolegadas(valor.value)
      }
      else if (uniEntrada.value === "cm" & uniSaida.value ==="pol"){
         centimetrosParaPolegadas(valor.value)
      }
      else if (uniEntrada.value === "pol" & uniSaida.value ==="cm"){
         polegadasParaCentimetros(valor.value)
      }
   }
   else if (categoria.value === "PESO"){
      if (uniEntrada.value === "kg" & uniSaida.value ==="g"){
         quiloParaGramas(valor.value)
      }
      else if (uniEntrada.value === "g" & uniSaida.value ==="kg"){
         gramasParaQuilo(valor.value)
      }
      else if (uniEntrada.value === "kg" & uniSaida.value ==="lb"){
         quiloParaLibras(valor.value)
      }
      else if (uniEntrada.value === "lb" & uniSaida.value ==="kg"){
         librasParaQuilo(valor.value)
      }
      else if (uniEntrada.value === "g" & uniSaida.value ==="lb"){
         gramasParaLibras(valor.value)
      }
      else if (uniEntrada.value === "lb" & uniSaida.value ==="g"){
         librasParaGramas(valor.value)
      }
   }
   else { //categoria === "TEMP"
      if (uniEntrada.value === "C" & uniSaida.value ==="F"){
         celsiusParaFahren(valor.value)
      }
      else if (uniEntrada.value === "F" & uniSaida.value ==="C"){
         fahrenParaCelsius(valor.value)
      }
      else if (uniEntrada.value === "K" & uniSaida.value ==="F"){
         kelvinParaFahren(valor.value)
      }
      else if (uniEntrada.value === "F" & uniSaida.value ==="K"){
         fahrenParaKelvin(valor.value)
      }
      else if (uniEntrada.value === "C" & uniSaida.value ==="K"){
         celsiusParaKelvin(valor.value)
      }
      else if (uniEntrada.value === "K" & uniSaida.value ==="C"){
         kelvinParaCelsius(valor.value)
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


// Função que atualiza as opções conforme a entrada do usuário em categoria
function atualizarUniEntrada(){
   if (categoria.value == "COMP"){
      uniEntrada.innerHTML = ` 
      <option value="">Selecione a Unidade</option>
      <option value="m">Metros</option>
      <option value="cm">Centímetros</option>
      <option value="pol">Polegadas</option>
      `
   }
   if (categoria.value == "PESO"){
      uniEntrada.innerHTML = ` 
      <option value="">Selecione a Unidade</option>
      <option value="kg">Quilogramas</option>
      <option value="g">Gramas</option>
      <option value="lb">Libras</option>
      `
   }
   if (categoria.value == "TEMP"){
      uniEntrada.innerHTML = ` 
      <option value="">Selecione a Unidade</option>
      <option value="C">Celsius</option>
      <option value="F">Fahrenheit</option>
      <option value="K">Kelvin</option>
      `
   }
}

// Função que atualiza as opções conforme a entrada do usuário na primeira unidade
function atualizarUniDestino(){
   if (uniEntrada.value == "m"){
      uniSaida.innerHTML = ` 
      <option value="">Selecione a Unidade</option>
      <option value="cm">Centímetros</option>
      <option value="pol">Polegadas</option>
      `
   }
   if (uniEntrada.value == "cm"){
      uniSaida.innerHTML = ` 
      <option value="">Selecione a Unidade</option>
      <option value="m">Metros</option>
      <option value="pol">Polegadas</option>
      `
   }
   if (uniEntrada.value == "pol"){
      uniSaida.innerHTML = ` 
      <option value="">Selecione a Unidade</option>
      <option value="cm">Centímetros</option>
      <option value="m">Metros</option>
      `
   }
   if (uniEntrada.value == "kg"){
      uniSaida.innerHTML = ` 
      <option value="">Selecione a Unidade</option>
      <option value="g">Gramas</option>
      <option value="lb">Libras</option>
      `
   }
   if (uniEntrada.value == "g"){
      uniSaida.innerHTML = ` 
      <option value="">Selecione a Unidade</option>
      <option value="kg">Quilogramas</option>
      <option value="lb">Libras</option>
      `
   }
   if (uniEntrada.value == "lb"){
      uniSaida.innerHTML = ` 
      <option value="">Selecione a Unidade</option>
      <option value="kg">Quilogramas</option>
      <option value="g">Gramas</option>
      `
   }
   if (uniEntrada.value == "C"){
      uniSaida.innerHTML = ` 
      <option value="">Selecione a Unidade</option>
      <option value="F">Fahrenheit</option>
      <option value="K">Kelvin</option>
      `
   }
   if (uniEntrada.value == "F"){
      uniSaida.innerHTML = ` 
      <option value="">Selecione a Unidade</option>
      <option value="C">Celsius</option>
      <option value="K">Kelvin</option>
      `
   }
   if (uniEntrada.value == "K"){
      uniSaida.innerHTML = ` 
      <option value="">Selecione a Unidade</option>
      <option value="C">Celsius</option>
      <option value="F">Fahrenheit</option>
      `
   }
}