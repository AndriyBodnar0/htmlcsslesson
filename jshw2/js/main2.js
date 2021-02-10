// --створити масив та вивести його в консоль:
// - з 5 числових значень
    // let number = [1,2,3,4,5];
    // console.log(number);
// - з 5 стічкових значень
// let str = ['coffee', 'tea', 'renault', 'kangoo', 'blablablba' ];
// console.log(str);

// - з 5 значень стрічкового, числового та булевого типу
    // let arr = ['blablablba', 12, 45, false, true];
    // console.log(arr);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
    // let arr = [];
    // arr [0] = 'play';
    // arr [1] = 255;
    // arr [3] = false;
    // console.log(arr);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині

    // for(let i = 0; i < 10; i++){
    //     document.write('<div>bla_bla</div>')
    // }

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині

    // for(let i = 0; i < 10; i++) {
    //     document.write(`<div>bla_bla - ${i} </div>`)
    // }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.

    // let i = 0;
    // while (i < 20) {
    //     document.write('<h1>text</h1>');
    //     i++
    // }

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

    // let i = 0;
    // while (i < 20) {
    //     document.write(`<h1>text - ${i} </h1>`);
    //     i++
    // }

// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
    // let arr = [1,2,3,11,4,5,6,7,8,9];

    // for (let number of arr ) {
    //     console.log(number);
    // }

    //    for(let i = 0; i < arr.length; i++) {
    //     console.log(arr[i]);
    //    }
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

    // let arr = ['1','2','textff','11','4','5','6','7','8'];

    // for (let number of arr ) {
    //     console.log(number);
    // }

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

// let arr = [1,'2','textff',11,4,'5',6,null,false];

// for (let number of arr ) {
//     console.log(number);
// }

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
//--------моє--------
//  let arr = [1,'2','textff',11,4,'5',6,null,false];

// for(let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "boolean"){
//         console.log(arr[i]);
//     }else{

//     }
// }
   //-------------з відео (за допомогою тернарного оператора)--------
//    let arr = [1,'2','textff',11,4,'5',6,null,false];
//    for (let i = 0; i < arr.length; i++) {
//        typeof arr[i] === 'boolean' ? console.log(arr[i]): "";
//    }


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

// let arr = [1,'2','textff',11,4,'5',NaN,null,false];

// for(let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number"){
//         console.log(arr[i]);
//     }else{

//     }
// }    

// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

// let arr = [1,'2','textff',11,4,'5',6,null,false];

// for(let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "string"){
//         console.log(arr[i]);
//     }else{

//     }
// }    

// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.

    // let arr = [];
    // arr [0] = 'play';
    // arr [1] = 255;
    // arr [2] = false;
    // arr [3] = {name:'Andriy' ,age : 23};
    // arr [4] = NaN;
    // arr [5] = null;
    // arr [6] = undefined;
    // arr [7] = true;
    // arr [8] = false;
    // arr [9] = 0;
    // for(let i = 0; i < arr.length; i++) {
    // console.log(arr[i]);
    // }

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
    // for(let i = 0; i < 10; i++){
    //     console.log(i);
    //     document.write(i);
    // }
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

// for(let i = 0; i < 100; i++){
//     console.log('step -',  (i));
//     document.write(`step - ${i} <br>`);
// }

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

    // for(let i = 0; i < 200; i+=2){
    //     console.log('step -',  (i));
    //     document.write(`step - ${i} <br>`); 
    // }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

//   for(let i = 0; i < 200; i++){
//         if (i % 2 === 0 ) {
//             console.log('step -',  (i));
//             document.write(`step - ${i} <br>`); 
            
//         } else {
            
//         }
//     }

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

    // for(let i = 0; i < 200; i++){
    //     if (i % 2 === 0 ) {
    //         console.log('step -',  (i));
    //         document.write(`step - ${i} <br>`); 
            
    //     } else {
            
    //     }
    // }
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

