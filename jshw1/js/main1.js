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
   /*  let num1 = +prompt('Enter number1')
    let num2 = +prompt("Enter number2");
    let num3 = +prompt('Enter number3');
    let num4 = +prompt('Enter number4');
    parseInt(num1);
    parseInt(num2);
    parseInt(num3);
    parseInt(num4);
    let result = num1 + num2 + num3 + num4;
    console.log(result)
 */
//- при помощи prompt()  получить 3 числа с плавающей точекой. при помощи parseFloat привести их к соответсвующему типу. Сложить их между собой записав результат в переменную result и вывести в консоль браузера
/*     let num1 = +prompt('Enter number1')
    let num2 = +prompt("Enter number2");
    let num3 = +prompt('Enter number3');

    parseFloat(num1);
    parseFloat(num2);
    parseFloat(num3);

    let result = num1 + num2 + num3;
    console.log(result) */

//- при помощи prompt()  получить 3 числа с плавающей точекой. Округлить их при помощи Math.round Сложить их между собой записав результат в переменную  и вывести в консоль браузера

    let num1 = prompt('Enter number1')
    let num2 = prompt("Enter number2");
    let num3 = prompt('Enter number3');
    Math.round(num1);
    Math.round(num2);
    Math.round(num3);

    parseFloat(num1);
    parseFloat(num2);
    parseFloat(num3);

    console.log(num1, num2, num3);

    let result = num1 + num2 + num3;

    console.log(result);
