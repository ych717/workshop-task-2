function setup() {
  createCanvas(400, 400);
  background (220); 

  setTimeout (arch, 1000, -15, 310, 120) 
  setTimeout (arch, 2000, 85, 310, 120) 
  setTimeout (arch, 3000, 185, 310, 120) 
  setTimeout (arch, 4000, 285, 310, 120) 
  setTimeout (arch, 5000, 385, 310, 120)

  setInterval (snow, 100);
}

 


function arch (xPos, yPos, body, head) {
  rect (xPos, yPos, 40, body);
  circle (xPos + 20, yPos, 40);
}

function snow(){
  noStroke();
  rect (random(0,400), random(0,400), 10,10);
}

