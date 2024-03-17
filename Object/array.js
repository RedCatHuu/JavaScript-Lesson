let data = [1, 8, 5, 7, 2, 6, 7, 4, 0];

function push(){
  let r = Math.floor(Math.random() * 10);
  data.push(r);
  update(r);
  // push()の戻り値は、追加後の配列の長さとなる。以下だとpushした数ではなく、長さが
  // let v = Math.floor(Math.random() * 10);
  // let r = data.push(v)
}

//配列の最後の要素を削除
function pop(){
  let r = data.pop();
  update(r);
}

// 先頭の要素を削除
function shift(){
  let r = data.shift();
  update(r);
}

// splice(index, howMany) indexからhowMany個分の要素を削除
function splice(){
  let r = data.splice(3, 2);
  update(r);
}

function update(rval){
  document.getElementById("data").textContent = data;
  document.getElementById("length").textContent = data.length;
  document.getElementById("rval").textContent = rval;
  let v0 = data.indexOf(7);
  let v1 = data.lastIndexOf(7);
  document.getElementById("i0").textContent = v0;
  document.getElementById("i1").textContent = v1;
}


// 配列の結合
let num1 = [1, 2, 3, 4, 5];
let num2 = [4, 5, 6, 7];

let concatedAry = num1.concat(num2);
console.log(concatedAry); // [1, 2, 3, 4, 5, 4, 5, 6, 7]

let merged = [...num1, ...num2];
console.log(merged);  // [1, 2, 3, 4, 5, 4, 5, 6, 7]

num1.push(num2);
console.log(num1); // [ 1, 2, 3, 4, 5, [ 4, 5, 6, 7 ] ]

// 結合後の配列の重複を除去
let setAry = new Set(merged);
console.log(setAry); // Set(7) { 1, 2, 3, 4, 5, 6, 7 }

// setオブジェクトを配列にする
let reAry = Array.from(setAry);
console.log(reAry); // [1, 2, 3, 4, 5, 6, 7]

// aがfalseならaを返す、aがtrueならbを返す
// let [a, b] = [0, 0]
// let [a, b] = [0, 1] //0
// let [a, b] = [1, 0] // 0
// let [a, b] = [3, 0] // 0
let [a, b] = [3, 2] // 2
console.log(a && b)

// aがtrueならaを返す、aがfalseならbを返す
// let [c, d] = [0, 1] // 1
let [c, d] = [-2, 0] // 2
console.log(c || d)
console.log(c > d)

// 配列内要素の削除
var items = ['リンゴ', 'メロン', 'イチゴ', 'スイカ'];

//splice(開始位置, 要素数)
items.splice( 1, 1 );
console.log( items ); // [ 'リンゴ', 'イチゴ', 'スイカ' ]

// 第三引数を設定することで置換もできる
items.splice(1, 1, "ブドウ")
console.log(items); // [ 'リンゴ', 'ブドウ', 'スイカ' ]

// filter関数を使ったちょふくの削除
let nums = [3,2,2,4,8,8,8,6,9];
let filterdNums = nums.filter( (val, index, ary) => {
  console.log(ary.indexOf(val) + ":" + index)
})
/* 
0:0
1:1
1:2
4:4
4:5
4:6
7:7
8:8
val とindexが一致しているものだけを取り出せば重複を除去できる。*/

let nums2 = [3,2,2,4,8,8,8,6,9];
let filterdNums2 = nums2.filter( (val, index, ary) => {
  return ary.indexOf(val) == index
})
console.log(filterdNums2); // [ 3, 2, 4, 8, 6, 9 ]

let setNums = new Set(nums2) // Set(6) { 3, 2, 4, 8, 6, 9 }セット使うほうが早いけど
console.log(setNums)

// filterを使った特定の文字の削除
// 連続した"#"を削除している。
let strings = "##asg#gg###g#hh#g"
let simplifiedStrings = strings.split('').filter((char, index, ary) => char !== '#' || ary[index + 1] !== '#');
console.log( simplifiedStrings.join("") ); // #asg#gg#g#hh#g

// フィボナッチ数列
function fib(n) {
  const result = [0, 1]; 

  for (let i = 0; i < n - 1; i++) {
    const a = result[i];
    const b = result[i + 1];

    result.push(a + b);
  }
  return result
}

console.log(fib(4)[4])

// for of
let display = ["1st", "2nd", "3rd"]
for(let item of display){
  console.log(item)
}
// 1st
// 2nd
// 3rd

const ary = ["2 84 12", "35 69 37", "20 31 54", "2 3 49 34", "34"];

ary.forEach( (item) => {
  console.log(item);
});
/*2 84 12
35 69 37
20 31 54
2 3 49 34
34*/


ary.forEach((item, index) => {
    if (item.split(" ").every(num => parseInt(num) >= 20)) {
        console.log(index + ":" + item);
    }
});
// 1:35 69 37
// 2:20 31 54
// 4:34


