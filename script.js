var button = document.querySelector("#hamburger")

button.addEventListener('click', (e) => {
    const pageNavigation = document.querySelector('.page-navigation');
    pageNavigation.classList.toggle('page-navigation--visible');
    const menuButton = document.querySelector('.menu-button');
    menuButton.classList.toggle('menu-button--active');
});

var concerts = document.querySelector("#concerts")

concerts.addEventListener('click', (e) => {
    if(e.target.classList.contains("button")){
        e.target.replaceWith("Have fun!");
    }
});

const buttonContact = document.querySelector(".contact__form");

buttonContact.addEventListener('submit', (e) =>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData);
    console.log(formObject);

});
