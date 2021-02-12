// - создать 5 объектов. В каждом объекте не менее 3х полей. Все объекты разные по набору полей. (Т.е поле name  должно присутствовать только 1 раз в одном объекте )

    // let user = {
    //     name1212: 'Andriy',
    //     age:23,
    //     status:'true',
    // };

    // let lviv = {
    //     area: 182,
    //     people: 'ukrainian',
    //     cash:'hryvnia',
    // };
    // let dog = {
    //     nikname: 'barbos',
    //     poroda:'Shepherd',
    //     weight: 20,
        
    // };
    // let ktm = {
    //     successor: 'KTM 690 endurro',
    //     fuelCapacity:'28l',
    //     weightbike: 130,
        
    // };
    // let ElonMusk = {
    //     education: 'Queen University',
    //     citizenship:'South Africa',
    //     weight: 20,
        
    // };
    // - создать 5 объектов с полностью разным набором полей. В каждом объекте должен присутсвовать массив и внутренний объект. Опишите что угодно, машину, картину, болт... Пример : let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
    // let man = { name: 'kokos', skills : ['java','js'] , wife: { name: 'cherry' } };
    // let renault = {same_name : 'laguna', color : ['black','silver'] , engine: { turbo: '825hp' } };
    // let audi = { type: 'sedan', comfort : ['a/c','airbag'] , audio: { blackpunkt: 'gta1' } };
    // let makaron =   { nik: 'rosana',  price : ['lowcash','hightcash'] , typemakaron: { pasta: 'Corkscrews' } };
    // let motosport = { sport_name: 'enduro', class : ['125hp','250hp'] , bikes: { stroke2T: 'Husaberg' } };
    // - При помощи for in вывести все ключи всех объектов из задания 1 и 2
    
//     for (const key in user) {
//         console.log('key :>> ', key);        
//     }
    
//     for (const key in lviv) {
//         console.log('key :>> ', key);        
//     }
    
//     for (const key in dog) {
//         console.log('key :>> ', key);        
//     }
    
//     for (const key in ktm) {
//         console.log('key :>> ', key);        
//     }
    
//         for (const key in ElonMusk) {
//             console.log('key :>> ', key);        
//     }
    
//     for (const key in man) {
//         console.log('key :>> ', key);        
//     }
    
//     for (const key in renault) {
//         console.log('key :>> ', key);        
//     }
    
//     for (const key in audi) {
//         console.log('key :>> ', key);        
// }

//     for (const key in makaron) {
//         console.log('key :>> ', key);        
// }

//     for (const key in motosport) {
//         console.log('key :>> ', key);        
// }


// - При помощи Object.keys вывести все ключи всех объектов из задания 1 и 2

// let key = Object.keys(user)
// console.log('key :>> ', key);
//-------або можна коротше--------//
// console.log(Object.keys(user));
// console.log(Object.keys(lviv));
// console.log(Object.keys(dog));
// console.log(Object.keys(ktm));
// console.log(Object.keys(ElonMusk));
// console.log(Object.keys(man));
// console.log(Object.keys(makaron));
// console.log(Object.keys(renault));
// console.log(Object.keys(audi));
// console.log(Object.keys(motosport));


// - Создать массив из 10 объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет. (Значаения полей могу быть выдуманными)

// let cars = [
//     {model : 'Laguna', yearOfproduction : 2001 , powerEngine : 145 ,color : ['black','green']  },
//     {model : 'Megan', yearOfproduction : 2003 , powerEngine : 200 ,color : ['yellow','grey']  },
//     {model : 'focus', yearOfproduction : 2005 , powerEngine : 180 ,color : ['black','yellow']  },
//     {model : '308', yearOfproduction : 2006 , powerEngine : 145 ,color : ['green','silver']  },
//     {model : 'Passat', yearOfproduction : 2008 , powerEngine : 180 ,color : ['white','green']  },
//     {model : 'Corola', yearOfproduction : 2007 , powerEngine : 280 ,color : ['white','grey']  },
//     {model : 'RAV-4', yearOfproduction : 2009 , powerEngine : 180 ,color : ['yellow','silver']  },
//     {model : 'Slavuta', yearOfproduction : 2010 , powerEngine : 280 ,color : ['black','green']  },
//     {model : 'Lanos', yearOfproduction : 2002 , powerEngine : 100 ,color : ['blue','grey']  },
//     {model : 'Golf', yearOfproduction : 2003 , powerEngine : 180 ,color : ['green','swhite']  },
    
// ]
// - Создать массив объектов cities и заполнить его объектами с полями название, популяция, страна, регион. (Значаения полей могу быть выдуманными)
// let cities = [
//     {name : 'ua', population : 47000000 , country : 'Ukraine' ,region : 'Kyiv'},
//     {name : 'pl', population : 1999 , country : 'Poland' ,region : 'Lodz'},
//     {name : 'us', population : 5001222 , country : 'USA' ,region : 'New York'},
//     {name : 'de', population : 25000 , country : 'Germany' ,region : 'Berlin'},
//     {name : 'ch', population : 202 , country : 'China' ,region : 'Pekin'},
// ]

 
// - Создать массив объектов cars и заполнить его машинами с полями модель, год выпуска, мощность, цвет, водитель. Водитель является отдельным объектом с полями имя, возраст, пол, стаж.

