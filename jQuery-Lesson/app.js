// basic animation
// $(function(){
//   // $('.box1').slideDown(3000);
//   // $('.box1').slideUp(3000);
//   // $('.box1').show(500);
//   // $('.box1').css({'background-color': '#0000ff'});
//   // $('.box1').hide(3000);
//   $('.box1').slideDown(3000, function(){
//     $('.box1').css({
//       'background-color': 'blue',
//       'height': '100px',
//       'width': '200px'
//     }).slideUp(3000);
//   });
// });

// mouseover-1
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').css({'background-color': '#0000ff'});
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').css({'background-color': '#ff0000'});
//   })
// });

// mouseover-2
// $(function(){
//   $('.box1').mouseover(function(){
//     $('.box1').addClass('box1-ext');
//   })
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// onClick
// $(function(){
//   $('.box1').on('click', function(){
//     $('.box1').addClass('box1-ext');
//   });
//   $('.box1').mouseout(function(){
//     $('.box1').removeClass('box1-ext');
//   });
// });

// thisを使わない煩雑な式
// $(function(){
//   $('.bg1').on('click', function(){
//     $('.bg1').slideUp(500);
//   });
//   $('.bg2').on('click', function(){
//     $('.bg2').slideUp(500)
//   })
//   $('.bg3').on('click', function(){
//     $('.bg3').slideUp(500)
//   })
//   $('.bg4').on('click', function(){
//     $('.bg4').slideUp(500)
//   })
// })

// thisを使った短い式
// $(function(){
//   $('.box1').on('click', function(){
//     $(this).slideUp();
//   })
// })

$(function(){
  $('button').on('click', function(){
    $('ul').children().css('color','red');
  })
})