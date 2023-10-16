import "./lib/lib";

$('button').click(function() {
  $(this).toggleClass('active');
});

$('button').click(function() {
  $(this).addAttr('data-test', 'test');
});