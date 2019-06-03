class ProductsList {
    constructor(container = '.products'){
        this.container = container;
        this.data = [];
        this.allProducts = [];
        this.summary = 0; // хранится сумма товаров
        this.init();
    }
    init(){
        this._fetchProducts();
        this._render();
        this.sum(); // для подсчета суммы
    }
    _fetchProducts(){
        this.data = [
            {id: 1, title: 'Notebook', price: 2000},
            {id: 2, title: 'Mouse', price: 30},
            {id: 3, title: 'Keyboard', price: 55},
            {id: 4, title: 'Gamepad', price: 65},
            {id: 5, title: 'Notebook', price: 2000},
            {id: 6, title: 'Mouse', price: 30},
            {id: 7, title: 'Keyboard', price: 55},
            {id: 8, title: 'Gamepad', price: 65},
        ];
    }
    _render(){
        const block = document.querySelector(this.container);
        for (let item of this.data){
            const product = new ProductItem(item);
            this.allProducts.push(product);
            block.insertAdjacentHTML('beforeend', product.render());
        }
    }
    sum(){

        // варинат for of

        // for(let element of this.data){
        //     this.summary += element.price;
        // }
        // document.querySelector('.sum').innerHTML = `Сумма всех товаров каталога равна: ${this.summary}`;

        // варинат forEach - на learnJS про данный метод сказано "более элегантный" чем for of
        // мне больше нравится именно этот вариант

        this.data.forEach(item => this.summary += item.price);
        document.querySelector('.sum').innerHTML = `Сумма всех товаров каталога равна: ${this.summary}`;
    }
}

class ProductItem {
    constructor(product, img = `https://placehold.it/150x100`){
        this.id = product.id;
        this.title = product.title;
        this.price = product.price;
        this.img = img;
    }
    render(){
        return `<div class="product-item">
                 <img src="${this.img}" alt="${this.title}">
                 <div class="desc">
                     <h3>${this.title}</h3>
                     <p>${this.price}</p>
                     <button class="buy-btn">Купить</button>
                 </div>
             </div>`
    }
}

// домашнее задание с корзиной
class Cart {
    constructor(container){
        this.container = container; // DOM элемент
        this.basket = []; // массив с товарами в корзине
    }
    renderItem(){}; // рендер элемента корзины
    renderCart(){}; // рендер всей корзины
    pushCart(){}; // добавление нового товара в корзину
    deleteCart(){}; // удаление элемента из корзины
    correctQuantityCart(){}; // слушаем изменения кол-ва у элемента корзины
}



const products = new ProductsList();

// const products = [
//     {id: 1, title: 'Notebook', price: 2000},
//     {id: 2, title: 'Mouse', price: 30},
//     {id: 3, title: 'Keyboard', price: 55},
//     {id: 4, title: 'Gamepad', price: 65},
// ];
//
// const renderProduct = (title, price, img = `https://placehold.it/200x150`) => {
//     return `<div class="product-item">
//                  <img src="${img}" alt="${title}">
//                  <div class="desc">
//                      <h3>${title}</h3>
//                      <p>${price}</p>
//                      <button class="buy-btn">Купить</button>
//                  </div>
//              </div>`
// };
//
// const renderPage = list => {
//     // document.querySelector('.products').innerHTML = list.map(item => renderProduct(item.title, item.price)).join('');
//     for (let product of list){
//         document.querySelector('.products').insertAdjacentHTML('beforeend', renderProduct(product.title, product.price));
//     }
// };
//
// renderPage(products);