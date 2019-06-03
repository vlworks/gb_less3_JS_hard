class Hamburger {
    constructor(size, stuffing) {

    }

    addTopping(topping){};
    removeTopping(topping){};
    getToppings(topping){};
    getSize(){};
    getStuffing(){};
    calculatePrice(){};
    calculateCalories(){};
}

const gamburger = {
    getSize: function () {
        let $big = document.querySelector('#big').value;
        let $small = document.querySelector('#small').value;
        console.log($big);
        console.log($small);
    }
};