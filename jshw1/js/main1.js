//присвоить каждому из следующих значений свою переменную: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false Вывести каждую при помощи console.log , alert, document.write
/* let word = 'hello';
    let kyrs = 'owu';
    let dom = 'com';
    let domain = 'ua';
    let one = 1;
    let dec = 10;
    let a = -999;
    let b = 123;
    let pi = 3.14;
    let c = 2.7;
    let solodki = 16;
    let pravda = true;
    let brehn = false;
    console.log(word);
    document.write(word);
    alert(word);
 */
//перевизначення
/* word = 'play';
    kyrs = 'java';
    dom = 'gov';
    domain = 'ua';
    one = 11;
    dec = 20;
    a = -65535;
    b = 255;
    pi = 4644;
    c = 45.5566;
    solodki = 18;
    pravda = 1;
    brehn = 0;
    console.log(word);
    document.write(a);
    alert(c); */
    //створити 3 const числові і техтові
    /* const oneoneone = 111;
    const min = -0.256;
    const max = 65535;
    const save = 'sd';
    const waga = 'weight';
    console.log(min);
    document.write(save);
    alert(waga); */
//ПІБ promt 3
/* let last_name =  prompt('What is your last_name');
    let first_name =  prompt('What is your first_name');
    let second_name =  prompt('What is your second_name');
    console.log(last_name);
    console.log(first_name);
    console.log(second_name);
    document.write(last_name);
    document.write(first_name);
    document.write(second_name);
    alert(last_name);
    alert(first_name);
    alert(second_name);
//- Взять переменные из задания 4 и сконкатенировать их в одной переменной person
    let person = last_name + first_name + second_name;
    console.log(person); */
// Взять задние 4 и 5 и применить его к ФИО всех членов своей семьи
//father
/* let father_last_name =  prompt('What is my father last_name');
let father_first_name =  prompt('What is my father first_name');
    let father_second_name =  prompt('What is my father second_name');
    console.log(father_last_name);
    console.log(father_first_name);
    console.log(father_second_name);
    document.write(father_last_name);
    document.write(father_first_name);
    document.write(father_second_name);
    alert(father_last_name);
    alert(father_first_name);
    alert(father_second_name);
    let father_person = father_last_name + father_first_name + father_second_name;
    console.log(father_person);
    //mother
    let mother_last_name =  prompt('What is my mother last_name');
    let mother_first_name =  prompt('What is my mother first_name');
    let mother_second_name =  prompt('What is my mother second_name');
    console.log(mother_last_name);
    console.log(mother_first_name);
    console.log(mother_second_name);
    document.write(mother_last_name);
    document.write(mother_first_name);
    document.write(mother_second_name);
    alert(mother_last_name);
    alert(mother_first_name);
    alert(mother_second_name);
    let mother_person = mother_last_name + mother_first_name + mother_second_name;
    console.log(mother_person);
 */
//- при помощи prompt() получить 3 числа. Привести их к числовому типу при помощи +. вывести их в консоль.
    /* let num1 = +prompt('Enter number1')
    let num2 = +prompt("Enter number2");
    let num3 = +prompt('Enter number3');
    console.log(num1, num2, num3);
     */
//- при помощи prompt() получить 4 числа. Привести их к числовому типу при помощи parseInt. Сложить их между собой записав результат в переменную result и вывести в консоль браузера

    /* let num1 = parseInt(prompt('Enter number1'))
    let num2 = parseInt(prompt("Enter number2"));
    let num3 = parseInt(prompt('Enter number3'));
    let num4 = parseInt(prompt('Enter number4'));

    let result = num1 + num2 + num3 + num4;
    console.log('------!!!-------');
    console.log(result); */

//- при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
    /* let num1 = parseFloat(prompt('Enter number1'));
    let num2 = parseFloat(prompt("Enter number2"));
    let num3 = parseFloat(prompt('Enter number3'));

    let result = num1 + num2 + num3;
    console.log(result) */

//- при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера

    // let float1 =prompt('enter float');
    // let float2 =prompt('enter float');
    // let float3 =prompt('enter float');
/*     let num1 = Math.round(prompt('enter float1'));
    let num2 = Math.round(prompt('enter float2'));
    let num3 = Math.round(prompt('enter float3'));

    let result = num1 + num2 + num3;
    console.log(result)  */

//- при помощи prompt()  получить 2 целых числа. Привести их к целочисленному типу. Первое число - это число которое будут возводить в степень. Второе число - это число которое является степенью. При помощи Math.pow возвести первое число в степень второго числа.

  /*   let num = prompt('enter num');
    let pow = prompt('pow');
    let result = Math.pow(num, pow);
    console.log(result); */

