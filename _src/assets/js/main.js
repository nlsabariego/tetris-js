'use strict';

let canvas;
let ctx;
let FPS = 50;

const widthCanvas = 400;
const heightCanvas = 640;

const widthScreen = 10;
const heightScreen = 20;

const marginSup = 4;

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
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,0,0,0,0,0,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,1,1,1,1,1]
];

//colores piezas

const red = '#f21818';
const orange ='#ff6200';
const yellow ='#ffcf0f';
const green = '#99d100';
const blue ='#03ffff';
const cyan = '#0320ff';
const purple = '#9700b5';

const tokenGraphic = [
    //cuadrado
    [
        [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,1,1,0],
            [0,1,1,0],
            [0,0,0,0]
        ]
    ],
    //linea
    [
        [
            [0,0,2,0],
            [0,0,2,0],
            [0,0,2,0],
            [0,0,2,0]
        ],
        [
            [0,0,0,0],
            [2,2,2,2],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,0,2,0],
            [0,0,2,0],
            [0,0,2,0],
            [0,0,2,0]
        ],
        [
            [0,0,0,0],
            [2,2,2,2],
            [0,0,0,0],
            [0,0,0,0]
        ]
    ],
    //Z invertida
    [
        [
            [0,0,0,0],
            [0,0,3,3],
            [0,3,3,0],
            [0,0,0,0]
        ],
        [
            [0,0,3,0],
            [0,0,3,3],
            [0,0,0,3],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,0,3,3],
            [0,3,3,0],
            [0,0,0,0]
        ],
        [
            [0,0,3,0],
            [0,0,3,3],
            [0,0,0,3],
            [0,0,0,0]
        ]
    ],
    //Z
    [
        [
            [0,0,0,0],
            [0,4,4,0],
            [0,0,4,4],
            [0,0,0,0]
        ],
        [
            [0,0,0,4],
            [0,0,4,4],
            [0,0,4,0],
            [0,0,0,0]
        ],
        [
            [0,0,0,0],
            [0,4,4,0],
            [0,0,4,4],
            [0,0,0,0]
        ],
        [
            [0,0,0,4],
            [0,0,4,4],
            [0,0,4,0],
            [0,0,0,0]
        ]
    ],
    //L
    [
        [
            [0,0,0,0],
            [0,5,5,5],
            [0,5,0,0],
            [0,0,0,0]
        ],
        [
            [0,0,5,0],
            [0,0,5,0],
            [0,0,5,5],
            [0,0,0,0]
        ],
        [
            [0,0,0,5],
            [0,5,5,5],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,5,5,0],
            [0,0,5,0],
            [0,0,5,0],
            [0,0,0,0]
        ]
    ],
    //L invertida
    [
        [
            [0,0,0,0],
            [0,6,6,6],
            [0,0,0,6],
            [0,0,0,0]
        ],
        [
            [0,0,6,6],
            [0,0,6,0],
            [0,0,6,0],
            [0,0,0,0]
        ],
        [
            [0,6,0,0],
            [0,6,6,6],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,0,6,0],
            [0,0,6,0],
            [0,6,6,0],
            [0,0,0,0]
        ]
    ],
    //T
    [
        [
            [0,0,0,0],
            [0,7,7,7],
            [0,0,7,0],
            [0,0,0,0]
        ],
        [
            [0,0,7,0],
            [0,0,7,7],
            [0,0,7,0],
            [0,0,0,0]
        ],
        [
            [0,0,7,0],
            [0,7,7,7],
            [0,0,0,0],
            [0,0,0,0]
        ],
        [
            [0,0,7,0],
            [0,7,7,0],
            [0,0,7,0],
            [0,0,0,0]
        ]
    ],

];

let token;

const ObjToken = function(){
    this.x = 5;
    this.y = 7;

    this.angle = 0;
    this.type = 1;

    this.draw =function(){
        for(let py = 0; py < 4; py++){
            for(let px = 0; px < 4; px++){
                if(tokenGraphic[this.type][this.angle][py][px] !== 0){
                    if(tokenGraphic[this.type][this.angle][py][px] === 1){
                        ctx.fillStyle = red;
                    }
                    if(tokenGraphic[this.type][this.angle][py][px] === 2){
                        ctx.fillStyle = blue;
                    }
                    if(tokenGraphic[this.type][this.angle][py][px] === 3){
                        ctx.fillStyle = yellow;
                    }
                    if(tokenGraphic[this.type][this.angle][py][px] === 4){
                        ctx.fillStyle = green;
                    }
                    if(tokenGraphic[this.type][this.angle][py][px] === 5){
                        ctx.fillStyle = orange;
                    }
                    if(tokenGraphic[this.type][this.angle][py][px] === 6){
                        ctx.fillStyle = cyan;
                    }
                    if(tokenGraphic[this.type][this.angle][py][px] === 7){
                        ctx.fillStyle = purple;
                    }

                    ctx.fillRect((this.x + px) * widthT, (this.y + py) * heightT, widthT, heightT);
                }
            }
        }
    };

    //METODOS
    this.rotate = function(){
        console.log('Rotar');
    };
    this.down = function(){
        console.log('abajo');
    };
    this.right = function(){
        console.log('derecha');
    };
    this.left = function(){
        console.log('izquierda');
    };
};

//FUNCION PARA PINTAR LA PANTALLA
function drawScreen() {
    for(let py = marginSup; py < heightScreen ; py++){
        for(let px = 1; px < widthScreen; px++){
            if(screen[py][px] !== 0){
                if(screen[py][px] === 1){
                    ctx.fillStyle = red;
                }
                if(screen[py][px] === 2){
                    ctx.fillStyle = blue;
                }
                if(screen[py][px] === 3){
                    ctx.fillStyle = yellow;
                }
                if(screen[py][px] === 4){
                    ctx.fillStyle = green;
                }
                if(screen[py][px] === 5){
                    ctx.fillStyle = orange;
                }
                if(screen[py][px] === 6){
                    ctx.fillStyle = cyan;
                }
                if(screen[py][px] === 7){
                    ctx.fillStyle = purple;
                }

                ctx.fillRect((px-1) * widthT, (py-marginSup) * heightT, widthT, heightT);
            }
        }
    }
}

function keyboardInit() {
    document.addEventListener('keydown', function (key) {
        if(key.keyCode === 38){
            token.rotate();
        }
        if(key.keyCode === 40){
            token.down();
        }
        if(key.keyCode === 37){
            token.left();
        }
        if(key.keyCode === 39){
            token.right();
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
    drawScreen();
    token.draw();

}


