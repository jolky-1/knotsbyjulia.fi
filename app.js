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


/*console.log('hello there')
const modal = document.querySelectorAll('.modal');
const closeBtn = document.querySelectorAll('.closeBtn');
const albums = document.querySelectorAll('.albums');
const termsbtn = document.querySelector('.btn-terms')
albums.forEach(albums => albums.addEventListener('click', openModal));
closeBtn.forEach(closeBtn => closeBtn.addEventListener('click', closeModal));
window.addEventListener('click', outsideClick);
termsbtn.addEventListener('click', openModalTerms);

function openModalTerms() {
    document.querySelector('.modal-terms').style.display = "grid";
}

function openModal(){
    if(this.classList.contains('modal-sisustus')){
        document.querySelector('.modal-henkilo').style.display = "grid";
    }
    if(this.classList.contains('albums-haat')){
        document.querySelector('.modal-haat').style.display = "grid";
    }
    if(this.classList.contains('albums-lapsi')){
        document.querySelector('.modal-lapsi').style.display = "grid";
    }
    if(this.classList.contains('albums-merkkipaiva')){
        document.querySelector('.modal-merkkipaiva').style.display = "grid";
    }           
}

function closeModal(){
    modal.forEach(modal =>modal.style.display = 'none');

}

function outsideClick(e){
    modal.forEach(modal => {
        if(e.target == modal){
            modal.style.display = 'none';
        }
    });  
}
*/