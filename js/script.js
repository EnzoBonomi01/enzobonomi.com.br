/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close")

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener("click", () =>{
        navMenu.classList.add("show-menu")
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener("click", () =>{
        navMenu.classList.remove("show-menu")
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link")

function linkAction(){
    const navMenu = document.getElementById("nav-menu")
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove("show-menu")
}
navLink.forEach(n => n.addEventListener("click", linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById("header")
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add("scroll-header"); else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

/*=============== TRANSLATIONS ===============*/
const translations = {
    pt: {
        // Navigation
        "nav.home": "Início",
        "nav.experience": "Experiência",
        
        // Home
        "home.description": "Product Manager focado em estratégia, tech e IA. Crio conteúdo sobre produto, carreira e mercado, de forma realista pra quem prefere honestidade a fórmulas prontas. Também dou mentoria de inglês conversacional para profissionais da área de tech.",
        "home.download_cv": "Download CV",

        // Social Media
        "social_media.title": "Por onde estou",
        "social_media.subtitle": "Conecte-se comigo",
        "social_media.substack_desc": "Conteúdo aprofundado",
        "social_media.linkedin_desc": "Construindo em público",
        "social_media.twitter_x_desc": "Por sua conta e risco",
        "social_media.youtube_desc": "Papo mais próximo",

        // Experience
        "experience.title": "Experiência Profissional",

        // Footer
        "footer.copyright": "© 2025 Enzo Bonomi. Todos os direitos reservados."
    },
    en: {
        // Navigation
        "nav.home": "Home",
        "nav.experience": "Experience",

        // Home
        "home.description": "Product Manager focused on strategy, tech, and AI. I create content about product, career, and the market — realistic and honest, not based on generic formulas. I also offer conversational English mentoring for tech professionals.",
        "home.download_cv": "Download CV",

        // Social Media
        "social_media.title": "Where I am",
        "social_media.subtitle": "Connect with me",
        "social_media.substack_desc": "All my articles",
        "social_media.linkedin_desc": "Short posts and achievements",
        "social_media.twitter_x_desc": "At your own risk",
        "social_media.youtube_desc": "Informative + unfiltered",

        // Experience
        "experience.title": "Professional Experience",

        // Footer
        "footer.copyright": "© 2025 Enzo Bonomi. All rights reserved."
    }
};

const languageSelect = document.getElementById("language-select");
const applyTranslations = () => {
    const lang = languageSelect.value;
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
    // Update home.description separately as it's a paragraph
    document.querySelector(".home__description").textContent = translations[lang]["home.description"];
};

languageSelect.addEventListener("change", applyTranslations);

// Apply translations on page load
document.addEventListener("DOMContentLoaded", applyTranslations);

/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button")
const darkTheme = "dark-theme"
const iconTheme = "fas-sun"

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme")
const selectedIcon = localStorage.getItem("selected-icon")

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? "dark" : "light"
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? "fas fa-moon" : "fas fa-sun"

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](darkTheme)
  themeButton.classList[selectedIcon === "fas fa-moon" ? "add" : "remove"](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem("selected-theme", getCurrentTheme())
    localStorage.setItem("selected-icon", getCurrentIcon())
})

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]")

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute("id")

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.add("active-link")
        }else{
            document.querySelector(".nav__menu a[href*=" + sectionId + "]").classList.remove("active-link")
        }
    })
}
window.addEventListener("scroll", scrollActive)

/*=============== SHOW SCROLL UP ===============*/
function scrollUp(){
    const scrollUp = document.getElementById("scroll-up");
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add("show-scroll"); else scrollUp.classList.remove("show-scroll")
}
window.addEventListener("scroll", scrollUp)

/*=============== CV DOWNLOAD ===============*/
const downloadCvButton = document.getElementById("download-cv");

downloadCvButton.addEventListener("click", function(e) {
    e.preventDefault();
    
    const currentLang = languageSelect.value;
    let cvPath;
    
    if (currentLang === "en") {
        cvPath = "assets/documents/Enzo Bonomi Profile.pdf";
    } else {
        cvPath = "assets/documents/Enzo Bonomi Perfil.pdf";
    }
    
    // Create a temporary link element
    const link = document.createElement("a");
    link.href = cvPath;
    link.download = currentLang === "en" ? "Enzo_Bonomi_Profile.pdf" : "Enzo_Bonomi_Perfil.pdf";
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});

