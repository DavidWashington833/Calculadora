calculator.addEventListener('click', event => resolution.value += event.target.value);

apagar.addEventListener('click', () => resolution.value = '');

igual.addEventListener('click', () => resolution.value = eval(resolution.value));