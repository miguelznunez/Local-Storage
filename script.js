const ul = document.querySelector('ul');
const input = document.getElementById('item');
let itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

itemsArray.forEach(liMaker);

function liMaker(text){
  const li = document.createElement('li');
  li.textContent = text;
  ul.appendChild(li);
}

function add(){
  itemsArray.push(input.value);
  localStorage.setItem('items', JSON.stringify(itemsArray));
  liMaker(input.value);
  input.value = '';
}

function del(){
  localStorage.clear();
  ul.innerHTML = '';
  itemsArray = [];
}