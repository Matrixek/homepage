
{
    const toggleBackground = () => {
        const bodyElement = document.querySelector(".body--js");
        const theNameElement = document.querySelector(".themeName--js");

        bodyElement.classList.toggle("body--background");
        theNameElement.innerText = bodyElement.classList.contains("body--background") ? "zielone" : "niebieskie";
    };

    const init = () => {

        const buttonElement = document.querySelector(".content__button--js");

        buttonElement.addEventListener("click", toggleBackground);
    };
    init();
}
