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

//Учет долгов
var owedMoney = {};
owedMoney["Джимми"] = 5;
owedMoney["Анна"] = 7;
console.log(owedMoney["Джимми"]);
console.log(owedMoney["Элис"]);
owedMoney["Джимми"] += 3;
console.log(owedMoney["Джимми"]);
owedMoney["Анна"] += 1;
console.log(owedMoney["Анна"]);
console.log(owedMoney);

//Хранение информации о фильмах
var movies = {
    "В поисках Немо": {
    releaseDate: 2003,
    duration: 100,
    actors: ["Альберт Брукс", "Эллен Дедженерес", "Александр Гоулд"],
    format: "DVD"
    },
    "Звездные войны: Эпизод VI — Возвращение джедая": {
    releaseDate: 1983,
    duration: 134,
    actors: ["Марк Хэмилл", "Харрисон Форд", "Кэрри Фишер"],
    format: "DVD"
    },
    "Гарри Поттер и Кубок огня": {
    releaseDate: 2005,
    duration: 157,
    actors: ["Дэниел Рэдклифф", "Эмма Уотсон", "Руперт Гринт"],
    format: "Blu-ray"
    }
   };

   var findingNemo = movies["В поисках Немо"];
   console.log(findingNemo.duration);
   console.log(findingNemo.format);

   var cars = {
    releaseDate: 2006,
    duration: 117,
    actors: ["Оуэн Уилсон", "Бонни Хант", "Пол Ньюман"],
    format: "Blu-ray"
   };
   movies["Тачки"] = cars;
   console.log(Object.keys(movies));

//Home work

   //#1. Подсчет очков
    // Представьте, что вы играете в какую-нибудь игру со своими друзьями и вам нужно вести счет. Создайте для этого объект и назовите 
    // его scores. Пусть ключами будут имена ваших друзей, а значениями — набранные ими очки (0 или больше). Счет игроков надо 
    // будет увеличивать по мере того, как они зарабатывают новые 
    // очки. Как вы будете менять счет игрока, хранящийся в объекте 
    // scores?

    var scores = { 
        Julia: 15,
        Kostia: 5,
        Jenia: 8,
        Sasha: 18
    };
    console.log(scores.Julia);
    console.log(scores.Kostia);
    console.log(scores.Jenia);
    console.log(scores.Sasha);
    scores.Julia += 1;
    scores.Kostia += 3;
    scores.Jenia += 8;
    scores.Sasha += 12;
    console.log(scores.Julia);
    console.log(scores.Kostia);
    console.log(scores.Jenia);
    console.log(scores.Sasha);

    //#2. Вглубь объектов и массивов
// Пускай у вас есть такой объект:
var myCrazyObject = {
    "name": "Нелепый объект",
    "some array": [7, 9, { purpose: "путаница", number: 123 }, 3.3],
    "random animal": "Банановая акула"
    };
    //Как одной строкой JavaScript-кода извлечь из этого объекта число 123? Проверьте свое решение, запустив его в консоли.
    console.log(myCrazyObject["some array"][2].number);