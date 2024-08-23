console.log('Server is running...');

let yr = new Date().getFullYear()
const Year = document.querySelector(".year").innerText = yr
let isVisible = false

const ToggleNavigation = () => {
    const Menu = document.querySelector("#nav")

    isVisible ? isVisible = false : isVisible = true
    isVisible ? Menu.style.display = "block" : Menu.style.display = ''
}
