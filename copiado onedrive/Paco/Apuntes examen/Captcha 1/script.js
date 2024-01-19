const captcha = document.querySelector(".captcha"),
recargar = document.querySelector(".reload-btn"),
inputField = document.querySelector(".input-area input"),
enviar = document.querySelector(".check-btn"),
texto = document.querySelector(".status-text");

let characteres = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O',
                     'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd',
                     'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
                     't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
function getCaptcha(){
  for (let i = 0; i < 6; i++) {
    let aleatorio = characteres[Math.floor(Math.random() * characteres.length)];
    captcha.innerText += ` ${aleatorio}`;
  }
}
getCaptcha();
recargar.addEventListener("click", ()=>{
  removeContent();
  getCaptcha();
});

enviar.addEventListener("click", e =>{
  e.preventDefault();
  texto.style.display = "block";
  let valor = inputField.value.split('').join(' ');
  if(valor == captcha.innerText){
    texto.style.color = "#4db2ec";
    texto.innerText = "Perfecto no eres un robot";
    setTimeout(()=>{
      removeContent();
      getCaptcha();
    }, 2000);
  }else{
    texto.style.color = "#ff0000";
    texto.innerText = "Error intentalo otra vez";
  }
});

function removeContent(){
 inputField.value = "";
 captcha.innerText = "";
 texto.style.display = "none";
}