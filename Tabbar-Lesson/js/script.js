$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function(event){
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  event.preventDefault();
});
// 7行目で$()が2つあるのは、$(this).attr("href")の結果を$()で再び取得し、show()に渡しているから。