//   for(let i = 0; i < 200; i++){
//         if (i % 2 === 1 ) {
//             console.log('step -',  (i));
//             document.write(`step - ${i} <br>`); 
            
//         } else {
            
//         }
//     }

// - Відтворити роботу годинника, відрахувавши 2 хвилини (2 цикли! 1й - хвилини, 2й - секунди)


// - Відтворити роботу годинника, відрахувавши  2 години  (3 цикли! 1й - години, 2й - хвилини, 3й - секунди)

// Додатково
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
    // let arry = ['a', 'b', 'c'];
    // let word = '';
    
    // for (let i = 0; i < arry.length; i++) {
    //     word = word + arry[i];
    // }
    // console.log(word);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

    // let arry = ['a', 'b', 'c'];
    // let word = '';
    // let i = 0;
    // while (i < arry.length){
    //     word = word + arry[i];
    //     i++;
        
    // }    
    // console.log(word);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
    // let arry = ['a', 'b', 'c'];
    // let word = '';
    // for (let name of arry) {
    //     word = word + name; 
    // }
    // console.log(word);
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово. //тут напевне помилка повинно бути for in
    
    // let arry = ['a', 'b', 'c'];
    // let word = '';
    // for (let name in arry) {
    //     word = word + arry[name];
    // }
    // console.log(word);

// =================
// =================
// =================
// =================

// - Дан масив ['a', 'b', 'c']. Додайте йому в кінець елементи 1, 2, 3 за допомогою циклу.

    // let arry = ['a', 'b', 'c'];
    // /
    // for (let i = 1; i <= 3; i++) {
    //     arry.push(i);
    // }
    // console.log(arry);

    
// - Дан масив [1, 2, 3]. Зробіть з нього новий масив [3, 2, 1].

    // let arry = [1, 2, 3];
    // for (let i = 3; i > 0 ; i--) {
    //    let arry = [i];
    //    console.log(arry);
    // }
    
// - Дан масив [1, 2, 3]. Додайте йому в кінець елементи 4, 5, 6.

    // let arry = [1, 2, 3];
    // for (let i = 4; i <= 6; i++) {
    //     arry.push(i);
       
    // }
    // console.log(arry);

// - Дан масив [1, 2, 3]. Додайте йому в початок елементи 4, 5, 6.
    
    // let arry = [1, 2, 3];
    // for (let i = 6; i >= 4; i--) {
    //     arry.unshift(i);
       
    // }
    // console.log(arry);

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран перший елемент за допомогою shift()
    // let arry = ['js', 'css', 'jq'];
    // let delete1 = arry.shift();
    // console.log(delete1); 
 

// - Дан масив ['js', 'css', 'jq']. Виведіть на екран останній елемент за допомогою pop()
    // let arry = ['js', 'css', 'jq'];
    // let delete1 = arry.pop();
    // console.log(delete1);
// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [4, 5].
    
    // let arry = [1, 2, 3, 4, 5];
    // let sliceElements =  arry.slice(3);
    // console.log(sliceElements);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції slice перетворіть масив в [1,2].

    // let arry = [1, 2, 3, 4, 5];
    // let spliceElements =  arry.splice(0,2);
    // console.log(spliceElements);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice перетворіть масив в [1, 4, 5].

    // let arry = [1, 2, 3, 4, 5];
    // let spl = arry.splice(1,2);
    // console.log(arry);

// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 2, 3, 'a', 'b', 'c', 4, 5].

    // let arry = [1, 2, 3, 4, 5];
    // let arrys = arry.splice(3,0, 'a', 'b', 'c',);
    // console.log(arry);


// - Дан масив [1, 2, 3, 4, 5]. За допомогою методу/функції splice зробіть з нього масив [1, 'a', 'b', 2, 3, 4, 'c', 5, 'e'].

    // let arry = [1, 2, 3, 4, 5];
    // let arrys = arry.splice(1,0, 'a', 'b');
    // let arryss = arry.splice(6,0, 'c');
    // let arrysss = arry.splice(9,0,'e');
    
    // console.log(arry);

// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
    
    // let number = [10,45,2,5,6,11,-24,33,7,8];
    // for (let i = 0; i < number.length; i++) {
    //      if (number[i]%2 === 0) {
    //          console.log(number[i]);
             
    //      }
        
    // }


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу та push () скопіювати значення одного масиву в інший
    // let number = [10,45,2,5,6,11,-24,33,7,8];
    // let newNumber = [];
    // for (let i = 0; i < number.length; i++) {
    //     newNumber.push(number[i]) 

    //     }
    // console.log(newNumber);

// - Взяти масив з 10 чисел або створити його.  Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.

// let number = [10,45,2,5,6,11,-24,33,7,8];
//     let newNumber = [];
//     for (let i = 0; i < number.length; i++) {
//         newNumber.push(number[i]) 

//         }
//     console.log(newNumber);

// ============

// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while

    // let array = [2,17,13,6,22,31,45,66,100,-18];
    // let i = 0;
    // while (i < array.length) {
    //     console.log(array[i]);
    //     i++
    // }


// 2. перебрати його циклом for

    // let array = [2,17,13,6,22,31,45,66,100,-18];
    // for (let i = 0; i < array.length; i++) {
    //     console.log(array[i]);
        
    // }

// 3. перебрати циклом while та вивести  числа тільки з непарним індексом

    // let array = [2,17,13,6,22,31,45,66,100,-18];
    // let i = 0;
    // while (i < array.length) {
    //     if (i%2 === 1) {
    //         console.log(array[i]);
            
    //     }
    //    i++; 
    // }

// 4. перебрати циклом for та вивести  числа тільки з непарним індексом

    // let array = [2,17,13,6,22,31,45,66,100,-18];
    // for (let i = 0; i < array.length; i++) {
    //    if (i%2 === 1) {
    //     console.log(array[i]);
           
    //    }
        
    // }
//5. перебрати циклом while та вивести  числа тільки парні  значення

    
    // let array = [2,17,13,6,22,31,45,66,100,-18];
    // let i = 0;
    // while (i < array.length) {
    //     if (i%2 === 0) {
    //         console.log(array[i]);
            
    //     }
    //    i++; 
    // }

// 6. перебрати циклом for та вивести  числа тільки парні  значення

// let array = [2,17,13,6,22,31,45,66,100,-18];
//     for (let i = 0; i < array.length; i++) {
//        if (i%2 === 0) {
//         console.log(array[i]);
           
//        }
        
//     }

// 7. замінити кожне число кратне 3 на слово "okten"

    // let array = [2,17,13,6,22,31,45,66,100,-18];
    // console.log(array);
    // for (let i = 0; i < array.length; i++) {
    //    if (array[i]%3 === 0) {
    //        array[i] = 'okten'
       
           
    //    }
       
    // }
    // console.log(array);
// 8. вивести масив в зворотньому порядку.

    // let array = [2,17,13,6,22,31,45,66,100,-18];
    // for (let i = array.length-1; i >= 0; i--) {
    //     console.log(array[i]);
        
    // }
    
// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед) ????
    //9.1
