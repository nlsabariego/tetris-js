'use strict';

let canvas;
let ctx;
let FPS = 50;

const widthCanvas = 400;
const heightCanvas = 640;

const widthScreen = 10;
const heightScreen = 16;

const widthT = 40;
const heightT = 40;

const screen = [
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]
];

let token;

let ObjToken = function(){
    this.x = 0;
    this.y = 0;
    console.log('creo pieza');
    
};

function keyboardInit() {
    document.addEventListener('keydown', function (key) {
        if(key.keyCode === 38){
            console.log('arriba');
        }
        if(key.keyCode === 40){
            console.log('abajo');
        }
        if(key.keyCode === 37){
            console.log('izquierda');
        }
        if(key.keyCode === 39){
            console.log('derecha');
        }
    });

}

function initialize() {
    canvas = document.getElementById('canvas');
    ctx = canvas.getContext('2d');

    canvas.width = widthCanvas;
    canvas.height = heightCanvas;

    token = new ObjToken();

    keyboardInit();

    setInterval(function () {
        master();
    },1000/FPS);

}

function deleteCanvas() {
    canvas.width = widthCanvas;
    canvas.height = heightCanvas;
}

function master() {
    deleteCanvas();
}


