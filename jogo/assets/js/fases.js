class Fases extends Phaser.Scene {
    constructor() {
        super("Fases");
    }
    create() {
        this.add.image(960, 480, 'fundoFases');
        const fase1 = this.add.image(200, 810, 'fase1').setInteractive({ cursor: 'pointer' });
        const titulo1 = this.add.image(200, 600, 'fase1_titulo');

        const fase2 = this.add.image(550, 880, 'fase2').setInteractive({ cursor: 'pointer' });
        const titulo2 = this.add.image(550, 800, 'fase2_titulo');

        const fase3 = this.add.image(850, 840, 'fase3').setInteractive({ cursor: 'pointer' });
        const titulo3 = this.add.image(880, 700, 'fase3_titulo');

        const fase4 = this.add.image(1150, 680, 'fase4').setInteractive({ cursor: 'pointer' });
        const titulo4 = this.add.image(1150, 250, 'fase4_titulo');

        const fase5 = this.add.image(1650, 550, 'fase5').setInteractive({ cursor: 'pointer' });
        const titulo5 = this.add.image(1650, 65, 'fase5_titulo');

        fase1.on('pointerdown', function () {

            this.scene.start('Roleta');

        }, this);
    }
}