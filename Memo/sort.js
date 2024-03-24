
// 文字列のsort
const strArr = ["ab", "pg", "hi", "cj"];
console.log( strArr.sort() ); // [ 'ab', 'cj', 'hi', 'pg' ]
console.log( strArr.sort().reverse() ); // [ 'pg', 'hi', 'cj', 'ab' ]

// 数字のsort
const numArr = [20, 2, 1, 123, 30, 5];
console.log( numArr.sort() ); // [ 1, 123, 2, 20, 30, 5 ]
console.log( numArr.sort().reverse() ); // [ 5, 30, 20, 2, 123, 1 ]

console.log( numArr.sort( (a, b) => a - b) ); // [ 1, 2, 5, 20, 30, 123 ]
console.log( numArr.sort( (a, b) => b - a) ); // [ 123, 30, 20, 5, 2, 1 ]


// 連想配列の作成
const modelArray = ["A 70", "B 30", "C 5", "D 90"];
const objArr = [];

for (let i = 0; i < modelArray.length; i++) {
    const [name, score] = modelArray[i].split(' ');
    // 連想配列もpushで足していけるのね。
    objArr.push({ name: name, score: parseInt(score) });
}
console.log(objArr);
/* [
  { name: 'A', score: 70 },
  { name: 'B', score: 30 },
  { name: 'C', score: 5 },
  { name: 'D', score: 90 }
] */


// 連想配列のsort
function sortByScore(array){
  // = array.slice()がないと元の変数まで順番が変わってしまう。 = arrayでもだめ。
  const newArray = array.slice();
  return newArray.sort( (a, b) => a.score - b.score);
}
console.log( sortByScore(objArr) );
/*[
  { name: 'C', score: 5 },
  { name: 'B', score: 30 },
  { name: 'A', score: 70 },
  { name: 'D', score: 90 }
] */

// nameで降順
objArr.sort( (a, b) => {
  if(a.name < b.name) return 1;
  if(a.name > b.name) return -1;
  return 0;
});
console.log( objArr );
/*[
  { name: 'D', score: 90 },
  { name: 'C', score: 5 },
  { name: 'B', score: 30 },
  { name: 'A', score: 70 }
]*/

// nameで昇順
objArr.sort( (a, b) => {
  if(a.name < b.name) return -1;
  if(a.name > b.name) return 1;
  return 0;
});
console.log( objArr );
/*[
  { name: 'A', score: 70 },
  { name: 'B', score: 30 },
  { name: 'C', score: 5 },
  { name: 'D', score: 90 }
]*/


// 配列内文字列の数字でsort
function sortNumber(array){
  const newArray = array.slice();
  return newArray.sort((a, b) => {
        const numA = parseInt(a.match(/\d+$/)[0]);
        const numB = parseInt(b.match(/\d+$/)[0]);
        return numA - numB;
    });
}
console.log(sortNumber(modelArray)); // [ 'C 5', 'B 30', 'A 70', 'D 90' ]
console.log(modelArray); // [ 'A 70', 'B 30', 'C 5', 'D 90' ]


// 連想配列のsort
let obj2 = {
    'Apple' : 50,
    'Banana' : 80,
    'Cherry' : 50,
    'Orange' : 60,
    'Melon' : 100,
};

//キーを含んだ配列に変換 オブジェクト⇒配列
let array = Object.keys(obj2).map((key)=>({ key: key, value: obj2[key] }));

//値段順
array.sort((a, b) => a.value - b.value);

//配列⇒オブジェクト　で元に戻す
obj2 = Object.assign({}, ...array.map((item) => ({
    [item.key]: item.value,
})));

console.log(obj2); // { Apple: 50, Cherry: 50, Orange: 60, Banana: 80, Melon: 100 }

// ただしキーが数値の場合はsortしてくれない。
var obj3 = {"1": 2, "2": 10, "3": 1, "4": 0, "5": 20 };
array = Object.keys(obj3).map((key)=>({ key: key, value: obj3[key] }));
array.sort((a, b) => a.value - b.value);
obj3 = Object.assign({}, ...array.map((item) => ({
    [item.key]: item.value,
})));
console.log(obj3); // { '1': 2, '2': 10, '3': 1, '4': 0, '5': 20 }

// キーに文字を追加するとうまくいく。
array = Object.keys(obj3).map((key)=>({ key: key, value: obj3[key] }));
array.sort((a, b) => a.value - b.value);
obj3 = Object.assign({}, ...array.map((item) => ({
  // 以下のように、文字列を加えないとうまく配列を作ってくれない。item.key.toString()としてもダメ。
    [item.key + "番"]: item.value
})));
console.log(obj3); // { '4番': 0, '3番': 1, '1番': 2, '2番': 10, '5番': 20 }


// "番"をとって再び連想配列を作ると元に戻る。
let obj4 = {};
for (let key of Object.keys(obj3)) {
  let newKey = key.replace(/番/g, "");
  obj4[newKey] = obj3[key];
}
console.log(obj4); 
//{ '1': 2, '2': 10, '3': 1, '4': 0, '5': 20 } となる。なぜ？


let obj5 = [
  { num: '1', score: 70 },
  { num: '2', score: 30 },
  { num: '3', score: 5 },
  { num: '4', score: 90 },
  { num: '5', score: 45},
  { num: '6', score: 62}
];
console.log( sortByScore(obj5) );
/*[
  { num: '3', score: 5 },
  { num: '5', score: 45 },
  { num: '6', score: 62 },
  { num: '1', score: 70 },
  { num: '4', score: 90 }
]*/

// scoreを基準にsortする分にはもう一つのキーが数値でも問題なさそう。
let obj6 = [
  { 1: '1', score: 70 },
  { 2: '2', score: 30 },
  { 3: '3', score: 5 },
  { 4: '4', score: 90 },
  { 5: '5', score: 45},
  { 6: '6', score: 62}
];
console.log( sortByScore(obj6) );
/*[
  { '3': '3', score: 5 },
  { '5': '5', score: 45 },
  { '6': '6', score: 62 },
  { '1': '1', score: 70 },
  { '4': '4', score: 90 }
]*/