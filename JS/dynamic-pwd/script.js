'use strict'
let pwdInput;
let pwdButton;

window.onload = function () {
    pwdInput = document.getElementById('pwd');
    pwdButton = document.getElementById('pwd-button')
}

function revealPwd() {
    if (pwdInput.type == 'password') {
        pwdInput.setAttribute('type', 'text')
        pwdButton.innerText = 'Cacher le mot de passe'
    }else {
        pwdInput.setAttribute('type', 'password')
        pwdButton.innerText = 'Montrer le mot de passe'
    }    

}