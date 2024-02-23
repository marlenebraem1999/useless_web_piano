let keys = document.querySelectorAll('.piano-keys');


keys.forEach(key => {
    key.addEventListener('click', (e) => playSound(e));
}
);

function playSound(e) {
    const clicked = e.target.dataset.list;
    console.log(clicked + " is clicked");
    //Sound toevoegen
    stopsounds();
    let Sound = document.querySelector("#"+clicked)
    Sound.play()
}

function stopsounds(e){
    document.querySelectorAll('audio').forEach(audio => {
        audio.pause();
        audio.currentTime = 0;
    });
}