
const words = [
    {
        text: "Hosting 24/7",
        color: "#486FD8"
    },
    {
        text: "Web Development",
        color: "#434045"
    },
    {
        text: "Números Virtuales",
        color: "#c73330"
    },
    {
        text: "Bots de Telegram",
        color: "#24A1DE"
    },
    {
        text: "Minecraft Servers",
        color: "#289d2e"
    },
    {
        text: "VPS Cloud",
        color: "#5865F2"
    },
    {
        text: "Bots de WhatsApp",
        color: "#25D366"
    }

];


const element = document.getElementById("animatedText");


let wordIndex = 0;
let charIndex = 0;
let deleting = false;


const typingSpeed = 85;
const deletingSpeed = 45;
const pauseTime = 1700;



function animateText(){

    const current = words[wordIndex];


    element.style.color = current.color;


    if(!deleting){

        element.textContent = current.text.substring(0,charIndex+1);

        charIndex++;


        if(charIndex === current.text.length){

            deleting = true;

            setTimeout(animateText,pauseTime);

            return;

        }


        setTimeout(animateText,typingSpeed);


    }else{


        element.textContent = current.text.substring(0,charIndex-1);

        charIndex--;


        if(charIndex === 0){


            deleting = false;


            wordIndex++;


            if(wordIndex >= words.length){

                wordIndex = 0;

            }


        }


        setTimeout(animateText,deletingSpeed);


    }

}


animateText();





/*==========================================
        MENU HAMBURGUESA MOVIL
==========================================*/


const menuToggle = document.getElementById("menuToggle");

const mobileMenu = document.getElementById("mobileMenu");



if(menuToggle && mobileMenu){


    menuToggle.addEventListener("click",()=>{


        mobileMenu.classList.toggle("active");


    });



    const links = mobileMenu.querySelectorAll("a");


    links.forEach(link=>{


        link.addEventListener("click",()=>{


            mobileMenu.classList.remove("active");


        });


    });


}

// =========================================
// CAMBIO DE IMAGEN AUTOMÁTICO EN EL HERO
// =========================================

document.addEventListener("DOMContentLoaded", () => {
    const heroImageElement = document.getElementById("heroMainImage");
    let isHero1 = true;

    setInterval(() => {
        // Inicia el desvanecimiento
        heroImageElement.classList.add("fade-out");

        setTimeout(() => {
            // Alterna la imagen conservando exactamente el mismo tamaño en pantalla
            if (isHero1) {
                heroImageElement.src = "hero2.png"; 
            } else {
                heroImageElement.src = "hero.png";
            }
            
            isHero1 = !isHero1;
            heroImageElement.classList.remove("fade-out");
        }, 500); // 500ms coincide con la duración de la transición CSS
        
    }, 5000); // Cambia cada 5 segundos
});
