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


