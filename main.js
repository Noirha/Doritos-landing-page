let span = document.querySelector(".fa-xmark");
let input = document.querySelector("input");

input.addEventListener("keyup", (eo) => {
    if (input.value == "") {
        span.style.visibility = " hidden";
    } else {
        span.style.visibility = "visible";
    }
})

span.addEventListener("click", (eo) => {
    input.value = "";
    span.style.visibility = "hidden"
})



let img = document.querySelector(".doritos");
let h1 = document.querySelector("h1");
let p = document.querySelector(".lor");


let boxOne = document.querySelector(".box1");

boxOne.addEventListener("click", (eo) => {
    img.src = "imges/nacho_cheese.webp";
    h1.innerHTML = "nacho cheese";
    p.innerHTML = "Savory nacho cheese meets crunchy tortilla chip in this crazy delicious snack 110% awesome."
    img.style.animation = "move1 1s 0.1s linear alternate";
})


let boxTwo = document.querySelector(".box2");

boxTwo.addEventListener("click", (eo) => {
    img.src = "imges/cool_ranch.webp";
    h1.innerHTML = "cool ranch"
    p.innerHTML = "No seasoning has ever reigned down a cool factor quite like these zesty, crunchy tortilla chips."
    img.style.animation = "move2 1s 0.1s linear alternate ";
})

let boxThree = document.querySelector(".box3");

boxThree.addEventListener("click", (eo) => {
    img.src = "imges/spicy_sweet_chili.webp";
    h1.innerHTML = "sweet chilli";
    p.innerHTML = "This isn’t just a chip it’s fuel for disruption __ our flavors ignite adventure and inspire action."
    img.style.animation = "move3 1s 0.1s linear alternate ";

})

let button1 = document.querySelectorAll(".mins");
let inp = document.querySelector(".va")
button1.forEach(item => {
    item.addEventListener('click', (eo) => {
        inp.value--

    })
})

let button2 = document.querySelectorAll(".plus")

button2.forEach(item => {
    item.addEventListener('click', (eo) => {
        inp.value++
    })
})
















