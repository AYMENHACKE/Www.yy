document.addEventListener("DOMContentLoaded", function() {
  var rectangles = document.getElementsByClassName("rectangle");

  for (var i = 0; i < rectangles.length; i++) {
    rectangles[i].addEventListener("click", function() {
      var randomColor = getRandomColor();
      this.style.backgroundColor = randomColor;
    });
  }

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
});


