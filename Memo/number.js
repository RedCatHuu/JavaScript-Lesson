const num = 123.4567;

// Precisionは整数部も含めたすべての桁数の指定。どっちも四捨五入
console.log( num.toPrecision(5) ); // 123.46
// Fixedは小数部の桁数の指定。
console.log( num.toFixed(2) ); // 123.46


// 有効数字
const num1 = 22;
console.log( num1.toPrecision(3) ); // 22.0
console.log( num1.toFixed(1) ); // 22.0


// 指定した桁数で小数部の切り捨てをできるメソッドはないため、いったん10n倍してから切り捨てる。
console.log( Math.floor(num*100) / 100 ); // 123.45

