// This is a test file for Bonsai.js.

function increase_score(amt) {
  if (typeof increase_score.score == 'undefined') {
    increase_score.score = 0;
    increase_score.text = new Text("").addTo(stage);
  }
  increase_score.score += amt;
  stage.removeChild(increase_score.text);
  increase_score.text = new Text("Your score is " + increase_score.score + ". Click the green rectangle to exit.").addTo(stage);
}

var redRect = bonsai.Path.rect(150, 150, 150, 150).attr({fillColor: 'red'});
stage.addChild(redRect);

redRect.on('click', function(){
    increase_score(1);
});

var blueRect = bonsai.Path.rect(250, 250, 250, 250).attr({fillColor: 'blue'});
stage.addChild(blueRect);

blueRect.on('click', function(){
    increase_score(-1);
});

var greenRect = bonsai.Path.rect(1, 1, 100, 100).attr({fillColor: 'green'});
stage.addChild(greenRect);

greenRect.on('click', function(){
    window.location.href = 'project.html';
});
