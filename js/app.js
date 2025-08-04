const toogleBtn = document.getElementById("toogleBtn");
const hiddenBtn = document.getElementById("hiddenBar")
const bar = document.getElementById("bar");

toogleBtn.addEventListener('click', ()=> {
    bar.classList.toggle("visible");
})

