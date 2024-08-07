// 宣告一個變數 a 並指定其型別為 number
var a;
// a 的類型設置為 number ，在以後的使用過程中，a 的的值只能是 number
a = 10;
a = 20;
// a = 'hello'; // 此行會報錯，因為 a 的類型設置為 number，不能賦值為 string
var b;
b = 'hello';
// b = 123; // 此行會報錯，因為 b 的類型設置為 string，不能賦值為 number
// 宣告完變數後直接賦值
// let c: boolean = true;
// 如果宣告變數時直接賦值，TypeScript 可以自動對變數進行類型推斷
var c = true;
// js 中的函式是不考慮參數的類型和個數的
function sum(a, b) {
    return a + b;
}
console.log(sum(123, '456')); // 3
