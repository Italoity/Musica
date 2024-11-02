const menuBotao = document.getElementById("menu__btn");
const navLinks = document.getElementById("nav__links");
const menuBotaoIcon = menuBotao.querySelector("i");

menuBotao.addEventListener("click", (e) => {
    navLinks.classList.toggle("open");
    const abri = navLinks.classList.contains("open");
    menuBotaoIcon.setAttribute("class", abri ? "ri-close-line" : "ri-menu-line")
});

navLinks.addEventListener("click" , (e) => {
    navLinks.classList.remove("open");
    menuBotaoIcon.setAttribute("class","ri-menu-line");
})

const scroll = {
    distance:"50px",
    origin:"bottom",
    duration:1000,
};

ScrollReveal().reveal(".header__img img", {
    ...scroll,
    origin:"right",
});

ScrollReveal().reveal(".header__content h1", {
    ...scroll,
    delay:1000,
});

ScrollReveal().reveal(".header__content p", {
    ...scroll,
    delay:1500,
});

ScrollReveal().reveal(".header__btn" , {
    ...scroll,
    delay:2000,
});