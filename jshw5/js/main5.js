
// ==============================================
// -  Створити функцію конструктор для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

// function Tag(titleoftag, action, attrs) {

//     this.titleoftag = titleoftag || 'No titlle' ;
//     this.action = action || 'No action' ;
//     this.attrs = attrs || [] ;
// }

/* let title = '<a>';
let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.';
let attributes = [
    {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
    {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области'},
    {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
    
]; */

// let a = new Tag('a', '<a> предназначен для создания ссылок','href',
//     'Задает адрес документа, на который следует перейти',
//     'target','Имя окна или фрейма, куда браузер будет загружать документ')
// console.log(a);

// let div = new Tag('div', ' <div> является блочным элементом', 'align',
//     'Задает выравнивание содержимого тега <div>', 'title',
//     'Добавляет всплывающую подсказку к содержимому');
// console.log(div);

// let h1 = new Tag('h1','тег <h1> представляет собой наиболее важный заголовок первого уровня',
//     'align','Определяет выравнивание заголовка',);
// console.log(h1);

// let span = new Tag('span','Тег <span> предназначен для определения строчных элементов документа',
//     'dir','Задает направление и отображение текста — слева направо или справа налево',
//     'class','Определяет имя класса');
// console.log(span);

// let input = new Tag('input','<input> предназначен для создания текстовых полей, различных кнопок, переключателей и флажков',
//     'accept','Устанавливает фильтр на типы файлов, которые вы можете отправить через поле загрузки файлов',
//     'value','Значение элемента');
// console.log(input);

// let form = new Tag('form','Связывает поле с формой по её идентификатору');
// console.log(form);

// let option = new Tag('option','Тег <option> определяет отдельные пункты списка, создаваемого с помощью контейнера <select>',
//     'disabled','Заблокировать для доступа элемент списка',
//     'label','Указание метки пункта списка');
// console.log(option);

// let select = new Tag('select','Тег <select> позволяет создать элемент интерфейса в виде раскрывающегося списка',
//     'form','Связывает список с формой','required','Список обязателен для выбора перед отправкой формы');
// console.log(select);

// ==============================================
// -  Створити класс  для об'єкту який описує теги
// Властивості
//  -назва тегу
//  - опис його дій
//  - масив з атрибутами (2-3 атрибути максимум)
//  Кожен атрибут описати як окремий який буде містити
//  -назву атрибуту
//  -опис дії атрибуту
//  інформацію брати з htmlbook.ru

//  Таким чином описати теги
//  -a
//  -div
//  -h1
//  -span
//  -input
//  -form
//  -option
//  -select
//  Приклад результату
//    {
//         titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//         attrs: [
//         {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//         {/*some props and values*/},
//         {/*...*/},
//         {/*...*/},
//         ]

//    }
// ==============================================

// class Tag {
//     constructor(titleoftag, action, attrs){
//         this.titleoftag = titleoftag || 'No titlle' ;
//         this.action = action || 'No action' ;
//         this.attrs = attrs || [] ;
//     }

    
// };
// let title = '<a>';
// let action = 'Тег <a> является одним из важных элементов HTML и предназначен для создания ссылок. В зависимости от присутствия атрибутов name или href тег <a> устанавливает ссылку или якорь. Якорем называется закладка внутри страницы, которую можно указать в качестве цели ссылки. При использовании ссылки, которая указывает на якорь, происходит переход к закладке внутри веб-страницы.';
// let attributes = [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {titleOfAttr: 'coords', actionOfAttr: 'Устанавливает координаты активной области'},
//     {titleOfAttr: 'download', actionOfAttr: 'Предлагает скачать указанный по ссылке файл.'},
    
// ]; 

// let a = new Tag(title,action,attributes);
// console.log(a);
// ==============================================
//відео 12:28
// - Створити об'єкт car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car

// let car = {

//     model : 'Laguna',
//     produce : 'Renault',
//     yearofproduction : 2005,
//     maxSpeed : 220,
//     volumeEngine : 1600,
//     driver : '',
//     drive: function () {

//         console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);

//     },

//     info: function (){

//         console.log(`
//         model: ${this.model}  
//         produce: ${this.produce} 
//         yearofproduction: ${this.yearofproduction} 
//         maxSpeed: ${this.maxSpeed} 
//         volumeEngine: ${this.volumeEngine}
//         `);
//     },

//     increaseMaxSpeed: function (newSpeed){
//         this.maxSpeed += newSpeed;
//     },

//     changeYear: function (newValue) {
//         this.yearofproduction += newValue;
//     },

//     addDriver: function (newdriver) {
//         this.driver = newdriver;
//     }


// };
// car.changeYear(5);
// car.increaseMaxSpeed(20);
// car.info();
// car.drive();
// car.addDriver('Andriy');
//------------------------------------

// ==============================================
// CLASS

// ==============================================
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================

        volumeEngine : 1600,
        function Car(model,
            produce,
            yearofproduction,
            maxSpeed,
            volumeEngine,
            ) 
        {

        this.model = 'Laguna',
        this.produce = 'Renault',
        this.yearofproduction = 2005,
        this.maxSpeed = 220,
        this.volumeEngine = 1600,
        this.driver = '',
        this.drive = function () {
    
            console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`);
    
        },
    
        info: function (){
    
            console.log(`
            model: ${this.model}  
            produce: ${this.produce} 
            yearofproduction: ${this.yearofproduction} 
            maxSpeed: ${this.maxSpeed} 
            volumeEngine: ${this.volumeEngine}
            `);
        },
    
        increaseMaxSpeed: function (newSpeed){
            this.maxSpeed += newSpeed;
        },
    
        changeYear: function (newValue) {
            this.yearofproduction += newValue;
        },
    
        addDriver: function (newdriver) {
            this.driver = newdriver;
        }
    
    
    };
    car.changeYear(5);
    car.increaseMaxSpeed(20);
    car.info();
    car.drive();
    car.addDriver('Andriy');

    //27 хвилина пояснення длячого  if 
    
// ==============================================
// - Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль "їдемо зі швидкістю {максимальна швидкість} на годину"
// -- info () - яка виводить всю інформацію про автомобіль
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і доавляет його в поточний об'єкт car
// ==============================================


// ==============================================
// -створити класс попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
// -- за допоиоги циклу знайти яка попелюшка повинна бути з принцом
// ==============================================



// ==============================================
// -створити функцію конструктор попелюшка з полями ім'я, вік, розмір ноги
// --Створити 10 попелюшок , покласти їх в масив
// --Сторити об'єкт типу "принц" за допомоги функції конструктора з полями ім'я, вік, туфелька яку він знайшов, та функцію "пошук попелюшки"
// -- функція повинна приймати масив попелюшок, та шукає ту котра йому підходить
// ==============================================