
// importing functions
import animateText from "./animation.js";


// -------------- nav bar section --------------- //
let nav = document.querySelector(".nav");
let hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", event => {
    hamburger.classList.toggle("active");
    nav.classList.toggle("active");
});

// -------------- end of nav bar section --------------- //

// -------------- hero section --------------- //
// html vars
const hero = document.querySelector(".hero");
const [toggle1, toggle2, toggle3] = document.querySelectorAll(".background-toggler div");

let backgroundTogglers = [
    {
        id: 0,
        target: toggle1,
        img: "/images/showcase/show-case-1.PNG",
        active: false,
    },
    {
        id: 1,
        target: toggle2,
        img: "/images/showcase/show-case-2.PNG",
        active: false,
    },
    {
        id: 2,
        target: toggle3,
        img: "/images/showcase/show-case-3.PNG",
        active: false,
    },
];

function clickToggler() {
    backgroundTogglers.map(bt => {
        bt.target.addEventListener('click', event => {
            removeHeroActive();
            bt.target.classList.add("active");
            timerCount = bt.id;
        });
    });
}

function removeHeroActive() {
    backgroundTogglers.forEach(bt => {
        if (bt.target.classList.contains("active")) {
            bt.target.classList.remove("active");
        }
        return;
    });
}


let heroImagesData = [
    "/images/showcase/show-case-1.PNG",
    "/images/showcase/show-case-2.PNG",
    "/images/showcase/show-case-3.PNG",
];

let heroImages = heroImagesData.map((hid, index) => ({id: index, src: hid, active: false}));
let timer = setInterval(start, 3000);
let timerCount = 2;

function start() {
    if (timerCount == heroImages.length) {
        timerCount = 0;
    }

    removeHeroActive();

    backgroundTogglers.map(bt => {
        if (bt.id == timerCount) {
            hero.style.backgroundImage = `url(${bt.img})`;
            bt.target.classList.add("active");
        }
    });
    timerCount ++;
    
}

function stop() {
    clearInterval(timer);
    timer = null;
}

clickToggler();

// hero text animations //
let heroTitle = document.querySelector(".hero-title");
let heroTitleText = document.querySelector(".hero-title-text");
let heroTitleHighlight = document.querySelector(".hero-title-highlight");
let heroTitleAbout = document.querySelector(".hero-title-about");



// animation functions
// animateText(heroTitleText, "I am ")
animateText(heroTitleHighlight, "Adebimpe Adetomiwa ")
// .then(() => animateText(heroTitleHighlight, "Adebimpe Adetomiwa "))
.then(() => {
    document.querySelector(".hero-title-about").classList.add("active");
})




// IT IS ALL ABOUT DATA //
// -------------- end of hero section --------------- //


// -------------- projects selection --------------- //
// const projects = document.querySelectorAll(".project");

// projects.forEach(project => {
//     project.addEventListener("click", event => {
//         console.log(project.ELEMENT_NODE);
//     });
// });

// let images = [...document.querySelectorAll(".rp-footer-wrapper img")];

// let imagesSource = images.map((image, index) => ({id: index, src: image.src}));

// console.log(imagesSource);

let rpImages = document.querySelectorAll(".rp-footer img");
// const [leftButton, rightButton] = document.querySelectorAll(".rp-buttons");
let rpFooter = document.querySelector(".rp-footer");

let currentImage = document.querySelector(".rpc-image");
let projectImages = setImageInfo();
let imageCount = 0;


function setCurrentImage() {
    const [image] = projectImages.filter(element => element.id == imageCount);


    currentImage.src = image.src;
    resetRpImages(image.target);

    
    // rpFooter.scrollLeft = rpFooter.scrollWidth;
}

setCurrentImage();

// buttons
// leftButton.addEventListener("click", event => {
//     if (!(imageCount <= 0)) {

//         imageCount --;
//         setCurrentImage();
//     }
// });

// rightButton.addEventListener("click", event => {
//     if (!(imageCount >= (rpImages.length - 1))) {

//         imageCount ++;
//         setCurrentImage();
//     }
// });

function setImageInfo() {
    let images = [...rpImages].map((image, element) => ({id: element, src: image.src, target: image}));
    return images;
}

// let projectImages = setImageInfo();



function resetRpImages(image) {
    rpImages.forEach(image => {
        if (image.classList.contains("active")) {
            image.classList.remove("active");
        }
    });

    image.classList.add("active");
}

rpImages.forEach(image => {
    // let initialImageSrc = currentImage.src;
    image.addEventListener("click", event => {
        resetRpImages(image);
        currentImage.src = image.src;
        let [getImage] = projectImages.filter(image => image.src == currentImage.src);
        imageCount = getImage.id;

        // initialImageSrc = image.src;
    });

    // image.addEventListener("mouseenter", event => {
    //     resetRpImages(image);
    //     currentImage.src = image.src;
    // });
    // image.addEventListener("mouseleave", event => {
    //     resetRpImages(image);
    //     currentImage.src = initialImageSrc;
    // });
});




const container = document.querySelector(".container");
const projects = document.querySelectorAll(".project");
const renderProject = document.querySelector(".render-project");
const cancelProject = document.querySelector(".cancel-project");

const html = document.querySelector("html");
// console.log(html);

projects.forEach(proeject => {
    proeject.addEventListener("click", event => {
        html.style.overflowY = "hidden";
        container.classList.add("project-active");
        renderProject.classList.add("active");
    });
});

cancelProject.addEventListener("click", event => {
    html.style.overflowY = "scroll";
    html.style.overflowX = "hidden";

    container.classList.remove("project-active");
    renderProject.classList.remove("active");
});



// -------------- end of projects selection --------------- //