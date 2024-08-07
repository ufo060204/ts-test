// 也可以直接使用字面輛進行變數聲明
let d: 10;
// d = 12; // 此行會報錯，因為 d 的類型設置為 10，不能賦值為 12

// 可以使用 | 來連接多個類型(聯合類型)
let e: 'male' | 'female';
e = 'male';
e = 'female';
// e = 'hello'; // 此行會報錯，因為 e 的類型設置為 male 或 female，不能賦值為 hello

let f: boolean | string;
f = true;
f = 'hello';

// any 表示的是任意類型，一個變數設置為 any 類型後相當於對該變數關閉了 TS 的類型檢測
// 使用 ts 時，不建議使用 any 類型
// let g: any; // 顯示設置為 any 類型

// 宣告變數如果不指定類型，TS 解析器會自動判斷變數的類型為 any(隱式的 any)
let g; // 隱式的 any
g = 10;
g = 'hello';
g = true;

// unknown 表示未知類型的值
let h: unknown;
h = 10;
h = 'hello';
h = true;

let i: string;
// g 的值是 any 類型，可以賦值給任意變數
// i = g;
h = 'hello';
// i = h; // 此行會報錯，因為 h 的類型是 unknown，不能賦值給 i
// unknown 類型的變數不能直接賦值給其他變數
// unknown 實際上是安全類型的 any
if (typeof h === 'string') {
  i = h;
}

/* 
變數 as 類型
<類型>變數
*/
// 類型斷言，可以用來告訴解析器變數的實際類型
i = h as string;
i = <string>h;

// void 用來表示空，以函數為例，表示函數沒有返回值
// function fn(): void {
//   // return undefined;
//   console.log('hello');
// }

// never 表示永遠不會返回結果
function fn2(): never {
  throw new Error('報錯了');
}