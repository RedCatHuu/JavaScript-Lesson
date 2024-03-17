
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