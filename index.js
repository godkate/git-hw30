const categories = document.querySelector('.categories');

function addHide () {
    const goods = document.querySelectorAll('.cat-content');
    goods.forEach((content) => {
        content.classList.add('hide');
    });
}
categories.addEventListener('click', ({ target }) => {
        if (target.matches('a') && target.dataset.target) {
            const id = target.dataset.target;
            const cat = document.querySelector(`#${id}`);
            addHide();
            cat.classList.remove('hide');

        }
});




