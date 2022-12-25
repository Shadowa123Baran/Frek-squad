const tetraBtnElem = document.querySelector('.infoAbout__blank-tetra')
const tetraSecretElem = document.querySelector('#tetra')

tetraBtnElem.addEventListener('click', () => {
    tetraSecretElem.classList.toggle('infoAbout__about-tetra-text')
})

const sazaBtnElem = document.querySelector('.infoAbout__blank-saza')
const sazaSecretElem = document.querySelector('#saza')

sazaBtnElem.addEventListener('click', () => {
    sazaSecretElem.classList.toggle('infoAbout__about-saza-text')
})

const utkaBtnElem = document.querySelector('.infoAbout__blank-utka')
const utkaSecretElem = document.querySelector('#utka')

utkaBtnElem.addEventListener('click', () => {
    utkaSecretElem.classList.toggle('infoAbout__about-utka-text')
})