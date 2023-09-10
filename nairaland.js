var icon = document.querySelector('.modalck');
var modalBg = document.querySelector('.modal-bg');
var close = document.querySelector('.close');

icon.addEventListener('click', function(){
    modalBg.classList.add('bg-active');
});  

close.addEventListener('click', function(){
    modalBg.classList.remove('bg-active');
});

