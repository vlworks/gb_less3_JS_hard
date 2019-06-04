// class Hamburger {
//     constructor(size, stuffing) {
//
//     }
//
//     addTopping(topping){};
//     removeTopping(topping){};
//     getToppings(topping){};
//     getSize(){};
//     getStuffing(){};
//     calculatePrice(){};
//     calculateCalories(){};
// }


let hamburger;
hamburger = {
    price: 0,
    ccal: 0,
    isSize: false,
    isStuff: false,
    message: 'Выберите размер',
    init: function (event) {
        // let $reset = document.querySelector('#reset');
        if(event.target.id != 'reset' || event.target.value != ''){
            hamburger.getSize();
            hamburger.getStuff();
            hamburger.getTopping();
            hamburger.clearDisable();
            hamburger.showMessage();
        }

    },
    clearDisable: function () {
        if (this.isSize) {
            document.querySelector('#chees').removeAttribute('disabled');
            document.querySelector('#salad').removeAttribute('disabled');
            document.querySelector('#potatoes').removeAttribute('disabled');
            this.message = 'Выберите начинку';
        }

        if (this.isStuff) {
            document.querySelector('#seasoning').removeAttribute('disabled');
            document.querySelector('#mayonnaise').removeAttribute('disabled');
            this.message = 'Выберите добавку по желанию';
        }
    },
    showMessage: function () {
        document.querySelector('#message').innerHTML = this.message;
        document.querySelector('#result').innerHTML = `Цена ${this.price}$, калорий ${this.ccal}`;
    },
    getSize: function () {
        let $big = document.querySelector('#big');
        let $small = document.querySelector('#small');
        if($big.checked) {
            this.price = 100;
            this.ccal = 40;
            this.isSize = true;
        } else if ($small.checked) {
            this.price = 50;
            this.ccal = 20;
            this.isSize = true;
        }
    },
    getStuff: function () {
        let $chees = document.querySelector('#chees');
        let $salad = document.querySelector('#salad');
        let $potatoes = document.querySelector('#potatoes');
        if($chees.checked) {
            this.price += 10;
            this.ccal += 20;
            this.isStuff = true;
        } else if ($salad.checked) {
            this.price += 20;
            this.ccal += 5;
            this.isStuff = true;
        }  else if ($potatoes.checked) {
            this.price += 15;
            this.ccal += 10;
            this.isStuff = true;
        }
    },
    getTopping: function () {
        let $seasoning = document.querySelector('#seasoning');
        let $mayonnaise = document.querySelector('#mayonnaise');
        if($seasoning.checked) {
            this.price += 15;
        }
        if ($mayonnaise.checked) {
            this.price += 20;
            this.ccal += 5;
        }
    },
};

document.querySelector('#form').addEventListener('click', hamburger.init);

