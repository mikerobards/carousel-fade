const previous = document.getElementById("previous")
const next = document.getElementById("next")
const img = document.getElementById("img")
const imgs = [
    {
        src: "imgs/village.jpg",
        alt: "christmas village at night with snow and christmas tree"
    },
    {
        src: "imgs/present.jpg",
        alt: "white and gold wrapped present on white table with snowflake decorations"
    },
    {
        src: "imgs/doggies.jpg",
        alt: "small black dog and small beige dog looking out the window at snow next to Christmas wreath"
    },
    {
        src: "imgs/family.jpg",
        alt: "a family celebrating by a Christmas tree"
    },
    {
        src: "imgs/ornaments.jpg",
        alt: "a close up of ornaments on a Christmas tree"
    }
]

let imgNum = 0

for (let i = 0; i < imgs.length; i++) {
    if (i == 0) {
        img.innerHTML = `<img class="fade" id=${i} src=${imgs[i].src} alt=${imgs[i].alt} />`
    }

    img.innerHTML += `<img id=${i} src=${imgs[i].src} alt=${imgs[i].alt} />`
}

next.addEventListener("click", scrollNext)
previous.addEventListener("click", scrollPrev)

window.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") {
        scrollNext()
    }
    if (e.key === "ArrowLeft") {
        scrollPrev()
    }
    e.preventDefault()
})


function scrollNext() {
    let active = document.getElementById(imgNum)
    active.classList.remove("fade")
    imgNum++
    if (imgNum === imgs.length) {
        imgNum = 0
    }
    changeImg()
}

function scrollPrev() {
    let active = document.getElementById(imgNum)
    active.classList.remove("fade")
    imgNum--
    if (imgNum === -1) {
        imgNum = imgs.length - 1
    }
    changeImg()
}

function changeImg() {
    let active = document.getElementById(imgNum)
    active.classList.add("fade")
    console.log(active)
}


// Task:
// - Wire up the buttons to switch through the images in the imgs array. 
// - Make sure that the gallery works no matter how many images are added.
// - Decide/implement what to do when you reach either end of the array - do nothing and disable buttons, loop back round to the other end, or something else?
// - Remember to also update the alt tags.

// Stretch goals:
// - Add transitions for a smooth effect.
// - Allow the user to zoom in and out of the images.