class Pergunta extends Phaser.Scene {
    constructor() {
        super("Pergunta");
    }
    create() {
        this.getPergunta();
    }

    getPergunta() {
        var that = this;
        let data = this.cache.json.get(tipoPergunta + 'Perguntas');
        value = Phaser.Math.Between(0, data.length - 1);
        pergunta = data[value];
        var perguntaJaRespondida = false;

        perguntasRespondidas.forEach(element => {
            if (tipoPergunta + value === element) {
                perguntaJaRespondida = true;
            }
        });

        if (perguntaJaRespondida === true) {
            const valueAntigo = value;
            value = Phaser.Math.Between(0, data.length - 1);
            while (value === valueAntigo) {
                value = Phaser.Math.Between(0, data.length - 1);
            }
            pergunta = data[value];
        }

        perguntasRespondidas.push(tipoPergunta + value);
        console.log(tipoPergunta);
        that.load.image('fundoPergunta', `assets/img/${tipoPergunta}Fundo.png`);

        if (pergunta.imagem) {
            that.load.image(pergunta.imagem
                , `assets/img/perguntas/${pergunta.imagem}.png`);
            that.load.once(Phaser.Loader.Events.COMPLETE, () => {
                that.createPergunta();
            })
            that.load.start();
        }
        else {
            that.load.once(Phaser.Loader.Events.COMPLETE, () => {
                that.createPergunta();
            })
            that.load.start();
        }
    }

