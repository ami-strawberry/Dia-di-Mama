//main index.html script
const main_index_container = document.getElementById("main-index-container");

const main_section = document.createElement("section");
main_section.className = "main-section";
main_index_container.appendChild(main_section);

const section_h1 = document.createElement("h1");
section_h1.className = "section-h1";
section_h1.innerHTML = `
                <span>H</span>
                <span>O</span>
                <span>L</span>
                <span>A</span>
                <span>A</span>`;
main_section.appendChild(section_h1);

const section_p = document.createElement("p");
section_p.className = "section-p";
section_p.textContent = `Feliz dia di Mama cu hopi amor di Mami su yiuchinan. Mami kier wak kico mas tini?`;
main_section.appendChild(section_p);


const section_img = document.createElement("img");
section_img.className = "section-img";
section_img.src = "images/home_gif.gif";
section_img.alt = "Snoopy";
section_img.title = "Click yessss!!";
main_section.appendChild(section_img);

const btn_container = document.createElement("div");
btn_container.className = "btn-div";
main_index_container.appendChild(btn_container);

const yes_btn = document.createElement("a");
yes_btn.className = "yes-btn";
yes_btn.href = "menu.html";
yes_btn.innerHTML = `<div><span>YESSSS!!!</span></div>`;
btn_container.appendChild(yes_btn);

const no_btn = document.createElement("button");
no_btn.className = "no-btn";
no_btn.textContent = "no :(";
btn_container.appendChild(no_btn);


// events
no_btn.addEventListener("click", function() {
    let x = Math.floor(Math.random() * window.innerWidth -35);
    let y = Math.floor(Math.random() * window.innerHeight -18);
    if (x != (390 - no_btn.style.width)) {
        no_btn.style.left = x + "px";
        no_btn.style.top = y + "px";
    }
});

