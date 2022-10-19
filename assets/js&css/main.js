let saveBtn = document.querySelector("#save");
let resetBtn = document.querySelector("#reset");
let boxX = document.getElementById("boxWidth").value; 
let boxY = document.getElementById("boxHeight").value; 
let ballXY = document.getElementById("ballWidthAndHeight").value;
let ball = document.querySelector('.ball');
let box = document.querySelector('.box');
let step = document.getElementById("step").value;
resetBall();
resetBtn.addEventListener('click', function(){
    resetBall();
})
function resetBall(){
    ball.style.left = (box.clientWidth - ball.clientWidth) / 2 +'px'
    ball.style.top = (box.clientHeight - ball.clientHeight) / 2 +'px'
}
document.body.addEventListener('keydown',e=>{
    if (e.key == 'ArrowUp') {
        ball.style.top = parseInt(ball.style.top) - Number(step) +'px';
    }else if(e.key == 'ArrowLeft'){
        ball.style.left = parseInt(ball.style.left) - Number(step) +'px';
    }else if(e.key == 'ArrowRight'){
        ball.style.left = parseInt(ball.style.left) + Number(step) +'px';
    }else if(e.key == 'ArrowDown'){
        ball.style.top = parseInt(ball.style.top) + Number(step) +'px';
    }
})
saveBtn.addEventListener('click', function(){
    let bxwidth=parseInt(boxX);
    box.style="width: ${bxwidth}";
    let bxheight=parseInt(boxY);
    box.style="height: ${bxheight}";
    let ballwh=parseInt(ballXY);
    ball.style="width: ${ballwh}";
    ball.style="height: ${ballwh}";
})
