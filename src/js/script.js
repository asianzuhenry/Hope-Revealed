console.log('Server is running...');

let yr = new Date().getFullYear()

const Year = document.querySelector("#year")
if (Year) {
    Year.innerText = yr
}
let isVisible = false

const ToggleNavigation = () => {
    console.log("clcked");
    
    const Menu = document.querySelector(".navigation")

    isVisible ? isVisible = false : isVisible = true
    isVisible ? Menu.style.display = "block" : Menu.style.display = ''
}
