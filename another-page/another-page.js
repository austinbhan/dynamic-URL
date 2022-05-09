const params = new URLSearchParams(window.location.search);

console.log(params.get('firstName'));

const firstNameElem = document.getElementById('first-name');

firstNameElem.textContent = params.get('firstName');