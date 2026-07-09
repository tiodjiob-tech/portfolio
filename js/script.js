/*=================================================
                MENU RESPONSIVE
=================================================*/

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {

    nav.classList.toggle("active");

    if(nav.classList.contains("active")){

        menu.innerHTML = '<i class="fa-solid fa-xmark"></i>';

    }else{

        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';

    }

});


/*=================================================
        FERMER LE MENU AU CLIC
=================================================*/

document.querySelectorAll("nav a").forEach(link=>{

    link.addEventListener("click",()=>{

        nav.classList.remove("active");

        menu.innerHTML = '<i class="fa-solid fa-bars"></i>';

    });

});


/*=================================================
            NAVBAR AU SCROLL
=================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll",()=>{

    if(window.scrollY > 80){

        header.style.background = "rgba(8,17,31,.95)";
        header.style.boxShadow = "0 10px 25px rgba(0,0,0,.4)";

    }else{

        header.style.background = "rgba(8,17,31,.75)";
        header.style.boxShadow = "none";

    }

});


/*=================================================
        APPARITION AU SCROLL
=================================================*/

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.2
});

document.querySelectorAll(".card,.hero-left,.hero-right").forEach(el=>{

    el.classList.add("hidden");

    observer.observe(el);

});


/*=================================================
            COMPTEUR ANIME
=================================================*/

const counters = document.querySelectorAll(".card h2");

let started = false;

window.addEventListener("scroll",()=>{

    const stats = document.querySelector(".stats");

    if(!stats) return;

    const top = stats.offsetTop - 350;

    if(window.scrollY >= top && !started){

        started = true;

        counters.forEach(counter=>{

            const text = counter.innerText;

            const number = parseInt(text);

            const suffix = text.replace(number,"");

            let count = 0;

            const speed = Math.max(10, 2000 / number);

            const interval = setInterval(()=>{

                count++;

                counter.innerHTML = count + suffix;

                if(count >= number){

                    counter.innerHTML = number + suffix;
                    clearInterval(interval);

                }

            },speed);

        });

    }

});


/*=================================================
            BOUTON RETOUR HAUT
=================================================*/

const topBtn = document.createElement("div");

topBtn.className = "top-btn";

topBtn.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 500){

        topBtn.classList.add("active");

    }else{

        topBtn.classList.remove("active");

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/*=================================================
            EFFET PARALLAX
=================================================*/

window.addEventListener("mousemove",(e)=>{

    const photo = document.querySelector(".photo");

    if(!photo) return;

    let x = (window.innerWidth / 2 - e.pageX) / 40;

    let y = (window.innerHeight / 2 - e.pageY) / 40;

    photo.style.transform = `translate(${x}px,${y}px)`;

});


/*=================================================
        ANNEE AUTOMATIQUE
=================================================*/

const year = document.getElementById("year");

if(year){

    year.textContent = new Date().getFullYear();

}

/*=============================
        TYPING EFFECT
=============================*/

const texts = [

    "Développeur Full Stack",
    "Développeur PHP",
    "Développeur Python",
    "Développeur Django",
    "Développeur Front-End",
    "Étudiant en Informatique"

];

const typing = document.querySelector(".typing");

let textIndex = 0;
let charIndex = 0;
let deleting = false;

function type() {

    const current = texts[textIndex];

    if (!deleting) {

        typing.textContent = current.substring(0, charIndex++);

        if (charIndex > current.length) {

            deleting = true;

            setTimeout(type, 1800);

            return;

        }

    } else {

        typing.textContent = current.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            textIndex++;

            if (textIndex >= texts.length)
                textIndex = 0;

        }

    }

    setTimeout(type, deleting ? 50 : 100);

}

type();

/*=============================
        DARK / LIGHT MODE
=============================*/

const theme = document.getElementById("theme");
const icon = theme.querySelector("i");

