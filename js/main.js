document.addEventListener('DOMContentLoaded', () => {
    let mailBtn = document.querySelector('.btn-mail');
    let modal = document.querySelector('.contact-modal');

    mailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        document.querySelector('.main-wrapper.main').classList.add('dn');
    })

    let modalClose = document.querySelector('.contact-modal-close');

    modalClose.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.remove('active');
        document.querySelector('.main-wrapper.main').classList.remove('dn');
    })

    let form = document.querySelector('.form-alt');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        modal.classList.remove('active');
        document.querySelector('.main-wrapper.done').classList.remove('dn');
    })
})