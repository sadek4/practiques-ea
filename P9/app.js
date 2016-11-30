/**
 * Created by Oscar on 22/11/2016.
 */

var game = new Phaser.Game(500, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {

    game.load.image('button0', 'numberpng0.png');
    game.load.image('button1', 'numberpng1.png');
    game.load.image('button2', 'numberpng2.png');
    game.load.image('button3', 'numberpng3.png');
    game.load.image('button4', 'numberpng4.png');
    game.load.image('button5', 'numberpng5.png');
    game.load.image('button6', 'numberpng6.png');
    game.load.image('button7', 'numberpng7.png');
    game.load.image('button8', 'numberpng8.png');
    game.load.image('button9', 'numberpng9.png');
    game.load.spritesheet('button+', 'plus.png');
    game.load.spritesheet('button-', 'minus.png');
    game.load.spritesheet('buttonx', 'cancel-button.png');
    game.load.spritesheet('button%', 'division-1.png');
    game.load.spritesheet('button=', 'equal.png');
    game.load.spritesheet('buttonc', 'backspace-arrow.png');
    game.load.image('background','background.png');

}

var d="", n=0, op, text, r;
var button;
var background;

function create() {

    game.add.tileSprite(0, 0, 500, 600, 'background');
    var style = {font: "70px Arial", fill: "#6E6E6E", align: "right"};
    text = game.add.text(10, 10, d, style);


    button1 = game.add.button(120-80, 200-60, 'button1', actionOnClick, {keyname:1});
    button2 = game.add.button(240-80, 200-60, 'button2', actionOnClick, {keyname:2});
    button3 = game.add.button(360-80, 200-60, 'button3', actionOnClick, {keyname:3});
    button4 = game.add.button(120-80, 320-60, 'button4', actionOnClick, {keyname:4});
    button5 = game.add.button(240-80, 320-60, 'button5', actionOnClick, {keyname:5});
    button6 = game.add.button(360-80, 320-60, 'button6', actionOnClick, {keyname:6});
    button7 = game.add.button(120-80, 440-60, 'button7', actionOnClick, {keyname:7});
    button8 = game.add.button(240-80, 440-60, 'button8', actionOnClick, {keyname:8});
    button9 = game.add.button(360-80, 440-60, 'button9', actionOnClick, {keyname:9});
    button0 = game.add.button(240-80, 560-60, 'button0', actionOnClick, {keyname:0});
    buttonsum = game.add.button(480-80, 560-60, 'button+', operacio, {keyname:'+'});
    buttonrest = game.add.button(480-80, 440-60, 'button-', operacio, {keyname:'-'});
    buttonmult = game.add.button(480-80, 320-60, 'buttonx', operacio, {keyname:'*'});
    buttondiv = game.add.button(480-80, 200-60, 'button%', operacio, {keyname:'/'});
    buttonigu = game.add.button(360-80, 560-60, 'button=', resultat);
    buttonesb = game.add.button(120-80, 560-60, 'buttonc', esborra);

}

function actionOnClick () {

    text.destroy();
    d+=(this.keyname);
    create();
}

function operacio(){
    if(n!=0){
        resultat();
    }
    n = d;
    console.log(n);
    d = "";
    text.destroy();
    create();
    op=this.keyname;
    console.log(op);
}

function esborra() {
    n=0;
    d="";
    text.destroy();
}

function resultat() {
    switch (op){
        case"+":
            r=parseInt(d)+parseInt(n);
            break;
        case"-":
            r=parseInt(n)-parseInt(d);
            break;
        case"*":
            r=parseInt(d)*parseInt(n);
            break;
        case"/":
            r=parseInt(n)/parseInt(d);
            break;
    }
    n=0;
    d=r.toString();
    console.log(d);
    text.destroy();
    create();
}