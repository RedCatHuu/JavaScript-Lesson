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