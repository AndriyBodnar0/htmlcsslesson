

// - створити функцію яка виводить масив

// function arrayfunc() {
    
    // let newarray = [];
    // for (let i = 0; i < 10; i++) {
        
    //   newarray.push(i);
//     // }
//     // console.log(newarray);
    
// }

// arrayfunc();
//------------------------------------------------------
// let arr = ['hello', true, 256, 'blackpunkt', null];
// function printArr (arr){
//     console.log(arr);
// }
//printArr(arr);
// - створити функцію яка заповнює масив рандомними числами та виводить його. 
//    Для виведення використати попвередню функцію.
// function createArr (length, min, max) {
// let arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.floor(Math.random() *(max - min)+min));
//     }
//     return arr;
// }
// let doneArr = createArr(5,5,50);
// printArr(doneArr);
// - створити функцію яка приймає три числа та виводить та повертає найменьше.
// function returnMinThree(a,b,c) {
//     let min;
//     let max;
//     if (a <= b && a <= c) min = a;
//     if (b <= a && b <= c) min = b;
//     if (c <= b && c <= a) min = c; 
// 
/* let min = Math.min(a,b,c); */
//         console.log('min' ,min);
//     return min;
// }
// let min = returnMinThree(10,5,3);
// console.log('----------------------');
// console.log(min);
// - створити функцію яка приймає три числа та виводить та повертає найбільше.
// function returnMax(a,b,c) {

//     let max = Math.max(a,b,c);
//     console.log('max :', max);
//     return max;
// }
// let max = returnMax(prompt('Enter a'),prompt('Enter b'),prompt('Enter c'));
// console.log('------------------');
// console.log(max);
// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше
// function returnMinPrintMax() {
    
//     let min = arguments[0];
//     let max = arguments[0];
// for (const item of arguments) {
//     if(item > max) max = item;   
//     if(item < min) min = item;   
//     }
// console.log('max', max);
// return min;
// }
// const min = returnMinPrintMax(1,2,3,4,5,9);
// console.log('min',min);
// - створити функцію яка виводить масив
// function printArray() {
//     console.log(arguments);
// }
// printArray(1,2,3,4,5);
// - створити функцію яка повертає найбільше число з масиву
// const myFunck = (array) => {
// let max = array[0];

//     for (const item of array) {
//         if(max < item) max = item;
//     }
//     return max;
// }
// const myFunck1 = myFunck([1,2,3,4,6]);
// console.log(myFunck1);
// - створити функцію яка повертає найменьше число з масиву
// const myFunck = (array) => {
// let min = array[0];

//     for (const item of array) {
//         if(min > item) min = item;
//     }
//     return min;
// }
// const myFunck1 = myFunck([1,2,3,4,6]);
// console.log(myFunck1);
// - створити функцію яка приймає масив чисел та складає значення елементів масиву та повертає його.

// function arrayOfNumbers (arr) {
//     let sum = 0;
//     for (let element of arr) {
//         sum += element;
//     }
//     console.log('sum = ' + sum);
//     return sum;
// }
// let arr1 = [1,2,3]
// let sum = arrayOfNumbers(arr1);
// console.log('sum = ' + sum);


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function average(array) {
//     let sum=0;
//     for (const iterator of array) {
//         sum += iterator;
        
//     }
//     return sum / array.length;
// }

// const average1 = average([3,2,72,26,2,5,8]);

// console.log(average1);
// - Створити функцію яка приймає масив будь яких объектів, та повертає значення кількості об'єктів в масиві
// let arr1 = [
//     {name:'Lviv', populatin:853000, country:'Ukraine', region: 'West'},
//     {name:'Amsterdam', populatin:2400000, country:'Netherlands', region: 'North-West'},
//     {name:'Pragua', populatin:5400000, country:'Czech', region: 'East'},
//     {name:'Kherson', populatin:358000, country:'Ukraine', region: 'South'},
//     {name:'Kiev', populatin:1300000, country:'Ukraine', region: 'North-Center'},
//     {name:'Kharkiv', populatin:1100000, country:'Ukraine', region: 'North-East'},
//     {name:'New York', populatin:8836817, country:'USA', region: 'South-East'},
//     {name:'Chicago', populatin:2706000, country:'USA', region: 'Center-West'},
//     {name:'San-Francisco', populatin:853543, country:'USA', region: 'South-West'},
//     {name:'Berlin', populatin:6177513, country:'Germany', region: 'Center'},
//     {name:'Berlin', populatin:6177513, country:'Germany', region: 'Center'},
// ];
// function arrOfObjects (arr) {
//     let count = 0;
//     for (let arrElement of arr) {
//         if (typeof arrElement === 'object' && !Array.isArray(arrElement)){
//             count++;
//         }
//             }
//     console.log(count);
//     return count;
// }
// arrOfObjects(arr1);

// - Створити функцію яка приймає масив будь яких объектів, та повертає загальн кількість полів в них
// function arrOfObjects (arr) {
//     let count = 0;
//     for (let arrElement of arr) {
//         if (typeof arrElement === 'object' && !Array.isArray(arrElement)){
//             for (const key in arrElement) {
//             count++;        
//             }
//         }
//      }
     
//     return count;
// }
// const number = arrOfObjects(arr1);
// console.log(number);
// // - створити функцію  яка скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.


//   Приклад
//   [1,2,3,4]
//   [2,3,4,5]
//   результат
//   [3,5,7,9]

// function splitArray(array1,array2) {
//     let result = [];

//     for (let i = 0; i < array1.length; i++) {
//         result.push(array1[i]+array2[i]);
        
//     }
//     return result;
// }

// const splitArray1 = splitArray([1,2,3,4],[2,3,4,5]);
// console.log(splitArray1);
// - *** приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
// let array1 = [1,2,3,4];
// function changeElement(arr,index) {

//     let array = [...arr];  // тут ми клонували array1
//     if (index < array.length - 1) {
//         let temp = array[index];
//         array[index + 1] = temp;
//     }
//     return array;
// }
 
// const changeElement1 =changeElement(array1,2)
// console.log(array1);
// console.log(changeElement1);
// - *** створити функцію яка буде переносити елементи з значенням 0 у кінець маисву.
// Зберігаючи при цьому порядок не нульових значень.
// Дoвжина масиву від 2 до 100
// Приклад
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]

