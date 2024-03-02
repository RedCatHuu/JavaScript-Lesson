const numbers = [1,9,6,10,4];
// reduceメソッドはコールバック関数の返り値を次のループの累積地として合う買う。

// 配列内要素の合計
const sum = numbers.reduce((accumulator, currentValue) => {
  // 累積値に各要素を加算している。
  return accumulator + currentValue;
}, 0);
console.log(sum); // 30

// 最大値
const max = numbers.reduce((acc, val) => {
  // accには初期値か、maxの返り値が入っており、accとvalのどちらか大きいほうがt次のaccとなる。
  return Math.max(acc, val);
}, numbers[0]); // 初期値として配列の最初の要素を指定。
console.log(max); // 10

// 平均値
const average = numbers.reduce((acc, val, index, ary) => {
  acc += val;
  // indexが要素数に達したら平均値を出す。
  if(index == ary.length - 1){
    return acc / ary.length;
  }else{
    //現在の累積値を返す。
    return acc;
  }
}, 0); // 初期値は0
console.log(average); // 6

// 出現回数が最も多いものを表示。
const fruits = ["grape", "banana", "banana", "apple", "banana", "peach", "banana", "grape", "apple", "apple"]

const fruitsCounts = {}; // 連想配列
for (const item of fruits) {
    fruitsCounts[item] = (fruitsCounts[item] || 0) + 1;
}
// 累積値と現在の値を比べ、大きいほうを次の累積値とする
const most = Object.keys(fruitsCounts).reduce((acc, val) => fruitsCounts[acc] > fruitsCounts[val] ? acc : val);
console.log(most); // banana
console.log(fruitsCounts); // { grape: 2, banana: 4, apple: 3, peach: 1 }

// 最初はこう記述した。
let name = fruits
let ary = {};
for(let item of name){
    if( Object.keys(ary).includes(item) ){
        ary[item] += 1
    }else{
        ary[item] = 0
    }
}
let maxFruits = Object.values(ary).reduce( (acc, val) =>{
    return Math.max(acc, val);
}, 0)
const key = Object.keys(ary).find((key) => ary[key] == maxFruits)
console.log(key)