new Text('BonsaiJS, Crista Falk 2016').addTo(stage).attr({
  fontSize: '12px',
  x: 600,
  y: 650
});

var text = new Group().addTo(stage);
new Text('Pick either the heart or the awl:').addTo(text).attr({
  x: 743,
  y: 70,
  fontSize: '30px'
});

var players = new Group().addTo(stage);
new Text('P1').addTo(players).attr({
  x: 858,
  y: 300,
  textFillColor: 'red',
  fontSize: '30px'
});

new Text('P2').addTo(players).attr({
  x: 1080,
  y: 300,
  textFillColor: 'blue',
  fontSize: '30px'
});

//tic tac toe board
var board = new Group().addTo(stage);
new Rect(300, 80, 10, 460).fill("black").addTo(board);
new Rect(500, 80, 10, 460).fill("black").addTo(board);
new Rect(150, 200, 500, 10).fill("black").addTo(board);
new Rect(150, 400, 500, 10).fill("black").addTo(board);

//reset button at end of game
var reset = new Group().addTo(stage);
new Rect(350, 150, 600, 150).addTo(reset);

//heart piece
var heart = new Group().addTo(stage);
new Circle(850, 190, 25).fill("red").addTo(heart);
new Circle(890, 190, 25).fill("red").addTo(heart);
new Star(870, 210, 35, 4).fill("red").addTo(heart);

//awl piece
var awl = new Group().addTo(stage);
new Ellipse(1180, 200, 70, 5).fill("grey").addTo(awl);
new Circle(1080, 200, 25).fill('brown').addTo(awl);
new Circle(1105, 200, 20).fill('brown').addTo(awl);

var r1s1 = new Rect(150, 80, 150, 120).fill('white').addTo(board);
r1s1.isWhite = true;

var r1s2 = new Rect(310, 80, 190, 120).fill("white").addTo(board);
r1s2.isWhite = true;

var r1s3 = new Rect(510, 80, 140, 120).fill("white").addTo(board);
r1s3.isWhite = true;

var r2s1 = new Rect(150, 210, 150, 190).fill("white").addTo(board);
r2s1.isWhite = true;

var r2s2 = new Rect(310, 210, 190, 190).fill("white").addTo(board);
r2s2.isWhite = true;

var r2s3 = new Rect(510, 210, 140, 190).fill("white").addTo(board);
r2s3.isWhite = true;

var r3s1 = new Rect(150, 410, 150, 130).fill("white").addTo(board);
r3s1.isWhite = true;

var r3s2 = new Rect(310, 410, 190, 130).fill("white").addTo(board);
r3s2.isWhite = true;

var r3s3 = new Rect(510, 410, 140, 130).fill("white").addTo(board);
r3s3.isWhite = true;

//blank spaces within board
var squares = [r1s1, r1s2, r1s3, r2s1, r2s2, r2s3, r3s1, r3s2, r3s3];
var hor_row1 = [r1s1, r1s2, r1s3];
var hor_row2 = [r2s1, r2s2, r2s3];
var hor_row3 = [r3s1, r3s2, r3s3];
var vert_row1 = [r1s1, r2s1, r3s1];
var vert_row2 = [r1s2, r2s2, r3s2];
var vert_row3 = [r1s3, r2s3, r3s3];
var desc_row = [r1s1, r2s2, r3s3];
var asc_row = [r3s1, r2s2, r1s3];
var rows = [hor_row1, hor_row2, hor_row3, vert_row1, vert_row2, vert_row3, desc_row, asc_row];

function win(line) {
 var j;
  for (j = 0; j < 3; j++) {
    if (line[j].isWhite !== true) {
      line.finishedRow = true;
    }
  }
  
}



//win(hor_row1);

board.on('multi:pointerdown', function(e) {
    x = this.attr('x');
    y = this.attr('y');
});

board.on('multi:drag', function(e){
  this.attr({
    x: x + e.diffX,
    y: y + e.diffY 
  });
  heart.attr({
    x: x + e.diffX,
    y: y + e.diffY
  });
  awl.attr({
    x: x + e.diffX,
    y: y + e.diffY
  });
  text.attr({
    x: x + e.diffX,
    y: y + e.diffY
  }); 
  players.attr({
    x: x + e.diffX,
    y: y + e.diffY
  }); 
});

