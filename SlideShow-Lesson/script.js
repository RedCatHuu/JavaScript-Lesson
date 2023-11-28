const swiper = new Swiper('.swiper', {
  // オプションの設定
  loop: true, //最後までスライドしたら最初の画像に戻る
  pagination: {
    el: '.swiper-pagination', 
  },
  navigation: {
    nextEl: '.swiper-button-next',
    pervEl: '.swiper-button-prev',
  }
})