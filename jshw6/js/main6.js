// - создать массив с 20 числами.
// let arr = [1, 33, 3, 4, 45, 6, 7, 8, 9, 10, 12, 64, 13, 14, 15, 16, 17, 18, 19, 20];
// -- при помощи метода sort и колбека  отсортировать массив.
//
// arr.sort(function (a,b){
//     return a - b;
// });
// console.log(arr);

// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.

// arr.sort(function (a,b){
//     return b - a;
// });
// console.log(arr);

// -- при помощи filter получить числа кратные 3
//
// let filtrArr = arr.filter(value => value % 3 === 0 && value !== 0);
// console.log(filtrArr);

// -- при помощи filter получить числа кратные 10
// let filtrArr = arr.filter(value => value % 10 === 0 && value !== 0);
// console.log(filtrArr);

// -- перебрать (проитерировать) массив при помощи foreach()
//  arr.forEach(value => console.log(value));

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let newarr = arr.map((item) => {
// 	item = item * 3;
// 	return item;
// });
// console.log(newarr);

// - создать массив со словами на 15-20 элементов.

// let wordArray = [
//     'baar','got','dffd','and','acdf',
//     'caddf','cbfff','dsafg','fgfhhf','fdca',
//     'raab','tog','fadf','band','cacdf',
//     'abaar','cgot','gdffd','dand','eacdf',
// ];
// -- отсортировать его по алфавиту в восходящем порядке.
// let newWordArray = wordArray.sort((a, b) => a.localeCompare(b) );
// console.log(newWordArray);

// -- отсортировать его по алфавиту  в нисходящем порядке.
// let newWordArray = wordArray.sort((a, b) => b.localeCompare(a) );
// console.log(newWordArray);
//
// -- отфильтровать слова длиной менее 4х символов
// let wordArraylength = wordArray.filter(value =>value.length < 5  );
// console.log(wordArraylength);

// // -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце
// const wordArraymap = wordArray.map(value => value + '!' )
// console.log(wordArraymap);

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
    let users = [
        {name: 'vasya', age: 31, status: false},
        {name: 'petya', age: 30, status: true},
        {name: 'kolya', age: 29, status: true},
        {name: 'olya', age: 28, status: false},
        {name: 'max', age: 30, status: true},
        {name: 'anya', age: 31, status: false},
        {name: 'oleg', age: 28, status: false},
        {name: 'andrey', age: 29, status: true},
        {name: 'masha', age: 30, status: true},
        {name: 'olya', age: 31, status: false},
        {name: 'max', age: 31, status: true} ];
// //- відсортувати його за  віком (зростання , а потім окремо спадання)
//
// //let olderFilter = users.sort((a, b) => b.age - a.age);
// let olderFilter = users.sort((a, b) => a.age - b.age);
//
// console.log(olderFilter);

// // - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)//
//
// // let nameArraylength = users.sort((a, b) => a.name.length - b.name.length)
// let nameArraylength = users.sort((a, b) => b.name.length - a.name.length)
//
//
//  console.log(nameArraylength);

// // - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор
// // (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив
// // (первинний масив залишиться без змін)
//
//  let addId = JSON.parse(JSON.stringify(users)).map((value, index) =>{
//      value.id = index;
//      return value;
//  } );
//  console.log(users);
//  console.log("-----------------------------");
//
//  console.log(addId);
// // - відсортувати його за індентифікатором
// addId.sort((a, b) => b.id - a.id)
//
// // -- наисать функцию калькулятора с 2мя числами и колбеком
//
// function calculator(a, b, callbackFn){
//     return callbackFn(a,b);
//
// }
// console.log(calculator(10,20, (a,b) => a + b));


// -- наисать функцию калькулятора с 3мя числами и колбеком

function calculator(a, b, c, callbackFn){
    return callbackFn(a,b,c);

}
console.log(calculator(10,60, 20,(a,b,c) => a + b + c));