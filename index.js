const categories = document.querySelector('.categories');
const listOfGoods = document.querySelector('.cat-content');
const modal = document.querySelector('.modal__window');
const buy = document.querySelectorAll('.button');
const ok = document.querySelector('.sold');

function addHideCategory () {
    const goods = document.querySelectorAll('.cat-content');
    goods.forEach((content) => {
        content.classList.add('hide');
    });
}

function addHideProduct () {
    const products = document.querySelectorAll('.product');
    products.forEach((prod) => {
        prod.classList.add('hide');
    });
}

categories.addEventListener('click', ({ target }) => {
        if (target.matches('a') && target.dataset.target) {
            const id = target.dataset.target;
            const cat = document.querySelector(`#${id}`);
            addHideCategory();
            addHideProduct();
            cat.classList.remove('hide');
        }
});

listOfGoods.addEventListener('click', ({ target }) => {
    if (target.matches('a') && target.dataset.target) {
        const id = target.dataset.target;
        const product = document.querySelector(`#${id}`);
        addHideProduct();
        product.classList.remove('hide');
    }
});



buy.forEach((button) => {
    button.onclick = (event) => {
        event.preventDefault();
        modal.classList.remove('hide__modal');
    }
});
ok.onclick = () => {
  modal.classList.add('hide__modal');
  addHideProduct();
  addHideCategory();
};

