document.addEventListener('DOMContentLoaded', () => {
    let mailBtn = document.querySelector('.btn-mail');
    let modal = document.querySelector('.contact-modal');

    mailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
    })

    let modalClose = document.querySelector('.contact-modal-close');


    modalClose.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('active');
    })
})