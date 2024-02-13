/* document.addEventListener('contextmenu',function(e){e.preventDefault();e.stopPropagation();});
document.addEventListener('copy',function(e){e.preventDefault();e.stopPropagation();});
document.addEventListener('cut',function(e){e.preventDefault();e.stopPropagation();}); */


//Boton de aceptar o declinar cookies
const cookieBox = document.querySelector(".wrapper"),
buttons = document.querySelectorAll(".button");

const executeCodes = () => {
if (document.cookie.includes("codinglab")) return;
cookieBox.classList.add("show");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        cookieBox.classList.remove("show");

        if (button.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
        }
    });
});
};

//Se carga el codigo al cargar la pagina
window.addEventListener("load", executeCodes);


const showOnPx = 100;
const backToTopButton = document.querySelector(".back-to-top");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

const goToTop = () => {
  scrollContainer().scrollTo({ top: 0, behavior: "smooth" });
};

backToTopButton.addEventListener("click", goToTop);


