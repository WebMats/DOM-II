// Your code goes here

const imgList = document.querySelectorAll('.content-section img');

const toggleEnlarge = (event) => {
    event.target.classList.toggle('enlarge');
};

imgList.forEach(img => {
    img.addEventListener('mouseover', toggleEnlarge) // 1
    img.addEventListener('mouseout', toggleEnlarge) // 2
});


const signUpButtonList = document.querySelectorAll('.btn');

const backdrop = document.querySelector('.backdrop');
const form = document.querySelector('.form');

const toggleModalHandler = () => {
    backdrop.classList.toggle('show');
    form.classList.toggle('formshow')
}

signUpButtonList.forEach(button => {
    button.addEventListener('click', toggleModalHandler) // 3
})

backdrop.addEventListener('dblclick', toggleModalHandler) // 4


const linkList = document.querySelectorAll('.nav-link');

const changeColor = (e) => {
    linkList.forEach(navItem => {navItem.style.color = "black"});
    e.target.style.color = "#ffea00"
}

linkList.forEach(navItem => {
    navItem.addEventListener('mouseup', changeColor) // 5
    navItem.addEventListener('click', (e) => {e.preventDefault();})
})

const emailInput = document.querySelector('.email');

emailInput.addEventListener('blur', (e) => { // 6
    e.target.style.color = "red";
    e.target.style.backgroundColor = "yellow";
}) 

const greeting = document.querySelector('.greeting');
const nameInput = document.querySelector('.name');

const updateInput = (e) => {
    if (e.target.value.length === 0) {
        greeting.textContent = 'Hello';
        return;
    }
    greeting.textContent = `Hello: ${e.target.value}`
}

nameInput.addEventListener('keyup', updateInput) // 7

const box = document.querySelector('.box');
const html = document.querySelector('html');

html.addEventListener('mousemove', (e) => { // 8
    box.style.top = `${JSON.stringify(e.pageY + 10)}px`;
    box.style.left = `${JSON.stringify(e.clientX + 10)}px`;
});

const mainNav = document.querySelector('.main-navigation');
html.addEventListener('wheel', (e) => { // 9
    if (e.deltaY > 0) {
        mainNav.classList.remove('showNav');
        mainNav.classList.add('hideNav');
    } else if (e.deltaY < 0) {
        mainNav.classList.remove('hideNav');
        mainNav.classList.add('showNav');
    }
})


const destinationImg = document.querySelector('.content-destination img');
destinationImg.addEventListener('drag', () => {
    box.classList.add('rotate');
    setTimeout(() => {box.classList.remove('rotate')}, 1000);
})

const alertMobiles = (e) => {
    const limit = 845;
    if (e.target.innerWidth < limit) {
        html.style.backgroundColor = "red";
        alert("We are not mobile friendly :'(")
        window.removeEventListener('resize', alertMobiles);
    }
}

window.addEventListener('resize', alertMobiles); // 10



