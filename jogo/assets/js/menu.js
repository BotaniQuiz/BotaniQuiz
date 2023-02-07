class Menu extends Phaser.Scene {
    constructor() {
        super("Menu");
    }
    preload() {
        //Geral
        this.load.image('fundoMenu', 'assets/img/fundo.png');
        this.load.image('jogar_btn', 'assets/img/jogar-btn.png');

        //Fases Desbloqueadas
        this.load.image('fundoFases', 'assets/img/fundoFases.png');
        this.load.image('fase1', 'assets/img/fase1.png');
        this.load.image('fase2', 'assets/img/fase2.png');
        this.load.image('fase3', 'assets/img/fase3.png');
        this.load.image('fase4', 'assets/img/fase4.png');
        this.load.image('fase5', 'assets/img/fase5.png');
        this.load.image('fase1_titulo', 'assets/img/fase1_titulo.png');
        this.load.image('fase2_titulo', 'assets/img/fase2_titulo.png');
        this.load.image('fase3_titulo', 'assets/img/fase3_titulo.png');
        this.load.image('fase4_titulo', 'assets/img/fase4_titulo.png');
        this.load.image('fase5_titulo', 'assets/img/fase5_titulo.png');

        //Fases Bloqueadas
        this.load.image('fase2_cinza', 'assets/img/fase2_cinza.png');
        this.load.image('fase3_cinza', 'assets/img/fase3_cinza.png');
        this.load.image('fase4_cinza', 'assets/img/fase4_cinza.png');
        this.load.image('fase5_cinza', 'assets/img/fase5_cinza.png');
        this.load.image('fase2_titulo_cinza', 'assets/img/fase2_titulo_cinza.png');
        this.load.image('fase3_titulo_cinza', 'assets/img/fase3_titulo_cinza.png');
        this.load.image('fase4_titulo_cinza', 'assets/img/fase4_titulo_cinza.png');
        this.load.image('fase5_titulo_cinza', 'assets/img/fase5_titulo_cinza.png');

        //Roleta
        this.load.image('fundoRoleta', 'assets/img/fundoRoleta.jpg');
        this.load.image('roleta', 'assets/img/roleta.png');
        this.load.image('giro', 'assets/img/giro.png');

        //Pergunta
        this.load.image('vitoriaFundo', 'assets/img/vitoriaFundo.png');
        this.load.image('derrotaFundo', 'assets/img/derrotaFundo.png');
        this.load.image('homeBtn', 'assets/img/homeBtn.png');
        this.load.image('setaBtn', 'assets/img/setaBtn.png');
        this.load.image('restartBtn', 'assets/img/restartBtn.png');

        //JSON
        this.load.json('caulePerguntas', 'assets/JSON/caule.json');
        this.load.json('extraPerguntas', 'assets/JSON/extra.json');
        this.load.json('florPerguntas', 'assets/JSON/flor.json');
        this.load.json('folhaPerguntas', 'assets/JSON/folha.json');
        this.load.json('frutoPerguntas', 'assets/JSON/fruto.json');
        this.load.json('raizPerguntas', 'assets/JSON/raiz.json');
        this.load.json('sementePerguntas', 'assets/JSON/semente.json');

    }
    create() {
        this.add.image(0, 0, 'fundoMenu').setOrigin(0, 0);
        const jogarBtn = this.add.image(950, 650, 'jogar_btn').setInteractive({ cursor: 'pointer' });

        jogarBtn.on('pointerdown', function () {
            this.scene.start('Fases');
        }, this);
    }
}