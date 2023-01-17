import { goods } from "./googs.js";

const listCategories = document.querySelector('ul');
const category = document.querySelector('.cat-content');
const product = document.querySelector('.product-item');
const modal = document.querySelector('.modal__block');

Object.keys(goods).forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerText = `${item}`;
    listItem.dataset.category = item;
    listCategories.append(listItem);
});

listCategories.addEventListener('click', ({ target }) => {
    if (target.matches('li')) {
        const { category } = target.dataset;
        renderGoods(goods[category]);
    }
});

category.addEventListener('click', ({ target }) => {
    if (target.matches('button')) {
        const { id } = target.closest('.category-goods').dataset;
        const { itemCategory } = target.closest('.category-goods').dataset;

        renderProduct(goods[itemCategory], id);
    }
});

product.addEventListener('click', ({ target }) => {
    if (target.matches('button')) {
        modal.innerHTML = `
        <div class="modal__window">
        <div class="modal__content">
        <h2>
            Товар куплено
        </h2>
        <button class="ok">
            Ok
        </button>
        </div>
        </div>
        `;
        const buttonOk = document.querySelector('.ok');
        buttonOk.onclick = () => {
            modal.innerHTML = '';
            category.innerHTML = '';
            product.innerHTML = '';
        }
    }
});


function renderGoods (goods) {
    category.innerHTML = '';
    product.innerHTML = '';
    goods.forEach(({ name, photo, price, id, category: cat }) => {
        const categoryGood = document.createElement('div');
        categoryGood.dataset.id = id;
        categoryGood.dataset.itemCategory = cat;
        categoryGood.innerHTML = `
    <div class="image"><img alt="" src="${photo}"></div> 
    <h6>${name}</h6>
    <p>${price}</p>
    <button class="details btn btn-dark" type="button">Details</button>
    `;
        categoryGood.classList.add('col-4');
        categoryGood.classList.add('category-goods');
        category.append(categoryGood);

    })
}

function renderProduct (goods, id) {
    product.innerHTML = '';
    return goods.map((item) => {
        if (+item.id === +id) {
            const { name, price, photo } = item;
            const good = document.createElement('div');
            good.innerHTML = `
        <img alt="" src="${photo}">
        <div class="product-title">${name}</div>
        <div class="product-price">${price}</div>
        <button class="button btn btn-dark" type="button">Buy</button>
        `;
            product.append(good);
        }
    });
}
