import "./lib/lib";

$('button').click(function() {
  $('div').eq(0).toggleClass('active');
});

$('div').click(function() {
  console.log($(this).index());
});

// console.log($('div').eq('3').find('.two'));

console.log($('.two').closest('.findmqqqe').addClass('test'));

// console.log($('.findme').siblings());