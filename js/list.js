function itemDone(ev) {
  var target = ev.target;
  console.log(target);
  if(ev.target.tagName.toLowerCase() === 'a') {
    ev.preventDefault();
    target.parentNode.remove();
  }
}

var shoppingListContainer = document.getElementById('shoppingList');
if (shoppingListContainer.addEventListener) {
  shoppingListContainer.addEventListener('click', function(e) {
    itemDone(e);
  }, false);
} else {
  shoppingListContainer.attachEvent('click', function(e) {
    itemDone(e);
  }, false);
}



var button = document.querySelector('.buttonAdd');
var form = document.querySelector('.add-form');


var addItem = function(ev) {
console.log(form);
 form.classList.remove('close');
 form.classList.add('open');
 form.querySelectorAll('input')[0].focus();
 };

console.log(button);
button.addEventListener('click', addItem);