//- При помощи оператора опредеоения типа typeof определить типы следующих переменных и вывести их в консоль let a = 100; let b = '100'; let c = true; let d = undefined;

   /*  let a = 100;
    let b = '100';
    let c = true;
    let d = undefined;
    console.log(typeof(a));
    console.log(typeof(b));
    console.log(typeof(c));
    console.log(typeof(d)); */

//- Поставьте соответствующий оператор в выражениях что бы получился соответсвующий результат.
// В одинаковых выражениях в задании не использовать два одинаковых оператора.
// Каждое выражение вложить в свою переменную
//     5 < 6 -> true
//     5 > 6 -> false
//     5 == 6 -> false
//     5 === 6 -> false
//     10 == 10 -> true
//     10 >= 10 -> true
//     10 > 10 -> false
//     10 < 10 -> false
//     10 != 10 -> false
//     123 === '123' -> false
//     123 !== '123' -> true

// Дополнительно:
// - Посмотрев на следюующие выражения, скажите, каков будет вывод в консоль
// console.log(132 > 100 && 45 < 12 ); - false
// console.log(34 > 33 && 23 < 90 ); - true
// console.log(99 > 100 && 45 > 12 ); - false
// console.log(132 > 100 || 45 < 12 ); - true
// console.log(111 > 11 || 45 < 111 ); - true
// console.log((111 > 11 || 45 < 111) && (132 > 100 || 45 < 12) ); - true
// console.log((111 > 11 || 45 < 56) || (132 > 100 || 45 < 12) ); - true
// console.log((132 > 100 && 45 < 12 ) && (132 > 100 || 45 < 12 ) ); - false
// console.log((111 > 11 || 45 < 111) || (99 > 100 && 45 > 12 )); - true
// console.log(!!'-1'); - true
// console.log(!!-1); - true
// console.log(!!'0'); - true
// console.log(!!'null'); - false
// console.log(!!'undefined'); - false
// console.log(!!(3/'owu'));  - false
// console.log((111 > 11 || 45 < 111) ||  !!'0'); - true
// console.log((!!111 == !!11 || 45 < 111) && (99 > 100 && 45 > 12 )); - false

// CLASS

// 1.Определите переменные str, num, flag и txt со значениями «Привет», 123, true, «true».
//   При помощи оператора typeof убедитесь, что значения переменных принадлежат типам: string, number и  boolean.

    // let str = 'Привет';
    // let num = 123;
    // let flag = true;
    // let txt = 'true';
    // console.log(typeof(str), typeof(num), typeof(flag), typeof(txt))


// 2. Создайте переменные a1, a2, a3, a4, a5. При помощи математических операторов (сложение, вычитание и т.д.) найдите значения выражений:
    // let a1 = 5 + 3;
    // let a2 = 5 - 3;
    // let a3 = 5 * 3;
    // let a4 = 5 / 3;
    // let a5 = 5 % 3;
    // console.log(a1, a2, a3, a4, a5);


//     поместив результат каждого выражения в соответствующую переменную. Например, let a1 = 5 + 3.

// 3.  Создайте переменные a6, a7, a8, a9, a10. Поместите в них результат выражений:
//     let a6 = 5 % 3;
//     let a7 = 3 % 5;
//     let a8 = 5 + '3';
//     let a9 ='5' - 3;
//     let a10 = 75 + 'кг';

// 4. Напишите код, который находит площадь прямоугольника высота 23см. ( переменная height),
//   шириной 10см (переменная width), значение площади должно хранится в числовой переменной s.
    // let height = 23;
    // let width = 10;
    // let s = height * width;


// 5.  Напиши код, который находит объем цилиндра высотой 10м (переменная heightC) и диаметром основания 4м (dC),
// результат поместите в переменную v.
    //  let heightC = 10;
    //  let dC = 4;
    //  let pi = 3.14;
    //  v = pi * ((dC / 2)**2) * heightC;
    //  console.log(v);

// 6. У прямоугольного треугольника две стороны n (со значением 3) и m (со значением 4).
//   Найдите гипотенузу k по теореме Пифагора (нужно использовать функцию Math.pow(число, степень) или оператор возведения в степень ** ).

    // let n = 3;
    // let m = 4;
    // let k =Math.pow(n, 2) + Math.pow(m, 2);
    // console.log(k)


// 7. Напишите скрипт, который выводит "Hello world", создавши переменную str и выводить спомощью document.write, alert и console.log

    // let str = 'Hello world';
    // document.write(str);
    // alert(str);
    // console.log(str);

// 8. Вывести в окно браузера при помощи метода alert() следующие данные: Ваше ФИО, возраст, хобби (каждой на новой строки спомощью \n).

    // let name = 'Андрій';
    // let surename = 'Боднар';
    // let lastname = 'Андрійович';
    // let age = 23 ;
    // let hobby = 'cycling';
    // alert(name + '\n' + surename + '\n' + lastname + '\n' + age + '\n' + hobby); // Чому name перекреслений

