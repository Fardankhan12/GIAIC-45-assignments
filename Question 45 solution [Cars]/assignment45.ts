function carInfo(manufacturer: string, model: string, color?: string, feature?: string) {
    let car = { manufacturer, model, ...(color ? { color } : {}), ...(feature ? { feature } : {}) };
    return car;
}

let car1 = carInfo("Toyota", "Corolla", "blue", "sunroof");
let car2 = carInfo("Honda", "Civic", "red");

console.log(car1);
console.log(car2);
