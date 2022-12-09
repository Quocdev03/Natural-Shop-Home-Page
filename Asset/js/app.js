const toggle = document.querySelector(".navbartoggle")
const navBar = document.querySelector(".navbar-list")

toggle.addEventListener("click", () => {
    toggle.classList.toggle("active")
    navBar.classList.toggle("active")
})