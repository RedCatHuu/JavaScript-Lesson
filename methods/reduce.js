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