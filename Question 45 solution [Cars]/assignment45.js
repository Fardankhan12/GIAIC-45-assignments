"use strict";
function carInfo(manufacturer, model, color, feature) {
    let car = Object.assign(Object.assign({ manufacturer, model }, (color ? { color } : {})), (feature ? { feature } : {}));
    return car;
}
let car1 = carInfo("Toyota", "Corolla", "blue", "sunroof");
let car2 = carInfo("Honda", "Civic", "red");
console.log(car1);
console.log(car2);