theme.addEventListener("click",()=>{

    document.body.classList.toggle("light");

    if(document.body.classList.contains("light")){

        icon.className="fa-solid fa-sun";
        localStorage.setItem("theme","light");
    }else{
        icon.className="fa-solid fa-moon";
        localStorage.setItem("theme","dark");
    }

});




/*========================================
        MENU ACTIF AU SCROLL
========================================*/
/*=========================================
        MENU ACTIF AU SCROLL
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

function activeMenu(){

    let currentSection = "";

    const middle = window.scrollY + window.innerHeight / 2;

    sections.forEach(section => {

        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;

        if(middle >= top && middle < bottom){

            currentSection = section.id;

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + currentSection){

            link.classList.add("active");

        }

    });

}

window.addEventListener("scroll", activeMenu);

window.addEventListener("load", activeMenu);



/*==================================
        BARRES DE COMPÉTENCES
==================================*/

const skillSection = document.querySelector(".skills");

const progressBars = document.querySelectorAll(".progress-bar");

let animated = false;

window.addEventListener("scroll", () => {

    if(animated) return;

    const trigger = skillSection.offsetTop - window.innerHeight + 150;

    if(window.scrollY >= trigger){

        progressBars.forEach(bar => {

            bar.style.width = bar.dataset.width + "%";

        });

        animated = true;

    }

});

/*==========================================
            PROJECTS PREMIUM
==========================================*/

const projectCards = document.querySelectorAll(".project-card");

/*==============================
    APPARITION AU SCROLL
==============================*/

const observ = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

projectCards.forEach(card=>observ.observe(card));

/*==============================
    EFFET 3D + HALO
==============================*/

projectCards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        // Position du halo
        card.style.setProperty("--mouse-x", x + "px");
        card.style.setProperty("--mouse-y", y + "px");

        // Rotation
        const rotateY = ((x - rect.width/2) / rect.width) * 14;
        const rotateX = -((y - rect.height/2) / rect.height) * 14;

        card.style.transform = `
            perspective(1200px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)
            scale(1.02)
        `;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform = `
            perspective(1200px)
            rotateX(0deg)
            rotateY(0deg)
            translateY(0px)
            scale(1)
        `;

    });

});

/*==============================
    ANIMATION DES BADGES
==============================*/

const techs = document.querySelectorAll(".project-tech span");

techs.forEach(tag=>{

    tag.addEventListener("mouseenter",()=>{

        tag.style.transform="translateY(-4px) scale(1.08)";

    });

    tag.addEventListener("mouseleave",()=>{

        tag.style.transform="translateY(0) scale(1)";

    });

});

/*==============================
    ANIMATION DES BOUTONS
==============================*/

const buttons=document.querySelectorAll(".project-buttons a");

buttons.forEach(btn=>{

    btn.addEventListener("mouseenter",()=>{

        btn.style.transform="translateY(-4px)";

    });

    btn.addEventListener("mouseleave",()=>{

        btn.style.transform="translateY(0)";

    });

});

/*==============================
    PARALLAX IMAGE
==============================*/

const images=document.querySelectorAll(".project-image img");

images.forEach(img=>{

    img.setAttribute("draggable","false");

});

/*==============================
    CURSEUR
==============================*/

projectCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        document.body.style.cursor="pointer";

    });

    card.addEventListener("mouseleave",()=>{

        document.body.style.cursor="default";

    });

});

/*==============================
    LÉGER EFFET SUR LE TITRE
==============================*/

projectCards.forEach(card=>{

    const title=card.querySelector("h3");

    card.addEventListener("mouseenter",()=>{

        title.style.transform="translateX(8px)";

    });

    card.addEventListener("mouseleave",()=>{

        title.style.transform="translateX(0px)";

    });

});

/*==============================
    GLOW DU STATUS
==============================*/

const status=document.querySelectorAll(".status");

status.forEach(s=>{

    s.addEventListener("mouseenter",()=>{

        s.style.boxShadow="0 0 18px rgba(0,198,255,.45)";

    });

    s.addEventListener("mouseleave",()=>{

        s.style.boxShadow="none";

    });

});

