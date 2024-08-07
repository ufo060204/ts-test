// object 表示一個 js 對象
let a:object
a = {};
a = function(){};

// {} 用來指定對象中可以包含哪些屬性
// 語法: {屬姓名: 屬性值}
// 在屬性名後加上 ? 表示屬性是可選的
let b: {name:string, age?:number}
b = {name:'邦喬飛'};

// [propName:string]:any 表示任意類型的屬性
let c: {name:string, [propName:string]:any};
c = {name:'槍與玫瑰', age:18, gender:'男'};