/*
### Task-2
For this object below add a property named `passenger capacity` with value 5
```js
const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};
*/

const car = {
    make: "Toyota",
    model: "Corolla",
    year: 2020
};

// Adding Property to Car
car["passenger capacity"] = 5;
console.log(car);

// Printing Property
for (const prop in car){
    console.log(prop);
}

// Printing Value
for (const prop in car){
    console.log(car[prop]);
}