/*==============================
    PRELOAD DES IMAGES
==============================*/

window.addEventListener("load",()=>{

    images.forEach(img=>{

        img.style.opacity="1";

    });

});

/*====================================================
            CONTACT FORM - EMAILJS
=====================================================*/

// Remplace ces valeurs
const PUBLIC_KEY = "ubmBfDkGBkLO1D02R";
const SERVICE_ID = "service_j887nci";
const TEMPLATE_ID = "template_x465zy6";

emailjs.init(PUBLIC_KEY);

const form = document.getElementById("contactForm");
const sendBtn = document.getElementById("sendBtn");
const statusBox = document.getElementById("message-status");

const nameInput = form.querySelector("input[name='name']");
const emailInput = form.querySelector("input[name='email']");
const subjectInput = form.querySelector("input[name='subject']");
const messageInput = form.querySelector("textarea[name='message']");

function showMessage(message,color){

    statusBox.style.display="block";
    statusBox.style.background=color;
    statusBox.style.color="#fff";
    statusBox.innerHTML=message;

    setTimeout(()=>{

        statusBox.style.display="none";

    },5000);

}

function validateEmail(email){

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

}

function validateForm(){

    if(nameInput.value.trim().length<3){

        showMessage("Le nom est trop court.","#e74c3c");
        nameInput.focus();
        return false;

    }

    if(!validateEmail(emailInput.value.trim())){

        showMessage("Adresse email invalide.","#e74c3c");
        emailInput.focus();
        return false;

    }

    if(subjectInput.value.trim().length<3){

        showMessage("Veuillez saisir un sujet.","#e74c3c");
        subjectInput.focus();
        return false;

    }

    if(messageInput.value.trim().length<10){

        showMessage("Le message est trop court.","#e74c3c");
        messageInput.focus();
        return false;

    }

    return true;

}

form.addEventListener("submit",function(e){

    e.preventDefault();

    if(!validateForm()) return;

    sendBtn.disabled=true;

    sendBtn.innerHTML=
    `<i class="fa-solid fa-spinner fa-spin"></i> Envoi en cours...`;

    emailjs.sendForm(

        SERVICE_ID,

        TEMPLATE_ID,

        this

    )

    .then(()=>{

        sendBtn.innerHTML=
        `<i class="fa-solid fa-circle-check"></i> Message envoyé`;

        sendBtn.style.background="#16a34a";

        showMessage(

            "Votre message a été envoyé avec succès ✔",

            "#16a34a"

        );

        form.reset();

        setTimeout(()=>{

            sendBtn.disabled=false;

            sendBtn.innerHTML=
            `<i class="fa-solid fa-paper-plane"></i> Envoyer le message`;

            sendBtn.style.background="";

        },2500);

    })

    .catch((error) => {

    console.log(error);

    console.log(error.text);

    console.log(error.status);

});

});


/*====================================================
        ANIMATION DES CHAMPS
=====================================================*/

const fields=document.querySelectorAll(".input-box input,.input-box textarea");

fields.forEach(field=>{

    field.addEventListener("focus",()=>{

        field.parentElement.style.transform="translateY(-4px)";

    });

    field.addEventListener("blur",()=>{

        field.parentElement.style.transform="translateY(0)";

    });

});


/*====================================================
        HALO LUMINEUX
=====================================================*/

const contactForm=document.querySelector(".contact-form");

contactForm.addEventListener("mousemove",(e)=>{

    const rect=contactForm.getBoundingClientRect();

    contactForm.style.setProperty(

        "--x",

        `${e.clientX-rect.left}px`

    );

    contactForm.style.setProperty(

        "--y",

        `${e.clientY-rect.top}px`

    );

});


/*====================================================
        APPARITION AU SCROLL
=====================================================*/

const obser=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

},{
    threshold:.2
});

obser.observe(document.querySelector(".contact-info"));

obser.observe(document.querySelector(".contact-form"));

obser.observe(document.querySelector(".map-container"));
