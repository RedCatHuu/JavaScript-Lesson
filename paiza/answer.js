// https://paiza.jp/works/mondai/data_structure/data_structure__dict_step1
// 0 以上 9 以下の整数が N 個与えられます。各数値の出現回数を求め、「0」の出現回数、「1」の出現回数、...「9」の出現回数、をこの順に半角スペース区切りで1行に出力してください。
// 入力例 1行目: "5", 2行目: "1 2 3 3 6". 出力例: "0 1 1 2 0 0 1 0 0 0"
// ダメな例として紹介されていたけどこれしか思いつかなかった。
let lines = ["5", "1 2 3 3 6"];
let n0=0, n1=0, n2=0, n3=0, n4=0, n5=0, n6=0, n7=0, n8=0, n9=0;
let ary = lines[1].split(" ");
for (let i = 0; i<lines[0]; i++){
    switch(parseInt(ary[i])){
        case 0:
            n0 += 1;
            break;
        case 1:
            n1 += 1;
            break;
        case 2:
            n2 += 1;
            break;
        case 3:
            n3 += 1;
            break;
        case 4:
            n4 += 1;
            break;
        case 5:
            n5 += 1;
            break;
        case 6:
            n6 += 1;
            break;
        case 7:
            n7 += 1;
            break;
        case 8:
            n8 += 1;
            break;
        case 9:
            n9 += 1;
            break;
    }
    
}
let sum = [];
sum.push(n0,n1,n2,n3,n4,n5,n6,n7,n8,n9);
let result = sum.join(" ");
console.log(result);

// chatgptに直してもらった。

// 長さが10の配列を作成し、各配列を0で初期化。
let counts = new Array(10).fill(0);
// "1 2 3 3 6"を配列にしたものを代入
let digits = lines[1].split(" ");

// digits[0]の場合、digitには1が入る。
for (let i = 0; i < lines[0]; i++) {
    let digit = parseInt(digits[i]);
    // counts[1]を加算
    counts[digit]++;
}

// Print the counts of each digit
console.log(counts.join(" "));


// 数字ではなく、英小文字
let nth = parseInt(lines[0]);
let charAry = Array.from(lines[1]);
let charCounts = new Array(26).fill(0);
for(let i = 0; i < nth; i++){
    for (let e = 0; e < 26; e++){
        if(charAry[i].charCodeAt(0) - 97 == e){
            charCounts[e]++;
            break;
        }
    }
}
let charResult = charCounts.join(" ");
console.log(charResult);

// AIに直してもらった
let charCounts = Array(26).fill(0);

for (let char of lines[1]) {
    let charCode = char.charCodeAt(0);
    if (charCode >= 97 && charCode <= 122) { // アルファベットの範囲内の場合のみ処理
        charCounts[charCode - 97]++; // 対応するインデックスの要素をインクリメント
    }
}

let charResult = charCounts.join(" ");
console.log(charResult);


// 各文字列の出現回数を文字列の辞書順に出力してください。lines = [5, "bcd", "abc", "bcd", "bcd", "bcd"]出力例1
// abc 1
// bcd 4

const ary = lines.slice(1);

// 連想配列で初期化
const counts = {};
ary.forEach(string => {
    // counts[string]がundefindまたはnullなら0を返す。最後に+1。すでにあるキーなら(例えば"bcd")、対応する値を呼び、+1
    counts[string] = (counts[string] || 0) + 1;
});

// countsオブジェクト内のすべてのキーを取り出し、ソート、
Object.keys(counts).sort().forEach(key => {
    console.log(key, counts[key]);
});