//playing as the heart
heart.on('click', function(){
  stage.removeChild(text);
  text = new Text('Your move, heart.').addTo(stage).attr({
    x: 900,
    y: 500,
    textFillColor: 'black',
    fontSize: '30px'
  });

  if (r1s1.isWhite === true) {
    r1s1.on('mouseover', function() {
     this.fill('red');
    });
    r1s1.on('mouseout', function() {
      this.fill('white');
    });
    r1s1.on('click', function() {
      this.on('mouseout', function() {
        this.fill('red');
        r1s1.isWhite = false;
        this.isRed = true;
      });
    });
  }
  
  if (r1s2.isWhite === true) {
    r1s2.on('mouseover', function() {
      this.fill('red');
    });
    r1s2.on('mouseout', function() {
      this.fill('white');
    });
    r1s2.on('click', function() {
      this.on('mouseout', function() {
        this.fill('red');
        r1s2.isWhite = false;
        this.isRed = true;
      });
    });
  }
  
  if (r1s3.isWhite === true) {
    r1s3.on('mouseover', function() {
      this.fill('red');
    });
    r1s3.on('mouseout', function() {
      this.fill('white');
    });
    r1s3.on('click', function() {
      this.on('mouseout', function() {
        this.fill('red');
        r1s3.isWhite = false;
        this.isRed = true;
      });
    });
  }
  
  if (r2s1.isWhite === true) {
    r2s1.on('mouseover', function() {
      this.fill('red');
    });
    r2s1.on('mouseout', function() {
      this.fill('white');
    });
    r2s1.on('click', function() {
      this.on('mouseout', function() {
        this.fill('red');
        r2s1.isWhite = false;
        this.isRed = true;
      });
    });
  }
  
  if (r2s2.isWhite === true) {
    r2s2.on('mouseover', function() {
      this.fill('red');
    });
    r2s2.on('mouseout', function() {
      this.fill('white');
    });
    r2s2.on('click', function() {
      this.on('mouseout', function() {
        this.fill('red');
        r2s2.isWhite = false;
        this.isRed = true;
      });
    });
  }
  
  if (r2s3.isWhite === true) {
    r2s3.on('mouseover', function() {
      this.fill('red');
    });
    r2s3.on('mouseout', function() {
      this.fill('white');
    });
    r2s3.on('click', function() {
      this.on('mouseout', function() {
        this.fill('red');
        r2s3.isWhite = false;
        this.isRed = true;
      });
    });
  }
  
  if (r3s1.isWhite === true) {
    r3s1.on('mouseover', function() {
      this.fill('red');
    });
    r3s1.on('mouseout', function() {
      this.fill('white');
    });
    r3s1.on('click', function() {
      this.on('mouseout', function() {
        this.fill('red');
        r3s1.isWhite = false;
        this.isRed = true;
      });
    });
  }
  
  if (r3s2.isWhite === true) {
    r3s2.on('mouseover', function() {
      this.fill('red');
    });
    r3s2.on('mouseout', function() {
      this.fill('white');
    });
    r3s2.on('click', function() {
      this.on('mouseout', function() {
        this.fill('red');
        r3s2.isWhite = false;
        this.isRed = true;
      });
    });
  }
  
  if (r3s3.isWhite === true) {
    r3s3.on('mouseover', function() {
      this.fill('red');
    });
    r3s3.on('mouseout', function() {
      this.fill('white');
    });
    r3s3.on('click', function() {
      this.on('mouseout', function() {
        this.fill('red');
        r3s3.isWhite = false;
        this.isRed = true;
      });
    });
  }
});

//playing as the awl
awl.on('click', function() {
  stage.removeChild(text);
  text = new Text('Your move, awl.').addTo(stage).attr({
    x: 900,
    y: 500,
    textFillColor: 'black',
    fontSize: '30px'
  });

  if (r1s1.isWhite === true) {
    r1s1.on('mouseover', function() {
      this.fill('blue');
    });
    r1s1.on('mouseout', function() {
      this.fill('white');
    });
    r1s1.on('click', function() {
      this.on('mouseout', function() {
        this.fill('blue');
        r1s1.isWhite = false;
        this.isBlue = true;
      });
    });
  }
  
  if (r1s2.isWhite === true) {  
    r1s2.on('mouseover', function() {
      this.fill('blue');
    });
    r1s2.on('mouseout', function() {
      this.fill('white');
    });
    r1s2.on('click', function() {
      this.on('mouseout', function() {
        this.fill('blue');
        r1s2.isWhite = false;
        this.isBlue = true;
      });
    });
  }
  
  if (r1s3.isWhite === true) {
    r1s3.on('mouseover', function() {
      this.fill('blue');
    });
    r1s3.on('mouseout', function() {
      this.fill('white');
    });
    r1s3.on('click', function() {
      this.on('mouseout', function() {
        this.fill('blue');
        r1s3.isWhite = false;
        this.isBlue = true;
      });
    });
  }
  
  if (r2s1.isWhite === true) {
    r2s1.on('mouseover', function() {
      this.fill('blue');
    });
    r2s1.on('mouseout', function() {
      this.fill('white');
    });
    r2s1.on('click', function() {
      this.on('mouseout', function() {
        this.fill('blue');
        r2s1.isWhite = false;
        this.isBlue = true;
      });
    });
  }
  
  if (r2s2.isWhite === true) {
    r2s2.on('mouseover', function() {
      this.fill('blue');
    });
    r2s2.on('mouseout', function() {
      this.fill('white');
    });
    r2s2.on('click', function() {
      this.on('mouseout', function() {
        this.fill('blue');
        r2s2.isWhite = false;
        this.isBlue = true;
      });
    });
  }
  
  if (r2s3.isWhite === true) {
    r2s3.on('mouseover', function() {
      this.fill('blue');
    });
    r2s3.on('mouseout', function() {
      this.fill('white');
    });
    r2s3.on('click', function() {
      this.on('mouseout', function() {
        this.fill('blue');
        r2s3.isWhite = false;
        this.isBlue = true;
      });
    });
  }
  
  if (r3s1.isWhite === true) {
    r3s1.on('mouseover', function() {
      this.fill('blue');
    });
    r3s1.on('mouseout', function() {
      this.fill('white');
    });
    r3s1.on('click', function() {
      this.on('mouseout', function() {
        this.fill('blue');
        r3s1.isWhite = false;
        this.isBlue = true;
      });
    });
  }
  
  if (r3s2.isWhite === true) { 
    r3s2.on('mouseover', function() {
      this.fill('blue');
    });
    r3s2.on('mouseout', function() {
      this.fill('white');
    });
    r3s2.on('click', function() {
      this.on('mouseout', function() {
        this.fill('blue');
        r3s2.isWhite = false;
        this.isBlue = true;
      });
    });
  }
  
  if (r3s3.isWhite === true) {
    r3s3.on('mouseover', function() {
      this.fill('blue');
    });
    r3s3.on('mouseout', function() {
      this.fill('white');
    });
    r3s3.on('click', function() {
      this.on('mouseout', function() {
        this.fill('blue');
        r3s3.isWhite = false;
        this.isBlue = true;
      });
    });
  }
});
