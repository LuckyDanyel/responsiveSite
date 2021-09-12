const headerInit = () => {
    let headerMenu = document.querySelector('.header__menu');
    let burgerMenu = document.querySelector('.header__burger-menu')
    

    const isOpen = (elem, nameClass) => elem.classList.contains(nameClass)

    const addClass = (elem, nameClass) => elem.classList.add(nameClass)

    const removeClass = (elem, nameClass) => elem.classList.remove(nameClass)

    Object.prototype.Open = function(nameClass) { 

        isOpen(this, nameClass) ? removeClass(this, nameClass) : addClass(this, nameClass)

    }

    burgerMenu.addEventListener('click', () => {
        headerMenu.Open("header__menu-open") // Открытие меню хеадер
        burgerMenu.Open("header__burger-end") // Добавление крестика
    });

}

window.onload = headerInit();