// Adiciona os values dos buttons no input #resolucao ao clickar
calculadora.addEventListener("click", function(event) {
    resolucao.value += event.target.value;
});

// Apaga value da resolucao ao clickar no button #apagar
apagar.addEventListener("click", function() {
    resolucao.value = "";
});

// faz as operações matemáticas ai clickar no button #igual
igual.addEventListener("click", function() {
    resolucao.value = eval(resolucao.value);
});