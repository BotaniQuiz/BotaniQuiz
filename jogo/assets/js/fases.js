class Fases extends Phaser.Scene {
    constructor() {
        super("Fases");
    }
    create() {
        const fase1 = this.add.image(400, 650, 'fase1').setInteractive({ cursor: 'pointer' });
        const fase2 = this.add.image(700, 650, 'fase2').setInteractive({ cursor: 'pointer' });
        const fase3 = this.add.image(1000, 650, 'fase3').setInteractive({ cursor: 'pointer' });
        const fase4 = this.add.image(1300, 650, 'fase4').setInteractive({ cursor: 'pointer' });
        const fase5 = this.add.image(1600, 650, 'fase5').setInteractive({ cursor: 'pointer' });

        fase1.on('pointerdown', function () {

            this.scene.start('Roleta');

        }, this);
    }
}