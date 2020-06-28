const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.closeBtn');
const terms = document.querySelector('.terms');
const header = document.querySelector('.header');
header.addEventListener('click', () =>{
    window.location = 'http://www.knotsbyjulia.fi/index';
})
terms.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

function openModal(){
    console.log('click');
    document.querySelector('.modal').style.display = "grid";
}

function closeModal(){
    modal.style.display = "none";
}

function outsideClick(e){
    if(e.target == modal){
        modal.style.display = 'none';
    };  
}
