const toogleBtn = document.getElementById("toogleBtn");
const bar = document.getElementById("bar");

toogleBtn.addEventListener('click', ()=> {
    bar.classList.toggle("visible");
})

