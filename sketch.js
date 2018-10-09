var colors1 = ['#EDC951', '#eb6841', '#cc2a36', '#4f372d', '#03a0b0'];
var colors2 = ['#fe9601', '#cc0063', '#86269b', '#00d2f1', '#00b796'];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  //noLoop();
  frameRate(1);
}

function draw() {
  pattern();
}

function pattern() {

  for(var x = 0; x < width; x += 100) {
    for(var y = 0; y < height; y += 100) {

      var index = floor(random() * 5);
      if (mouseX > width/2){
        fill(colors1[index]);
      } else {
        fill(colors2[index]);
      }
      triangle(x, y, x, y+100, x+50, y+50);

      var index = floor(random() * 5);
      if (mouseX > width/2){
        fill(colors1[index]);
      } else {
        fill(colors2[index]);
      }
      triangle(x, y, x+100, y, x+50, y+50);

      var index = floor(random() * 5);
      if (mouseX > width/2){
        fill(colors1[index]);
      } else {
        fill(colors2[index]);
      }
      triangle(x+100, y, x+100, y+100, x+50, y+50);

      var index = floor(random() * 5);
      if (mouseX > width/2){
        fill(colors1[index]);
      } else {
        fill(colors2[index]);
      }
      triangle(x, y+100, x+100, y+100, x+50, y+50);
    }
  }
}
