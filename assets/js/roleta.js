class Roleta extends Phaser.Scene {
    constructor() {
        super("Roleta");
    }
    create() {
        this.add.image(960, 540, 'fundoRoleta');
        roleta = this.add.image(960, 540, 'roleta').setScale(2);
        const roleta_sound = this.sound.add('roleta_sound');
        giro = this.add.image(960, 540, 'giro').setInteractive({ cursor: 'pointer' }).setScale(0.8);
        giro.on('pointerdown', function () {
            roleta_sound.play();
            value = Phaser.Math.Between(0, 6);
            tempo = this.time.addEvent({ delay: 2000 });
            mostrarPergunta = this.time.addEvent({ delay: 5000 });
            rodar = true;
        }, this);
    }
    update() {

        if (rodar) {
            roleta.angle += 10;
        }

        if (tempo) {
            if (tempo.getProgress() === 1) {
                if (parseInt(roleta.angle) == angulos[value]) {
                    roleta.angle += 0;
                    rodar = false;
                    tipoPergunta = tipos[value]
                    if (mostrarPergunta.getProgress() === 1) {
                        this.scene.start('Pergunta');
                    }
                }
            }
        }
    }
}

