$(document).ready(function(){
var makeGrid = function(grid) {
  for (i = 0; i < grid*grid; i++) {
    $('#container').append('<div></div>');
  }
  $('#container').find('div').addClass('square');
  var gridSize = 16/grid;
  $('.square').width(gridSize + 'em');
  $('.square').height(gridSize + 'em');
  $('.square').hover(changeShade);
};
$('button').on('click', function(){
  $('#container').empty();
  grid = prompt("How many squares?");
  makeGrid(grid);
});
var changeShade = function() {
  var opacity = $(this).css('opacity');
  var minusOp = opacity - 0.1;
  var plusOp = opacity + 0.9;
  if (opacity > 0){
  $(this).css('opacity', minusOp);
} else {
  $(this).css('opacity', plusOp);
}
};
makeGrid(16);
});