    createPergunta() {
        //Imagens
        this.add.image(0, 0, 'fundoPergunta').setOrigin(0, 0);
        if (pergunta.imagem) {
            this.add.image(960, 480, pergunta.imagem
            );
            var posicoes = [{ x: 490, y: 770 }, { x: 490, y: 900 }, { x: 1440, y: 770 }, { x: 1440, y: 900 }];
        }
        else {
            var posicoes = [{ x: 965, y: 450 }, { x: 965, y: 600 }, { x: 965, y: 750 }, { x: 965, y: 900 }];
        }

        var vetores = Phaser.Utils.Array.Shuffle([0, 1, 2, 3]);
        var posicoesShuffled = [];
        for (let index = 0; index < posicoes.length; index++) {
            posicoesShuffled.push(posicoes[vetores[index]]);
        }
        posicoes = posicoesShuffled;

        //Pergunta
        const perguntaText = this.make.text({
            x: 960,
            y: 130,
            text: pergunta.pergunta,
            origin: { x: 0.5, y: 0.5 },
            style: {
                fontFamily: 'GaretBook', fontSize: 60, backgroundColor: '#fff', color: '#000', align: 'center',
                wordWrap: { width: 1600 }
            }
        });

        let textPadding = [];
        textPadding.push({ left: (1600 - perguntaText.getBounds().width) / 2, right: (1600 - perguntaText.getBounds().width) / 2, top: (230 - perguntaText.getBounds().height) / 2, bottom: (230 - perguntaText.getBounds().height) / 2 });
        perguntaText.setPadding(textPadding[0]);


        //Opção 1
        const correta = this.make.text({
            x: posicoes[0].x,
            y: posicoes[0].y,
            text: pergunta.correta,
            origin: { x: 0.5, y: 0.5 },
            style: {
                fontFamily: 'GaretBook', fontSize: 40, backgroundColor: '#fff', color: '#000', align: 'center',
                wordWrap: { width: 800 }
            }
        }).setInteractive({ cursor: 'pointer' });

        textPadding.push({ left: (800 - correta.getBounds().width) / 2, right: (800 - correta.getBounds().width) / 2, top: (100 - correta.getBounds().height) / 2, bottom: (100 - correta.getBounds().height) / 2 });
        correta.setPadding(textPadding[1]);

        //Opção 2
        const incorreta1 = this.make.text({
            x: posicoes[1].x,
            y: posicoes[1].y,
            text: pergunta.incorreta1,
            origin: { x: 0.5, y: 0.5 },
            style: {
                fontFamily: 'GaretBook', fontSize: 40, backgroundColor: '#fff', color: '#000', align: 'center',
                wordWrap: { width: 800 }
            }
        }).setInteractive({ cursor: 'pointer' });

        textPadding.push({ left: (800 - incorreta1.getBounds().width) / 2, right: (800 - incorreta1.getBounds().width) / 2, top: (100 - incorreta1.getBounds().height) / 2, bottom: (100 - incorreta1.getBounds().height) / 2 });
        incorreta1.setPadding(textPadding[2]);

        //Opção 3
        const incorreta2 = this.make.text({
            x: posicoes[2].x,
            y: posicoes[2].y,
            text: pergunta.incorreta2,
            origin: { x: 0.5, y: 0.5 },
            style: {
                fontFamily: 'GaretBook', fontSize: 40, backgroundColor: '#fff', color: '#000', align: 'center',
                wordWrap: { width: 800 }
            }
        }).setInteractive({ cursor: 'pointer' });

        textPadding.push({ left: (800 - incorreta2.getBounds().width) / 2, right: (800 - incorreta2.getBounds().width) / 2, top: (100 - incorreta2.getBounds().height) / 2, bottom: (100 - incorreta2.getBounds().height) / 2 });
        incorreta2.setPadding(textPadding[3]);

        //Opção 4
        const incorreta3 = this.make.text({
            x: posicoes[3].x,
            y: posicoes[3].y,
            text: pergunta.incorreta3,
            origin: { x: 0.5, y: 0.5 },
            style: {
                fontFamily: 'GaretBook', fontSize: 40, backgroundColor: '#fff', color: '#000', align: 'center',
                wordWrap: { width: 800 }
            }
        }).setInteractive({ cursor: 'pointer' });

        textPadding.push({ left: (800 - incorreta3.getBounds().width) / 2, right: (800 - incorreta3.getBounds().width) / 2, top: (100 - incorreta3.getBounds().height) / 2, bottom: (100 - incorreta3.getBounds().height) / 2 });
        incorreta3.setPadding(textPadding[4]);

        const vitoriaFundo = this.add.image(960, 480, 'vitoriaFundo').setScale(1.5);
        const homeBtn = this.add.image(900, 720, 'homeBtn').setInteractive({ cursor: 'pointer' });
        const setaBtn = this.add.image(1020, 720, 'setaBtn').setInteractive({ cursor: 'pointer' });
        vitoriaFundo.visible = false;
        setaBtn.visible = false;
        homeBtn.visible = false;

        const derrotaFundo = this.add.image(960, 480, 'derrotaFundo').setScale(1.5);
        const restartBtn = this.add.image(1020, 720, 'restartBtn').setInteractive({ cursor: 'pointer' });
        derrotaFundo.visible = false;
        restartBtn.visible = false;

        correta.on('pointerdown', function () {
            vitoria();
        }, this);

        incorreta1.on('pointerdown', function () {
            derrota();

        }, this);

        incorreta2.on('pointerdown', function () {
            derrota();
        }, this);

        incorreta3.on('pointerdown', function () {
            derrota();
        }, this);

        homeBtn.on('pointerdown', function () {
            this.scene.start('Menu');
        }, this);

        restartBtn.on('pointerdown', function () {
            this.scene.start('Roleta');
        }, this);

        setaBtn.on('pointerdown', function () {
            this.scene.start('Fases');
        }, this);


        var that = this;

        function derrota() {
            derrotaFundo.visible = true;
            homeBtn.visible = true;
            restartBtn.visible = true;
            that.children.bringToTop(derrotaFundo);
            that.children.bringToTop(homeBtn);
            that.children.bringToTop(restartBtn);
            correta.disableInteractive();
            incorreta1.disableInteractive();
            incorreta2.disableInteractive();
            incorreta3.disableInteractive();
        }

        function vitoria() {
            vitoriaFundo.visible = true;
            setaBtn.visible = true;
            homeBtn.visible = true;
            that.children.bringToTop(vitoriaFundo);
            that.children.bringToTop(setaBtn);
            that.children.bringToTop(homeBtn);
            correta.disableInteractive();
            incorreta1.disableInteractive();
            incorreta2.disableInteractive();
            incorreta3.disableInteractive();


            if (faseAtual === 'Fase1') fase1Concluida = true;

            else if (faseAtual === 'Fase2') {
                perguntasCertasFase2++;
                if (fase2Concluida === false && perguntasCertasFase2 === 2) fase2Concluida = true;
            }

            else if (faseAtual === 'Fase3') {
                perguntasCertasFase3++;
                if (fase3Concluida === false && perguntasCertasFase3 === 3) fase3Concluida = true;
            }

            else if (faseAtual === 'Fase4') {
                perguntasCertasFase4++;
                if (fase4Concluida === false && perguntasCertasFase4 === 4) fase4Concluida = true;
            }

            else if (faseAtual === 'Fase5') {
                perguntasCertasFase5++;
                if (fase5Concluida === false && perguntasCertasFase5 === 5) fase5Concluida = true;
            }
        }
    }
}
