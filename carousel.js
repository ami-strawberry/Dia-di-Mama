// purba usa const of let embes di var paso var sa causa hopi bugs for no reason
const main_carousel_container = document.getElementById("main-carousel-container");

// HEADING
const carousel_heading_div = document.createElement("div");
carousel_heading_div.className = "carousel-heading-div";
main_carousel_container.appendChild(carousel_heading_div);

const heading_h1 = document.createElement("h1");
heading_h1.className = "heading-h1";
heading_h1.textContent = "Nos Mami stima";
carousel_heading_div.appendChild(heading_h1);

const home_btn = document.createElement("a");
home_btn.className = "home-btn";
home_btn.href = "menu.html";
home_btn.innerHTML = `<i class="fa fa-home fa-2x" style="color: #575366;"></i>`;
carousel_heading_div.appendChild(home_btn);

// MAIN
let carousel_div = document.createElement("div");
carousel_div.className = "carousel-div";
main_carousel_container.appendChild(carousel_div);


//load the images
const images = [];
for (let j = 0; j <= 31; j++) {
    const img = `images/carousel_imgs/carousel_img${j}.jpeg`;
    images.push(img);
}

for (let i = 0; i < images.length; i++) {
    const img = document.createElement("img");
    img.className = `carousel-img img-${i}`;
    img.src = images[i];
    img.alt = "test image";
    img.title = "image " + i;
    carousel_div.appendChild(img);
}

// buttons
const controls = document.createElement("div");
controls.className = "carousel-controls";

const prevBtn = document.createElement("button");
prevBtn.className = "carousel-btn";
prevBtn.innerHTML = "&#8249;";

const nextBtn = document.createElement("button");
nextBtn.className = "carousel-btn";
nextBtn.innerHTML = "&#8250;";

controls.appendChild(prevBtn);
controls.appendChild(nextBtn);
main_carousel_container.appendChild(controls);

const total = images.length;
let currentIndex = 1
let animating = false

function idx(offset) {
    return (currentIndex + offset + total) % total;
}

function getImg(offset) {
    return document.querySelector(".img-" + idx(offset));
}

function clearClasses(el) {
    el.classList.remove(
        "to_prev", "to_current", "to_next", "to_stapel", "to_hidden",
        "to_stapel_right", "to_prev_from_stapel", "to_current_from_left", "to_next_from_stapel"
    );
}

// next button
function goNext() {
    if (animating) return;
    animating = true;

    var stapel  = getImg(-1);
    var prev    = getImg(0);
    var current = getImg(1);
    var next    = getImg(2);

    clearClasses(stapel);
    clearClasses(prev);
    clearClasses(current);
    clearClasses(next);

    void stapel.offsetWidth;

    stapel.classList.add("to_stapel");
    prev.classList.add("to_prev");
    current.classList.add("to_current");
    next.classList.add("to_next");

    currentIndex = idx(1);

    setTimeout(function () { animating = false; }, 650);
}

// prev button
function goPrev() {
    if (animating) return;
    animating = true;

    var hidden  = getImg(1);
    var next    = getImg(0);
    var current = getImg(-1);
    var prev    = getImg(-2); 

    clearClasses(hidden);
    clearClasses(next);
    clearClasses(current);
    clearClasses(prev);

    void hidden.offsetWidth;

    hidden.classList.add("to_stapel_right");
    next.classList.add("to_prev_from_stapel");
    current.classList.add("to_current_from_left");
    prev.classList.add("to_next_from_stapel");

    currentIndex = idx(-1);

    setTimeout(function () { animating = false; }, 650);
}

nextBtn.addEventListener("click", goNext);
prevBtn.addEventListener("click", goPrev);




// // const images = document.querySelectorAll('[class^="img-"]');

// // images.forEach(img => {
// //   img.classList.remove("to_prev", "to_current", "to_next");
// // });

// var prevImg = document.querySelector('.img-0');
// prevImg.classList.remove("to_prev", "to_current", "to_next");

// var currentImg = document.querySelector('.img-1');
// currentImg.classList.remove("to_prev", "to_current", "to_next");

// var nextImg = document.querySelector('.img-2');
// nextImg.classList.remove("to_prev", "to_current", "to_next");

// var stapelImg = document.querySelector('.img-3');
// stapelImg.classList.remove("to_prev", "to_current", "to_next");

// var stapelImg2 = document.querySelector('.img-4');
// stapelImg2.classList.remove("to_prev", "to_current", "to_next");

// nextImg.addEventListener('click', () => {
//     //si bo comment out un di e 3 prome nan ki bo ta wak cu e img no ta overlap otro perfectly den e animation
//     prevImg.classList.add("to_stapel");
//     currentImg.classList.add("to_prev");
//     nextImg.classList.add("to_current");
//     stapelImg.classList.add("to_next");
    
//     //prev | current | next
//     //next mester translate na current 
//     //currrent mester translate na prev
//     //prev mester translate tras di current(den stapel)
//     //if img-n > 7 dan show img-0
// })