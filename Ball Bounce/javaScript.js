/* Variables */

var NumPelotas=[];
var NumBloques=[];
var pelota;
var bloque;
var fondo;

var juego = new Phaser.Game(400, 500, Phaser.AUTO, 'tablero', {
	preload: preload,
	create: create,
	update: update
});


function preload() {
	juego.load.image("fondo", "img/fondo.jpg");
	juego.load.image("pelota", "img/pelota.png");
	juego.load.image("bloque", "img/bloque.png");
}

function create() {
	//añadimos fisica al juego
	juego.physics.startSystem(Phaser.Physics.ARCADE) 
	fondo = juego.add.sprite(0, 0, "fondo")
		
	//creo el grupo y monto los objetos bloque
	bloques = juego.add.group();
	bloques.enableBody = true; 
	bloques.immovable=true;
		
	for (var i = 0; i < 7; i++) {	
		
		bloqueActual = bloques.create(i*6+49*i, 300, "bloque")	
		bloqueActual.width=70;
		bloqueActual.height=70;
		bloqueActual.body.collideWorldBounds = true;
		 
	}
	
	
	pelotas = juego.add.group()
	pelotas.enableBody = true;	
    pelota=pelotas.create(180,400, "pelota")
	pelota.enableBody = true;
	pelota.scale.setTo(0.05,0.05) 
	pelota.body.gravity.x = 50;
	pelota.body.gravity.y = -1000;	
	
	
	
}

function update() {	
	juego.physics.arcade.collide(pelotas,bloques,function(pelota,bloque){bloque.kill();},null)
	//if(juego.physics.arcade.collide(pelotas,bloque)){
	//	}
	
}



/*
	MULTIPLICADOR DE VELOCIDAD DE REBOTE
	pelota.body.bounce.y = 10;

	http://joelwalls.com/2015/07/tutorial-programacion-de-juegos-con-phaser-parte-1/?i=1
	
	gravedad 	
	bloqueActual.body.gravity.x = 1000;
	bloqueActual.body.gravity.y = 1000;
*/