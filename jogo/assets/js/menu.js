class Menu extends Phaser.Scene {
    constructor() {
        super("Menu");
    }
    preload() {
        //Geral
        this.load.image('fundo', 'assets/img/fundo.png');
        this.load.image('jogar_btn', 'assets/img/jogar-btn.png');

        //Fases
        this.load.image('fundoFases', 'assets/img/fundoFases.png');
        this.load.image('fase1_titulo', 'assets/img/fase1_titulo.png');
        this.load.image('fase2_titulo', 'assets/img/fase2_titulo.png');
        this.load.image('fase3_titulo', 'assets/img/fase3_titulo.png');
        this.load.image('fase4_titulo', 'assets/img/fase4_titulo.png');
        this.load.image('fase5_titulo', 'assets/img/fase5_titulo.png');
        this.load.image('fase1', 'assets/img/fase1.png');
        this.load.image('fase2', 'assets/img/fase2.png');
        this.load.image('fase3', 'assets/img/fase3.png');
        this.load.image('fase4', 'assets/img/fase4.png');
        this.load.image('fase5', 'assets/img/fase5.png');

        //Roleta
        this.load.image('fundoRoleta', 'assets/img/fundoRoleta.jpg');
        this.load.image('roleta', 'assets/img/roleta.png');
        this.load.image('giro', 'assets/img/giro.png');

        //Pergunta
        this.load.image('fundoPergunta', 'assets/img/fundoPergunta.png');


    }
    create() {
        this.add.image(0, 0, 'fundo').setOrigin(0, 0);
        const jogarBtn = this.add.image(950, 650, 'jogar_btn').setInteractive({ cursor: 'pointer' });

        jogarBtn.on('pointerdown', function () {
            this.scene.start('Fases');
        }, this);
    }
}