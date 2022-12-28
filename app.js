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

const erubyBtnElem = document.querySelector('.infoAbout__blank-eruby')
const erubySecretElem = document.querySelector('#eruby')
const erubyBorderElem = document.querySelector('.eruby__border')

erubyBtnElem.addEventListener('click', () => {
    erubySecretElem.classList.toggle('infoAbout__about-eruby-text')
    erubyBtnElem.classList.toggle('eruby__border')
})

const zulusBtnElem = document.querySelector('.infoAbout__blank-zulus')
const zulusSecretElem = document.querySelector('#zulus')

zulusBtnElem.addEventListener('click', () => {
    zulusSecretElem.classList.toggle('infoAbout__about-zulus-text')
})

const hidaBtnElem = document.querySelector('.infoAbout__blank-hida')
const hidaSecretElem = document.querySelector('#hida')

hidaBtnElem.addEventListener('click', () => {
    hidaSecretElem.classList.toggle('infoAbout__about-hida-text')
})

const stasBtnElem = document.querySelector('.infoAbout__blank-stas')
const stasSecretElem = document.querySelector('#stas')

stasBtnElem.addEventListener('click', () => {
    stasSecretElem.classList.toggle('infoAbout__about-stas-text')
})

const shadBtnElem = document.querySelector('.infoAbout__blank-shad')
const shadSecretElem = document.querySelector('#shad')

shadBtnElem.addEventListener('click', () => {
    shadSecretElem.classList.toggle('infoAbout__about-shad-text')
})

const nighBtnElem = document.querySelector('.infoAbout__blank-nigh')
const nighSecretElem = document.querySelector('#nigh')

nighBtnElem.addEventListener('click', () => {
    nighSecretElem.classList.toggle('infoAbout__about-nigh-text')
})

const bisBtnElem = document.querySelector('.infoAbout__blank-bis')
const bisSecretElem = document.querySelector('#bis')

bisBtnElem.addEventListener('click', () => {
    bisSecretElem.classList.toggle('infoAbout__about-bis-text')
})