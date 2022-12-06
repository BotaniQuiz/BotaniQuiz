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
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3000/perguntas',
            data: {
                tipo: tipoPergunta,
            },
            success: function (data) {
                game = new Phaser.Game(config);
                pergunta = data;
                // console.log(data);
                that.createPergunta();
            },
            error: function (xhr) {
                console.log(xhr);
            }
        });
    }

    createPergunta() {
        value = Phaser.Math.Between(0, 3);
        pergunta = pergunta[value];
        let screenWidth = screen.width;
        const posicoes = Phaser.Utils.Array.Shuffle([400, 550, 700, 850]);
        console.log(posicoes);
        console.log(pergunta);
        //Pergunta
        // this.add.rectangle(200, 200, 148, 148, 0x6666ff);
        const perguntaText = this.make.text({
            x: screenWidth / 2,
            y: 150,
            text: pergunta.pergunta,
            origin: { x: 0.5, y: 0.5 },
            style: {
                fontFamily: 'GaretBook', fontSize: 60, backgroundColor: '#fff', color: '#000', align: 'center',
                wordWrap: { width: 1200 }
            }
        });

        let textPadding = [];
        textPadding.push({ left: (1200 - perguntaText.getBounds().width) / 2, right: (1200 - perguntaText.getBounds().width) / 2, top: (200 - perguntaText.getBounds().height) / 2, bottom: (200 - perguntaText.getBounds().height) / 2 });
        perguntaText.setPadding(textPadding[0])


        //Opção 1
        const opcao1 = this.make.text({
            x: screenWidth / 2,
            y: posicoes[0],
            text: pergunta.correta,
            origin: { x: 0.5, y: 0.5 },
            style: {
                fontFamily: 'GaretBook', fontSize: 40, backgroundColor: '#fff', color: '#000', align: 'center',
                wordWrap: { width: 800 }
            }
        }).setInteractive({ cursor: 'pointer' });

        textPadding.push({ left: (800 - opcao1.getBounds().width) / 2, right: (800 - opcao1.getBounds().width) / 2, top: (100 - opcao1.getBounds().height) / 2, bottom: (100 - opcao1.getBounds().height) / 2 });
        opcao1.setPadding(textPadding[1])

        //Opção 2
        const opcao2 = this.make.text({
            x: screenWidth / 2,
            y: posicoes[1],
            text: pergunta.incorreta1,
            origin: { x: 0.5, y: 0.5 },
            style: {
                fontFamily: 'GaretBook', fontSize: 40, backgroundColor: '#fff', color: '#000', align: 'center',
                wordWrap: { width: 800 }
            }
        }).setInteractive({ cursor: 'pointer' });

        textPadding.push({ left: (800 - opcao2.getBounds().width) / 2, right: (800 - opcao2.getBounds().width) / 2, top: (100 - opcao2.getBounds().height) / 2, bottom: (100 - opcao2.getBounds().height) / 2 });
        opcao2.setPadding(textPadding[2])

        //Opção 3
        const opcao3 = this.make.text({
            x: screenWidth / 2,
            y: posicoes[2],
            text: pergunta.incorreta2,
            origin: { x: 0.5, y: 0.5 },
            style: {
                fontFamily: 'GaretBook', fontSize: 40, backgroundColor: '#fff', color: '#000', align: 'center',
                wordWrap: { width: 800 }
            }
        }).setInteractive({ cursor: 'pointer' });

        textPadding.push({ left: (800 - opcao3.getBounds().width) / 2, right: (800 - opcao3.getBounds().width) / 2, top: (100 - opcao3.getBounds().height) / 2, bottom: (100 - opcao3.getBounds().height) / 2 });
        opcao3.setPadding(textPadding[3])

        //Opção 4
        const opcao4 = this.make.text({
            x: screenWidth / 2,
            y: posicoes[3],
            text: pergunta.incorreta3,
            origin: { x: 0.5, y: 0.5 },
            style: {
                fontFamily: 'GaretBook', fontSize: 40, backgroundColor: '#fff', color: '#000', align: 'center',
                wordWrap: { width: 800 }
            }
        }).setInteractive({ cursor: 'pointer' });

        textPadding.push({ left: (800 - opcao4.getBounds().width) / 2, right: (800 - opcao4.getBounds().width) / 2, top: (100 - opcao4.getBounds().height) / 2, bottom: (100 - opcao4.getBounds().height) / 2 });
        opcao4.setPadding(textPadding[4])

    }

}
