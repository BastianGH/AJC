'use strict' 

window.onload = function(){
  let square = document.getElementById('divTest');
  square.style['background-color']= 'green' 
  square.style.visibility = 'visible'
  
  let checkError = document.getElementById('checkPwdError');
  let checkSucces = document.getElementById('checkPwdSuccess');
  checkError.style.visibility = checkSucces.style.visibility = 'hidden'

  let checkpasswordInput = document.getElementById('checkPwd');

  checkpasswordInput.addEventListener('change', function(event) {
    let passwordInput = document.getElementById('pwd');
    let passwordinputValue = passwordInput.value;
    let checkpasswordInputValue = event.target.value;
    

    if(passwordinputValue!='') {
      if (passwordinputValue==checkpasswordInputValue) {
        checkpasswordInput.style['border'] = 'green 1px solid'
        checkError.style.visibility = 'hidden';
        checkSucces.style.visibility = 'visible';
      }else {
        checkpasswordInput.style['border'] = 'red 1.5px solid'
        checkError.style.visibility = 'visible';
        checkSucces.style.visibility = 'hidden'
      }
    }else {
      checkError.style.visibility = checkSucces.style.visibility = 'hidden'
      checkpasswordInput.style['border'] = passwordInput.style['border']
    }
  })
}

function changeVisibilityFunc() {
  let square = document.getElementById('divTest');
  let button = document.getElementById('display');

  if(square.style.visibility == 'visible') {
    square.style.visibility = 'hidden'
    button.innerHTML = 'Affiche l\'élément'
  }else {
    square.style.visibility = 'visible'
    button.innerHTML = 'Cache l\'élément'
  } 
}




