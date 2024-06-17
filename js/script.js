const spectreArray = document.querySelectorAll(".spectre");
const lecteur1 = document.querySelector("#lecteur-1");
const lecteur2 = document.querySelector("#lecteur-2");
sonavis1 = new Audio('./assets/son/temoignage1.mp3');
sonavis1.volume = 1;


function moveSpectre(no){
    document.querySelectorAll(".audio-"+no+" .bar").forEach((bar)=>{
        bar.classList.add('animation');
    });
}

function stopSpectre(no){
    document.querySelectorAll(".audio-"+no+" .bar").forEach((bar)=>{
        bar.classList.remove('animation');
    });
}

lecteur1.addEventListener('click', ()=>{
    if(sonavis1.paused){
        moveSpectre(1);
        lecteur1.style.opacity = 0.5;
        sonavis1.currentTime = 1;
        sonavis1.play();
        setTimeout(()=>{
            sonavis1.pause();
            lecteur1.style.opacity = 1;
            stopSpectre(1);
        }, 31000);
    }
});

lecteur2.addEventListener('click', ()=>{
    if(sonavis1.paused){
        moveSpectre(2);
        lecteur2.style.opacity = 0.5;
        sonavis1.currentTime = 36;
        sonavis1.play();
        setTimeout(()=>{
            sonavis1.pause();
            lecteur2.style.opacity = 1;
            stopSpectre(2);
        }, 27000);
    }
});

spectreArray.forEach((spectre)=>{
    for(let i = 0; i < 40; i++){
        spectre.insertAdjacentHTML('beforeend', '<div class="bar"></div>');
    }
});
