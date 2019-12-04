var checktriangle = (side1,side2,side3) => {
  if (((side1+side2) <= side3) || ((side2+side3) <= side1) || ((side1+side3) <= side2)) {
  return false;
    } else {
  return true
    };
};

var checkequilateral = (side1,side2,side3) => {
  if(side1===side2 && side2 === side3) {
    return true
  } else {
    return false
  };
};

var checkisoceles = (side1,side2,side3) => {
  if(side1===side2 || side2 === side3 || side1 === side3) {
    return true
  } else {
    return false
  };
};

$(document).ready(function(){
  $("form#triangle").submit(function(){
    event.preventDefault();

    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());

    if (checktriangle(side1,side2,side3) !== true) {
      $("#triangletype").text("this is not a triangle.")
    } else if (checkequilateral(side1,side2,side3)) {
      $("#triangletype").text("this is an equilateral triangle.");
    } else if (checkisoceles(side1,side2,side3)) {
      $("#triangletype").text("this is an isoceles triangle.");
    } else {
      $("#triangletype").text("this is a scalene triangle!")
    }

    $("#output").show();

  });
});
