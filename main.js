calculator.addEventListener('click', event => resolution.value += event.target.value);

clear.addEventListener('click', () => resolution.value = '');

equal.addEventListener('click', () => resolution.value = eval(resolution.value));
