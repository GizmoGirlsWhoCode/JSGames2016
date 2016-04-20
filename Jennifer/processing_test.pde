// This is a test file for Processing.JS

// You will need to add these few lines:
void setup() {
  size(500,500);
}

// Then put the contents from your Kahn Academy script in a draw()
// function:

void draw() {
  fill(0, 60, 255);
  textSize(30);
  text("Wizards and Gizzards", 10, 30);
  fill(27, 97, 4);
  textSize(20);
  text("Turn your friends into frogs!", 25, 87);

  // wizard head
  fill(196, 151, 75);
  ellipse(100,300,100,100); // head
  fill(96, 18, 148);
  triangle(75,250,125,250,100,150); // hat
  ellipse(100,250,100,20); // hat brim
  fill(0, 0, 0);
  ellipse(80,275,10,10); // eye
  ellipse(120,275,10,10); // eye
  fill(163, 45, 45);
  ellipse(100,320,40,20); // mouth
  text("Ha ha ha ha ha!",200,320);
}
