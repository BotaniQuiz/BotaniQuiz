var config = {
	backgroundColor: 0x000000,
	scale: {
		mode: Phaser.Scale.FIT,
		autoCenter: Phaser.Scale.CENTER_BOTH,
		width: 1920,
		height: 960,
	},
	scene: [Menu, Fases, Roleta, Pergunta],
}

var game = new Phaser.Game(config);
var rodar = false;
var roleta, giro, tempo, value, tipoPergunta, pergunta, mostrarPergunta;
var angulos = [0, 50, 100, 150, -160, -110, -59];
var tipos = ['Raiz', 'Semente', 'Caule', 'Flor', 'Folha', 'Extra', 'Fruto']