// 9. Создать 4 переменные с использованием ключевого слова let с именами str1, str2, str3, concatenation.
//   Переменной str1 присвоить фразу ‘Кто ‘, str2 – ‘ты ‘, str3 – ‘такой?’
//   Локальной переменной concatenation присвоить результат конкатенации 3-х строк: str1, str2, str3.
//   Вывести в документ содержимое переменной concatenation спомощью document.write

    // let str1 = 'Кто ';
    // let str2 = 'ти ';
    // let str3 = 'такой';
    // let concatenation = str1 + str2 + str3;
    // document.write(concatenation);

// 10. Какие значения выведет в окно браузера следующий фрагмент кода?  и почему?
    // let str = "20";
    // let a = 5;
    // document.write(str + a + "<br/>"); 205
    // document.write(str - a + "<br/>");  15
    // document.write(str * "2" + "<br/>"); 40
    // document.write(str / 2 + "<br/>"); 10
// 11. Какие значения выведет в окно консоли следующий фрагмент кода если его поместить в console.log?
//      parseInt("3.14") 3
//      parseInt("-7.875") -7
//      parseInt("435"); 435
//      parseInt("Вася")); NaN

// 12.  С помощью окна ввода, вызываемого методом prompt, пользователь может ввести данные, которые будут использоваться далее, повторите код ниже
    //  let str = prompt("Enter something", "ho-ho")
    //  console.log(str);

// 13. С помощью окна ввода, вызываемого методом prompt, сделать сложение двух чисел, а вывод результата при помощи метода alert
    // let b = +prompt('enter number1');
    // let c = +prompt('enter number2');
    // alert(b + c);
// 14. С помощью окна ввода, вызываемого методом prompt, пользователь последовательно выводит имя, фамилию и возраст, а вам не обходимо вывести строку такого вида
//       Доброго вечера Иван Иванов, мои поздравления что вам 32 , а вывод результата при помощи метода alert
    /* let name =  prompt('What is myname');
    let surename  =  prompt('What is my surename');
    let age = prompt('What is my age');
    alert('Доброго вечера ' + name + surename + ', мои поздравления что вам ' + age); */

// =====================
// ======ДОП============
// =====================




// 1. Три різних числа вводяться через prompt().
// За допомоги if else вивести іх в порядку зростання. (відсортувати по зростанню)

// let a = +prompt("enter number");
// let b = +prompt("enter number");
// let c = +prompt("enter number");
// if (a < b && b < c) {
//     console.log(a, b, c);
// }   else if (b < a && a < c) {
//     console.log(b, a, c)
// }   else if (c < a && a < b)  {
//     console.log(c, a, b)
// }   else if (b < c && c < a)  {
//     console.log(b, c, a)
// }   else if (c < b && b < a)  {
//     console.log(c, b, a)
// }   else  {
//     console.log(a, c, b)
// }

//-------або---------
//  if (a > b && a > c) {
//      if (b > c) {
//          console.log(c, b, a);
//      } else {
//          console.log(b, c, a);
//      }

//     } else if (c > b && c > a) {
//         if (b > a) {
//             console.log(a, b, c);
//         } else {
//             console.log(b, a, c);
//         }

//     } else if (b > c && c > a) {
//         console.log(a, c, b);
//     } else {
//         console.log(c, a, b);
//     }
 // 2.
// Все параматры получаем с клавиатуры!!!!
// Имитируем поведение пешехода на перекстке.
// Если светофор зеленый - вывести "иди".
// Если светофор желтый - вывести "подожди".
// Если светофор красный - вывести "стой".
// Если светофор в аварийном режиме вывести "делай что хочешь"!

// let color = prompt("enter color");
// if (color == 'green') {
//     console.log('иди');
// } else if(color == 'yellow') {
//     console.log('подожди');
// } else if(color == 'red') {
//     console.log('стой');
// } else {
//     console.log('делай что хочешь');
// }



// 3
// Все параметры получаем с клавиатуры!!!!(prompt , confirm)
// Создать переменную isRoadClear которая характеризирует наличие на дороге машин.
// Улучшаем предыдущее задание.
// Если светофор зеленый и машин нет - вывести "иди".
// Если светофор зеленый и машины есть  - вывести подожди пока нарушители проедут".
// Если светофор желтый и машины есть - вывести "жди".
// Если светофор желтый и машин нет - вывести "все рано жди".
// Если светофор красный и машин нет- вывести "стой все рано".
// Если светофор красный - и машины есть вывести "стой и жди".
// Если светофор в аварийном режиме вывести "делай что хочешь"!