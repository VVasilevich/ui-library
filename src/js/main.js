import "./lib/lib";

$('button').click(function() {
  $('.findme').fadeOut(1300);
});

$('div').click(function() {
  console.log($(this).index());
});

// console.log($('div').eq('3').find('.two'));

// console.log($('.findme').siblings());

$('button').fadeIn(1300);