const htmlTag = document.querySelector("html");



console.log(htmlTag.getAttribute("class"));

const lightModeLogic = () => {
    if (htmlTag.getAttribute("class") === "light") return
    else {
        htmlTag.classList.remove("dark");
        htmlTag.classList.add("light")
    }
}
const darkModeLogic = () => {
    if (htmlTag.getAttribute("class") === "dark") return
    else {
        htmlTag.classList.remove("light");
        htmlTag.classList.add("dark")
    }
}