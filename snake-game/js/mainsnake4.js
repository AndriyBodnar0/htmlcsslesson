// Настройка «холста»
 var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
// Получаем ширину и высоту элемента canvas
var width = canvas.width;
var height = canvas.height;
// Вычисляем ширину и высоту в ячейках
var blockSize = 10;
var widthInBlocks = width / blockSize;
var heightInBlocks = height / blockSize;
// Устанавливаем счет 0
var score = 0;
// Рисуем рамку
var drawBorder = function () {
ctx.fillStyle = "Gray";
//;17. Пишем игру «Змейка»: часть 2 269
ctx.fillRect(0, 0, width, blockSize);
ctx.fillRect(0, height - blockSize, width, blockSize);
ctx.fillRect(0, 0, blockSize, height);
ctx.fillRect(width - blockSize, 0, blockSize, height);
};
// Выводим счет игры в левом верхнем углу
var drawScore = function () {
ctx.font = "20px Courier";
ctx.fillStyle = "Black";
ctx.textAlign = "left";
ctx.textBaseline = "top";
ctx.fillText("Счет: " + score, blockSize, blockSize);
};
// Отменяем действие setInterval и печатаем сообщение «Конец игры»
var gameOver = function () {
clearInterval(intervalId);
ctx.font = "60px Courier";
ctx.fillStyle = "Black";
ctx.textAlign = "center";
ctx.textBaseline = "middle";
ctx.fillText("Конец игры", width / 2, height / 2);
};
// Рисуем окружность (используя функцию из главы 14)
var circle = function (x, y, radius, fillCircle) {
ctx.beginPath();
ctx.arc(x, y, radius, 0, Math.PI * 2, false);
if (fillCircle) {
ctx.fill();
} else {
ctx.stroke();
}
};
// Задаем конструктор Block (ячейка)
var Block = function (col, row) {
this.col = col;
this.row = row;
};
// Рисуем квадрат в позиции ячейки
Block.prototype.drawSquare = function (color) {
var x = this.col * blockSize;
var y = this.row * blockSize;
ctx.fillStyle = color;
ctx.fillRect(x, y, blockSize, blockSize);
};
// Рисуем круг в позиции ячейки
Block.prototype.drawCircle = function (color) {
var centerX = this.col * blockSize + blockSize / 2;
//270 Часть III. Графика
var centerY = this.row * blockSize + blockSize / 2;
ctx.fillStyle = color;
circle(centerX, centerY, blockSize / 2, true);
};
// Проверяем, находится ли эта ячейка в той же позиции, что и ячейка
// otherBlock
Block.prototype.equal = function (otherBlock) {
return this.col === otherBlock.col && this.row === otherBlock.row;
};
// Задаем конструктор Snake (змейка)
 var Snake = function () {
this.segments = [
new Block(7, 5),
new Block(6, 5),
new Block(5, 5)
];
this.direction = "right";
this.nextDirection = "right";
};
// Рисуем квадратик для каждого сегмента тела змейки
Snake.prototype.draw = function () {
for (var i = 0; i < this.segments.length; i++) {
this.segments[i].drawSquare("Blue");
}
};
// Создаем новую голову и добавляем ее к началу змейки,
// чтобы передвинуть змейку в текущем направлении
Snake.prototype.move = function () {
var head = this.segments[0];
var newHead;
this.direction = this.nextDirection;
if (this.direction === "right") {
newHead = new Block(head.col + 1, head.row);
} else if (this.direction === "down") {
newHead = new Block(head.col, head.row + 1);
} else if (this.direction === "left") {
newHead = new Block(head.col - 1, head.row);
} else if (this.direction === "up") {
newHead = new Block(head.col, head.row - 1);
}
if (this.checkCollision(newHead)) {
gameOver();
return;
}
//17. Пишем игру «Змейка»: часть 2 271
this.segments.unshift(newHead);
if (newHead.equal(apple.position)) {
score++;
apple.move();
} else {
this.segments.pop();
}
};
// Проверяем, не столкнулась ли змейка со стеной или собственным
// телом
Snake.prototype.checkCollision = function (head) {
var leftCollision = (head.col === 0);
var topCollision = (head.row === 0);
var rightCollision = (head.col === widthInBlocks - 1);
var bottomCollision = (head.row === heightInBlocks - 1);
var wallCollision = leftCollision || topCollision || 
rightCollision || bottomCollision;
var selfCollision = false;
for (var i = 0; i < this.segments.length; i++) {
if (head.equal(this.segments[i])) {
selfCollision = true;
}
}
return wallCollision || selfCollision;
};
// Задаем следующее направление движения змейки на основе нажатой
// клавиши
Snake.prototype.setDirection = function (newDirection) {
if (this.direction === "up" && newDirection === "down") {
return;
} else if (this.direction === "right" && newDirection === "left") {
return;
} else if (this.direction === "down" && newDirection === "up") {
return;
} else if (this.direction === "left" && newDirection === "right") {
return;
}
this.nextDirection = newDirection;
};
// Задаем конструктор Apple (яблоко)
 var Apple = function () {
this.position = new Block(10, 10);
};
//272 Часть III. Графика
// Рисуем кружок в позиции яблока
Apple.prototype.draw = function () {
this.position.drawCircle("LimeGreen");
};
// Перемещаем яблоко в случайную позицию
Apple.prototype.move = function () {
var randomCol = Math.floor(Math.random() * (widthInBlocks - 2)) + 1;
var randomRow = Math.floor(Math.random() * (heightInBlocks - 2)) + 1;
this.position = new Block(randomCol, randomRow);
};
// Создаем объект-змейку и объект-яблоко
 var snake = new Snake();
