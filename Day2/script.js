const img = document.querySelector('#img');
const title = document.querySelector('#title');
const btnYes = document.querySelector('#btnYes');
const btnNo = document.querySelector('#btnNo');
let catHappy = new Audio("./assets/happy-happy-happy-cat.mp3");
let catCry = new Audio("./assets/crying-cat.mp3");
btnYes.addEventListener('click',()=>{
    img.src = "https://media.tenor.com/lCKwsD2OW1kAAAAi/happy-cat-happy-happy-cat.gif";
    title.innerHTML = "I love you too!❤️❤️";
    catCry.pause();
    catHappy.play();
    catHappy.loop = true;
});

let btnYesScale = 1;
let btnNoScale = 1;

btnNo.addEventListener('click', ()=>{
    img.src = "https://media.tenor.com/UNaQFutfOF0AAAAi/banana-crying-cat.gif";
    title.innerHTML = "oh, no please love me! 🥺";
    catHappy.pause();
    catCry.play();
    catCry.loop = true;
    btnYesScale += 0.1;
    btnNoScale -= 0.1;
    btnYes.style.transform = `scale(${btnYesScale})`;
    btnNo.style.transform = `scale(${btnNoScale})`;
});

