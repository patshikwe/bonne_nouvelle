
function news() {
    const perso = document.querySelector("#perso")
    const thought1 = document.querySelector("#thought1")
    const laptop = document.querySelector("#laptop")
    const laptopText = document.querySelector("#laptop-text")
    const paraph1 = document.querySelector("#paraph1")
    const paraph2 = document.querySelector("#paraph2")
    const speech1 = document.querySelector("#speech1")
    const speech2 = document.querySelector("#speech2")
    const end = document.querySelector("#end")
    
    // Le clique sur le personnage déclenche la succession des événements
    perso.onclick = () => {
        thought1.classList.remove("dspl-none")

        setTimeout(() => {
            laptop.classList.remove("dspl-none")
            laptopText.classList.remove("dspl-none")
        }, 4000)

        setTimeout(() => {
            paraph1.classList.add("dspl-none")
            paraph2.classList.remove("dspl-none")
        }, 13000)

        setTimeout(() => {
            thought1.classList.add("dspl-none")
        }, 16500)

        setTimeout(() => {
            speech1.classList.remove("dspl-none")
        }, 18500)

        setTimeout(() => {
            speech2.classList.remove("dspl-none")
        }, 24000)

        setTimeout(() => {
            speech1.classList.add("dspl-none")
            speech2.classList.add("dspl-none")
            end.classList.remove("dspl-none")
        }, 29000)
    }
}



/* ###################################################################### */
function init() {
    news()
}