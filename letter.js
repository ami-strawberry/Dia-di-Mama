//script for the letter page
const main_letter_container = document.getElementById("main-letter-container");

const letter_h1 = document.createElement("h1");
letter_h1.className = "letter-h1";
letter_h1.textContent = "🎀Open Letter🎀";
main_letter_container.appendChild(letter_h1);

const envelop_div = document.createElement("div");
envelop_div.className = "envelop-div";
main_letter_container.appendChild(envelop_div);

const closed_envelop_img = document.createElement("img");
closed_envelop_img.className = "closed-envelop-img";
closed_envelop_img.src = "images/closed_envelop.png";
closed_envelop_img.alt = "closed envelop";
envelop_div.appendChild(closed_envelop_img);

const envelop_top = document.createElement("img");
envelop_top.className = "envelop-top hidden";
envelop_top.src = "images/envelop_top.png";
envelop_top.alt = "envelop top";
envelop_div.appendChild(envelop_top);

const envelop_card = document.createElement("img");
envelop_card.className = "envelop-card";
envelop_card.src = "images/envelop_card.png";
envelop_card.alt = "envelop card";
envelop_div.appendChild(envelop_card);

const envelop_bottom = document.createElement("img");
envelop_bottom.className = "envelop-bottom";
envelop_bottom.src = "images/envelop_bottom.png";
envelop_bottom.alt = "envelop bottom";
envelop_div.appendChild(envelop_bottom);

const bg_div = document.createElement("div");
bg_div.className = "bg-div";
envelop_div.appendChild(bg_div);



const envelop_overlay = document.createElement("div");
envelop_overlay.style.cssText = `
    position: absolute;
    inset: 0;
    z-index: 50;
    cursor: default;
    pointer-events: none;
`;
envelop_div.appendChild(envelop_overlay);

envelop_overlay.addEventListener("click", () => {
    letter_modal.classList.add("open");
});

// Letter
const letter_modal = document.createElement("div");
letter_modal.className = "letter-modal";
letter_modal.innerHTML = `
  <div class="letter-modal-card">
    <button class="letter-modal-close">✕</button>
    <div class="letter-modal-content">
      <p class="letter-salutation">To Mami</p>
      <p>Un feliz dia di mama pa e mihor mama den mundo. Mi ta stima mami hopi mes y ta hopi grateful cu mi tin mami como mi mama. Mi ta spera di semper por tene mami su man no matter con bieu mi bira. Danki pa tur cos cu mami a dunam y mi ta spera den futuro mi por duna mami mas bek.<br><br></p>
      <p>Happy Mother's day MAMI, esaki ta sebastian. Danki pa cuida mi pa 18 aña y worry pa mi salud. Spera mami haya un dushi dia di mama.<br><br></p>
      <p>Un feliz dia di Mama na nos Mami stima. Danki pa ta cuidanos full nos bida. Danki pa hiba nos tur caminda cu nos mester bay, zorg pa nos come, zorg cu nos ta yega scol na ora, puntra nos di nos dia, conbersa cu nos y hopi mas. Danki pa semper tey pa nos. Semper nos lo tey pa Mami. Spera Mami ta gusta e regalito aki cu nos a traha pa Mami. Nos ta stima Mami masha. Mi ta manda un abraso grandi for di Hulanda.</p>
      <p class="letter-sign-off">Mami su yiuchinan stima,<br><span>Allegra, Sebastian, Amelia</span></p>
    </div>
  </div>
`;
document.body.appendChild(letter_modal);

letter_modal.addEventListener("click", (e) => {
    if (e.target === letter_modal || e.target.closest(".letter-modal-close")) {
        letter_modal.classList.remove("open");
    }
});





//open me button
const open_btn = document.createElement("button");
open_btn.className = "open-btn";
open_btn.textContent = "Open me";
main_letter_container.appendChild(open_btn);



//test button
const read_btn = document.createElement("button");
read_btn.className = "open-btn";
read_btn.textContent = "Read";
read_btn.style.display = "none";
main_letter_container.appendChild(read_btn);

read_btn.addEventListener("click", () => {
    letter_modal.classList.add("open");
});



open_btn.addEventListener("click", () => {
    //baha e button
    open_btn.classList.add("pressed");

    //animation to add classes to the various envelope elements
    setTimeout(() => {
        envelop_top.classList.add("open");
        envelop_bottom.classList.add("show");
        envelop_card.classList.add("show");
    }, 600);  

    setTimeout(() => {
        envelop_top.classList.add("show");
    }, 700);

    setTimeout(() => {
        requestAnimationFrame(() => {
            envelop_card.classList.add("slide-up");
        });
    }, 1200);

    setTimeout(() => {
        read_btn.style.display = "block";
    }, 1800);

    setTimeout(() => {
        open_btn.style.display = "none";

        envelop_overlay.style.pointerEvents = "auto";
        envelop_overlay.style.cursor = "pointer";
    }, 1800);


});

const btn_div = document.createElement("div");
btn_div.className = "btn-div";
main_letter_container.appendChild(btn_div);

const home_btn = document.createElement("a");
home_btn.className = "home-btn";
home_btn.href = "menu.html";
home_btn.innerHTML = `<i class="fa fa-home fa-2x" style="color: #575366;"></i>`;
btn_div.appendChild(home_btn);
