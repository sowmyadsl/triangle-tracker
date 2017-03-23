var determineTriangleType = function(side1, side2, side3) {
  var triangleType = '';
  if (side1 === side2 && side1 === side3) {
    triangleType = 'equilateral';
  } else if (side1 === side2 || side1 === side3 || side2 === side3) {
    triangleType = 'isosceles';
  } else if (!(side1 === side2) && !(side1 === side3) && !(side2 === side3)) {
    triangleType = 'scalene';
  } else {
    triangleType = 'totally not a triangle';
  }
  return triangleType;
}

$(document).ready(function() {
  $('form').submit(function(e) {
    e.preventDefault();

    var side1 = parseInt($('#side1').val());
    var side2 = parseInt($('#side2').val());
    var side3 = parseInt($('#side3').val());
    var triangleType = determineTriangleType(side1, side2, side3);
    $('#result p').text('Your triangle is ' + triangleType);
  });
});