//  let array = [2,17,13,6,22,31,45,66,100,-18];
//     let i = array.length-1;
//     while (i >= 0) {
//         console.log(array[i]);
//         i--
//     }


    //9.2.
    
    // let array = [2,17,13,6,22,31,45,66,100,-18];
    //  for (let i = array.length-1; i >= 0; i--) {
    //     console.log(array[i]);
        
    // }

    //9.3
    // let array = [2,17,13,6,22,31,45,66,100,-18];
    // let i = array.length-1;
    // while (i >= 0) {
    //     if (i%2 === 1) {
    //         console.log(array[i]);
            
    //     }
    //    i--; 
    // }
    //9.4
    // let array = [2,17,13,6,22,31,45,66,100,-18];
    // for (let i = array.length-1; i >= 0; i--) {
    //    if (i%2 === 1) {
    //     console.log(array[i]);
           
    //    }
        
    // }
    //9.5
    // let array = [2,17,13,6,22,31,45,66,100,-18];
    // let i = array.length-1;;
    // while (i >= 0) {
    //     if (i%2 === 0) {
    //         console.log(array[i]);
            
    //     }
    //    i--; 
    // }
    //9.6
    // let array = [2,17,13,6,22,31,45,66,100,-18];
    // for (let i = array.length-1; i >= 0; i--) {
    //    if (i%2 === 0) {
    //     console.log(array[i]);
           
    //    }
        
    // }
   //9.7
    // let array = [2,17,13,6,22,31,45,66,100,-18];
    //  for (let i = array.length-1; i >= 0; i--) {
    //     if (array[i]%3 === 0) {
    //             array[i] = 'okten';
               
                   
    //            }
       
    //    console.log(array[i]);;
    // }
    
// 10
//  створити пустий масив та :
// - заповнити його 50 парними числами за допомоги циклу.
// - заповнити його 50 непарними числами за допомоги циклу.

// let array1 = [];
// let array2 = [];
// for (let i = 0; i < 50; i++) {
//     if (i%2 === 0) {
//        array1[i] = i;
        
        
//     } else {
//         array2[i] = i;
        
//     }
   
// }
// console.log(array1);
// console.log(array2);


   //варіант 2

// let array1 = [];
// let array2 = [];
// for (let i = 0; i < 100; i++) {
//     if (i%2 === 0) {
//        array1.push(i);
        
        
//     } else {
//         array2.push(i);
        
//     }
   
// }
// console.log(array1);
// console.log(array2);



// 1
//  створити пустий масив та :
// 1. заповнити його 50 парними числами за допомоги циклу.
// 2. заповнити його 50 непарними числами за допомоги циклу.


// 3. используя Math.random заполнить массив из ???(сколько хотите) элементов.
    // let array = [];
    // for (let i = 8, t = 16; i < t; i++) {
    //     array.push(Math.round(Math.random() * t))
    // }
    // console.log(array);
//  диапазон рандома 8 до 732. (но сначала пробуйте БЕЗ ДИАПАЗОНА!)І

    // let array = [];
    // for (let i = 0; i < 10; i++) {
    //     array.push(Math.round(Math.random() * (732-8) + 8))
    // }
    // console.log(array);
    

    
//  2. вывести на консоль  каждый третий елемент

    // for (let i = 2; i < array.length; i+=3) {
    //     console.log(array[i]);
        
    // }


//  3. вывести на консоль  каждый третий елемент
//  но при условии что его значение является парным.
    // for (let i = 2; i < array.length; i+=3) {
    //     if (array[i]%2 === 0) {
    //         console.log(array[i]);
    //     }
        
    // }
//  4. вывести на консоль  каждый третий елемент
//  но при условии что он имеет парное значение и
//  записать их в другой массив.

// let newArray = [];
// for (let i = 2; i < array.length; i+=3) {
//     if (array[i]%2 === 0) {
//         newArray.push(array[i])
//     }
    
// }
// console.log(newArray);

//  5. Вывести каждый елемент массива у которого соседний с права элемент - парный


//  5.1 масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. обрахувати середній чек.
    let array = [100,250,50,168,120,345,188];
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
       sum += array[i];
    }
    console.log(sum);

// 3 створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// 4 створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо об'єкт є числом,
//  додати його в інший масив
    // let array = ['car', 55, 85,'kart', false, 'green'];
    // let newArray =[];
    // for (let i = 0; i < array.length; i++) {
    //     if (typeof array[i] === 'number') {
    //        newArray.push(array[i]);
    //     }
    // }
    // console.log(newArray);
