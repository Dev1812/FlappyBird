var cvs = document.getElementById("canvas");
var ctx = cvs.getContext("2d");

var bird = new Image();
var bg = new Image();
var fg = new Image();
var pipeUp = new Image();
var pipeBottom = new Image();

bird.src = "img/bird.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";

var gap = 90;

/**
 * @desc При нажатии на какую-либо кнопку, запускаем функцию MoveUp()
 *
 */
document.addEventListener("keydown", moveUp);

function moveUp() {
  axis_y -= 25;
}

/**
 * @desc
 * Создание блоков
 *
 */
var pipe = [];

pipe[0] = {
 x : cvs.width,
 y : 0
}

var score = 0;
/**
 * @desc Позиция птички
 *
 */
var xPos = 10;
var axis_y = 150;
var grav = 1.5;

function draw() {
  ctx.drawImage(bg, 0, 0);
  for(var i = 0; i < pipe.length; i++) {
    ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
    ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);

  pipe[i].x--;

  if(pipe[i].x == 125) {
    pipe.push({
      x : cvs.width,
      y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
    });
  }

/**
 * @desc Отслеживание прикосновений
 */
  if(xPos + bird.width >= pipe[i].x && xPos <= pipe[i].x + pipeUp.width && (axis_y <= pipe[i].y + pipeUp.height || axis_y + bird.height >= pipe[i].y + pipeUp.height + gap) || axis_y + bird.height >= cvs.height - fg.height) {
  onLosing();

  }

    if(pipe[i].x == 5) {
      score++;
    }
  }

  ctx.drawImage(fg, 0, cvs.height - fg.height);
  ctx.drawImage(bird, xPos, axis_y);

  axis_y += grav;

  ctx.fillStyle = "#000";
  ctx.font = "24px Verdana";
  ctx.fillText("Счет: " + score, 10, cvs.height - 20);

 requestAnimationFrame(draw);
}

function onLosing(){console.log('test');}
pipeBottom.onload = draw;