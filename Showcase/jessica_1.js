function doBackground(x, stage){

var r = 0;
var g = 0;
var b = 240;

var rect;
var i;

x = x % 720;

for (i = 0; i < 24; i++) {
  rect = new Rect(x, -50, 10, 850).fill("rgb(" + r + ',' + g + ',' + b + ')').addTo(stage);
  b -= 10;
  g += 10;
  x += 10;
  if (x > 720) {
    x = 0;
  }
  
  //rect.on('pointermove', clickResponse);
}

for (i = 0; i < 24; i++) {
  rect = new Rect(x, -50, 10, 850).fill("rgb(" + r + ',' + g + ',' + b + ')').addTo(stage);
  g -= 10;
  r += 10;
  x += 10;
  if (x > 720) {
    x = 0;
  }
  //rect.on('pointermove', clickResponse);
}

for (i = 0; i < 25; i++) {
  rect = new Rect(x, -50, 10, 850).fill("rgb(" + r + ',' + g + ',' + b + ')').addTo(stage);
  r -= 10;
  b += 10;
  x += 10;
  if (x > 720) {
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
