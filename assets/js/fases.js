class Fases extends Phaser.Scene {
    constructor() {
        super("Fases");
    }
    create() {
        this.add.image(960, 480, 'fundoFases');
        const fase1 = this.add.image(200, 810, 'fase1').setInteractive({ cursor: 'pointer' });
        const titulo1 = this.add.image(200, 600, 'fase1_titulo');
        const homeBtn = this.add.image(800, 100, 'homeBtn').setInteractive({ cursor:'pointer' }).setScale(1.1);
        const textoVoltar = this.add.image(800, 40, 'textoVoltar').setScale(0.6);
        textoVoltar.visible = true;
        homeBtn.visible = true;
        this.children.bringToTop(homeBtn);
        
        homeBtn.on('pointerdown', function (){
            this.scene.start('Menu');
        }, this);

        if (fase1Concluida) {
            var fase2 = this.add.image(550, 880, 'fase2').setInteractive({ cursor: 'pointer' });
            var titulo2 = this.add.image(550, 800, 'fase2_titulo');
        }
        else {
            this.add.image(550, 880, 'fase2_cinza');
            this.add.image(550, 800, 'fase2_titulo_cinza');
        }

        if (fase2Concluida) {
            var fase3 = this.add.image(850, 840, 'fase3').setInteractive({ cursor: 'pointer' });
            var titulo3 = this.add.image(880, 700, 'fase3_titulo');
        }
        else {
            this.add.image(850, 840, 'fase3_cinza');
            this.add.image(880, 700, 'fase3_titulo_cinza');
        }

        if (fase3Concluida) {
            var fase4 = this.add.image(1150, 680, 'fase4').setInteractive({ cursor: 'pointer' });
            var titulo4 = this.add.image(1150, 250, 'fase4_titulo');
        }
        else {
            this.add.image(1150, 680, 'fase4_cinza');
            this.add.image(1150, 250, 'fase4_titulo_cinza');
        }

        if (fase4Concluida) {
            var fase5 = this.add.image(1650, 550, 'fase5').setInteractive({ cursor: 'pointer' });
            var titulo5 = this.add.image(1650, 65, 'fase5_titulo');
        }
        else {
            this.add.image(1650, 550, 'fase5_cinza');
            this.add.image(1650, 65, 'fase5_titulo_cinza');
        }

        fase1.on('pointerdown', function () {
            faseAtual = 'Fase1';
            this.scene.start('Roleta');
        }, this);

        if (fase2) {
            fase2.on('pointerdown', function () {
                faseAtual = 'Fase2';
                this.scene.start('Roleta');
            }, this);
        }

        if (fase3) {
            fase3.on('pointerdown', function () {
                faseAtual = 'Fase3';
                this.scene.start('Roleta');
            }, this);
        }

        if (fase4) {
            fase4.on('pointerdown', function () {
                faseAtual = 'Fase4';
                this.scene.start('Roleta');
            }, this);
        }

        if (fase5) {
            fase5.on('pointerdown', function () {
                faseAtual = 'Fase5';
                this.scene.start('Roleta');
            }, this);
        }
    }
}