const correctPassword  = "TrustNo1";
const buttonOk = document.querySelector('input[type="button"].button-ok');
const buttonCheckboxes = document.querySelectorAll('input[type="checkbox"].button-checkbox');
const buttonRanges = document.querySelectorAll('input[type="range"].button-range');
const buttonLaunch = document.querySelector('input[type="button"].launch');
let rocket = document.querySelector('.rocket');
let style = getComputedStyle(rocket);  


// Disabling the checkbuttons,levers and the launch button by default
function disable() {
  buttonCheckboxes.forEach(button => {
    button.setAttribute("disabled", "true");
  });
  buttonRanges.forEach(button => {
    button.setAttribute("disabled", "true");
  });  
  buttonLaunch.setAttribute("disabled", "true"); 
}

function relevant() {
  let checkedButtonCheckboxes = true;
  let checkedButtonRanges = true;
  for (let index = 0; index < buttonCheckboxes.length; index++) {
    const element = buttonCheckboxes[index];
    if(!element.checked){          
      checkedButtonCheckboxes = false;   
    }        
  } 
  for (let index = 0; index < buttonRanges.length; index++) {
    const element = buttonRanges[index];
    if(element.value < 100) {
      checkedButtonRanges = false;   
    }     
  }
  if(checkedButtonCheckboxes && checkedButtonRanges) {
    buttonLaunch.removeAttribute("disabled", "false");  
  } else {
    buttonLaunch.setAttribute("disabled", "true");
    buttonLaunch.classList.add("startRocket")
  }
}

// Enable the input  if the password is correct
function enable() {
  buttonCheckboxes.forEach(button => {
    button.removeAttribute("disabled", "false");
  });
  buttonRanges.forEach(button => {
    button.removeAttribute("disabled", "false");
  }); 
  
    buttonCheckboxes.forEach( button => {
      button.onchange = relevant;
    }); 
      buttonRanges.forEach( button => {       
      button.onchange = relevant;
    });  
}


// Checking password
function checkPassword() {
  let password = document.querySelector('.login').value;
  if(correctPassword === password){
    enable();   
  }  else {
    console.log("incorrect password");    
  } 
}

// Fly
function fly() {  
    rocket.classList.remove("rocket")
    rocket.classList.add("fly")
}

function unCheck() {
  buttonCheckboxes.forEach(button => {
    button.checked = false;
  });
  buttonRanges.forEach(button => {
    button.value = 50;
  });
  buttonLaunch.setAttribute("disabled", "true");
}

function control() {
  //console.log('START');
  disable();
  buttonOk.addEventListener('click', () => checkPassword()); 
  //enable();
  unCheck();
  buttonLaunch.addEventListener('click', () => fly());   
}

control();
