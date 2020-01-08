function ge(el) {
  return (typeof el == 'string' || typeof el == 'number') ? document.getElementById(el) : el;
}

function addEvent(el, event_type, handler) {
  el = ge(el);
  if(window.addEventListener) {
    el.addEventListener(event_type, handler, false);
  } else if(window.attachEvent) {
    el.attachEvent('on'+event_type, handler);
  } else {
    el['on'+event_type] = handler;
  }
}


  var bird = new Image();

  var bg = new Image(); 

  var fg = new Image(); 

  var pipeUp = new Image();

  var pipeBottom = new Image();

  /**
   * Создание блоков
   */ 
  var pipe = [];

  pipe[0] = {
    x : cvs.width,
    y : 0
  }

  /** 
   * Баллы
   */ 
  var score = 0;
  /** 
   * Позиция птицы
   */ 
  var xPos = 10;

  var yPos = 150;

  var grav = 1.5;

  var gap = 90;

bird.src = "img/bird.png";
bg.src = "img/bg.png";
fg.src = "img/fg.png";
pipeUp.src = "img/pipeUp.png";
pipeBottom.src = "img/pipeBottom.png";


  setTimeout(draw(), 10);


addEvent(document, 'keydown', moveUp);

function moveUp() {
 yPos -= 25;
 fly.play();
}

function draw() {

}

pipeBottom.onload = draw;