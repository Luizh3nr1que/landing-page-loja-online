const menuIcon = document.querySelector('.menuIcon');
const menuContainer = document.querySelector('.menuContainer');

menuIcon.addEventListener('click', () => {
    menuContainer.classList.remove('animationCloseMenu');
    menuContainer.classList.add('animationOpenMenu');
    menuContainer.style.display = "block";
})

const menuCloseIcon = document.querySelector('.fecharMenu');

menuCloseIcon.addEventListener('click', () => {
    menuContainer.classList.remove('animationOpenMenu');
    menuContainer.classList.add('animationCloseMenu');
    setTimeout(() => {
        menuContainer.style.display = "none"
    }, 200)
})