const navMenu = document.querySelector('#navMenu')
const buttonNav = document.querySelector('.buttonNav')
navMenu.addEventListener('click',e=>{
    buttonNav.classList.toggle("hideShow")
})
