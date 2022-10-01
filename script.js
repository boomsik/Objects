// var cat = {
//     "legs": 3,
//     "name": "Гармония",
//     "color": "Черепаховый"
//    };

   var cat1 = {
    legs: 3,
    name: "Гармония",
    color: "Черепаховый"
   };

   var cat2 = {
    legs: 3,
    "full name": "Гармония Филомена Уси-Пусечка Морган",
    color: "Черепаховый"
   };

   var cat3 = { legs: 3, name: "Гармония", color: "Черепаховый" };

   var cat = {
    "legs": 3,
    "name": "Гармония",
    "color": "Черепаховый"
   };
   console.log(cat["name"]);
   console.log(cat.name);

   //команда Object.keys():

   var dog = { 
      name: "Оладушек",
      age: 6, 
      color: "белый", 
      bark: "Гав тяф тяф!" };

    var cat = { 
      name: "Гармония", 
      age: 8, 
      color: "черепаховый" };
 console.log( Object.keys(dog));
 console.log( Object.keys(cat));

 //Добавление элементов объекта
 var object = {};
 
 var cat3 = {};
cat3["legs"] = 3;
cat3["name"] = "Гармония";
cat3["color"] = "Черепаховый";
console.log(cat);

//Добавление ключей через точку
var cat = {};
cat.legs = 3;
cat.name = "Гармония";
cat.color = "Черепаховый";
console.log(cat);

var dog = {
    name: "Оладушек",
    legs: 4,
    isAwesome: true
   };
  console.log(dog.isBrown);


  var dinosaurs = [
    { name: "Тираннозавр рекс", period: "Верхнемеловой" },
    { name: "Стегозавр", period: "Верхнеюрский" },
    { name: "Платеозавр", period: "Триасовый" }
   ];

   console.log(dinosaurs[0]);
   console.log(dinosaurs[1]);
   console.log(dinosaurs[2]);

   console.log(dinosaurs[0]['name']);
   console.log(dinosaurs[1].name);
   console.log(dinosaurs[2].period);

//Массив друзей
var anna = { name: "Анна", age: 11, luckyNumbers: [2, 4, 8, 16] };
var dave = { name: "Дэйв", age: 5, luckyNumbers: [3, 9, 40] };
var kate = { name: "Кейт", age: 9, luckyNumbers: [1, 2, 3] };

var friends = [anna, dave, kate];

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log(friends[0].name);
console.log(friends[0].luckyNumbers[1]);