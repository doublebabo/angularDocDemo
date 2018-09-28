window.onload = addLoadEvent;

addLoadEvent(positionMessage);
addLoadEvent(draw);
// addLoadEvent(moveMessage);

function addLoadEvent(ev) {
  let oldload = window.onload;
  if (typeof oldload !== 'function') {
    window.onload = ev;
  }else {
    window.onload =function () {
      oldload();
      ev();
    }
  }
}

function positionMessage() {
  let ele = document.getElementById("message");
  ele.style.position = "absolute";
  ele.style.left = "100px";
  ele.style.top = "50px";
  moveMessage();
}

function moveMessage() {
  let ele = document.getElementById("message");
  let x = parseInt(ele.style.left);
  let y = parseInt(ele.style.top);
  if (ele.movement) {
    clearTimeout(ele.movement);
  }
  if (x === 500 && y === 100) {
    return true;
  }
  let dist = 0;
  if (x < 500) {
    dist = Math.ceil((500 - x) / 10);
    x = dist + x;
  }
  if (x > 500) {
    dist = Math.ceil((500 - x) / 10);
    x = x - dist;
  }
  if (y < 100) {
    dist = Math.ceil((100 - y) / 10);
    y = dist + y;
  }
  if (y > 100) {
    dist = Math.ceil((100 - y) / 10);
    y = y - dist;
  }
  ele.style.left = x + "px";
  ele.style.top = y + "px";
  ele.movement = setTimeout("moveMessage()", 10);
}

// function draw() {
//   let canvas = document.getElementById("drawInMe");
//   if (canvas.getContext) {
//     let ctx = canvas.xgetContext('2d');
//     ctx.beginPath();
//     ctx.moveTo(120.0, 32.0);
//     ctx.bezierCurveTo(120.0, 36.4, 116.4, 40.0, 112.0, 40.0);
//     ctx.lineTo(8.0, 40.0);
//     ctx.bezierCurveTo(3.6, 40.0, 0.0, 36.4, 0.0, 32.0);
//     ctx.lineTo(0.0, 8.0);
//     ctx.bezierCurveTo(0.0, 3.6, 3.6, 0.0, 8.0, 0.0);
//     ctx.lineTo(112.0, 0.0);
//     ctx.bezierCurveTo(116.4, 0.0, 120.0, 3.6, 120.0, 8.0);
//     ctx.lineTo(120.0, 32.0);
//     ctx.closePath();
//     ctx.fill();
//     ctx.lineWidth = 2.0;
//     ctx.strokeStyle = "rgb(255,255,255)";
//     ctx.stroke();
//   }
// }
