// let resp= 0
// let resm = 0;
// for(let i = 1; i <=101; i+=2){
//   resp += i*i*i*i
// }
// console.log(resp)
// for( let i = 2; i <= 100; i+=2){
//   resm += i*i*i*i;
// }
// let res = resp - resm
// console.log(res)

// 文字列の置換
let strings = "Lemon Lemon Lemon";

// 先頭のLemonのみ置き換わる
let newStrings = strings.replace("Lemon", "Banana");
console.log(newStrings); // Banana Lemon Lemon

// 大文字小文字は区別するので、lemonだと置き換わらない。
newStrings = strings.replace("lemon", "Banana");
console.log(newStrings); // Lemon Lemon Lemon

// 正規表現で検索。g(グローバルマッチ)を使うことで、該当するすべてを抽出
newStrings = strings.replace(/Lemon/g, "Banana");
console.log(newStrings); // Banana Banana Banana

// 正規表現で検索。iを使うことで、大文字小文字を区別しない。
newStrings = strings.replace(/lemon/i, "Banana");
console.log(newStrings); // Banana Lemon Lemon

// 上2つの合わせ技
newStrings = strings.replace(/lemon/ig, "Banana");
console.log(newStrings); // Banana Banana Banana

newStrings = strings.replace(/[aeiou]/ig, "");
console.log(newStrings); // Lmn Lmn Lmn



// 文字列の切り出し
let strings2 = "イチゴメロンパン";
newStrings = strings2.substring(3, 6);
console.log(newStrings); // メロン

// 変数で処理
let [s, g] = [3, 6];
console.log( strings2.substring(s, g) );

// n番目の要素の置換
function replace(str, nth, w) {
  return str.slice(0, nth-1) + w + str.slice(nth);
}
console.log(replace("hello", 1, "H")); // Hello


// 3を"バカ"に置き換える
function generateString() {
    let result = '';
    for (let i = 1; i <= 50; i++) {
        if (i != 1) result += '-';
        if (i.toString().includes('3')) {
            result += i.toString().replace(/3/g, 'バカ');
        } else {
            result += i;
        }
    }
    return result;
}

console.log(generateString().substring(0, 30));



// 大文字小文字

// 全て小文字に変換
let strings3 = "HELLO";
console.log( strings3.toLowerCase() ); // hello

// 全て大文字に変換
strings3 = "hello";
console.log( strings3.toUpperCase() ); // HELLO

// 大文字化小文字か判断し、大文字なら小文字に、小文字なら大文字に変換
function replaceUL(str){
  let swappedStr = [...str].map(char => {
      if (char === char.toUpperCase()) {
          return char.toLowerCase();
      } else {
          return char.toUpperCase();
      }
    }).join('');
    return swappedStr;
  }
console.log( replaceUL("Hello World") ); // "hELLO wORLD"


// for of
let str = "a,b,c";
let newStr = str.split(",");
for(let c of newStr){
  console.log(c);
}
// a
// b
// c

// 切り取り
let date = "1212/12/12 12:12";
let y = date.substring(0, 4);
let M = date.substring(5, 7);
let d = date.substring(8, 10);
let h = date.substring(11, 13);
let m = date.substring(14);

console.log(y, M, d, h, m); // 1212 12 12 12 12

console.log( date.replace(" ", "/").replace(":", "/").split("/").join(" ") ); // 1212 12 12 12 12

// Leet
let str4 = "abcdefghijklmnopqrstuvwxyz";
let a = str4.replace(/a/ig, "4").replace(/e/ig, "3").replace(/g/ig, "6").replace(/i/ig, "1").replace(/o/ig, "0").replace(/s/ig, "5").replace(/z/ig, "2");
console.log(a); // 4bcd3f6h1jklmn0pqr5tuvwxy2

let replacements = {
  "a" : "4",
  "e" : "3",
  "g" : "6",
  "i" : "1",
  "o" : "0",
  "s" : "5",
  "z" : "2"
};

for ( let char in replacements){
  let regex = new RegExp(char, "ig");
  str4 = str4.replace(regex, replacements[char]);
}
console.log(str4); // 4bcd3f6h1jklmn0pqr5tuvwxy2

// 10進数をn進数に変換
let n = 11;
console.log( n.toString(2) ); // 1011
console.log( n.toString(3) ); // 102

// n進数を10進数に変換
n = "1011";
console.log( parseInt(n, 2) ); // 11
n = "102";
console.log( parseInt(n, 3) ); // 11

// 文字列を文字と数字に分ける
const typeAndScore = "bunkei 89 70 89 21";
const [type, ...scores] = typeAndScore.split(" ");
const [en, ja, so, ma] = scores.map(Number);
console.log(scores); // [ '89', '70', '89', '21' ]
console.log(type, en, ja, so, ma); // bunkei 89 70 89 21


// 文字コード
console.log( String.fromCharCode(97), String.fromCharCode(122) ); // a z
console.log( "A".charCodeAt(0), "Z".charCodeAt(0) ); // 65 90

// 文字をn文字ずらす
const str5 = "ABC";
const nmoji = 3;
const alfa = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let res = "";

// 右にnmojiずらす。
for(let item of str5){
  const index = alfa.indexOf(item);
  const newIndex = (index + nmoji ) % 26;
  res += alfa[newIndex];
}
console.log(res); // DEF

// 左にnmojiずらす
res = "";
for(let item of str5){
  const index = alfa.indexOf(item);
  const newIndex = (index - nmoji + 26 ) % 26;
  res += alfa[newIndex];
}
console.log( res ); // XYZ

// 文字の反転
console.log( "ABC".split("").reverse().join("") ); // CBA