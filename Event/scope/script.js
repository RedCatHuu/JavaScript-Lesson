
// let strike = Math.floor(Math.random() * 3);
// window.onload = function (){
//   document.getElementById("card0").onclick = myHandler0;
//   document.getElementById("card1").onclick = myHandler1;
//   document.getElementById("card2").onclick = myHandler2;
//   document.getElementById("shuffle").onclick = shuffle;
// }

// function myHandler0(e){
//   if (strike == 0){
//     document.getElementById("card0").textContent = "〇";
//   }
// }

// function myHandler1(e){
//   if (strike == 1){
//     document.getElementById("card1").textContent = "〇";
//   }
// }

// function myHandler2(e){
//   if (strike == 2){
//     document.getElementById("card2").textContent = "〇";
//   }
// }

// function shuffle(e){
//   strike = Math.floor(Math.random() * 3);
//   document.getElementById("card0").textContent = "";
//   document.getElementById("card1").textContent = "";
//   document.getElementById("card2").textContent = "";
// }

// 別バージョン
let strike = Math.floor(Math.random() * 3);
window.onload = function(){
  document.getElementById("deck").onclick = myHandler;
};

function myHandler(e){
  let card0 = document.getElementById("card0");
  let card1 = document.getElementById("card1");
  let card2 = document.getElementById("card2");
  let shuffle = document.getElementById("shuffle");
  
  if (e.target == shuffle){
    strike = Math.floor(Math.random() * 3);
    card0.textContent = "";
    card1.textContent = "";
    card2.textContent = "";
  }
  
  if (
    (e.target == card0 && strike == 0) ||
    (e.target == card1 && strike == 1) ||
    (e.target == card2 && strike == 2)
  ){
      e.target.textContent = "〇";
  }
}