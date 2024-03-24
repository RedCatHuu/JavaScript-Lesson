// オブジェクト(連想配列)の作成
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

const nameList = ["a", "b", "c", "d"];
let objNameList = {};
for(let item of nameList){
  objNameList[item] = 0;
}
console.log( objNameList); // { a: 0, b: 0, c: 0, d: 0 }


// 連想配列の合成
const objNameList2 = {e : 0, f : 0, g : 0}
const mergedNameList = Object.assign(objNameList, objNameList2);
console.log( mergedNameList ); // { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0 }

// コピー
// 単に代入でもできる。
const mnl = mergedNameList;
console.log(mnl); // { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0 }

// assignを使って代入することもできる。
const copiedObj = Object.assign( {}, mergedNameList );
console.log( copiedObj ); // { a: 0, b: 0, c: 0, d: 0, e: 0, f: 0, g: 0 }

// assignを使うことで、元のデータを操作したものを代入することができる。
