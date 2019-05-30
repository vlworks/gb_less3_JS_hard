const products = [
    {id: 1, title: 'Notebook', price: 2000},
    {id: 2, title: 'Mouse', price: 30},
    {id: 3, title: 'Keyboard', price: 55},
    {id: 4, title: 'Gamepad', price: 75},
    {id: 5, title: 'Gamepad', price: 75},
    {id: 6, title: 'Gamepad', price: 75},
    {id: 7, title: 'Gamepad', price: 75},
    {id: 8, title: 'Gamepad', price: 75},
    {id: 9, title: 'Gamepad', price: 75},
    {id: 10, title: 'Gamepad', price: 75},
];

const renderProduct = (title, price) => {
    return `<div class="product-item">
                <h3>${title}</h3>
                <p>${price} $</p>
                <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price));
    document.querySelector('.products').innerHTML = productsList.join('');
    // for(let prop of productsList){
    //     document.querySelector('.products').innerHTML += prop;
    // }
};

//map создает новый массив из элементов, в нашем случае новым массивом станет массив строк из renderProduct где строка будет содержать <div><h3>...<p>.... Только элемент массива с индексом 0 будет содержать первый товар, 1 второй товар и т.д. описанный полностью со всей разметкой. А так как productList тоже массив, его элементы разделяются запятыми, отсюда и вывод запятых через innerHTML. И это наглядней становится видно если заменить innerHTML на textContent - там так же будет текстом описана разметка и элементы разделены запятыми.

//я попробовал сделать через перебор массива и вывод - но мне кажется это какой то примитивный способ :)

// потом на learn JS попался метод join ...


renderPage(products);