let cars = [
    {model : 'Laguna', yearOfproduction : 2001 , powerEngine : 145 ,color : ['black','green'], driver : {name : 'Andriy', age : 23, sex : "female", drivingExperience : 1}  },
    {model : 'Megan', yearOfproduction : 2003 , powerEngine : 200 ,color : ['yellow','grey'], driver : {name : 'Pasha', age : 43, sex : "female", drivingExperience : 10}  },
    {model : 'focus', yearOfproduction : 2005 , powerEngine : 180 ,color : ['black','yellow'], driver : {name : 'Yaroslav', age : 27, sex : "female", drivingExperience : 12}  },
    {model : '308', yearOfproduction : 2006 , powerEngine : 145 ,color : ['green','silver'], driver : {name : 'Olia', age : 28, sex : "male", drivingExperience : 5}  },
    {model : 'Passat', yearOfproduction : 2008 , powerEngine : 180 ,color : ['white','green'], driver : {name : 'Iana', age : 33, sex : "male", drivingExperience : 18}  },
]

// - проитерировать каждый массив из задания 5,6,7 при помощи while.
// - проитерировать каждый массив из задания 5,6,7 при помощи for .
// - проитерировать каждый массив из задания 5,6,7 при помощи  for of.
// - взять объекты из задания 1 и превратить каждый в json.
// - взять json из задания 11 и превратить их обратно в объекты.
// - взять массив из задания 5,в цикле перебрать его объекты превратив их в json .
// - взять массив из задания 6,в цикле перебрать его объекты превратив их в json .
// - взять массив из задания 7,в цикле перебрать его объекты превратив их в json и сразу скоприовать в новый массив.
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills
// - Создать массив пользователей. У каждого пользователя обязательно должено быть поле skills которое является массивом. Проитерировать массив пользователей и в каждом пользователе проитерировать его массив skills. Скопировать все skills всех пользователей в отедльный массив

// - За допомогою 2х циклів циклів проітеррувати  даний масив і масив кожного об'єкта.
//  let users = [{name: 'vasya', age: 31, status: false, skills: ['java', 'js']}, {name: 'petya', age: 30, status: true, skills: ['java', 'js', 'html']}, {name: 'kolya', age: 29, status: true, skills: ['mysql', ',mongo']}, {name: 'olya', age: 28, status: false, skills: ['java', 'js']}, {name: 'max', age: 30, status: true, skills: ['mysql', ',mongo']}];



// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості

//             			let users = [{
//             				name: 'vasya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
//             			}, {
//             				name: 'petya',
//             				age: 30,
//             				status: true,
//             				address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
//             			}, {
//             				name: 'kolya',
//             				age: 29,
//             				status: true,
//             				address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
//             			}, {
//             				name: 'olya',
//             				age: 28,
//             				status: false,
//             				address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
//             			}, {
//             				name: 'max',
//             				age: 30,
//             				status: true,
//             				address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
//             			}, {
//             				name: 'anya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
//             			}, {
//             				name: 'oleg',
//             				age: 28,
//             				status: false,
//             				address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
//             			}, {
//             				name: 'andrey',
//             				age: 29,
//             				status: true,
//             				address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
//             			}, {
//             				name: 'masha',
//             				age: 30,
//             				status: true,
//             				address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
//             			}, {
//             				name: 'olya',
//             				age: 31,
//             				status: false,
//             				address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
//             			}, {
//             				name: 'max',
//             				age: 31,
//             				status: true,
//             				address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
//             			}];


// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//             let usersWithId = [{id: 1, name: 'vasya', age: 31, status: false}, {id: 2, name: 'petya', age: 30, status: true}, {id: 3, name: 'kolya', age: 29, status: true}, {id: 4, name: 'olya', age: 28, status: false},];
//             let citiesWithId = [{user_id: 3, country: 'USA', city: 'Portland'}, {user_id: 1, country: 'Ukraine', city: 'Ternopil'}, {user_id: 2, country: 'Poland', city: 'Krakow'}, {user_id: 4, country: 'USA', city: 'Miami'},];
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// Записати цей об'єкт в новий масив
// Частковий приклад реультату:
// let usersWithCities = [{id: 1, name: 'vasya', age: 31, status: false, address: {user_id: 1, country: 'Ukraine', city: 'Ternopil'}}....]





// - створити розмітці блок з id, class та текстом в середені. Зчитати окремо цей текст з селекторів по id , class та тегу
// - змінити цей текст використовуючи селектори id, class,  tag
// - змінити висоту та ширину блоку використовуючи селектори id, class,  tag
// - за допомоги document.createElement та appendChild створити таблицю на 1 рядок з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та циклу створити таблицю на 10 рядків з трьома ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на 10 рядків з 5 ячейками всередені
// - за допомоги document.createElement, appendChild та 2х циклів створити таблицю на n рядків з m ячейками всередені. n та m отримати з prompt

// --Завантажити з мережі будь-який шаблон сайту. Підключити до нього свій скріпт-файл. У файлі прописати наступні доступи та дії
//  - знайти всі елементі, які мають class
//  - знайти всі параграфи ,та змінити текст на hello oktenweb!
//  - знайти всі div та змінити ім колір на червоний

// ============
// ====class===
// ============

// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
// створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
// Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.

// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
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




// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці).
// ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту