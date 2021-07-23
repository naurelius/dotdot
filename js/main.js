const burger = document.querySelector("#navToggle");
const menu = document.querySelector("#navMenu");
const navLinks = document.querySelectorAll(".navItem");
burger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
});
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (menu.classList.contains("hidden")) {
      menu.classList.remove("hidden");
    }
    menu.classList.add("hidden");
  });
});

function scrollTop() {
  const scrollTop = document.querySelector('#scrollTop')
  if (this.scrollY >= 560) {
    scrollTop.classList.remove('-bottom-1/4')
    scrollTop.classList.add('bottom-4')
  } else {
    scrollTop.classList.remove('bottom-4')
    scrollTop.classList.add('-bottom-1/4')
  }
}
window.addEventListener('scroll', scrollTop)

//scroll Header
function scrollHeader() {
  const nav = document.getElementById("navbar");

  if (this.scrollY >= 200) nav.classList.add("shadow-lg");
  else nav.classList.remove("shadow-lg");
}
window.addEventListener("scroll", scrollHeader);




//Dark theme
const darkToggle = document.getElementById("darkToggle");
const darkIcon = document.querySelector("#darkIcon");

const darkTheme = "dark";
const iconTheme = "bxs-sun";

const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

const getCurrentTheme = () => document.lastElementChild.getAttribute("data-theme");
const getCurrentIcon = () => {
  if (darkIcon.classList.contains("bxs-sun")) {
    return "bxs-sun";
  } else {
    return "bxs-moon";
  }
};

if (selectedTheme) {
  document.lastElementChild.setAttribute("data-theme", selectedTheme);
  if (selectedIcon === "bxs-moon") {
    darkIcon.classList.remove("bxs-sun");
    darkIcon.classList.add("bxs-moon");
  } else {
    darkIcon.classList.remove("bxs-moon");
    darkIcon.classList.add("bxs-sun");
  }
}

darkToggle.addEventListener("click", () => {
  if (document.lastElementChild.getAttribute("data-theme") === "emerald") {
    document.lastElementChild.setAttribute("data-theme", darkTheme);
    darkIcon.classList.remove("bxs-moon");
    darkIcon.classList.add("bxs-sun");

    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  } else {
    document.lastElementChild.setAttribute("data-theme", "emerald");
    darkIcon.classList.remove("bxs-sun");
    darkIcon.classList.add("bxs-moon");
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
  }
});


