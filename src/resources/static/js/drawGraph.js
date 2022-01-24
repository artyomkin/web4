/* global $ */
/* eslint-env jquery */
import {$,jQuery} from 'jquery';



export function renderGraph(size, shift, canvas, context, r, points){
    var frame = size - 2 * shift
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    
    clear(canvas, context);
    drawGraph(r, context, size, frame, shift);
    if (points){
        drawDots(context, size, shift, points, r);
    }
}

function drawGraph(radius, context, size, frame, shift){

    context.globalCompositeOperation = 'destination-over';
    drawYAxis(radius, context, size, frame, shift);
    drawXAxis(radius, context, size, frame, shift);
    drawRect(radius, context, size, frame, shift);
    drawTriangle(radius, context, size, frame, shift);
    drawArc(radius, context, size, frame, shift);
    context.globalCompositeOperation = 'source-over';
}

function drawYAxis(radius, context, size, frame, shift){

    context.beginPath();

    context.moveTo(size/2, size);
    context.lineTo(size/2, 0);

    context.lineTo(size/2-5,10);

    context.moveTo(size/2,0);
    context.lineTo(size/2+5,10);

    context.moveTo(size/2-5,(size - frame*radius/5)/2);
    context.lineTo(size/2+5,(size - frame*radius/5)/2);

    context.fillText("R",size/2+10, (size - frame*radius/5)/2);

    context.moveTo(size/2-5,size-(size - frame*radius/5)/2);
    context.lineTo(size/2+5,size-(size - frame*radius/5)/2);
    context.fillText("-R",size/2+10,size-(size - frame*radius/5)/2);

    context.moveTo(size/2-5,(size - frame/2 * radius/5)/2);
    context.lineTo(size/2+5,(size - frame/2 * radius/5)/2);
    context.fillText("R/2",size/2+10,(size - frame/2 * radius/5)/2);

    context.moveTo(size/2-5,size - (size - frame/2 * radius/5)/2);
    context.lineTo(size/2+5,size - (size - frame/2 * radius/5)/2);
    context.fillText("-R/2",size/2+10,size - (size - frame/2 * radius/5)/2);
    context.stroke();

}

function drawXAxis(radius, context, size, frame, shift){

    context.beginPath();
    context.moveTo(0, size/2);
    context.lineTo(size, size/2);

    context.lineTo(size-10,size/2-5);

    context.moveTo(size,size/2);
    context.lineTo(size-10,size/2+5);

    context.moveTo(size-(size - frame*radius/5)/2,size/2-5);
    context.lineTo(size-(size - frame*radius/5)/2,size/2+5);

    context.fillText("R",size-(size - frame*radius/5)/2,size/2+10);

    context.moveTo((size - frame*radius/5)/2,size/2-5);
    context.lineTo((size - frame*radius/5)/2,size/2+5);
    context.fillText("-R",(size - frame*radius/5)/2,size/2+10);

    context.moveTo((size - frame/2 * radius/5)/2, size/2 - 5);
    context.lineTo((size - frame/2 * radius/5)/2, size/2 + 5);
    context.fillText("-R/2",(size - frame/2 * radius/5)/2, size/2+10);

    context.moveTo(size - (size - frame/2 * radius/5)/2,size/2-5);
    context.lineTo(size - (size - frame/2 * radius/5)/2,size/2+5);
    context.fillText("R/2",size - (size - frame/2 * radius/5)/2,size/2+10);
    context.stroke();


}

function drawRect(radius, context, size, frame, shift){

    context.beginPath();

    context.fillStyle = "#389583";
    context.fillRect(size/2, size/2, frame*radius/5/4, frame*radius/5/2);

    context.stroke();

}

function drawTriangle(radius, context, size, frame, shift){
    context.beginPath();

    context.strokeStyle = "#389583";
    context.moveTo(size/2, size/2);
    context.lineTo((size - frame*radius/5)/2, size/2);
    context.lineTo(size/2, (size - frame/2 * radius/5)/2);
    context.closePath();
    context.fill();

    context.stroke();
}

function drawArc(radius, context, size, frame, shift){
    context.beginPath();
    context.arc(size/2, size/2, frame*radius/5/2, 0, -Math.PI/2, true);
    context.lineTo(size/2,size/2);
    context.strokeStyle = '#389583';
    context.fillStyle = '#389583';
    context.fill();
    context.fillStyle = "#000";
    context.strokeStyle = '#000';
    context.stroke();
}

function drawDot(context, size, shift, x, y, hit){
    var frame = size - 2 * shift
    let xPix = size/2+x*frame/10;
    let yPix = size/2-y*frame/10;
    let color = "red";
    if(hit){
        color = "green";
    }
    context.beginPath();
    context.globalCompositeOperation = 'source-over';
    context.fillStyle = color;
    context.strokeStyle = color;
    context.arc(xPix,yPix,5,0,2*Math.PI,true);
    context.fill();
    context.stroke();
    context.fillStyle = "black";
    context.strokeStyle = "black";
}
function clear(canvas, context){
    context.clearRect(0,0,canvas.width, canvas.height);
}

function drawDots(context, size, shift, dots, r){
    dots.forEach(dot=>{
        if (dot.r == r){
            drawDot(context, size, shift, dot.x,dot.y,dot.hit)
        }
    })
}
