const modal = document.querySelector('#my-modal2');
const modalBtn = document.querySelector('#modal-btn2');
const closeBtn = document.querySelector('.close2');


// Events
modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);
vc.addEventListener('click', vc);

// Open
function openModal() {
  modal.style.display = 'block';
  
}


// Close
function closeModal() {
  modal.style.display = 'none';
  
}



// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}