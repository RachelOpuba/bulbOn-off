const btn = document.querySelector('.toggle-btn');
const bulbOn = document.querySelector('.bulbon');
const bulbOff = document.querySelector('.bulboff');
const body = document.querySelector('body')


btn.addEventListener('click', function(){
    bulbOn.classList.toggle('active');
    bulbOff.classList.toggle('bulboffactive');
    body.style.backgroundColor = 'black'
    
    
})
