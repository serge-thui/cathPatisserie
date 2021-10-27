/* js du carousel */
const slider = document.querySelector('.items');
const slides = slider.querySelectorAll('.item');
const nbSlide = slides.length;

const button = document.querySelectorAll(".button");
console.log(slides);

let current = 0;
let prev = 4;
let next = 1;

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => i == 0 ? gotoPrev() : gotoNext());
}



const gotoPrev = () => current > 0 ? gotoNum(current - 1) : gotoNum(nbSlide-1);

const gotoNext = () => current < 4 ? gotoNum(current + 1) : gotoNum(0);

const gotoNum = number => {
    current = number;
    prev = current -1 ;
    next = current +1 ;

    

    for (let i=0; i < nbSlide; i++){
        slides[i].classList.remove("active");
        slides[i].classList.remove("prev");
        slides[i].classList.remove("next");
    }

    if (next == 5) {
        next = 0;
    }

    if (prev == -1) {
        prev = 4;
    }

    slides[current].classList.add("active");
    slides[prev].classList.add("prev");
    slides[next].classList.add("next");
}

/* js de la map*/
function init(){
    const val = {
        lati: 50.359,
        lng: 3.524
    }

    const zoomlevel = 10 ;

    const map = L.map('mapid').setView([val.lati, val.lng], zoomlevel);

    

    const mainLayer = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
        attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: 'mapbox/streets-v11',
        tileSize: 512,
        zoomOffset: -1,
        accessToken: 'pk.eyJ1IjoiZHJhZ29zZXIiLCJhIjoiY2t2ODYzZWxtMXgzNzJ1czMwYjQzb3QzYSJ9.mpL153S2L-ReRzS-G2zk1g'
    });

    const boutique1 = L.marker([50.4581196,3.3524416],{title: 'boutique1'});
    boutique1.addTo(map);
    boutique1.bindPopup("This is my house").openPopup();

    const boutique2 = L.marker([50.6241256,3.0568954],{title: 'boutique2'});
    boutique2.addTo(map);
    boutique2.bindPopup("Simplon<br>Lille").openPopup();

    const boutique3 = L.marker([50.3664744,3.5265802], {title: 'boutique3'});
    boutique3.addTo(map);
    boutique3.bindPopup("Citroën<br>Valenciennes").openPopup();
    
    mainLayer.addTo(map);
}