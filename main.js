const car = {
  brand: "Chevrolet",
  model: "Cobalt",
  year: 2024
};
car.year = 2025;
car.color = "white";
delete car.model;
console.log(car);

const propertyName = "role";
const user = { name: "Ivan" };
user[propertyName] = "admin";
console.log(user);


function hasProperty(obj, key) {
  return Object.prototype.hasOwnProperty.call(obj, key);
}


const user2 = { name: "Ivan", role: "admin" };
console.log(hasProperty(user2, "name"));
console.log(hasProperty(user2, "age")); 