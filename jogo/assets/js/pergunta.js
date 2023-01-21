class Pergunta extends Phaser.Scene {
    constructor() {
        super("Pergunta");
    }
    create() {
        this.add.image(0, 0, 'fundoPergunta').setOrigin(0, 0);
        this.getPergunta();
    }

    getPergunta() {
        var that = this;
        // pergunta = {
        //     "imagem": "linhaca_dourada",
        //     "pergunta": "Sementes de linhaça são um alimento nutritivo e são fonte importante de um produto usado em diversas indústrias. Qual é esse produto?",
        //     "correta": "Óleo",
        //     "incorreta1": "Corante",
        //     "incorreta2": "Fibras",
        //     "incorreta3": "Amido"
        // };
        // that.createPergunta();
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/perguntas',
            data: {
                tipo: tipoPergunta,
            },
            success: function (data) {
                // console.log(data);
                pergunta = data;
                value = Phaser.Math.Between(0, pergunta.length - 1);
                // pergunta = pergunta[value];
                pergunta = {
                    "imagem": "linhaca_dourada",
                    "pergunta": "Sementes de linhaça são um alimento nutritivo e são fonte importante de um produto usado em diversas indústrias. Qual é esse produto?",
                    "correta": "Óleo",
                    "incorreta1": "Corante",
                    "incorreta2": "Fibras",
                    "incorreta3": "Amido"
                }
                console.log(pergunta);
                if (pergunta.imagem) {
                    console.log('nome imagem: ', pergunta.imagem);
                    that.load.image('imgPergunta', `assets/img/perguntas/${pergunta.imagem}.png`);
                    that.load.once(Phaser.Loader.Events.COMPLETE, () => {
                        that.createPergunta();
                    })
                    that.load.start();
                }
                else that.createPergunta();
            },
            error: function (xhr) {
                console.log(xhr);
            }
        });
    }

    createPergunta() {
        //Imagem
        this.add.image(960, 480, 'imgPergunta');
        if (pergunta.imagem) {
            var posicoes = [{ x: 490, y: 750 },{ x: 490, y: 900 },{ x: 1440, y: 750 },{ x: 1440, y: 900 }];
        }
        else {
            var posicoes = [{ x: 965, y: 450 },{ x: 965, y: 600 },{ x: 965, y: 750 },{ x: 965, y: 900 }];
        }

        var vetores = Phaser.Utils.Array.Shuffle([0,1,2,3]);
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
        const opcao1 = this.make.text({
            x: posicoes[0].x,
            y: posicoes[0].y,
            text: pergunta.correta,
            origin: { x: 0.5, y: 0.5 },
            style: {
                fontFamily: 'GaretBook', fontSize: 40, backgroundColor: '#fff', color: '#000', align: 'center',
                wordWrap: { width: 800 }
            }
        }).setInteractive({ cursor: 'pointer' });

        textPadding.push({ left: (800 - opcao1.getBounds().width) / 2, right: (800 - opcao1.getBounds().width) / 2, top: (100 - opcao1.getBounds().height) / 2, bottom: (100 - opcao1.getBounds().height) / 2 });
        opcao1.setPadding(textPadding[1]);

        //Opção 2
        const opcao2 = this.make.text({
            x: posicoes[1].x,
            y: posicoes[1].y,
            text: pergunta.incorreta1,
            origin: { x: 0.5, y: 0.5 },
            style: {
                fontFamily: 'GaretBook', fontSize: 40, backgroundColor: '#fff', color: '#000', align: 'center',
                wordWrap: { width: 800 }
            }
        }).setInteractive({ cursor: 'pointer' });

        textPadding.push({ left: (800 - opcao2.getBounds().width) / 2, right: (800 - opcao2.getBounds().width) / 2, top: (100 - opcao2.getBounds().height) / 2, bottom: (100 - opcao2.getBounds().height) / 2 });
        opcao2.setPadding(textPadding[2]);

        //Opção 3
        const opcao3 = this.make.text({
            x: posicoes[2].x,
            y: posicoes[2].y,
            text: pergunta.incorreta2,
            origin: { x: 0.5, y: 0.5 },
            style: {
                fontFamily: 'GaretBook', fontSize: 40, backgroundColor: '#fff', color: '#000', align: 'center',
                wordWrap: { width: 800 }
            }
        }).setInteractive({ cursor: 'pointer' });

        textPadding.push({ left: (800 - opcao3.getBounds().width) / 2, right: (800 - opcao3.getBounds().width) / 2, top: (100 - opcao3.getBounds().height) / 2, bottom: (100 - opcao3.getBounds().height) / 2 });
        opcao3.setPadding(textPadding[3]);

        //Opção 4
        const opcao4 = this.make.text({
            x: posicoes[3].x,
            y: posicoes[3].y,
            text: pergunta.incorreta3,
            origin: { x: 0.5, y: 0.5 },
            style: {
                fontFamily: 'GaretBook', fontSize: 40, backgroundColor: '#fff', color: '#000', align: 'center',
                wordWrap: { width: 800 }
            }
        }).setInteractive({ cursor: 'pointer' });

        textPadding.push({ left: (800 - opcao4.getBounds().width) / 2, right: (800 - opcao4.getBounds().width) / 2, top: (100 - opcao4.getBounds().height) / 2, bottom: (100 - opcao4.getBounds().height) / 2 });
        opcao4.setPadding(textPadding[4]);
    }
}
