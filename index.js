const listCategories = document.querySelector('ul');
const category = document.querySelector('.cat-content');
const product = document.querySelector('.product-item');

const goods = {
    laptops: [
      {
          name: 'Ноутбук Acer Aspire 7 Black',
          price: '37500 ₴',
          photo: 'https://content1.rozetka.com.ua/goods/images/big_tile/290848838.jpg',
          id: 1,
          category: 'laptops'
      },
      {
          name: 'Ноутбук ASUS TUF Gaming F15',
          price: '36999 ₴',
          photo: 'https://content.rozetka.com.ua/goods/images/big_tile/285886587.jpg',
          id: 2,
          category: 'laptops'
      },
      {
          name: 'Ноутбук Acer Aspire 5',
          price: '21999 ₴',
          photo: 'https://content.rozetka.com.ua/goods/images/big_tile/294138678.jpg',
          id: 3,
          category: 'laptops'
      },
    ],
    tvs: [],
    phones: []
};
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


function renderGoods (goods) {
    category.innerHTML = '';
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
