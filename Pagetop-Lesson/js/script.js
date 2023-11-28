$(function(){
  // back内のaタグがクリックされた時の処理$('#id名 要素名')
  $('#back a').on('click',function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});
