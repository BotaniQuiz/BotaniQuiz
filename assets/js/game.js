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
var roleta, giro, tempo, value, tipoPergunta, pergunta, mostrarPergunta, imagem, faseAtual;
var angulos = [0, 50, 100, 150, -160, -110, -59];
var tipos = ['raiz', 'semente', 'caule', 'flor', 'folha', 'extra', 'fruto'];
var fase1Concluida = false;
var fase2Concluida = false;
var fase3Concluida = false;
var fase4Concluida = false;
var fase5Concluida = false;
var perguntasRespondidas = [];
var perguntasCertasFase2 = 0;
var perguntasCertasFase3 = 0;
var perguntasCertasFase4 = 0;
var perguntasCertasFase5 = 0;