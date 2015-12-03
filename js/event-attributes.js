

function checkUsername() {
  //Store username variable
  var username = el.value;
  //If username is less than 5
  if (username.length < 5) {
  //change classname to warning
  elMsg.className = 'warning';
  //update msg
  elMsg.textContent = 'Not long enough, yet...';
  } else {
  //otherwise, clear msg
  elMsg.textContent = '';
  }
};

function tipUsername() {
  elMsg.className = 'tip';
  elMsg.innerHTML = 'Username must be at least 5 characters';
};

var el = document.getElementById('username');
var elMsg = document.getElementById('feedback');

el.addEventListener('focus', tipUsername, false);
console.log(el);
el.addEventListener('blur', checkUsername, false);


var elPassword = document.getElementById('password');
var elMsg2 = document.getElementById('feedback2');

function checkPassword(minLength) {

  if (elPassword.value.length < minLength) {
    elMsg2.textContent = 'Password must be ' + minLength + ' characters or more';
  } else {
    elMsg2.innerHTML = '';
  }
}

elPassword.addEventListener('blur',function() {
  checkPassword(6);
}, false);

function setup() {
  var textInput;
  textInput = document.getElementById('username');
  textInput.focus();
}

window.addEventListener('load',setup,false);
