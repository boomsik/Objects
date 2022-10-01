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

   