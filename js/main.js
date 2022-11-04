document.addEventListener('DOMContentLoaded', () => {
    let mailBtn = document.querySelector('.btn-mail');
    let modal = document.querySelector('.modal-wrapper');

    mailBtn.addEventListener('click', (e) => {
        e.preventDefault();
        modal.classList.add('active');
        document.querySelector('.main-wrapper.first').classList.add('dn');
    })

    let modalClose = document.querySelector('.contact-modal-close');

    modal.addEventListener('click', (e) => {
        let target = e.target;
        if (target.closest('.contact-modal-close') || !target.closest('.contact-modal')) {
            modal.classList.remove('active');
            document.querySelector('.main-wrapper.first').classList.remove('dn');
        }
    })

    // let form = document.querySelector('.form-alt');

    // form.addEventListener('submit', (e) => {
    //     e.preventDefault();
    //     modal.classList.remove('active');
    //     document.querySelector('.main-wrapper.done').classList.remove('dn');
    // })
})