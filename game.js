var bg, hm, fixed, speed, moveBool;
speed = 64;
moveBool = false;
var game = new Phaser.Game(800, 500, Phaser.AUTO,'',{
	preload: preload, create:create, update:update, render:render});

function player(){
    dx:0;
    dy:0;
    dist:0;
    speed:60;
    counter:0;
    xU:0;
    yU:0;
}
function moveTo(){
    x:200;
    y:200;
}

function preload(){
	game.load.image('playerSprite', 'hm.jpg');
	game.load.image('bg','bg.jpg');
}

function create(){
    game.add.tileSprite (0, 0, 1024, 1024, 'bg');
    game.world.setBounds(0, 0, 924, 924);
   // fixed = game.add.sprite(-100, 0, 'hm');
    //fixed.fixedToCamera = true;
    
    playerSprite = game.add.sprite(400, 500, 'playerSprite');
    playerSprite.anchor.setTo(0.5, 0.5);
	playerSprite.body.collideWorldBounds = true;
    game.camera.follow(playerSprite);
}

function getThere(){
    moveTo.x = game.input.x;
    moveTo.y = game.input.y;
    player.dx = moveTo.x-playerSprite.x;
    player.dy = moveTo.y-playerSprite.y;
    player.dist = Math.sqrt(player.dx*player.dx+player.dy*player.dy);
    player.counter = Math.round(player.dist/speed);
    player.xU = player.dx/player.counter;
    player.yU = player.dy/player.counter;
    console.log(player.counter);
    moveBool = true;
}

function update() {
    game.input.onDown.add(getThere, this);
    if(moveBool){
        if(playerSprite.x < moveTo.x){playerSprite.body.velocity.x = speed}
        if(playerSprite.x == moveTo.x){playerSprite.body.velocity.x = 0}
        console.log(playerSprite.x + ' : ' + moveTo.x);
    }
}

function render() {
    /*
    game.debug.renderCameraInfo(game.camera, 32, 32);
    game.debug.renderSpriteCoords(hm, 32, 200);
    game.debug.renderSpriteCoords(fixed, 600, 200);
    */
}