let cor;
let posicao_Horizontal;
let posicao_Vertical;

function setup() {
  createCanvas(400, 400);
  background(100, 0, 0);
  cor = color(random(0, 255), random(0, 255), random(0, 255));
  posicao_Horizontal = 200;
  posicao_Vertical = 200;
}

function draw() {
  fill(cor);
  circle(posicao_Horizontal, posicao_Vertical, 50);
  if (mouseX < posicao_Horizontal) {
    posicao_Horizontal = posicao_Horizontal - 1;
  }
  if (mouseX > posicao_Horizontal) {
    posicao_Horizontal = posicao_Horizontal + 1;
  }
  if (mouseY < posicao_Vertical) {
    posicao_Vertical --;
  }
  if (mouseY > posicao_Vertical) {
    posicao_Vertical ++;
  }
  if(mouseIsPressed) cor = color(random(0, 255), random(0, 255), random(0, 255),random(0, 100));
}
