$( document ).ready(function() {
	var Pala = function(x_start,y_end){
		this.color_pala = "grey";
	        this.position = {x:x_start, y:0};
        	this.size = {w:3, h:40};
        	this.y_end = y_end;
	};

	var miniSeconds = 60,
	miniTime = setInterval(function(){
        	if(miniSeconds > 0){
			miniSeconds--; 
		}else{
			miniSeconds = 60;
			p1=p2=0;
		}        
		if(miniSeconds >= 10){
			$('.miniSec').html(miniSeconds);
		}else{
			$('.miniSec').html('0' + miniSeconds);
		} 
	},1000);
 
	Pala.prototype.render = function(ctx){
        	ctx.fillStyle = this.color_pala;
	        ctx.fillRect(   this.position.x,
				this.position.y,
				this.size.w,
				this.size.h);
	};
	Pala.prototype.goUp = function(){
		if(this.position.y >= 10) this.position.y -= 10;
	};
	Pala.prototype.goDown = function(){
		if(this.position.y+this.size.h <= this.y_end-10) this.position.y += 10;
	};
	Pala.prototype.setKeys = function(keyUp, keyDown){
        	var _this = this;
        	$(window).keydown(function(event) {
			console.log("Key pressed is: " +event.which);
			if ( event.which == keyUp ) {
				_this.goUp()
			}else if( event.which == keyDown ){
				_this.goDown();
			}
		});
	}

	var Bola = function(start_pos_x, start_pos_y){
        	this.position = {x:start_pos_x, y:start_pos_y};
        	this.color_bola = "white";
        	this.size = {w:5, h:5};
        	this.angle =  45;
	}
	Bola.prototype.render = function(ctx){
        	ctx.fillStyle = this.color_bola;
        	ctx.fillRect(   this.position.x,
				this.position.y,
				this.size.w,
				this.size.h);
	}

	var canvas = document.getElementById("mycanvas");
	var ctx = canvas.getContext("2d");
	var pala_L = new Pala(10,canvas.height);
	var pala_R = new Pala(canvas.width-10,canvas.height);
	var vel=3;
	var p1=0;
	var p2=0;
	

	pala_L.setKeys(87,83); // Keys: W,s
	pala_R.setKeys(38,40); // Keys: up, down

	var bola = new Bola(canvas.width/2, canvas.height/2);
	
	function tocarPala(pala){
		if (bola.position.y+bola.size.h<pala.position)return false;
		if (bola.position.y>pala.size.h+pala.position.y)return false;
		if(bola.position.x+bola.size.w<pala.position.x)return false;
		if (bola.position.x>pala.position.x+pala.size.w)return false;
		else return true
	}


	function updateBola(){
		if(bola.position.y < bola.size.h||bola.position.y> canvas.height-bola.size.h){
			bola.angle=180-bola.angle;
		}else if(tocarPala(pala_L)||tocarPala(pala_R)){
			bola.angle=360-bola.angle;
			vel++;
		}else if(bola.position.x>canvas.width){
			p1++;
			bola.position.x=canvas.width/2;
			bola.position.y=canvas.height/2;
			bola.angle=45;
			vel=3;
		}else if(bola.position.x<0){
			p2++;
			bola.position.x=canvas.width/2;
			bola.position.y=canvas.height/2;
			bola.angle=315;
			vel=3;
		}
		bola.position.x += Math.sin(bola.angle * Math.PI / 180.0) *vel;
		bola.position.y += Math.cos(bola.angle * Math.PI / 180.0) *vel;
	}


	function render(){


		updateBola();
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		var img = document.getElementById("imatge");
		var pat = ctx.createPattern(img, "repeat");
		ctx.rect(0, 0, canvas.width,canvas.height);
		ctx.fillStyle = pat;
		ctx.fill();
		ctx.fillStyle = "#000000";
		ctx.beginPath();
		ctx.arc(400, 200, 80, 0, 2 * Math.PI);
		ctx.arc(400, 200, 81, 0, 2 * Math.PI);
		ctx.stroke();
		var img1=document.getElementById("pauli");
		var img2=document.getElementById("buka");
		ctx.drawImage(img1,canvas.width/2-45,5,30,35);
		ctx.drawImage(img2,canvas.width/2+10,5,30,35);
		ctx.fillStyle="white";
		ctx.fillText("St Pauli", canvas.width/2-85,30);
		ctx.fillText("Rayo Vallecano", canvas.width/2+45,30);
		ctx.fillText(p1, canvas.width*1/4+5,40);
		ctx.fillText(p2, canvas.width*3/4,40);
		pala_L.render(ctx);
		pala_R.render(ctx);
		bola.render(ctx);
    };
    setInterval(render, 100);
});
