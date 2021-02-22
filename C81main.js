canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
color = "blue";
ctx.beginPath();
ctx.strokeStyle = color;
ctx.lineWidth = 2;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

canvas.addEventListener("mousedown", myMouseDown);

function myMouseDown(e) {
    color = document.getElementById("color").value;
    mouse_X = e.clientX - canvas.offsetLeft;
    mouse_Y = e.clientY - canvas.offsetTop;
    circle(mouse_X, mouse_Y);
}

function circle(mouse_X, mouse_Y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = 2;
    ctx.arc(mouse_X, mouse_Y, 40, 0, 2*Math.PI);
    ctx.stroke();
}

function clearArea() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}