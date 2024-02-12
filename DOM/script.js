var baseElement = document.getElementById("section-2");
// var section2node2 = baseElement.childNodes[4];
// section2node2.innerHTML = "子ノード2は変更されました";
var parentNode = baseElement.parentNode;
parentNode.removeChild(baseElement);