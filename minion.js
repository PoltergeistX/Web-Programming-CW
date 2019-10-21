
    
const HEALTH = 5;
const DAMAGE = 5;
const SPEEDMAX = 0.6;
const SPEEDMIN = 0.4;
const DRAG = 0.925;    

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var fps = "FPS";
var times = [];
var paused = false;
var pauseKey = 27;
var keysDown = [];

var player;
var zombies = [];

function Zombie (_x, _y)
{
	this.pos = { x: _x, y: _y };
	this.vel = { x: 0, y: 0 };
	this.dir = 0;

	this.alive = true;
	this.health = HEALTH;
    this.speed = Math.random() * (SPEEDMAX - SPEEDMIN) + SPEEDMIN;
    
    this.update = function(){
        // Follow player
			this.dir = Math.atan((player.pos.y - this.pos.y) / (player.pos.x - this.pos.x));
			if (player.pos.x - this.pos.x < 0)
				this.dir += Math.PI;
