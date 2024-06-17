const aidLoader = document.querySelector(".aid-loader");
const blood1 = document.querySelector("#blood-1");
const blood2 = document.querySelector("#blood-2");
const confirmPanel = document.querySelector(".confirm-sound-container");
const btnConfirm = document.querySelector("#btn-confirm-sound");
const btnUnconfirm = document.querySelector("#btn-unconfirm-sound");
//
knifeSlice = new Audio('./assets/son/knife-slice.mp3');
sheepBleating = new Audio('./assets/son/sheep-bleating.mp3');
sheepBleating.volume = 0.6;
slashKut1 = new Audio('./assets/son/slashkut.mp3');
slashKut2 = new Audio('./assets/son/slashkut.mp3');
putSound = true;

btnConfirm.addEventListener('click', ()=>{
    continueloader();
    putSound = false;
    playLoader();
});

btnUnconfirm.addEventListener('click', ()=>{
    continueloader();
    playLoader();
});

function continueloader(){
    confirmPanel.style.display = 'none';
    aidLoader.classList.remove('hidden');
}

function playLoader(){
    if(putSound)
        sheepBleating.play();
    
    setTimeout(()=>{
        if(putSound)
            sheepBleating.pause()

        blood1.classList.remove("hidden");
        
        if(putSound)
            slashKut1.play();
        
        setTimeout(()=>{
            blood1.src = './assets/png/blood.png';
            blood2.classList.remove("hidden");
            
            if(putSound)
                slashKut2.play();
            
            setTimeout(()=>{ 
                blood2.src = './assets/png/blood.png';
                setTimeout(()=>{
                    aidLoader.classList.add("bye-bye");
                    document.querySelector("body").classList.remove("overyhidden");
                }, 500);
            }, 400);

        }, 400);

    }, 8000);
}
