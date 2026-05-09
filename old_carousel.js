// script for the carousel page
var main_carousel_container = document.getElementById("main-carousel-container");

var heading_div = document.createElement("div");
heading_div.className = "heading-div";
// heading_div.textContent = "Us in photos";
heading_div.textContent = "photos";
main_carousel_container.appendChild(heading_div);

var carousel_div = document.createElement("div");
carousel_div.className = "carousel-div";
main_carousel_container.appendChild(carousel_div);

var images = [
    "images/test_image.jpg", 
    "images/test2.jpg", 
    "images/test3.jpg", 
    "images/test4.jpg",
    "images/test5.jpg", 
    "images/test6.jpg", 
    "images/stitchAngel.jpg", 
    "images/test5.jpg"
]

for (var j = 0; j < 2; j++) {

    var carousel_group = document.createElement("div");
    carousel_group.className = "carousel-group";
    carousel_div.appendChild(carousel_group);

    for (var i = 0; i < images.length; i++) {
        var img = document.createElement("img");
        img.className = `carousel-img img-${j}${i}`;
        img.src = images[i];
        img.alt = "test image";
        img.title = "image " + j + i;
        carousel_group.appendChild(img);
    }
}

var btn_div = document.createElement("div");
btn_div.className = "btn-div";
main_carousel_container.appendChild(btn_div);

var home_btn = document.createElement("a");
home_btn.className = "home-btn";
home_btn.href = "menu.html";
home_btn.innerHTML = `<i class="fa fa-home fa-2x" style="color: rgb(132, 66, 94);"></i>`;
btn_div.appendChild(home_btn);

// home_btn.addEventListener("click", btnFunction())

// function btnFunction() {
//     window.location.href = 'menu.html';
// }



// const images = document.querySelectorAll('[class^="img-"]');

// images.forEach(img => {
//   img.classList.remove("to_prev", "to_current", "to_next");
// });

// var prevImg = document.querySelector('.img-0');
// prevImg.classList.remove("to_prev", "to_current", "to_next");

// var currentImg = document.querySelector('.img-1');
// currentImg.classList.remove("to_prev", "to_current", "to_next");

// var nextImg = document.querySelector('.img-2');
// nextImg.classList.remove("to_prev", "to_current", "to_next");

// var stapelImg = document.querySelector('.img-3');
// stapelImg.classList.remove("to_prev", "to_current", "to_next");



// nextImg.addEventListener('click', () => {
    //si bo comment out un di e 3 prome nan ki bo ta wak cu e img no ta overlap otro perfectly den e animation
    // prevImg.classList.add("to_stapel");
    // currentImg.classList.add("to_prev");
    // nextImg.classList.add("to_current");
    // stapelImg.classList.add("to_next");
    
    //prev | current | next
    //next mester translate na current 
    //currrent mester translate na prev
    //prev mester translate tras di current(den stapel)
    //if img-n > 7 dan show img-0
// })

