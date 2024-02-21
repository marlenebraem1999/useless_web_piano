let keys = document.querySelectorAll('.piano-keys');

keys.forEach(key => {
    key.addEventListener('click', (e) => playSound(e));
}
);

function playSound(e) {
    const clicked = e.target.dataset.list;
    console.log(clicked + " is clicked");
    //Sound toevoegen
}