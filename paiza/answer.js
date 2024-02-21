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
    // counts[1]を
    counts[digit]++;
}

// Print the counts of each digit
console.log(counts.join(" "));