// function myFunck(array) {
//     let zero = [];
//     let number = [];
//     for (const iterator of array) {
//         if (iterator === 0) {
//             zero.push(0);
//         }else {
//             number.push(iterator);
//         }
//     }
//     return number.concat(zero);

// }
// console.log(myFunck([1,0,6,0,3]));
// console.log(myFunck([0,1,2,3,4]));
// console.log(myFunck([0,0,1,0]));
//----------один варік


// function myFunck(array) {

// let tempArray = [...array];

// for (let i = tempArray.length - 1; i >= 0;  i--) {
    
//     if (tempArray[i] === 0) {
//         tempArray.splice(i,1);
//         tempArray.push(0);
        
//     }
    
// }

// return tempArray;

// } 
// console.log(myFunck([1,0,6,0,3]));
// console.log(myFunck([0,1,2,3,4]));
// console.log(myFunck([0,0,1,0]));



// Створити функцію яка :

// - Додає в боді елемент з текстом . Тип елементу та текст отримати через аргументи
// - Додає в боді блок з текстом "Hello owu"

// function addDiv(message,typeTag) {
//     const tag = document.createElement(typeTag);
//     tag.innerHTML = message || 'Hello World';
//     document.body.appendChild(tag);
// }
// addDiv(null,'div');

// - приймає масив автомобілів (можна взяти з попередніх дз ),
//та  індентифікатор елемнту в який потрібно додати список цих автомобілів.
let cars = [
    {
        model: 'Doodge Challanger SRT V8',
        year_of_release: 2015,
        power: '527 h.f.'
    },
    {
        model: ' Ford Mustang GT Performance',
        year_of_release: 2015,
        power: '493 h.f.'
    },
    {
        model: 'Toyota RAV4',
        year_of_release: 2019,
        power: '326 h.f.'
    },
    {
        model: 'BMW X5 M-competition',
        year_of_release: 2020,
        power: '552 h.f.'
    },
    {
        model: 'Mercedece_Benz GLE 420d',
        year_of_release: 2018,
        power: '482 h.f.'
    },
    {
        model: 'Pontiac Pontiac GTO Judge',
        year_of_release: 1969,
        power: '593 h.f.'
    },
    {
        model: 'Mazda CX-5 SKYACTIVE',
        year_of_release: 2018,
        power: '328 h.f.'
    },
    {
        model: ' Koenigsegg One:1',
        year_of_release: 2014,
        power: '1360 h.f'
    },
    {
        model: 'Buick GSX',
        year_of_release: 1970,
        power: '350 h.f'
    },
    {
        model: 'Audi A7 Perfomance',
        year_of_release: 2019,
        power: '420 h.f'
    }
];
function getCar (carArray, iden ) {
    let block = document.getElementById(iden);
    let ul = document.createElement('ul');
    for (let i = 0; i < carArray.length; i++) {
        let car = carArray[i];
        let li = document.createElement('li');
        li.innerHTML = `${car.model}  ${car.year_of_release}  ${car.power}`;
        ul.appendChild(li);
    }
    block.appendChild(ul);
}
getCar(cars,'list');
// Для кожного автомобіля створити свій блок, та додати його в елемент, індентифікатор якого ви отримали.
// Всі властивості авто в обному блоці
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