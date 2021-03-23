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

let wordArray = [
    'baar','got','dffd','and','acdf',
    'caddf','cbfff','dsafg','fgfhhf','fdca',
    'raab','tog','fadf','band','cacdf',
    'abaar','cgot','gdffd','dand','eacdf',
];
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

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

