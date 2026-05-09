// script for the film page
// HEADING SECTION
const main_film_container = document.getElementById("main-film-container");

const heading_div = document.createElement("div");
heading_div.className = "heading-div";
main_film_container.appendChild(heading_div);

const heading_h1 = document.createElement("h1");
heading_h1.classList = "heading-h1";
heading_h1.textContent = "Tin asina hopi cu nos ta gusta di Mami, akibou tin un poco";
heading_div.appendChild(heading_h1);

const home_btn = document.createElement("a");
home_btn.className = "home-btn";
home_btn.href = "menu.html";
home_btn.innerHTML = `<i class="fa fa-home fa-2x" style="color: #575366;"></i>`;
heading_div.appendChild(home_btn);


// FILM SECTION
const film_section = document.createElement("div");
film_section.className = "film-section";
main_film_container.appendChild(film_section);

const film_image = "images/film.png";
// const images = [
//     "images/film.png", 
//     "images/film.png", 
//     "images/film.png", 
//     "images/film.png", 
//     "images/film.png", 
//     "images/film.png", 
//     "images/film.png", 
//     "images/film.png", 
// ]

const film_texts = [
    [
        "Mami ta cuida nos",
        "Mami semper tei pa nos ora mester",
        "Mami su cabey ta hopi bunita",
        "Mami ta come ijscream cu mi -Allegra",
        "Mami ta cushina dushii 😋",
        "Mami ta cumpra Fuze Tea pa mi -Allegra",
        "Mami ta zorg pa nos tin paña limpi pa bisti",
        "Mami ta compaña mi haci les anochi laat -Allegra",
    ],
    [
        "Mami ta cushina pa nos",
        "Mami ta laba paña pa nos",
        "Mami ta core auto pa nos",
        "E cas ta limpi pasobra Mami",
        "Mami ta cumpra cos pa nos",
        "Mami ta worry pa nos salud",
        "Mami tin un armband master -Seb",
        "Mami gusta te -Seb",
    ],
    [
        "Mami ta bunita",
        "Mami ta cariñoso",
        "Mami su smile ta bunita",
        "Mami ta cushina dushi",
        "Mami ta open pa try out new things",
        "Mi ta gusta conbersa cu Mami pa oras",
        "Mami semper tey pa nos",
        "Mami semper ta keiro cu nos",
    ],

]

// tres biaha pa e film-div
for (let x = 0; x < 3; x++) {

    //create row
    const film_div = document.createElement("div");
    film_div.className = "film-div film-div-" + x;
    film_section.appendChild(film_div);

    //dos biaha pa e film-group
    const film_group = document.createElement("div");
    film_group.className = "film-group";
    film_div.appendChild(film_group);

    //improved with an added item container pa e img y e text ta children di item
    for (let i = 0; i < film_texts[0].length; i++) {
        //container
        const film_item = document.createElement("div");
        film_item.className = "film-item";
        
        //text
        const film_text = document.createElement("div");
        film_text.className = `film-text text-${x}${i}`;
        film_text.textContent = film_texts[x][i];

        //img
        const img = document.createElement("img");
        img.className = `film-img img-${x}${i}`;
        // img.src = images[i];
        img.src = film_image;
        img.alt = "test image";
        img.title = "image " + x + i;
        img.title = `image ${x}-${i}`

        img.loading = 'lazy';
        img.decoding = 'async';

        //add tur cos na e row group container
        film_item.appendChild(film_text);
        film_item.appendChild(img);
        film_group.appendChild(film_item);
        
    }

    //enbes di dubbel e loop, haci e illusion cu e ta dubbel
    //pa better performance
    film_group.innerHTML += film_group.innerHTML;
}