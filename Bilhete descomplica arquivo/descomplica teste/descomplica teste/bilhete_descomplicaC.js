var elementosDuv = document.querySelectorAll('.duv')


elementosDuv.forEach(function(duv){
    duv.addEventListener('click', function(){
        duv.classList.toggle('ativa')
    })
    })


function menuShow() {
    let menuMonile = document.querySelector('.mobile-menu')
    if(menuMonile.classList.contains('open')) {
        menuMonile.classList.remove('open');
        document.querySelector('.icon').src 
    } else {
        menuMonile.classList.add('open')
    }
};

/*const controls = document.querySelectorAll('.controlI');
let currentItem = 0;
const items = document.querySelectorAll('.item');
const maxItems = items.length;

controls.forEach(control => {
    control.addEventListener('click', () => {
        const isLeft =
            control.classList.contains("aleft");
                if(isLeft){
                    currentItem -= 1;
                } else {
                    currentItem += 1;
                }

                if(currentItem >= maxItems){
                    currentItem = 0;
                }
                if ( currentItem < 0){
                    currentItem = maxItems - 1;
                }
                items.forEach((item) => 
                    item.classList.remove('current-item'));

                items[currentItem].scrollIntoView({
                    inline: "center", 
                 
                });
                items[currentItem].classList.add("current-item");
    });
}); */


const box = document.querySelector(".gallery");
const imge = document.querySelectorAll(".gallery img");

let contador = 0;

function slider() {
    contador ++;
    
    if (contador > imge.length -1){
        contador= 0;
    }

    box.style.transform = `translateX(${-contador *1155}px)`;
}

setInterval(slider, 2500) // executa uma função por determinada quantidade de tempo