var apple = new Apple();
// Запускаем функцию анимации через setInterval
var intervalId = setInterval(function () {
ctx.clearRect(0, 0, width, height);
drawScore();
snake.move();
snake.draw();
apple.draw();
drawBorder();
}, 100);
// Преобразуем коды клавиш в направления
 var directions = {
37: "left",
38: "up",
39: "right",
40: "down"
};
// Задаем обработчик события keydown (клавиши-стрелки)
$("body").keydown(function (event) {
var newDirection = directions[event.keyCode];
if (newDirection !== undefined) {
snake.setDirection(newDirection);
}
});

// - створити функцію яка виводить масив

// function arrayfunc() {
    
    // let newarray = [];
    // for (let i = 0; i < 10; i++) {
        
    //   newarray.push(i);
    // }
    // console.log(newarray);
    
// }

// arrayfunc();
// - створити функцію яка заповнює масив рандомними числами та виводить його. Для виведення використати попвередню функцію.
// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// - створити функцію яка виводить масив
// - створити функцію яка повертає найбільше число з масиву
// - створити функцію яка повертає найменьше число з масиву
// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.
// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// Створити функцію яка :
// - Додає в боді блок з текстом "Hello owu"
// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали. Всі властивості авто в обному блоці
// - приймає масив автомобілів (можна взяти з попередніх дз ),та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Для кожної властивості створити всередені блока автомоблія свій блок

// (на основі минулого ДЗ)
// **- функція приймає 2 масиви з рівною кількістю об'єктів та з'єднює в один об'єкт користувача та місто з відповідними "id" та "user_id",
// та повертає масив цих з'єднаних об'єктів.
// Приклад масивів:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// Частковий приклад реультату:



// ***- беремо завдання з правилами з укроку №3 :
// Та робимо це функцією.При цьому правила отримувати через аргумент.
// "Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
// При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
// Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html

// 			let rules = [
// 				{
// 					title: 'Первое правило Бойцовского клуба.',
// 					body: 'Никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Второе правило Бойцовского клуба.',
// 					body: 'Никогда никому не рассказывать о Бойцовском клубе.'
// 				},
// 				{
// 					title: 'Третье правило Бойцовского клуба.',
// 					body: 'В схватке участвуют только двое.'
// 				},
// 				{
// 					title: 'Четвертое правило Бойцовского клуба.',
// 					body: 'Не более одного поединка за один раз.'
// 				},
// 				{
// 					title: 'Пятое правило Бойцовского клуба.',
// 					body: 'Бойцы сражаются без обуви и голые по пояс.'
// 				},
// 				{
// 					title: 'Шестое правило Бойцовского клуба.',
// 					body: 'Поединок продолжается столько, сколько потребуется.'
// 				},
// 				{
// 					title: 'Седьмое правило Бойцовского клуба.',
// 					body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
// 				},
// 				{
// 					title: 'Восьмое и последнее правило Бойцовского клуба.',
// 					body: 'Новичок обязан принять бой.'
// 				},

// 			];
// "

// ===========додаткове від віктора========
// 1) Точная степень двойки.
// Дано натуральное число N.
// Выведите слово YES, если число N является точной степенью двойки,
// или слово NO в противном случае.
// Операцией возведения в степень пользоваться нельзя!

// 2) Deep Copy
// реалізувати глибоке копіювання обєкту за допомогою рекурсій

// 3) Flat
// Вирівняти багаторівневий масив в однорівневий
// [1,3, ['Hello, 'Wordd', [9,6,1]], ['oops'], 9] -> [1, 3, 'Hello, 'Wordd', 9, 6, 1, 'oops', 9]
// ===========додаткове========