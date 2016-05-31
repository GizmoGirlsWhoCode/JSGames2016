function doBackground(x, stage){

var r = 0;
var g = 0;
var b = 250;

var rect;
var i;

x = x % 750;

for (i = 0; i < 50; i++) {
  new Arc(0, -50, x, 0, 1.57).stroke("rgb(" + r + ',' + g + ',' + b + ')', 10).addTo(stage); 
  b -= 5;
  g += 5;
  x += 5;
  if (x > 750) {
    x = 0;
  }
  
  //rect.on('pointermove', clickResponse);
}
b = 0;
g = 250;

for (i = 0; i < 50; i++) {
  new Arc(0, -50, x, 0, 1.57).stroke("rgb(" + r + ',' + g + ',' + b + ')', 10).addTo(stage); 
  g -= 5;
  r += 5;
  x += 5;
  if (x > 750) {
    x = 0;
  }
  //rect.on('pointermove', clickResponse);
}
g = 0;
r = 250;

for (i = 0; i < 50; i++) {
  new Arc(0, -50, x, 0, 1.57).stroke("rgb(" + r + ',' + g + ',' + b + ')', 10).addTo(stage); 
  r -= 5;
  b += 5;
  x += 5;
  if (x > 750) {
    x = 0;
  }
  //rect.on('pointermove', clickResponse);
}

}

//function clickResponse(e) {
  //doBackground(e.clientX, stage);
//}

var back = new Rect(0, -50, 790, 850).fill('#000000').addTo(stage);
//back.on('pointermove', clickResponse);

var masterX = 0;
function timeoutFunc() {
  masterX += 10;
  doBackground(masterX, stage);
  setTimeout(timeoutFunc,70);
}

timeoutFunc();
