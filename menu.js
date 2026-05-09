// script for menu page
// HEADER
const header = document.getElementById("menu-header");

const header_h1 = document.createElement("h1");
header_h1.className = "header-h1";
header_h1.innerHTML = "Happy Mother's Day!!";
header.appendChild(header_h1);

//center header
function centerHeader() {
    const rect = header_h1.getBoundingClientRect();
    header_h1.style.top = (window.innerHeight / 2 - rect.height / 2) + "px";
    header_h1.style.left = (window.innerWidth / 2 - rect.width / 2) + "px";
}

window.addEventListener("load", () => {
    centerHeader();
    confettiRain();
    
    setTimeout(() => {
        header_h1.classList.add("move-to-top");
        header.classList.add("shrink");
        header_p.style.visibility = "visible";
    }, 3000);
});
window.addEventListener("resize", centerHeader);

//page elements
const header_p = document.createElement("p");
header_p.className = "header-p";
header_p.innerHTML = `<span id="day">10</span>
                      <span id="month">mei</span>
                      <span id="year">2026</span>`;
header_p.style.visibility = "hidden";
header.appendChild(header_p);


// MAIN
const main_menu_container = document.getElementById("main-menu-container");

const content_section = document.createElement("section");
content_section.className = "content-section";
main_menu_container.appendChild(content_section);

const cards = [
    {
        id: 0, 
        imgPath: "images/carousel_imgs/carousel_img13.jpeg",
        imgAlt: "image0",
        btntext: "button0",
        btnLink: "letter.html",
    },
    {
        id: 1, 
        imgPath: "images/hearts.png",
        imgAlt: "image1",
        btntext: "button1",
        btnLink: "carousel.html",
    },
    {
        id: 2, 
        imgPath: "images/carousel_imgs/carousel_img1.jpeg",
        imgAlt: "image2",
        btntext: "button2",
        btnLink: "film.html",
    },
    // {
    //     id: 3, 
    //     imgPath: "images/test6.jpg",
    //     imgAlt: "image3",
    //     btntext: "button3",
    //     btnLink: "letter.html",
    // },
]


for (let i = 0; i < cards.length; i++) {
    //create img cards
    const menu_link = document.createElement("a");
    menu_link.href = cards[i].btnLink;
    content_section.appendChild(menu_link);

    const card_img = document.createElement("img");
    card_img.src = cards[i].imgPath;
    card_img.alt = cards[i].imgAlt;
    card_img.title = "Click me!";
    menu_link.appendChild(card_img);
}

//confetti animation
function confettiRain() {
    //e dato di awo plus 3 sec = e confetti ta bay core pa 3s
    let end = Date.now() + (3 * 1000);
    let colors = ['#253453', '#180501', '#b4729f'];

    function frame() {
        confetti({
            particleCount: 6, 
            angle: 5,
            spread: 150,
            origin: { x: -0.1 },
            colors: colors
        });
        confetti({
            particleCount: 6, 
            angle: 175,
            spread: 150,
            origin: { x: 1.1 },
            colors: colors
        });

        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }

    frame();
}


//happy anniversary text animation
//date
//4options buttons
