class Menu extends Phaser.Scene {
    constructor() {
        super("Menu");
    }
    preload() {
        //Geral
        this.load.image('fundoMenu', 'assets/img/fundo.png');
        this.load.image('jogar_btn', 'assets/img/jogar-btn.png');
        this.load.image('creditos', 'assets/img/creditos.png');
        this.load.image('time_creditos', 'assets/img/time_creditos.png');
        this.load.image('time_creditos_frase', 'assets/img/time_creditos_frase.png');
        this.load.image('sobre_projeto', 'assets/img/sobre_projeto.png');
        this.load.image('fechar', 'assets/img/fechar.png');
        this.load.image('som_ativado', 'assets/img/som_ativado.png');
        this.load.image('som_desativado', 'assets/img/som_desativado.png');
        this.load.image('setaVoltar', 'assets/img/setaVoltar.png');
        this.load.image('efeitoSonoroAtivado', 'assets/img/efeitoSonoroAtivado.png');
        this.load.image('efeitoSonoroDesativado', 'assets/img/efeitoSonoroDesativado.png');
        this.load.image('textoVoltar', 'assets/img/textoVoltar.png');

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
        this.load.image('vitoriaFundoFinal', 'assets/img/vitoriaFundoFinal.png')
        this.load.image('derrotaFundo', 'assets/img/derrotaFundo.png');
        this.load.image('homeBtn', 'assets/img/homeBtn.png');
        this.load.image('setaBtn', 'assets/img/setaBtn.png');
        this.load.image('restartBtn', 'assets/img/restartBtn.png');

        //Música
        this.load.audio('intro', 'assets/sound/intro.mp3');
        this.load.audio('roleta_sound', 'assets/sound/roleta_sound.mp3');
        this.load.audio('vitoriaMusica', 'assets/sound/vitoriaMusica.mp3');
        this.load.audio('vitoriaFinalMusica', 'assets/sound/vitoriaFinalMusica.mp3');
        this.load.audio('derrotaMusica', 'assets/sound/derrotaMusica.mp3');
        this.load.audio('faseMusica', 'assets/sound/faseMusica.mp3');

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
        const creditos = this.add.image(950, 900, 'creditos');
        const time_creditos = this.add.image(1800, 800, 'time_creditos').setInteractive({ cursor: 'pointer'}).setScale(0.8);
        const time_creditos_frase = this.add.image(1800, 860, 'time_creditos_frase').setScale(0.6);
        const sobre_projeto = this.add.image(960, 460, 'sobre_projeto').setScale(1.22);
        const fechar = this.add.image(1600, 120, 'fechar').setInteractive({ cursor: 'pointer'}).setScale(0.4);
        const som_desativado = this.add.image(130, 800, 'som_desativado').setInteractive({cursor: 'pointer'}).setScale(0.4);
        const som_ativado = this.add.image(130, 800, 'som_ativado').setInteractive({cursor: 'pointer'}).setScale(0.4);
        som_ativado.visible = false;
        sobre_projeto.visible = false;
        fechar.visible = false;

        //Música
        const intro = this.sound.add('intro');
        
        function playIntro(){
            var musicConfig = {
                loop: true
            }
        
            intro.play(musicConfig);
        } 

        playIntro();
        intro.mute = true;

        jogarBtn.on('pointerdown', function () {
            this.scene.start('Fases');
            intro.stop();
        }, this);

        time_creditos.on('pointerdown', function () {
            jogarBtn.disableInteractive();
            sobre_projeto.visible = true;
            fechar.visible = true;
            that.children.bringToTop(sobre_projeto);
        }, this);

        fechar.on('pointerdown', function () {
            sobre_projeto.visible = false;
            //sobre_projeto.disableInteractive();
            fechar.visible = false;
            jogarBtn.setInteractive();
        }, this);

        som_desativado.on('pointerdown', function () {
            som_ativado.visible = true;
            som_ativado.setInteractive();
            som_desativado.visible = false;
            som_desativado.disableInteractive();
            intro.mute = false;
        }, this);

        som_ativado.on('pointerdown', function () {
            som_desativado.visible = true;
            som_desativado.setInteractive();
            som_ativado.visible = false;
            som_ativado.disableInteractive;
            intro.mute = true;

        }, this);

    }
}

