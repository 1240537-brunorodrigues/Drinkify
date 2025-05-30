let questions = [
    {
        numb: 1,
        question: "O que é necessário para fazer rum?",
        answer: "Cana de Açúcar",
        options: [
            "Milho",
            "Cevada",
            "Cana de Açúcar",
            "Batata"
        ],
        correct: "Distribui 2 goles.",
        incorrect: "Tens de terminar todas as tuas frases com 'ARRR' até ao fim do jogo. Caso não o faças, tens de beber."
    },
    {
        numb: 2,
        question: "Em que parte de França é Bordeaux (Bordéus)?",
        answer: "Sudoeste",
        options: [
            "Nordeste",
            "Sudeste",
            "Noroeste",
            "Sudoeste"
        ],
        correct: "Ficas mais perto de França, avança 2 casas.",
        incorrect: "Não é hoje que chegas a França, recua 3 casas."
    },
    {
        numb: 3,
        question: "De que eram feitas as casas no Antigo Egito?",
        answer: "Madeira",
        options: [
            "Lama",
            "Madeira",
            "Tijolo",
            "Barro"
        ],
        correct: "Mumificas um jogador. Ele fica uma vez sem jogar.",
        incorrect: "O grupo escolhe uma pessoa. Fazer uma dança do ventre sedutora à pessoa durante 30 segundos e ambos bebem 1 gole."
    },
    {
        numb: 4,
        question: "Qual é o nome de rapaz mais comum no Reino Unido?",
        answer: "George",
        options: [
            "George",
            "Arthur",
            "William",
            "Harry"
        ],
        correct: "Escolhe 1 jogador. Esse jogador torna-se um bebé e deve ficar a mamar no dedo até que seja a sua vez de jogar. Se alguém se dirigir ao bebé durante esse tempo ele só pode responder “Uéee uéee”, caso não o faça tem de beber.",
        incorrect: "O grupo escolhe uma pessoa. Os dois bebem 1 gole e demonstram juntos ao grupo as posições sexuais favoritas de cada um. Todo o grupo fica a saber como vocês fariam os vossos bebés!"
    },
    {
        numb: 5,
        question: "Arnold Schwarzenegger foi o governador de que estado da América?",
        answer: "Califórnia",
        options: [
            "Flórida",
            "Texas",
            "Montana",
            "Califórnia"
        ],
        correct: "Também ficas mais perto da Califórnia. Avanças 3 casas.",
        incorrect: "Beber um gole e fazer a ponte com uma perna elevada."
    },
    {
        numb: 6,
        question: "O filme Avengers: Infinity War foi lançado em que mês de 2018?",
        answer: "Novembro",
        options: [
            "Junho",
            "Julho",
            "Novembro",
            "Dezembro"
        ],
        correct: "Podes vingar-te num jogador. Escolhe-o e ele bebe 2 goles e recua 5 casas.",
        incorrect: "Recua 3 casas."
    },
    {
        numb: 7,
        question: "Que nome se dá à sardinha pequena?",
        answer: "Petinga",
        options: [
            "Faneca",
            "Petinga",
            "Chicharro",
            "Jaquinzinho"
        ],
        correct: "Muito perspicaz! Escolhe um jogador para ter a alcunha de “sardinha”. Todos se devem dirigir ao jogador pela alcunha. Caso não o façam, devem beber.",
        incorrect: "Que pena... O nome que disseste torna-se agora a tua alcunha. Todos se devem dirigir a ti pela alcunha. Caso não o façam, devem beber."
    },
    {
        numb: 8,
        question: "Na era do Paleozoico, qual dos seguintes Períodos é o mais antigo?",
        answer: "Ordovícico",
        options: [
            "Devónico",
            "Ordovícico",
            "Pérmico",
            "Silúrico"
        ],
        correct: "Parabéns! Agora escolhe um jogador para voltar atrás no tempo e recuar 15 casas.",
        incorrect: "Too bad... Voltas atrás no tempo e recuas 8 casas."
    },
    {
        numb: 9,
        question: "Qual classe literária ganhou o primeiro prémio Nobel da Literatura?",
        answer: "Poesia",
        options: [
            "Romance",
            "Dramaturgia",
            "Poesia",
            "Ensaio"
        ],
        correct: "Correto! Escolhe um jogador para beber 2 goles. Esse mesmo jogador, sempre que falar, deve fazê-lo com a língua o máximo para fora possível. Tem o efeito de 1 ronda.",
        incorrect: "O grupo escolhe uma pessoa. Bebe 2 goles e faz uma serenata ao escolhido."
    },
    {
        numb: 10,
        question: "Qual elemento da Tabela Periódica recebeu o seu nome em homenagem a um gnomo subterrâneo “malvado”?",
        answer: "Cobalto",
        options: [
            "Háfnio",
            "Cobalto",
            "Berílio",
            "Telúrio"
        ],
        correct: "Que malvado! Distribui 2 goles e manda alguém recuar 5 casas.",
        incorrect: "Bebe 3 goles e faz um riso maléfico."
    },
    {
        numb: 11,
        question: "Quantos mares banham a Península Balcânica?",
        answer: "6",
        options: [
            "3",
            "4",
            "5",
            "6"
        ],
        correct: "Parabéns, avança 6 casas.",
        incorrect: "Pena, recua em casas o número que disseste."
    },
    {
        numb: 12,
        question: "Qual dos nomes abaixo nunca foi de um Papa?",
        answer: "Jorge",
        options: [
            "Valentim",
            "Eugénio",
            "Jorge",
            "Vitor"
        ],
        correct: "Muito católico da tua parte, a partir de agora os restantes jogadores devem dirigir-se a ti como “Deus”, no caso de não o fazerem, têm de beber.",
        incorrect: "Nada católico da tua parte, Deus manda-te para trás. Recuas 5 casas."
    },
    {
        numb: 13,
        question: "Quem foi o 10º Rei de Portugal?",
        answer: "D. João I",
        options: [
            "D. Fernando",
            "D. Sancho I",
            "D. João I",
            "D. Sancho II"
        ],
        correct: "Estás mais perto do trono, avanças 1 casa e escolhes 2 drinking buddies.",
        incorrect: "Agora és um plebeu, passas a ser drinking buddy dos 2 jogadores com mais buddies. No caso de não haver buddies, o grupo escolhe-os por ti."
    },
    {
        numb: 14,
        question: "Qual foi o cognome do 12º Rei de Portugal?",
        answer: "O Africano",
        options: [
            "O Lavrador",
            "O Eloquente",
            "O Desejado",
            "O Africano"
        ],
        correct: "Conquistas terras como um Rei. Troca de lugar com o jogador mais à frente. Caso esse sejas tu, podes fazê-lo assim que alguém te ultrapasse.",
        incorrect: "Não dás para realeza, bebe 2 goles e recua 3 casas."
    },
    {
        numb: 15,
        question: "Em junho de 2019, para que país foi Jorge Jesus trabalhar como treinador?",
        answer: "Brasil",
        options: [
            "Itália",
            "Arábia Saudita",
            "China",
            "Brasil"
        ],
        correct: "Fazes uma viagem, avança 5 casas.",
        incorrect: "Bebes 3 goles e fazes a melhor imitação que conseguires de Jorge Jesus."
    },
    {
        numb: 16,
        question: "Qual dos seguintes é o nome de um rio português?",
        answer: "Rio Homem",
        options: [
            "Rio Homem",
            "Rio Mulher",
            "Rio Criança",
            "Rio Bebé"
        ],
        correct: "O Rio leva-te para a frente, avança 3 casas.",
        incorrect: "Bebe um gole e depois deita-te no chão e nada como se estivesses no rio."
    },
    {
        numb: 17,
        question: "O premiado filme “Parasitas” é de que origem?",
        answer: "Sul-Coreana",
        options: [
            "Norte-Coreana",
            "Japonesa",
            "Tailandesa",
            "Sul-Coreana"
        ],
        correct: "Escolhes dois parasitas para beberem quando tu beberes.",
        incorrect: "A partir de agora todos te chamam de “Parasita”. Quem não o fizer, tem de beber."
    },
    {
        numb: 18,
        question: "Que navegador português foi o primeiro a dobrar o cabo Bojador?",
        answer: "Gil Eanes",
        options: [
            "Gil Eanes",
            "Diogo Cão",
            "Bartolomeu Dias",
            "Gaspar Corte Real"
        ],
        correct: "Navega 5 casas para a frente.",
        incorrect: "Bebe um shot de água salgada."
    },
    {
        numb: 19,
        question: "Que heterónimo de Fernando Pessoa assina o poema 'Ode Triunfal'?",
        answer: "Álvaro de Campos",
        options: [
            "Bernardo Soares",
            "Álvaro de Campos",
            "Ricardo Reis",
            "Alexander Search"
        ],
        correct: "Escolhes um novo nome para ti. Quem não te chamar por esse nome, bebe.",
        incorrect: "Bebe 2 goles e imita alguém do grupo."
    },
    {
        numb: 20,
        question: "Santa Cecília é a padroeira de quem?",
        answer: "Músicos",
        options: [
            "Músicos",
            "Condutores",
            "Polícias",
            "Enfermeiros"
        ],
        correct: "Ficas com o Poder do Canto. Sempre que quiseres podes escolher alguém e cantar uma música. Caso a pessoa não consiga completar a letra, tem de beber.",
        incorrect: "Bebes 2 goles e ficas mudo. Não podes falar durante uma ronda."
    },
    {
        numb: 21,
        question: "Na Física, qual das seguintes não é uma força fundamental natural?",
        answer: "Inércia",
        options: [
            "Gravitacional",
            "Inércia",
            "Nuclear Fraca",
            "Nuclear Forte"
        ],
        correct: "Escolhes 2 jogadores para ficarem 1 ronda de pé.",
        incorrect: "Desafias a gravidade. Tens de ficar 1 ronda de pé."
    },
    {
        numb: 22,
        question: "No filme de 1971 da popular saga '007', que atributo é dado aos diamantes?",
        answer: "Eternos",
        options: [
            "Caros",
            "Bonitos",
            "Pesados",
            "Eternos"
        ],
        correct: "Escolhe 2 jogadores para darem uma cambalhota.",
        incorrect: "Passas 1 ronda com as mãos atrás das costas."
    },
    {
        numb: 23,
        question: "Qual destes mamíferos é um marsupial?",
        answer: "Canguru",
        options: [
            "Lontra",
            "Suricata",
            "Panda-Gigante",
            "Canguru"
        ],
        correct: "Certo, salta 3 casas.",
        incorrect: "O grupo escolhe alguém e sentas-te no colo dessa pessoa durante 1 ronda."
    },
    {
        numb: 24,
        question: "Em que posição se encontra a figura da estátua 'O Pensador', de Auguste Rodin?",
        answer: "Sentada",
        options: [
            "Em pé",
            "Deitada",
            "Sentada",
            "De gatas"
        ],
        correct: "Certo, escolhes um jogador e ele fica impedido de jogar na sua próxima vez.",
        incorrect: "Volta para a casa da qual vieste."
    },
    {
        numb: 25,
        question: "Karachi é uma cidade de qual destes países?",
        answer: "Paquistão",
        options: [
            "Irão",
            "Paquistão",
            "Arménia",
            "Azerbaijão"
        ],
        correct: "As pessoas do sexo oposto ao teu, passam uma ronda inteira com a cabeça para baixo.",
        incorrect: "As pessoas do mesmo sexo que tu, passam uma ronda inteira com a cabeça para baixo."
    },
    {
        numb: 26,
        question: "Qual o estilo arquitetónico que predomina na Catedral de Notre-Dame, em Paris?",
        answer: "Gótico",
        options: [
            "Gótico",
            "Manuelino",
            "Neoclássico",
            "Art Déco"
        ],
        correct: "Com uma caneta, podes fazer uma 'tatuagem' a alguém à tua escolha.",
        incorrect: "O grupo escolhe alguém para que te faça uma 'tatuagem' com uma caneta."
    },
    {
        numb: 27,
        question: "Quem foi o primeiro homem a orbitar a Terra?",
        answer: "Yuri Gagarin",
        options: [
            "John Glenn",
            "Sergei Korolev",
            "Yuri Gagarin",
            "Michael Collins"
        ],
        correct: "Parabéns, podes escolher um jogador para voltar à casa equivalente à metade do número da casa da qual se encontra.",
        incorrect: "Bebes 2 goles e tornas-te num satélite. Ficas a 'orbitar' a mesa/grupo, às voltas, durante 1 ronda."
    },
    {
        numb: 28,
        question: "Em que ano chegou Vasco da Gama à Índia?",
        answer: "1498",
        options: [
            "1383",
            "1415",
            "1498",
            "1515"
        ],
        correct: "Volta a lançar o dado e avança o dobro desse número de casas.",
        incorrect: "Volta a lançar o dado e recua esse número de casas."
    },
    {
        numb: 29,
        question: "A Bielorrússia não faz fronteira com qual destes países?",
        answer: "Eslovénia",
        options: [
            "Letónia",
            "Lituânia",
            "Polónia",
            "Eslovénia"
        ],
        correct: "Tornas-te um jogador 'isolado', tem sempre de existir uma casa vazia entre ti e qualquer outro, sendo que sempre que alguém se aproxime, avanças até continuares isolado. Tem o efeito de 1 ronda.",
        incorrect: "Vais para a casa do jogador mais atrás. Caso esse sejas tu, recua 5 casas."
    },
    {
        numb: 30,
        question: "A que família animal pertencem as renas?",
        answer: "Cervídeos",
        options: [
            "Cervídeos",
            "Equídeos",
            "Anatídeos",
            "Procionídeos"
        ],
        correct: "Escolhes alguém para beber 2 goles e ficar com a alcunha de 'Rudolfo' até ao fim do jogo.",
        incorrect: "Até ao fim do jogo, a tua nova alcunha torna-se viado(a). Caso alguém não se dirija a ti desse modo, tem de beber."
    },
    {
        numb: 31,
        question: "O que come Popeye para ganhar força?",
        answer: "Espinafres",
        options: [
            "Feijão",
            "Brócolos",
            "Cenoura",
            "Espinafres"
        ],
        correct: "Ficas imune a Desafios durante 1 ronda.",
        incorrect: "O grupo escolhe uma especiaria para juntares à tua bebida."
    },
    {
        numb: 32,
        question: "Em que cidade podemos atravessar a ponte romana de Trajano?",
        answer: "Chaves",
        options: [
            "Lisboa",
            "Braga",
            "Elvas",
            "Chaves"
        ],
        correct: "Esolhe 2 jogadores para beberem 1 gole e fazem a ponte. As pontes devem cruzar-se.",
        incorrect: "Bebe 2 goles e faz a ponte."
    },
    {
        numb: 33,
        question: "Qual das seguintes ilhas pertence ao arquipélago da Madeira?",
        answer: "Deserta Grande",
        options: [
            "Barreta",
            "Deserta Grande",
            "Faial",
            "Culatra"
        ],
        correct: "Escolhes 2 jogadores para se tornarem um arquipélago e ficarem distantes da mesa/grupo durante uma ronda.",
        incorrect: "Canta o Hino Nacional. Deves beber 1 gole por cada erro que cometeres."
    },
    {
        numb: 34,
        question: "Qual foi o primeiro ser vivo terrestre a orbitar o planeta Terra?",
        answer: "Cão",
        options: [
            "Cão",
            "Homem",
            "Macaco",
            "Rato"
        ],
        correct: "Escolhes alguém para ficar em órbita. Fica a dar voltas à mesa durante 1 ronda.",
        incorrect: "Bebes 1 gole e dás 5 voltas sob ti próprio."
    },
    {
        numb: 35,
        question: "Qual dos seguintes visionários empreendedores nasceu na África do Sul?",
        answer: "Elon Musk",
        options: [
            "Elon Musk",
            "Jeff Bezos",
            "Richard Branson",
            "Tim Cook"
        ],
        correct: "És rico, podes encher o copo de alguém à tua escolha.",
        incorrect: "És pobre, ficas 1 ronda sem cadeira."
    },
    {
        numb: 36,
        question: "Em qual destas opções se usa uma escalfeta?",
        answer: "Aquecer os pés",
        options: [
            "Mergulhar no Mar",
            "Aquecer os pés",
            "Esculpir pedra",
            "Pesar ingredientes"
        ],
        correct: "Todos os jogadores, exceto tu, bebem 1 gole e ficam descalços até ao fim do jogo.",
        incorrect: "Bebe 1 gole e fica descalço até ao fim do jogo."
    },
    {
        numb: 37,
        question: "Que rei sucedeu a D. Sancho I, em 1211",
        answer: "D. Afonso II",
        options: [
            "D. Sancho II",
            "D. Dinis",
            "D. Afonso II",
            "D. Pedro I"
        ],
        correct: "Joga ao Rei Manda.",
        incorrect: "O grupo escolhe 2 consequências/desafios para fazeres. Por cada 1 que recuses, terminas a tua bebida."
    },
    {
        numb: 38,
        question: "Qual era a deusa grega do amor e da beleza?",
        answer: "Afrodite",
        options: [
            "Hera",
            "Perséfone",
            "Minerva",
            "Afrodite"
        ],
        correct: "Avança 3 casas.",
        incorrect: "Só podes estar a gozar... Termina a tua bebida e volta à casa do Início."
    },
    {
        numb: 39,
        question: "Qual dos seguintes ingredientes não é listado como vegan?",
        answer: "Mel",
        options: [
            "Gão-de-bico",
            "Pão",
            "Mel",
            "Azeite"
        ],
        correct: "Tornas o jogo meloso, escolhe 2 jogadores para darem um beijinho e se tornarem buddies.",
        incorrect: "Junta esse ingrediente à tua bebida."
    },
    {
        numb: 40,
        question: "Segundo a lenda, quem fundou a cidade de Roma?",
        answer: "Rómulo e Remo",
        options: [
            "Caim e Abel",
            "Rómulo e Remo",
            "Ícaro e Dédalo",
            "Pólux e Castor"
        ],
        correct: "És o novo conquistador. Todos, exceto tu, recuam uma casa.",
        incorrect: "Não conquistas hoje, recua 5 casas."
    },
    {
        numb: 41,
        question: "Miles Davis, estrela do jazz, era mais conhecido por tocar que instrumento?",
        answer: "Trompete",
        options: [
            "Trompete",
            "Piano",
            "Guitarra",
            "Saxofone"
        ],
        correct: "Escolhe alguém para beber um body shot do teu corpo.",
        incorrect: "Bebe um body shot do corpo de um jogador à esolha do grupo."
    },
    {
        numb: 42,
        question: "Qual é o Dia de Todos os Santos?",
        answer: "1 de novembro",
        options: [
            "1 de abril",
            "25 de abril",
            "10 de junho",
            "1 de novembro"
        ],
        correct: "Avança 5 casas.",
        incorrect: "Bebes 1 gole por cada jogador."
    },
    {
        numb: 43,
        question: "Em que órgão do corpo humano é produzida a insulina?",
        answer: "Pâncreas",
        options: [
            "Bexiga",
            "Fígado",
            "Pâncreas",
            "Tiroide"
        ],
        correct: "Beija um jogador à tua escolha, onde queiras.",
        incorrect: "Estragas o corpo, bebes 5 goles."
    },
    {
        numb: 44,
        question: "Em que ano ganhou Rosa Mota a sua medalha de ouro olímpica?",
        answer: "1988",
        options: [
            "1982",
            "1988",
            "1992",
            "1996"
        ],
        correct: "Segura um copo de shot com a tua boca e escolhe alguém para lhe dares o shot.",
        incorrect: "Pega nas bebidas das pessoas à tua esquerda e direita e mistura no teu copo."
    },
    {
        numb: 45,
        question: "Em Portugal, qual destes concelhos não é atravessado pela autoestrada A2?",
        answer: "Odemira",
        options: [
            "Palmela",
            "Odemira",
            "Aljustrel",
            "Almodôvar"
        ],
        correct: "Que bem orientado, avança 6 casas.",
        incorrect: "Sentido de orientação é 0, recuas 2 casas."
    },
    {
        numb: 46,
        question: "Juba é a capital de qual destes países africanos?",
        answer: "Sudão do Sul",
        options: [
            "Nigéria",
            "Ruanda",
            "Somália",
            "Sudão do Sul"
        ],
        correct: "Durante 1 ronda, sempre que fizeres uma pergunta a alguém, o jogador deve responder 'rawr'. Caso não o faça, tem de beber.",
        incorrect: "Durante 1 ronda, sempre que alguém falar para ti tens responder 'rawr', caso não o faças, tens de beber."
    },
    {
        numb: 47,
        question: "Qual destes nomes não corresponde a um dos três mosqueteiros?",
        answer: "Adónis",
        options: [
            "Adónis",
            "Porthos",
            "Aramis",
            "Athos"
        ],
        correct: "Escolhes 2 drinking buddies.",
        incorrect: "Bebe 3 goles."
    },
    {
        numb: 48,
        question: "O “milagre das rosas” é associado a que rainha portuguesa?",
        answer: "D. Isabel",
        options: [
            "D. Maria",
            "D. Isabel",
            "D. Inês de Castro",
            "D. Leonor Teles"
        ],
        correct: "Nice! Escolhe alguém para cantar uma música da Rosinha. Se não souber, tem de beber 5 goles.",
        incorrect: "Fazes um milagre, todos exceto tu avançam 5 casas."
    },
    {
        numb: 49,
        question: "Que mar se situa entre a China e a Península da Coreia?",
        answer: "Mar Amarelo",
        options: [
            "Mar Adriático",
            "Mar das Celebes",
            "Mar Egeu",
            "Mar Amarelo"
        ],
        correct: "Recebes uma massagem de um jogador à tua escolha.",
        incorrect: "O grupo escolhe alguém para tu fazeres uma massagem."
    },
    {
        numb: 50,
        question: "A ilha Christmas é um território de que país?",
        answer: "Austrália",
        options: [
            "EUA",
            "Austrália",
            "Islândia",
            "África do Sul"
        ],
        correct: "Podes tirar uma peça de roupa de uma pessoa à tua escolha (com a boca se te estiveres a sentir kinky).",
        incorrect: "O grupo dá-te 2 alternativas de pessoas para escolheres 1 e meteres like nas fotos mais antigas do insta."
    },
    {
        numb: 51,
        question: "De que região portuguesa é originário o doce Dom Rodrigo?",
        answer: "Algarve",
        options: [
            "Algarve",
            "Alentejo",
            "Ribatejo",
            "Minho"
        ],
        correct: "Beija quem comias.",
        incorrect: "Conta ao grupo algo de que te arrependes."
    },
    {
        numb: 52,
        question: "Que nome tinha a missão espacial que levou o Homem a pisar a Lua pela 1ª vez?",
        answer: "Apollo",
        options: [
            "A119",
            "Gemini",
            "Mercury",
            "Apollo"
        ],
        correct: "Escolhe 1 jogador para se deitar no chão. Com uma caneta na boca, finge que dás outline ao corpo dessa pessoa (como numa cena de crime).",
        incorrect: "Muda a tua bio no insta para 'Estou carente' e partilha o teu próprio perfil na tua história."
    },
    {
        numb: 53,
        question: "Qual destes investigadores desenvolveu o processo da pasteurização?",
        answer: "Louis Pasteur",
        options: [
            "Alexander Fleming",
            "Blaise Pascal",
            "Louis Pasteur",
            "Marie Curie"
        ],
        correct: "Escolhe alguém para tirar uma peça de roupa.",
        incorrect: "Molha um pouco de pão na tua bebida e come."
    },
    {
        numb: 54,
        question: "Qual das seguintes não é uma ilha francesa?",
        answer: "Sardenha",
        options: [
            "Maiote",
            "Córsega",
            "Martinica",
            "Sardenha"
        ],
        correct: "Escolhe 2 pessoas e dão um beijo triplo.",
        incorrect: "O grupo escolhe 2 pessoas para vocês darem um beijo triplo."
    },
    {
        numb: 55,
        question: "Em que distrito fica situada a freguesia de Cabanas de Viriato?",
        answer: "Viseu",
        options: [
            "Guarda",
            "Viseu",
            "Faro",
            "Castelo Branco"
        ],
        correct: "Apalpa o rabo da pessoa que achas mais bonita da roda.",
        incorrect: "Manda um áudio para um(a) crush teu/tua."
    },
    {
        numb: 56,
        question: "Qual das seguintes hipóteses é um vulcão situado em Itália?",
        answer: "Vesúvio",
        options: [
            "Calbuco",
            "Ampato",
            "Vesúvio",
            "Manaro"
        ],
        correct: "Todos exceto tu recuam 5 casas.",
        incorrect: "Faz 3 burpees."
    },
    {
        numb: 57,
        question: "Na mitologia grega, qual das seguintes divindades tem domínio dos mares?",
        answer: "Poseidon",
        options: [
            "Atena",
            "Baco",
            "Poseidon",
            "Dionísio"
        ],
        correct: "Todos menos tu fazem Waterfall.",
        incorrect: "Tenta dizer o alfabeto de trás para a frente em 15 segundos. Se não conseguires, bebe metade do teu copo."
    },
    {
        numb: 58,
        question: "Como se chama o cavalo de Dom Quixote?",
        answer: "Rocinante",
        options: [
            "Dulcineia",
            "Rocinante",
            "Bucéfalo",
            "Tornado"
        ],
        correct: "Como Dom Quixote, terás agora um cavalo. Escolhe uma pessoa. Essa pessoa deve meter-se de gatas e beber 5 goles enquanto a cavalgas como um cowboy.",
        incorrect: "Não és Dom Quixote, mas és um cavalo. O grupo escolhe uma pessoa. Fica de gatas e bebe 5 goles enquanto essa pessoa te cavalga como um cowboy."
    },
    {
        numb: 59,
        question: "No final de 2019, em que rio rebentou um dique, transbordando do seu leito?",
        answer: "Mondego",
        options: [
            "Tejo",
            "Douro",
            "Sado",
            "Mondego"
        ],
        correct: "Mete mais vodka na bebida de alguém",
        incorrect: "Enche o teu copo com água."
    },
    {
        numb: 60,
        question: "Que nome tinham os famosos aviões japoneses da Segunda Guerra Mundial?",
        answer: "Zero",
        options: [
            "Zero",
            "MiG-15",
            "P-47",
            "F-14"
        ],
        correct: "Escolhe 3 pessoas para beberem 1 gole e fazerem a roda.",
        incorrect: "Bebe 1 gole e faz a roda."
    },
    {
        numb: 61,
        question: "Em que país fica o Golfo de Carpentária?",
        answer: "Austrália",
        options: [
            "Canadá",
            "Itália",
            "Austrália",
            "Turquia"
        ],
        correct: "Quem é de fora do teu distrito bebe.",
        incorrect: "Bebe 1 gole por cada pessoa que não seja do teu distrito."
    },
    {
        numb: 62,
        question: "Que característica é comum a todos os membros da organização Mensa?",
        answer: "Têm QI elevado",
        options: [
            "São milionários",
            "Têm QI elevado",
            "São veganos",
            "Têm 2+ metros"
        ],
        correct: "Escolhe 2 pessoas para usarem a roupa interior por fora da roupa normal.",
        incorrect: "Tenta tirar a tua roupa interior sem flashares ninguém. Não podes voltar a vestir."
    },
    {
        numb: 63,
        question: "Qual o nome da 13ª constelação do zodíaco, cuja existência foi anunciada em 2011?",
        answer: "Ophiuchus",
        options: [
            "Pegasus",
            "Aquila",
            "Ophiuchus",
            "Draco"
        ],
        correct: "Escolhe alguém para ir para a casa número 13.",
        incorrect: "O grupo escolhe 1 jogador. Troca de roupa com ele."
    },
    {
        numb: 64,
        question: "A quem foi atribuído o Prémio Gulbenkian 2019 na área dos Direitos Humanos?",
        answer: "Amin Maalouf",
        options: [
            "Denis Mukwege",
            "Ilham Tohti",
            "Oleg Sentsov",
            "Amin Maalouf"
        ],
        correct: "Escolhe alguém para terminar a tua bebida.",
        incorrect: "O grupo escolhe 1 jogador. Bebe metade da bebida desse jogador."
    },
    {
        numb: 65,
        question: "O que significa ter iscnofonia? ",
        answer: "Voz fraca",
        options: [
            "Voz fraca",
            "Visão turva",
            "Falta de apetite",
            "Perda de audição"
        ],
        correct: "Escolhe 1 pessoa. Ela não pode falar durante uma ronda.",
        incorrect: "Não podes falar durante 1 ronda."
    },
    {
        numb: 66,
        question: "Onde fica a gruta onde se descobriu o desenho mais antigo da humanidade?",
        answer: "Blombosfontein",
        options: [
            "Ilha Celebes",
            "Blombosfontein",
            "Dordonha",
            "Cantábria"
        ],
        correct: "Escolhe 2 jogadores para andarem de 6, por um caminho feito pelos outros jogadores.",
        incorrect: "Passa 1 ronda debaixo da mesa."
    },
    {
        numb: 67,
        question: "Qual destas ilhas não faz parte do arquipélago dos Açores?",
        answer: "São Vicente",
        options: [
            "São Miguel",
            "São Vicente",
            "Santa Maria",
            "São Jorge"
        ],
        correct: "Manda-te ao mar. Vai para a próxima casa azul e bebe.",
        incorrect: "Põe-te de joelhos no chão. Todos os membros do sexo masculino devem rodear-te e fingir que se masturbam em ti. Tira foto e publica na história."
    },
    {
        numb: 68,
        question: "Quem mandou construir o Palácio Nacional de Mafra?",
        answer: "D. João V",
        options: [
            "D. Afonso Henriques",
            "D. Maria II",
            "D. Carlos",
            "D. João V"
        ],
        correct: "Parabéns, avança pelo número de casas que estás na Universidade.",
        incorrect: "Termina a tua bebida e volta à casa do Início."
    },
    {
        numb: 69,
        question: "Nos desenhos animados, como se chama a sobrinha do Inspetor Gadget?",
        answer: "Penny",
        options: [
            "Laura",
            "Penny",
            "Melanie",
            "Marie"
        ],
        correct: "Faz mímica de um desenho animado à tua escolha. Bebem todos exceto tu e o que adivinhar.",
        incorrect: "Recua o número de casas equivalente a metade da tua idade (arredonda para baixo)."
    },
    {
        numb: 70,
        question: "As pradarias marinhas são os maiores produtores de quê?",
        answer: "Oxigénio",
        options: [
            "Plâncton",
            "Água",
            "Oxigénio",
            "Ouro"
        ],
        correct: "Todos exceto tu recuam para a casa azul mais próxima (e bebem).",
        incorrect: "Recua para a segunda casa azul mais distante de ti."
    },
    {
        numb: 71,
        question: "Qual é, aproximadamente, a temperatura da superfície do Sol em graus celsius?",
        answer: "5500 graus",
        options: [
            "8300 graus",
            "5500 graus",
            "10000 graus",
            "7100 graus"
        ],
        correct: "It's so hot. Escolhe 2 jogadores para removerem uma peça de roupa.",
        incorrect: "Supõe que farias um filme pornográfico com cada jogador. Diz em que categoria cada vídeo ficaria."
    },
    {
        numb: 72,
        question: "Segundo a lenda, por onde é que Tétis segurou Aquiles quando o mergulhou no rio Estige?",
        answer: "Pelo calcanhar",
        options: [
            "Pelo pulso",
            "Pelo pescoço",
            "Pelo cabelo",
            "Pelo calcanhar"
        ],
        correct: "Pessoa culta. Avança 1 casa.",
        incorrect: "Só podes comer merda... Volta à casa do Início."
    },
    {
        numb: 73,
        question: "Opus Deu, a controversa organização católica, foi fundada em 1928 em que país?",
        answer: "Espanha",
        options: [
            "Itália",
            "Vaticano",
            "Portugal",
            "Espanha"
        ],
        correct: "Batiza a bebida de alguém. Adiciona álcool.",
        incorrect: "És batizado. Serven-te a bebida à boca enquanto estás de joelhos."
    },
    {
        numb: 74,
        question: "Que alimento era utilizado pela Tiromancia para prever o futuro?",
        answer: "Arroz",
        options: [
            "Queijo",
            "Melancia",
            "Arroz",
            "Chá"
        ],
        correct: "Assim que alguém calhar numa casa de carta, tu vês as 5 cartas do topo e escolhes uma delas para a pessoa.",
        incorrect: "O grupo escolhe alguém para escolher uma carta para ti."
    },
    {
        numb: 75,
        question: "O que são as palavras com pronúncia e grafia parecidas, mas significados diferentes?",
        answer: "Parónimas",
        options: [
            "Homófonas",
            "Homógrafas",
            "Parónimas",
            "Homónimas"
        ],
        correct: "Já que és tão bom em línguas... come alguém.",
        incorrect: "Não podes falar o teu idioma de origem até ao fim do jogo."
    },
    {
        numb: 76,
        question: "O famoso logótipo dos The Rolling Stones é composto por lábios vermelhos e...",
        answer: "Uma língua de fora",
        options: [
            "Uma língua de fora",
            "Uma fileira de dentes",
            "Um 'piercing' labial",
            "Um bigode"
        ],
        correct: "Distribui 3 goles.",
        incorrect: "Tira as tuas meias com os dentes."
    },
    {
        numb: 77,
        question: "Na numeração romana, que número é representado pelo símbolo L?",
        answer: "50",
        options: [
            "10",
            "50",
            "100",
            "1000"
        ],
        correct: "Escolhe 2 jogadores para passarem 1 ronda de pé.",
        incorrect: "Bebe da tua bebida como se fosses um cão."
    },
    {
        numb: 78,
        question: "Estocolmo é a capital de que país da Europa?",
        answer: "Suécia",
        options: [
            "Noruega",
            "Suécia",
            "Suíça",
            "Dinamarca"
        ],
        correct: "Escolhes 2 jogadores para beberem sempre que tu bebes.",
        incorrect: "Bebe 3 goles e vai até uma parede e finge que estás a ter uma discussão com ela."
    },
    {
        numb: 79,
        question: "Qual destas hipóteses é um doce típico de Sintra?",
        answer: "Travesseiro",
        options: [
            "Almofada",
            "Travesseiro",
            "Édredon",
            "Colchão"
        ],
        correct: "You're so sweet. Mete sal na bebida de 1 jogador.",
        incorrect: "You're not sweet. Mete sal na tua bebida."
    },
    {
        numb: 80,
        question: "Qual o nome do deus egípcio do Sol?",
        answer: "Rá",
        options: [
            "Dó",
            "Rá",
            "Mi",
            "Fá"
        ],
        correct: "'Marca' 3 casas no tabuleiro. Sempre que alguém calhe lá, deve beber 2 goles.",
        incorrect: "Bebe 1 gole e age como um animal à escolha do grupo."
    },
    {
        numb: 81,
        question: "Qual destes navegadores descobriu o caminho marítimo para a Índia?",
        answer: "Vasco da Gama",
        options: [
            "Fernão de Magalhães",
            "Diogo Cão",
            "Vasco da Gama",
            "Pedro Álvares Cabral"
        ],
        correct: "Nice, distribui 2 goles e avança 3 casas.",
        incorrect: "Dumb Fuck. Bebe 2 goles e recua 3 casas."
    },
    {
        numb: 82,
        question: "Rio Tinto é uma freguesia de que concelho?",
        answer: "Gondomar",
        options: [
            "Torres Vedras",
            "Guimarães",
            "Gondomar",
            "Vidigueira"
        ],
        correct: "Escolhe 1 jogador para meter uma história (se conseguir, a chorar) a contar que descobriu que foi adotado.",
        incorrect: "Mete uma história tua (se conseguires, chora) a contar que descobriste que foste adotado."
    },
    {
        numb: 83,
        question: "Onde jogava Neymar antes de ter ingressado no Barcelona?",
        answer: "Santos",
        options: [
            "Palmeiras",
            "Botafogo",
            "Boca Juniors",
            "Santos"
        ],
        correct: "Dá toques com uma bola. Distribui esse número de goles.",
        incorrect: "O grupo escolhe alguém para dar toques com uma bola. Bebe esse número de toques."
    },
    {
        numb: 84,
        question: "Quantas ilhas formam a Indonésia?",
        answer: "Mais de 17500",
        options: [
            "4",
            "12",
            "253",
            "Mais de 17500"
        ],
        correct: "Distribui 3 goles.",
        incorrect: "Mete um tampão na tua bebida e mete uma história a dizer 'gostaram do chá?'"
    },
    {
        numb: 85,
        question: "Em que idioma foi o diário original de Anne Frank publicado pela primeira vez?",
        answer: "Holandês",
        options: [
            "Holandês",
            "Inglês",
            "Francês",
            "Alemão"
        ],
        correct: "Distribui 3 goles.",
        incorrect: "Ficas escondido debaixo da mesa durante uma ronda. Caso não haja mesa, ficas de costas para o grupo."
    },
    {
        numb: 86,
        question: "A Terra está aproximadamente a quantas milhas de distância do Sol?",
        answer: "93 milhões",
        options: [
            "9.3 milhões",
            "39 milhões",
            "93 milhões",
            "193 milhões"
        ],
        correct: "Escolhe 2 jogadores para comerem massa crua.",
        incorrect: "Come massa crua."
    },
    {
        numb: 87,
        question: "Antes das colónias americanas mudarem para o calendário gregoriano, em que data começava o ano novo?",
        answer: "25 março",
        options: [
            "25 março",
            "1 julho",
            "25 setembro",
            "1 dezembro"
        ],
        correct: "Escolhe 2 jogadores para servirem um body shot um ao outro.",
        incorrect: "Bebe 1 gole e faz uma cara feia. Fica com essa cara durante"
    },
    {
        numb: 88,
        question: "Qual dos seguintes homens não tem um elemento químico nomeado em sua homenagem?",
        answer: "Isaac Newton",
        options: [
            "Albert Einstein",
            "Niels Bohr",
            "Isaac Newton",
            "Enrico Fermi"
        ],
        correct: "Até que o jogo termine, caso alguém diga a palavra 'eu' tem de beber.",
        incorrect: "Sempre que disseres a palavra 'eu', tens de beber."
    },
    {
        numb: 89,
        question: "Quem é o único vencedor do Prémio Nobel da Paz a recusar o prémio?",
        answer: "Le Duc Tho",
        options: [
            "Albert Schweitzer",
            "Le Duc Tho",
            "Andrei Sakharov",
            "FAung San Suu Kyiá"
        ],
        correct: "Só tu tens paz, todos menos tu bebem 3 goles.",
        incorrect: "Não tens paz, bebe 3 goles."
    },
    {
        numb: 90,
        question: "Que Primeira-Dama americana era descendente em 9ª geração da Pocahontas?",
        answer: "Edith Wilson",
        options: [
            "Helen Taft",
            "Edith Wilson",
            "Bess Truman",
            "Mamie Eisenhower"
        ],
        correct: "Escolhe 1 jogador para ligar a um dos pais e dizer que tem piolhos.",
        incorrect: "Tens piolhos. Passas 1 ronda a coçar a cabeça."
    },
    {
        numb: 91,
        question: "De acordo com o Population Reference Bureau, qual é o número aproximado de pessoas que já viveram na Terra?",
        answer: "120 biliões",
        options: [
            "90 biliões",
            "120 biliões",
            "1 trilião",
            "5 triliões"
        ],
        correct: "Escolhe 3 pessoas para fazerem twerk ao som de uma música à tua escolha.",
        incorrect: "Esfrega maionese/ketchup/mostarda nas mãos e não as limpes durante 1 ronda."
    },
    {
        numb: 92,
        question: "'Nefelococcigia' é a prática de fazer o quê?",
        answer: "Encontrar formas em nuvens",
        options: [
            "Encontrar formas em nuvens",
            "Dormir com os olhos abertos",
            "Partir vidro com a voz",
            "Nadar em água gelada"
        ],
        correct: "Vendas 1 jogador. Dão-lhe 3 coisas à boca e tem de adivinhar. Distribui 1 gole caso acerte em tudo.",
        incorrect: "Tens de te vendar. Dão-te 3 coisas à boca e tens de adivinhar. Distribuis 1 por cada resposta certa."
    },
    {
        numb: 93,
        question: "Na tabela periódica, existem quatro elementos diferentes nomeados com base em quê?",
        answer: "Uma vila sueca de minas",
        options: [
            "O gato de Antoine Lavoisier",
            "Uma lua de Neptuno",
            "O nome de solteira de Marie Curie",
            "Uma vila sueca de minas"
        ],
        correct: "Escolhe 3 pessoas para beberem 5 goles e dançarem o 'macarena' coordenados e sem música.",
        incorrect: "Posta uma história no insta com o texto 'ODEIO DORMIR DE SUTIÃ'."
    },
    {
        numb: 94,
        question: "Que país venceu a Copa do Mundo de 2014, no Brasil?",
        answer: "Alemanha",
        options: [
            "Alemanha",
            "Portugal",
            "Argentina",
            "Holanda"
        ],
        correct: "Distribui 2 shots de leite e escolhe 1 jogador para falar português do Brasil durante 1 ronda.",
        incorrect: "Bebe 2 shots de leite."
    },
    {
        numb: 95,
        question: "Qual dos seguintes órgãos distribui o sangue pelo corpo?",
        answer: "Coração",
        options: [
            "Estômago",
            "Coração",
            "Rins",
            "Pulmões"
        ],
        correct: "Caralho, licenciou em Medicina. Distribui 1 gole.",
        incorrect: "Uhm... Hello? Volta à casa inicial e termina a tua bebida."
    },
    {
        numb: 96,
        question: "Qual é o ponto de ebulição da água medido em Fahrenheit?",
        answer: "212",
        options: [
            "212",
            "312",
            "412",
            "512"
        ],
        correct: "Adiciona água à bebida de alguém.",
        incorrect: "Adiciona água à tua bebida."
    },
    {
        numb: 97,
        question: "De acordo com a mitologia grega, quantas cabeças tinha o monstro Tifão?",
        answer: "100",
        options: [
            "20",
            "50",
            "80",
            "100"
        ],
        correct: "Escolhe alguém para usar as próprias meias como luvas durante 2 rondas.",
        incorrect: "Usa as tuas meias como luvas durante 2 rondas."
    },
    {
        numb: 98,
        question: "Qual dos seguintes não foi escrito por Shakespeare?",
        answer: "Tartuffe",
        options: [
            "Hamlet",
            "Othello",
            "Richard III",
            "Tartuffe"
        ],
        correct: "Escolhe 3 jogadores para beberem 5 goles com uma colher.",
        incorrect: "Come um fio de espaguete como 'A Dama e o Vagabundo' com a pessoa à sua esquerda."
    },
    {
        numb: 99,
        question: "Como é popularmente conhecida a La Gioconda?",
        answer: "Mona Lisa",
        options: [
            "Mona Lisa",
            "A Última Ceia",
            "Ronda Noturna",
            "Rapariga com o Brinco de Pérola"
        ],
        correct: "Escolhe 2 jogadores. Ambos bebem 2 goles e deitam-se no chão a fingir que são pedaços de bacon a fritar.",
        incorrect: "Deita-te no chão e finge que és um pedaço de bacon a fritar."
    },
    {
        numb: 100,
        question: "O Deserto do Atacama está localizado em qual continente?",
        answer: "América do Sul",
        options: [
            "Europa",
            "América do Sul",
            "África",
            "Ásia"
        ],
        correct: "Escolhe 2 jogadores para ficarem 1 ronda sem jogar.",
        incorrect: "Ficas deserto. Recua no jogo até ficares sozinho (ou chegares à casa do Início)."
    },
    {
        numb: 101,
        question: "Qual é a cor de cabelo da Marge Simpsons, d'Os Simpsons?",
        answer: "Azul",
        options: [
            "Amarelo",
            "Azul",
            "Branco",
            "Cinzento"
        ],
        correct: "Parabéns. Avança para a próxima casa azul.",
        incorrect: "Dumb shit. Volta para a primeira casa azul."
    },
    {
        numb: 102,
        question: "Qual dos seguintes homens é reconhecido como o 'Pai do Computador'?",
        answer: "Charles Babbage",
        options: [
            "Michael Faraday",
            "Charles Babbage",
            "Bill Gates",
            "Nikola Tesla"
        ],
        correct: "Mestre dos computadores. Podes sempre saltar 1 vez cada pergunta caso não a saibas.",
        incorrect: "Dumb shit. Aprende a programar. Todas as tuas frases devem começar com C. Caso contrário, bebes."
    },
    {
        numb: 102,
        question: "Quantos jogadores há numa equipa de basebol?",
        answer: "9",
        options: [
            "5",
            "9",
            "11",
            "15"
        ],
        correct: "Distribui o nº de goles equivalente ao nº de 'bolas' presentes neste jogo.",
        incorrect: "Bebe pelo número de 'bolas' presentes neste jogo."
    },
    {
        numb: 103,
        question: "Em que ano é que a República do Gana ganhou a sua independência?",
        answer: "1957",
        options: [
            "1956",
            "1957",
            "1958",
            "1959"
        ],
        correct: "Correto. Escolhe 2 jogadores para beberem quando tu bebes.",
        incorrect: "Jogador dependente. Acompanha todos os desafios durante oma ronda."
    },
    {
        numb: 104,
        question: "Dos seguintes, qual deles é um dos fundadores da app Pinterest?",
        answer: "Ben Silbermann",
        options: [
            "Zhang Yiming",
            "Mike Lu",
            "Ben Silbermann",
            "Bobboy Murphy"
        ],
        correct: "Certo! Quando quiseres, liga a lanterna do teu telemóvel. Os 2 últimos jogadores a ligarem têm de beber.",
        incorrect: "Bebe 3 goles e passa 1 ronda sentado no colo de alguém à escolha do grupo."
    },
    {
        numb: 105,
        question: "A Beyoncé chegou à fama como vocalista de qual grupo feminino?",
        answer: "Destiny's Child",
        options: [
            "En Vogue",
            "Destiny's Child",
            "Spice Girls",
            "Pussycat Dolls"
        ],
        correct: "Period, avança 5 casas.",
        incorrect: "Crime de ódio, recua 5 casas."
    },
    {
        numb: 106,
        question: "A cinologia é o estudo do quê?",
        answer: "Cães",
        options: [
            "Abelhas",
            "Cães",
            "Baratas",
            "Formigas"
        ],
        correct: "Correto! Escolhe 2 jogadores para passaram 1 ronda de gatas.",
        incorrect: "Bebe 3 goles. A tua alcunha torna-se o que disseste."
    },
    {
        numb: 107,
        question: "Dos seguintes jogadores de xadrez, qual deles se tornou o Grande Mestre mais novo?",
        answer: "Sergey Karjakin",
        options: [
            "Sergey Karjakin",
            "Magnus Carlsen",
            "Javokhir Sindarov",
            "Wei Yi"
        ],
        correct: "Bom movimento de peões. Avança 4 casas.",
        incorrect: "Mau movimento de peões. Bebe 2 goles e recua 2 casas."
    },
    {
        numb: 108,
        question: "No jogo League of Legends, a personagem Garen é irmão de quem?",
        answer: "Lux",
        options: [
            "Vayne",
            "Lux",
            "Lucian",
            "Sona"
        ],
        correct: "Yaay! A tua alcunha torna-se 'Pro Player'.",
        incorrect: "Sad. Não podes olhar nos olhos de ninguém durante 1 ronda. Caso o faças, tens de beber."
    },
    {
        numb: 109,
        question: "Que feitiço usou Harry Potter para matar o Voldemort?",
        answer: "Expelliarmus",
        options: [
            "Expelliarmus",
            "Expecto Patronum",
            "Avada Kedavra",
            "Accio"
        ],
        correct: "A tua alcunha torna-se a tua casa de Hogwarts.",
        incorrect: "Estudasses. Efeitos de bebida a dobrar durante 2 rondas."
    },
    {
        numb: 110,
        question: "Na 3ª temporada de Vampire Diaries, quem leva a Caroline ao baile?",
        answer: "Klaus",
        options: [
            "Stefan",
            "Klaus",
            "Alaric",
            "Ela vai sozinha"
        ],
        correct: "Fanática caralho! Faz um chupão no pescoço de 1 jogador.",
        incorrect: "Problema teu. O grupo escolhe alguém para te fazer um chupão."
    },
    {
        numb: 111,
        question: "No desenho animado 'Futurama', qual é o nome completo do robô Bender?",
        answer: "Bender Bending Rodriguez",
        options: [
            "Bender Robot Rodriguez",
            "Bender Bending Rodriguez",
            "Bender Fender Rodriguez",
            "Bender Roberto Rodriguez"
        ],
        correct: "Escolhe alguém para imitar um robô e beber 3 goles.",
        incorrect: "Imita um robô e bebe 5 goles."
    },
    {
        numb: 112,
        question: "No desenho animado 'Futurama', quantos anos ficou o cão do Fry à porta da pizzaria, à espera que ele voltasse, depois de ele ficar congelado no tempo?",
        answer: "12",
        options: [
            "4",
            "8",
            "12",
            "15"
        ],
        correct: "Escolhe alguém para ter o teu cão. Esse jogador fica sentado no chão ao teu lado durante 1 ronda.",
        incorrect: "Tornas-te o cão de 1 jogador à escolha do grupo e passas 1 ronda sentado no chão ao lado desse jogador."
    },
    {
        numb: 113,
        question: "Na série da Netflix 'Stranger Things', qual é o trabalho de Jim Hopper?",
        answer: "Chefe de Polícia",
        options: [
            "Detetive",
            "Chefe de Polícia",
            "Deputado",
            "Patrulha da Polícia"
        ],
        correct: "Escolhe 2 jogadores para ficarem algemados a ti.",
        incorrect: "Vais para a cadeia. Passas uma ronda na garagem."
    },
    {
        numb: 114,
        question: "Na série da Netflix 'Stranger Things', em que data Will Byers desapareceu pela primeira vez?",
        answer: "6 de novembro de 1983",
        options: [
            "8 de agosto de 1983",
            "12 de setembro de 1983",
            "1 de outubro de 1983",
            "6 de novembro de 1983"
        ],
        correct: "Esta casa passa a ser uma nova casa '69'. O grupo escolhe alguém para ir contigo para a casa de banho.",
        incorrect: "A partir de agora, sempre que calhares numa casa par, recuas uma casa."
    },
    {
        numb: 115,
        question: "Na série da Netflix 'Stranger Things', qual é a marca da lata de refrigerante que a Eleven esmaga com a mente?",
        answer: "Coca-Cola",
        options: [
            "Coca-Cola",
            "Pepsi",
            "Mountain Dew",
            "Tango"
        ],
        correct: "Acrescenta 1 mississipi de álcool à bebida de alguém.",
        incorrect: "Acrescenta 1 mississipi de álcool à tua bebida."
    },
    {
        numb: 116,
        question: "Qual dos seguintes lançou originalmente a app de encontros, Grindr?",
        answer: "Joel Simkhai",
        options: [
            "Joel Simkhai",
            "Mark zuckerberg",
            "Sean Rad",
            "Andrey Andreev"
        ],
        correct: "Escolhes 2 pessoas para se tornarem buddies e durante 1 ronda, sempre que falarem não podem fechar a boca.",
        incorrect: "Bebe 1 gole e durante 1 ronda, sempre que falares, não podes fechar a boca."
    },
    {
        numb: 117,
        question: "Na série da Netflix 'Elite', qual era o username do Ander na app de encontros?",
        answer: "Discreto19 (Discreet19)",
        options: [
            "Cauteloso15 (Cautious15)",
            "Guapo69 (Hottie69)",
            "Discreto19 (Discreet19)",
            "Rompecorazones21 (Heartthrob21)"
        ],
        correct: "Escolhes 2 jogadores para postarem uma história credível na qual fingem ser namoradxs.",
        incorrect: "Posta uma história credível na qual finges namorar com alguém à escolha do grupo."
    },
    {
        numb: 118,
        question: "Na 3ª temporada da série da Netflix 'Elite', quem teve a ideia de que todos deixassem uma impressão digital na arma do crime?",
        answer: "Valerio",
        options: [
            "Samuel",
            "Carla",
            "Valerio",
            "Rebeka"
        ],
        correct: "Escolhe alguém para beber 1 gole e se fingir de desmaiado com uma garrafa de álcool ao lado. Alguém publica na história do jogador 'já morreu'.",
        incorrect: "Bebe 1 gole e finge-te de desmaiado com uma garrafa de álcool ao teu lado. Alguém publica na tua história 'já morreu'."
    },
    {
        numb: 119,
        question: "Em que ano foi lançada a série da Netflix 'La Casa de Papel'?",
        answer: "2017",
        options: [
            "2016",
            "2017",
            "2018",
            "2019"
        ],
        correct: "Vês o dinheiro na tua conta bancária. O jogador mais avançado recua esse nº de casas (máximo 25).",
        incorrect: "O jogador mais avançado vê o dinheiro na sua conta bancária. Recuas esse nº de casas (máximo 25)."
    },
    {
        numb: 120,
        question: "Na série da Netflix 'La Casa de Papel', quem teve a ideia do assalto à Casa da Moeda?",
        answer: "Pai do Professor",
        options: [
            "Berlim",
            "Professor",
            "Pai do Professor",
            "Nenhum destes"
        ],
        correct: "Tens 15 segundos para dizer o máximo de capitais que conseguires. O jogador mais avançado recua esse nº de casas.",
        incorrect: "O jogador mais avançado tem 15 segundos para dizer o máximo de capitais que conseguir. Recuas esse nº de casas."
    },
    {
        numb: 121,
        question: "Na série da Netflix 'La Casa de Papel', qual das seguintes personagens sofria de uma doença rara?",
        answer: "Berlim",
        options: [
            "Berlim",
            "Tóquio",
            "Professor",
            "Nairobi"
        ],
        correct: "Escolhe uma capital. Ficas com essa alcunha até ao final do jogo.",
        incorrect: "Tens 15 segundos para dizer 20 capitais. Bebes 1 gole por cada capital que ficar por dizer"
    },
    {
        numb: 122,
        question: "Na série da Netflix 'Lúcifer', qual é o nome da discoteca de Lucifer?",
        answer: "Lux",
        options: [
            "Hell On Earth",
            "Lux",
            "The Luce",
            "Eden"
        ],
        correct: "Quando forem sair, o grupo tem de te pagar pelo menos 2 shots.",
        incorrect: "Quando forem sair, tens de pagar 2 shots a alguém do grupo."
    },
    {
        numb: 123,
        question: "Na série da Netflix 'Lúcifer', qual é a cicatriz que Lúcifer tem que revela parte da sua natureza celestial?",
        answer: "Asas nas costas",
        options: [
            "Uma cauda no rabo",
            "Asas nas costas",
            "Uma auréola ao redor da cabeça",
            "Chifres na testa"
        ],
        correct: "Escolhe uma casa para se tornar vermelha. Se alguém já lá estiver bebe apenas 5. Ficas imune à casa.",
        incorrect: "Acaba o copo e a tua casa torna-se vermelha."
    },
    {
        numb: 124,
        question: "Qual dos seguintes foi o criador da app de encontros, Tinder?",
        answer: "Sean Rad",
        options: [
            "Sean Rad",
            "Andrey Andreev",
            "Joel Simkhai",
            "Kevin Systrom"
        ],
        correct: "Escolhes 2 jogadores para se tornarem apaixonados. Durante 2 rondas só podem olhar para um para o outro e tornam-se buddies.",
        incorrect: "Azar no jogo, sorte no amor. Apaixonas-te por 1 jogador; durante 2 rondas só podes olhar para esse jogador e tornam-es buddies."
    },
    {
        numb: 125,
        question: "Na lenda de Aang quem descobriu a sub-dobra de metal?",
        answer: "Toph",
        options: [
            "Aang",
            "Toph",
            "Korra",
            "Katara"
        ],
        correct: "Escolhe alguém que beba um shot de 4 elementos.",
        incorrect: "Bebe um shot de 4 elementos."
    },
    {
        numb: 126,
        question: "Na série da Netflix 'Riverdale', qual é o nome do meio de Jughead?",
        answer: "Pendleton",
        options: [
            "Pendleton",
            "Forsythe",
            "Judhead",
            "Franklin"
        ],
        correct: "Todos bebem 1 gole por cada temporada que não viram.",
        incorrect: "Tens de cantar sempre que falas, durante 1 ronda."
    },
    {
        numb: 127,
        question: "Na série da Netflix 'Riverdale', quantos anos tinha Jason Blossom quando morreu?",
        answer: "17",
        options: [
            "15",
            "16",
            "17",
            "18"
        ],
        correct: "Escolhe 2 jogadores para se fingirem de mortos na mesa até que voltem a jogar.",
        incorrect: "Finge-te de morto na mesa até voltares a jogar."
    },
    {
        numb: 128,
        question: "Na série da Netflix 'Chilling Adventures of Sabrina', qual a relação entre Ambrose e Sabrina?",
        answer: "Primos",
        options: [
            "Irmãos",
            "Primos",
            "Namorados",
            "Melhores Amigos"
        ],
        correct: "Ficas buddy dos 2 jogadores que mais bebem.",
        incorrect: "Fica a lamber a tua mão como um gato se lava."
    },
    {
        numb: 129,
        question: "Na série da Netflix 'Chilling Adventures of Sabrina', quem é a filha de Blackwood?",
        answer: "Prudence",
        options: [
            "Sabrina",
            "Dorcas",
            "Prudence",
            "Agatha"
        ],
        correct: "Enfeitiça 2 jogadores e ficam buddies.",
        incorrect: "O teu nome passa a ser Stolas e ficas buddy da pessoa mais sóbria."
    },
    {
        numb: 130,
        question: "Quantas raças de elefante existem?",
        answer: "3",
        options: [
            "3",
            "4",
            "5",
            "6"
        ],
        correct: "Certo, distribui esse número de goles.",
        incorrect: "Errado, bebe esse número de goles."
    },
    {
        numb: 131,
        question: "O iPhone é um smartphone produzido por que empresa?",
        answer: "Apple Inc.",
        options: [
            "Orange Inc.",
            "Lemon Inc.",
            "Carrot Inc.",
            "Apple Inc."
        ],
        correct: "Yaay, so smart.",
        incorrect: "Uhm... Volta à casa inicial."
    },
    {
        numb: 132,
        question: "Na mitologia grega, quantas cabeças tinha a Hydra?",
        answer: "9",
        options: [
            "11",
            "9",
            "7",
            "5"
        ],
        correct: "Certo, distribui esse número de goles",
        incorrect: "Errado, bebe esse número de goles."
    },
    {
        numb: 133,
        question: "Das seguintes vitaminas, qual é aquela cuja deficiência pode levar à cegueira?",
        answer: "Vitamina A",
        options: [
            "Vitamina A",
            "Vitamina B12",
            "Vitamina B6",
            "Vitamina D"
        ],
        correct: "Escolhe alguém para passar 1 ronda vendado.",
        incorrect: "Passas 1 ronda vendado."
    },
    {
        numb: 134,
        question: "Na famosa série da Netflix, quantos concorrentes participaram no Squid Game?",
        answer: "456",
        options: [
            "156",
            "256",
            "356",
            "456"
        ],
        correct: "Matas 1 jogador: Sai do jogo ou acaba o copo.",
        incorrect: "Morres: Sais do jogo ou acabas o copo."
    },
    {
        numb: 135,
        question: "Qual dos seguintes serial killers se apresentou como Pogo, o Palhaço, em eventos beneficentes e festas infantis?",
        answer: "John Wayne Gacy",
        options: [
            "Jeffrey Dahmer",
            "John Wayne Gacy",
            "Ted Bundy",
            "Ed Gein"
        ],
        correct: "Escolhes alguém para lhe tirarem uma foto 'morto' no chão. Publica na história com o texto 'nem bebeu assim tanto wtf'.",
        incorrect: "Tiram-te uma foto 'morto' no chão. Publica na história com o texto 'nem bebeu assim tanto wtf'."
    },
    {
        numb: 136,
        question: "Qual foi o serial killer de 11 mulheres, entre 1962 e 1964, que acabou por ser identificado como Albert DeSalvo?",
        answer: "The Boston Strangler",
        options: [
            "The Southside Slayer",
            "The Monster of Milwaukee",
            "The Boston Strangler",
            "The Green River Killer"
        ],
        correct: "Vantagem secreta: Tens 1 ronda para tentar recuar jogadores no jogo sem que eles reparem.",
        incorrect: "Recua 5 casas."
    },
    {
        numb: 137,
        question: "Qual é o maior orgão interno do corpo humano?",
        answer: "Fígado",
        options: [
            "Fígado",
            "Intestino Delgado",
            "Rim",
            "Estômago"
        ],
        correct: "Certo! Escolhe alguém para foder o fígado e beber metade do copo.",
        incorrect: "Nope. Enche o teu copo e bebe metade ou recua 20 casas."
    },
    {
        numb: 138,
        question: "Qual das seguintes cidades não foi destruída por fogo?",
        answer: "Paris",
        options: [
            "Roma",
            "Londres",
            "Chicago",
            "Paris"
        ],
        correct: "És um verdadeiro protetor da cultura. Escolhe alguém para criar contigo uma torre humana. Se a torre não cair, distribui 3 goles.",
        incorrect: "Queimaste as possibilidades… agora deves permanecer com as mãos para cima, como se fosses a estátua da liberdade, durante 1 ronda. Caso não o faças, bebe 2 goles."
    },
    {
        numb: 139,
        question: "Acredita-se que o isocianato de metilo é o culpado pela libertação de gás de uma fábrica da Union Carbide que custou mais de 2.000 vidas em que comunidade indiana?",
        answer: "Bhopal",
        options: [
            "Calcutta",
            "Bombay",
            "Nova Delhi",
            "Bhopal"
        ],
        correct: "Parabéns por seres consciente com a química! Agora, tens a permissão de criar um cocktail e escolher quem deve bebê-lo.",
        incorrect: "Um erro tóxico! Escolhe uma bebida da roda, mistura com qualquer coisa não-alcoólica à vista e bebe."
    },
    {
        numb: 140,
        question: "Qual se acredita ter sido a principal causa da explosão que destruiu o dirigível 'Hindenburg' em 1937?",
        answer: "Eletricidade estática",
        options: [
            "Um isqueiro",
            "Falha no equipamento",
            "Sabotagem",
            "Eletricidade estática"
        ],
        correct: "Faíscas voaram! Escolhe um jogador para passar 1 minuto a acariciar o teu pescoço ou orelha enquanto vocês mantêm contato visual intenso. Caso ninguém queira, distribui 5 goles.",
        incorrect: "Queimaste tudo… O grupo escolhe uma pessoa e uma perte do corpo. Agora tens que dar um beijo lá. Se recusares, bebes 6 goles."
    },
    {
        numb: 141,
        question: "O governo espartano incluiu um conselho com uma idade mínima de 60 anos. Qual dos seguintes termos descreve uma sociedade governada pelos idosos?",
        answer: "Gerontocracia",
        options: [
            "Esquirarquia",
            "Ginarquia",
            "Gerontocracia",
            "Meritocracia"
        ],
        correct: "Veneras a sabedoria dos anciãos. Distribui 60 segundos de bebida.",
        incorrect: "Não honraste os velhos. Agora tens que falar como um velho caquético durante 2 rondas. Caso esqueças, bebes 2 goles."
    },
    {
        numb: 142,
        question: "Sócrates foi julgado, condenado e sentenciado à morte por impiedade e corrupção da juventude de Atenas. Sob que forma de governo foi Sócrates condenado?",
        answer: "Democracia",
        options: [
            "Tirania",
            "Oligarquia",
            "Monarquia",
            "Democracia"
        ],
        correct: "Democracia nunca foi tão tentadora! Escolhe alguém e, juntos, recriem o momento do julgamento de Sócrates. A pessoa escolhida deve sentar-se no teu colo e vocês devem trocar um beijo apaixonado. Caso recusem, distribui 6 goles.",
        incorrect: "Sócrates caiu, e tu também! O grupo escolhe uma pessoa para para te fazer um chupão no pescoço. Se recusares, bebes 5 goles."
    },
    {
        numb: 143,
        question: "Qual inseto causou um curto-circuito num dos primeiros supercomputadores e inspirou o termo 'bug informático'?",
        answer: "Traça",
        options: [
            "Traça",
            "Barata",
            "Mosca",
            "Formiga"
        ],
        correct: "Parabéns, podes ‘desbugar’ um jogador à tua escolha: anula qualquer penalidade que ele esteja a sofrer ou guardar para ti no futuro.",
        incorrect: "Ficas com um ‘bug’: até ao fim da próxima ronda, só podes falar aos soluços. Caso não o faças, bebes 2 goles."
    },
    {
        numb: 144,
        question: "Que rei foi casado com Leonor da Aquitânia?",
        answer: "Henrique II",
        options: [
            "Henrique I",
            "Henrique II",
            "Ricardo I",
            "Eduardo I"
        ],
        correct: "Escolhe um jogador para se ajoelhar perante ti e oferecer-te um brinde à realeza. Se recusar, bebe 3 goles.",
        incorrect: "Ficas exilado: recua 5 casas e bebes 2 goles para afogar as mágoas."
    },
    {
        numb: 145,
        question: "Qual destes presidentes dos Estados Unidos apareceu no programa de televisão 'Laugh-In'?",
        answer: "Richard Nixon",
        options: [
            "Lyndon Johnson",
            "Richard Nixon",
            "Jimmy Carter",
            "Gerald Ford"
        ],
        correct: "Agora és um presidente carismático! Escolhe alguém para te cumprimentar formalmente e beber 3 goles enquanto o faz.",
        incorrect: "Ficaste nervoso no programa! Durante a próxima rodada, só podes falar usando slogans políticos improvisados."
    },
    {
        numb: 146,
        question: "Qual destas não é uma religião monoteísta?",
        answer: "Hinduísmo",
        options: [
            "Judaísmo",
            "Islão",
            "Hinduísmo",
            "Cristianismo"
        ],
        correct: "Descobriste o politeísmo! Podes escolher dois jogadores para beber 1 gole cada.",
        incorrect: "Confundiste as divindades! Durante a próxima rodada, tens de criar nomes engraçados para todos os jogadores e usá-los ao se dirigir a eles, ou beber 1 gole por cada erro."
    },
    {
        numb: 147,
        question: "Quem foi a primeira mulher indiana a ganhar um Prémio Nobel?",
        answer: "Madre Teresa",
        options: [
            "Indira Gandhi",
            "Sarojini Naidu",
            "Madre Teresa",
            "Amartya Sen"
        ],
        correct: "Ganhaste o prêmio da bondade! Escolhe um jogador para distribuir 3 goles.",
        incorrect: "Erraste o altruísmo! Durante a próxima rodada, tens de servir as bebidas para todos os outros jogadores, enquanto bebes 2 goles."
    },
    {
        numb: 148,
        question: "Qual é o único país que faz fronteira tanto com o Mar Cáspio como com o Golfo Pérsico?",
        answer: "Irão",
        options: [
            "Cazaquistão",
            "Iraque",
            "Turquemenistão",
            "Irão"
        ],
        correct: "Podes atravessar o mapa: avança 10 casas e distribui 3 goles.",
        incorrect: "Ficas perdido no deserto: recua 5 casas e bebe 2 goles."
    },
    {
        numb: 149,
        question: "Que unidade científica tem o nome de um nobre italiano?",
        answer: "Volt",
        options: [
            "Pascal",
            "Volt",
            "Ohm",
            "Hertz"
        ],
        correct: "Estás cheio de energia! Avança 3 casas e faz o grupo beber 1 gole para recarregar.",
        incorrect: "Estás sem energia… Finge que és um robô com bateria fraca por 1 ronda. Se alguém rir, bebes 2 goles."
    },
    {
        numb: 150,
        question: "Quem desenvolveu a primeira vacina bem-sucedida contra a poliomielite nos anos 1950?",
        answer: "Jonas Salk",
        options: [
            "Albert Sabin",
            "Niels Bohr",
            "Louis Pasteur",
            "Jonas Salk"
        ],
        correct: "Vacina-te contra penalidades: na próxima rodada, nada pode ser aplicado a ti.",
        incorrect: "Estás contaminado(a)! Escolhe um jogador para ‘infectar’: ambos bebem 3 goles e torna-se teu buddy."
    },
    {
        numb: 151,
        question: "Qual destas não é uma das corridas do Triplo Coroado americano de corridas de cavalos?",
        answer: "Arlington Million",
        options: [
            "Kentucky Derby",
            "Belmont Stakes",
            "Arlington Million",
            "Preakness Stakes"
        ],
        correct: "Ganha a corrida! Escolhe alguém para fazer um ‘cavalo’ e carrega-te por 1 volta.",
        incorrect: "Ficas para trás na corrida: recua 5 casas e imita o trote de um cavalo enquanto bebes 2 goles."
    },
    {
        numb: 152,
        question: "Qual destes homens não tem um elemento químico com o seu nome?",
        answer: "Isaac Newton",
        options: [
            "Albert Einstein",
            "Enrico Fermi",
            "Isaac Newton",
            "Niels Bohr"
        ],
        correct: "Tens a gravidade ao teu favor! Podes puxar qualquer jogador para a casa em que te encontras.",
        incorrect: "Foste atingido por uma maçã… Bebe 3 goles enquanto explicas a teoria da gravidade ao grupo"
    },
    {
        numb: 153,
        question: "Qual é o nome da estrela com o maior raio já registrado na Via Láctea?",
        answer: "UY Scuti",
        options: [
            "UY Scuti",
            "VY Canis Majoris",
            "Betelgeuse",
            "Antares"
        ],
        correct: "Agora és uma estrela! Brilhas tanto que escolhes um jogador para usar óculos escuros até o fim do jogo.",
        incorrect: "Ficas tão envergonhado por errar que tens de andar a jogar com uma folha de papel presa no rosto como se fosse uma máscara."
    },
    {
        numb: 154,
        question: "Qual civilização antiga criou o mais antigo sistema de escrita decifrado da história?",
        answer: "Suméria",
        options: [
            "Egípcia",
            "Suméria",
            "Cretominoica (Linear B)",
            "Harappan"
        ],
        correct: "Grande em história! Por falar nisso, escolhe duas pessoas para contarem a história mais embaraçosa que tenham.",
        incorrect: "Perdeste na história! Todos os jogadores devem escrever os seus nomes com uma caneta nos teus braços."
    },
    {
        numb: 155,
        question: "Qual número é conhecido como a constante de Apéry, relacionada à função zeta de Riemann?",
        answer: "ζ(3)",
        options: [
            "π",
            "γ (Constante de Euler-Mascheroni)",
            "ζ(3)",
            "e"
        ],
        correct: "És um génio da matemática! Distribui 5 goles a qualquer jogador.",
        incorrect: "Erro grave! Tens de contar até 20 apenas em números primos enquanto bebes goles a cada erro."
    },
    {
        numb: 156,
        question: "Qual compositor clássico escreveu uma peça musical chamada 'A Canção das Estrelas' que só foi descoberta no século XXI?",
        answer: "Johann Sebastian Bach",
        options: [
            "Antonio Vivaldi",
            "Wolfgang Amadeus Mozart",
            "Jean-Philippe Rameau",
            "Johann Sebastian Bach"
        ],
        correct: "Agora és maestro! Escolhe alguém para cantar qualquer música enquanto tu ‘diriges’ com gestos dramáticos.",
        incorrect: "Erraste a melodia! Faz um rap improvisado sobre estrelas."
    },
    {
        numb: 157,
        question: "Qual é a ilha habitada mais remota do mundo?",
        answer: "Tristan da Cunha",
        options: [
            "Ilha de Páscoa",
            "Tristan da Cunha",
            "Pitcairn",
            "Svalbard"
        ],
        correct: "Explorador nato! Escolhe alguém para te levar nos ombros ou costas duas voltas ao redor do grupo.",
        incorrect: "Perdido no meio do oceano! Bebe 5 goles e joga a próxima rodada sentado no chão."
    },
    {
        numb: 158,
        question: "Qual foi o primeiro microprocessador comercial lançado no mercado?",
        answer: "Intel 4004",
        options: [
            "Intel 4004",
            "Zilog Z80",
            "Motorola 68000",
            "IBM PowerPC"
        ],
        correct: "És tão avançado que ganhas o poder de ‘desligar’ um jogador por uma rodada (ele não pode falar nem agir).",
        incorrect: "Que bug! Ficas a fazer sons robóticos durante duas rondas."
    },
    {
        numb: 159,
        question: "Qual língua viva tem o maior número de consoantes no mundo?",
        answer: "Taa (ǃXóõ)",
        options: [
            "Taa (ǃXóõ)",
            "Basco",
            "Ubykh",
            "Khoisan"
        ],
        correct: "És um mestre da comunicação! Escolhe 2 jogadores para se comunicarem com o grupo por gemidos durante 1 ronda.",
        incorrect: "Ficas sem palavras! Agora só podes comunicar por gemidos até à próxima rodada."
    },
    {
        numb: 160,
        question: "Qual é o nome verdadeiro do artista renascentista conhecido como Giorgione?",
        answer: "Giorgio Barbarelli da Castelfranco",
        options: [
            "Giorgio Barbarelli da Castelfranco",
            "Giovanni Bellini",
            "Lorenzo Lotto",
            "Titian Vecelli"
        ],
        correct: "És uma verdadeira obra de arte! As pessoas que beijares hoje devem ‘assinar’ a tua pele com uma caneta. Assina agora quem já beijou hoje.",
        incorrect: "Agora és a tela! Deita-te enquanto o grupo decide como posar-te de forma ‘artística’ e faz um desenho na tua pele."
    },
    {
        numb: 161,
        question: "Qual conceito da física propõe que partículas podem estar em múltiplos estados simultaneamente?",
        answer: "Superposição quântica",
        options: [
            "Superposição quântica",
            "Emaranhamento quântico",
            "Dualidade onda-partícula",
            "Colapso da função de onda"
        ],
        correct: "Agora és omnipresente! Joga mais duas vezes.",
        incorrect: "Tuas partículas colapsaram! Ficas parado como estátua até à tua próxima vez."
    },
    {
        numb: 162,
        question: "Qual é o nome do texto hindu mais antigo, composto por hinos e cânticos?",
        answer: "Rigveda",
        options: [
            "Bhagavad Gita",
            "Upanishads",
            "Rigveda",
            "Mahabharata"
        ],
        correct: "Recebeste iluminação! Todos os jogadores fazem-te uma reverência. Faz um boomerang e posta na história.",
        incorrect: "Perdeste a bênção! Fica a fazer cânticos (Ommm…) até tua próxima rodada."
    },
    {
        numb: 163,
        question: "Qual foi o primeiro animal a ser clonado com sucesso a partir de uma célula adulta?",
        answer: "Ovelha",
        options: [
            "Ovelha",
            "Rato",
            "Cavalo",
            "Cão"
        ],
        correct: "Agora tens um clone! Escolhe um jogador para agir exatamente como tu por uma rodada e se tornar teu buddy.",
        incorrect: "Tornaste-te uma ovelha sexy! Caminha pela sala enquanto fazes sons de ‘bééé’, abanando os quadris como num desfile."
    },
    {
        numb: 164,
        question: "Qual país possui a maior quantidade de lagos naturais no mundo?",
        answer: "Canadá",
        options: [
            "Canadá",
            "Rússia",
            "Finlândia",
            "Brasil"
        ],
        correct: "És cheio de recursos! Enche a tua bebida.",
        incorrect: "Foste parar a um lago! Mergulha a mão na tua bebida e bebe dela."
    },
    {
        numb: 165,
        question: "Qual é a única peça de Shakespeare que se passa em Viena?",
        answer: "Medida por Medida",
        options: [
            "Otelo",
            "Medida por Medida",
            "Hamlet",
            "A Tempestade"
        ],
        correct: "És um protagonista sedutor! Escolhe alguém para recriar contigo um beijo teatral dramático.",
        incorrect: "Péssima atuação! Tens de ajoelhar-te e recitar uma declaração romântica exagerada para alguém à escolha do grupo."
    },
    {
        numb: 166,
        question: "Qual foi o primeiro satélite artificial a orbitar a Terra?",
        answer: "Sputnik 1",
        options: [
            "Sputnik 1",
            "Explorer 1",
            "Luna 1",
            "Vostok 1"
        ],
        correct: "Agora tens o poder do espaço! Escolhe um jogador para ‘orbitar’ ao redor de ti por uma rodada.",
        incorrect: "Ficas em órbita! Anda em círculos ao redor da mesa até tua próxima rodada."
    },
    {
        numb: 167,
        question: "Qual cientista foi responsável por propor a teoria das placas tectônicas?",
        answer: "Alfred Wegener",
        options: [
            "Alfred Wegener",
            "Charles Darwin",
            "Isaac Newton",
            "Galileu Galilei"
        ],
        correct: "Moveste montanhas! Avança 3 casas.",
        incorrect: "Causaste um terremoto! Ficas no chão numa posição toda fodida por uma rodada."
    },
    {
        numb: 168,
        question: "Qual é a menor espécie de pássaro conhecida no mundo?",
        answer: "Beija-flor-abelha",
        options: [
            "Beija-flor-abelha",
            "Beija-flor-de-cauda-longínqua",
            "Pardal-mosca",
            "Martim-pescador-anão"
        ],
        correct: "Agora és um beija-flor! As pessoas à tua esquerda e direita devem beijar o teu pescoço enquanto distribuis 5 goles.",
        incorrect: "Não foste rápido como o pássaro correto! Dá um beijo a cada jogador do grupo antes de beber 3 goles."
    },
    {
        numb: 169,
        question: "Qual é o idioma oficial do Butão?",
        answer: "Dzongkha",
        options: [
            "Dzongkha",
            "Tibetano",
            "Hindi",
            "Nepalês"
        ],
        correct: "Agora és o rei do Butão! Podes mandar um jogador à tua escolha ajoelhar-se e beijar tua mão (ou outra coisa, se permitires).",
        incorrect: "Erraste! O grupo escolhe alguém para te dar uma palmada no rabo."
    },
    {
        numb: 170,
        question: "Qual explorador europeu foi o primeiro a alcançar o Cabo da Boa Esperança?",
        answer: "Bartolomeu Dias",
        options: [
            "Bartolomeu Dias",
            "Vasco da Gama",
            "Ferdinando de Magalhães",
            "Cristóvão Colombo"
        ],
        correct: "Navegaste até o prazer! Escolhe um jogador para te fazer uma massagem nas costas por 1 minuto.",
        incorrect: "O teu navio afundou! Tens de te ‘afundar’ no colo de alguém e ficar lá até tua próxima rodada."
    },
    {
        numb: 171,
        question: "Qual é o nome do mineral mais duro encontrado na natureza?",
        answer: "Diamante",
        options: [
            "Diamante",
            "Coríndon",
            "Topázio",
            "Quartzo"
        ],
        correct: "És inquebrável como um diamante! Podes cancelar uma consequência aplicada a ti durante o jogo.",
        incorrect: "Ficaste sob pressão! Tens de carregar outro jogador às costas enquanto bebes 2 goles."
    },
    {
        numb: 172,
        question: "Qual foi o primeiro livro impresso por Johannes Gutenberg?",
        answer: "A Bíblia",
        options: [
            "A Bíblia",
            "A Ilíada",
            "Os Lusíadas",
            "O Livro de Horas"
        ],
        correct: "Revolucionaste a imprensa! Escolhe um jogador para escrever uma mensagem criativa em qualquer parte do teu corpo com uma caneta.",
        incorrect: "Erraste a impressão! Escreve a palavra ‘FAIL’ na tua testa e mantém até o final do jogo."
    },
    {
        numb: 173,
        question: "Qual é o único local na Terra onde dois oceanos e dois continentes se encontram?",
        answer: "Ponto Quádruplo do Estreito de Bering",
        options: [
            "Ponto Quádruplo do Estreito de Bering",
            "Fronteira entre África e Ásia",
            "Polo Sul",
            "Estreito de Magalhães"
        ],
        correct: "Chegaste ao ponto de encontro! Escolhe dois jogadores para darem um beijo triplo contigo no meio.",
        incorrect: "Ficaste perdido! Faz um twerk no meio do grupo enquanto bebes 3 goles."
    },
    {
        numb: 174,
        question: "Qual número primo é o maior conhecido atualmente (em 2024) como parte da sequência de Mersenne?",
        answer: "2^82.589.933 - 1",
        options: [
            "2^82.589.933 - 1",
            "2^74.207.281 - 1",
            "2^77.232.917 - 1",
            "2^81.239.501 - 1"
        ],
        correct: "És o maior! Escolhe alguém para te elogiar de forma exagerada por 30 segundos.",
        incorrect: "Erraste o cálculo! Agora és pequeno… Deita-te no chão e finge ser uma minhoca enquanto bebes."
    },
    {
        numb: 175,
        question: "Qual foi o nome do fóssil mais antigo de Homo sapiens já encontrado?",
        answer: "Jebel Irhoud 1",
        options: [
            "Jebel Irhoud 1",
            "Lucy",
            "Taung Child",
            "Floresiensis 1"
        ],
        correct: "Estás cheio de história! Escolhe alguém para te cheirar o pescoço e dizer o que achou.",
        incorrect: "Ficaste preso no passado! Tens de morder a orelha de um jogador escolhido pelo grupo."
    },
    {
        numb: 176,
        question: "Qual partícula subatômica foi hipotetizada em 1930 e só confirmada em 1956?",
        answer: "Neutrino",
        options: [
            "Neutrino",
            "Bóson de Higgs",
            "Méson",
            "Tau"
        ],
        correct: "És invisível como um neutrino! Escolhe um jogador. Todos sem ser esse tapam os olhos, incluindo tu. Esse jogador pode beijar-te onde quiser.",
        incorrect: "Tornaste-te instável! O grupo escolhe alguém para te dar uma palmada no rabo ou um estalo na cara seguido de um beijo e um olhar intenso (e tu agradeces depois)."
    },
    {
        numb: 177,
        question: "Qual é a espécie de planta mais antiga a ainda produzir descendentes diretos no planeta?",
        answer: "Welwitschia mirabilis",
        options: [
            "Welwitschia mirabilis",
            "Sequoia sempervirens",
            "Ginkgo biloba",
            "Araucária"
        ],
        correct: "Tens raízes fortes! Escolhe um jogador para ficar imóvel no mesmo lugar por 2 rodadas.",
        incorrect: "Ficaste seco! Durante a próxima rodada, não podes beber nada, mesmo que seja tua vez."
    },
    {
        numb: 178,
        question: "Qual é o único planeta do Sistema Solar cuja órbita é quase perpendicular ao seu eixo de rotação?",
        answer: "Urano",
        options: [
            "Urano",
            "Netuno",
            "Vênus",
            "Saturno"
        ],
        correct: "És tão peculiar quanto Urano! Avança 4 casas e distribui 3 goles entre os jogadores.",
        incorrect: "Ficaste desequilibrado! Anda de costas ao redor da mesa até à tua próxima vez."
    },
    {
        numb: 179,
        question: "Qual é o texto religioso mais longo do mundo, com mais de 100.000 versos?",
        answer: "Mahabharata",
        options: [
            "Mahabharata",
            "Bíblia",
            "Alcorão",
            "Tripitaka"
        ],
        correct: "Sabedoria infinita! Durante a próxima rodada, podes trocar uma vez de lugar no tabuleiro com qualquer jogador",
        incorrect: "O peso das palavras caiu sobre ti! O grupo escolhe uma pessoa. Lê as últimas mensagens com essa pessoa em voz alta enquanto bebes 3 goles."
    },
    {
        numb: 180,
        question: "Qual metal líquido foi usado na construção do espelho do telescópio Large Zenith?",
        answer: "Mercúrio",
        options: [
            "Mercúrio",
            "Gálio",
            "Sódio",
            "Potássio"
        ],
        correct: "És brilhante como o mercúrio! Distribui 4 goles para qualquer jogador e avança 2 casas.",
        incorrect: "O mercúrio escapou! Ficas em posição de ‘líquido’ (deitado no chão) até à tua próxima jogada."
    },
    {
        numb: 181,
        question: "Qual é o único idioma artificial reconhecido como língua oficial em um país?",
        answer: "Esperanto",
        options: [
            "Esperanto",
            "Interlíngua",
            "Klingon",
            "Toki Pona"
        ],
        correct: "O teu apelido torna-se poliglota! Escolhe alguém para só poder falar em palavras inventadas ou Simlish durante 1 ronda.",
        incorrect: "Erro linguístico! Durante a próxima rodada, só podes falar em palavras inventadas ou Simlish."
    },
    {
        numb: 182,
        question: "Qual filósofo grego escreveu a única obra completa conhecida sobre astronomia da antiguidade?",
        answer: "Cláudio Ptolomeu",
        options: [
            "Cláudio Ptolomeu",
            "Aristarco de Samos",
            "Hiparco de Niceia",
            "Anaximandro"
        ],
        correct: "És um astrónomo brilhante! Escolhe um jogador. Esse jogador sempre que falar só pode responder com factos sobre estrelas (verdadeiros ou não).",
        incorrect: "Erraste! Tens de andar de quatro ao redor do grupo e pedir desculpas a todos."
    },
    {
        numb: 183,
        question: "Qual teoria na física propõe que todas as partículas fundamentais são vibrações minúsculas?",
        answer: "Teoria das Cordas",
        options: [
            "Teoria da Relatividade",
            "Teoria Quântica",
            "Teoria das Cordas",
            "Teoria do Big Bang"
        ],
        correct: "Alcançaste uma nova dimensão! Escolhe um jogador para trocar de lugar contigo no tabuleiro.",
        incorrect: "Nope! Bebe 2 goles e recua 3 casas enquanto imitas uma vibração."
    },
    {
        numb: 184,
        question: "Quem desenvolveu o conceito de 'Monadologia' na filosofia?",
        answer: "Gottfried Wilhelm Leibniz",
        options: [
            "Immanuel Kant",
            "Gottfried Wilhelm Leibniz",
            "René Descartes",
            "Baruch Spinoza"
        ],
        correct: "Mestre das mónadas! Escolhe dois jogadores para formar um 'grupo filosófico' que partilha ações durante 2 rodadas.",
        incorrect: "A tua mónada perdeu-se! Bebe 3 goles e explica brevemente o que é 'Monadologia' para o grupo."
    },
    {
        numb: 185,
        question: "Qual é a equação fundamental que descreve a interação gravitacional no campo da relatividade geral?",
        answer: "Equação de Einstein",
        options: [
            "E = mc²",
            "Equação de Schrödinger",
            "Equação de Einstein",
            "Equação de Maxwell"
        ],
        correct: "Gravitacionalmente correto! Avança 5 casas e distribui 2 goles para qualquer jogador.",
        incorrect: "Erro na gravidade! Recua 4 casas e bebe 2 goles enquanto imitas a curvatura do espaço-tempo."
    },
    {
        numb: 186,
        question: "Qual é o nome do processo pelo qual uma estrela massiva explode no final da sua vida?",
        answer: "Supernova",
        options: [
            "Nebulosa",
            "Supernova",
            "Anã Branca",
            "Buraco Negro"
        ],
        correct: "Explosão estelar! Escolhe dois jogadores para realizarem uma 'explosão de alegria' e beberem juntos. Tornam-se buddies.",
        incorrect: "Apagaram a tua luz! Bebe 3 goles vendado e só tiras a venda quando 2 pessoas te acolherem como buddy."
    },
    {
        numb: 187,
        question: "Qual é o número quântico que descreve o momento angular total de um eletrão?",
        answer: "Número quântico magnético (mₗ)",
        options: [
            "Número quântico principal (n)",
            "Número quântico azimutal (l)",
            "Número quântico magnético (mₗ)",
            "Número quântico de spin (mₛ)"
        ],
        correct: "Spin up! Escolhe alguém para realizar um movimento de rotação enquanto distribui 2 goles.",
        incorrect: "Spin down! Bebe 2 goles e recua 2 casas enquanto imitas a rotação de um eletrão."
    },
    {
        numb: 188,
        question: "Qual é a capital da Mongólia?",
        answer: "Ulaanbaatar",
        options: [
            "Astana",
            "Tashkent",
            "Ulaanbaatar",
            "Bishkek"
        ],
        correct: "Conquistaste a estepe! Avança 3 casas e escolhe um jogador para te contar uma curiosidade sobre a Mongólia.",
        incorrect: "Errado! Bebe 2 goles e sempre que moveres o peão, finges ser um cavalo mongol a trotear pelo tabuleiro."
    },
    {
        numb: 189,
        question: "Na mecânica quântica, qual princípio afirma que é impossível conhecer simultaneamente a posição e o momento de uma partícula com precisão arbitrária?",
        answer: "Princípio da Incerteza de Heisenberg",
        options: [
            "Princípio da Exclusão de Pauli",
            "Princípio da Incerteza de Heisenberg",
            "Princípio da Relatividade",
            "Princípio de Correspondência"
        ],
        correct: "Incerteza quântica! Escolhe um jogador para tentar adivinhar a quanto vai tirar no dado, se acertar avança o dobro.",
        incorrect: "Incerteza sobre a resposta! Bebe 3 goles e descreve uma incerteza na tua vida."
    },
    {
        numb: 190,
        question: "Qual é a maior partícula subatómica conhecida no Modelo Padrão da física de partículas?",
        answer: "Bosão de Higgs",
        options: [
            "Quark top",
            "Bosão W",
            "Bosão de Higgs",
            "Gluão"
        ],
        correct: "Higgs identificado! Avança 4 casas e distribui 1 gole para cada jogador.",
        incorrect: "Falha no Modelo Padrão! Bebe 2 goles e explica brevemente o papel do Bosão de Higgs."
    },
    {
        numb: 191,
        question: "Quem foi o matemático e físico que desenvolveu a mecânica quântica moderna e recebeu o Prêmio Nobel de Física em 1928?",
        answer: "Paul Dirac",
        options: [
            "Erwin Schrödinger",
            "Werner Heisenberg",
            "Paul Dirac",
            "Max Born"
        ],
        correct: "Teoria quântica correta! Escolhe dois jogadores para discutirem brevemente sobre o Dirac enquanto bebem juntos.",
        incorrect: "Erro quântico! Bebe 3 goles e tenta explicar o que é antimáteria."
    },
    {
        numb: 192,
        question: "Qual é a estrutura cristalina mais densa conhecida para um metal?",
        answer: "Cúbica de Corpo Centrado (CCC)",
        options: [
            "Cúbica de Face Centrada (CFC)",
            "Cúbica de Corpo Centrado (CCC)",
            "Hexagonal Compacta (HC)",
            "Tetragonal Simples"
        ],
        correct: "Estrutura densa! Avança 2 casas e distribui 2 goles.",
        incorrect: "Estrutura fracassada! Bebe 2 goles e recua 3 casas enquanto descreves uma estrutura cristalina."
    },
    {
        numb: 193,
        question: "Qual é a equação que relaciona a energia, a massa e a velocidade da luz?",
        answer: "E = mc²",
        options: [
            "F = ma",
            "E = mc²",
            "V = IR",
            "a² + b² = c²"
        ],
        correct: "Avança 1 casa.",
        incorrect: "Recua 6 casas."
    },
    {
        numb: 194,
        question: "Qual filósofo é conhecido pela alegoria da caverna?",
        answer: "Platão",
        options: [
            "Aristóteles",
            "Platão",
            "Sócrates",
            "Descartes"
        ],
        correct: "Fuga da caverna! Avança 3 casas e escolhe um jogador para explicar o significado de 'utopia'.",
        incorrect: "Ainda na caverna! Bebe 2 goles e finge estar preso nas sombras."
    },
    {
        numb: 195,
        question: "Qual é a partícula elementar responsável pela força eletromagnética?",
        answer: "Bosão foton",
        options: [
            "Gluão",
            "Bosão W",
            "Bosão fotão",
            "Gravitão"
        ],
        correct: "Força da luz! Escolhe um jogador para fazer um flash de luz (usar a lanterna do telemóvel) enquanto ambos bebem 4 goles.",
        incorrect: "Falha na força! Bebe 2 goles e explica brevemente interação eletromagnética."
    },
    {
        numb: 196,
        question: "Qual é a constante de Planck (h) aproximadamente em joule-segundos?",
        answer: "6.626 × 10⁻³⁴ J·s",
        options: [
            "3.14 × 10⁻³⁴ J·s",
            "6.626 × 10⁻³⁴ J·s",
            "9.81 × 10⁻³⁴ J·s",
            "1.602 × 10⁻³⁴ J·s"
        ],
        correct: "Constante de Planck correta! Avança 5 casas e distribui 4 goles.",
        incorrect: "Constante errada! Bebe 3 goles e estuda antes de jogares."
    },
    {
        numb: 197,
        question: "Qual é a teoria que unifica a mecânica quântica e a relatividade geral?",
        answer: "Teoria Quântica da Gravitação",
        options: [
            "Teoria das Cordas",
            "Teoria Quântica da Gravitação",
            "Teoria M",
            "Teoria do Campo Unificado"
        ],
        correct: "Unificação bem-sucedida! Escolhe dois jogadores para se unificarem (comem-se).",
        incorrect: "Unificação falhou! Bebe 4 goles e explica o motivo de estares solteiro, se não estiveres diz porque gostarias de estar."
    },
    {
        numb: 198,
        question: "Qual é o nome do fenómeno pelo qual partículas são instantaneamente afetadas por outras partículas a grandes distâncias?",
        answer: "Emaranhamento Quântico",
        options: [
            "Superposição",
            "Decaimento Radioativo",
            "Emaranhamento Quântico",
            "Túnel Quântico"
        ],
        correct: "Emaranhamento perfeito! Escolhe um jogador para se conectar contigo durante a próxima rodada, sentando-se no teu colo.",
        incorrect: "Emaranhamento falhou! Bebe 2 goles e fica de mão dada com outro jogador à escolha do grupo."
    },
    {
        numb: 199,
        question: "Qual é a função de onda da partícula que representa o seu estado quântico?",
        answer: "Função de onda ψ (psi)",
        options: [
            "Função de onda φ (phi)",
            "Função de onda ψ (psi)",
            "Função de onda χ (chi)",
            "Função de onda δ (delta)"
        ],
        correct: "Função de onda correta! Todos os jogadores dão as mãos e fazem ondas enquanto bebem 2 goles. Avança 3 casas.",
        incorrect: "Função de onda errada! Bebe 3 goles enquanto finges estar em gravidade zero."
    },
    {
        numb: 200,
        question: "Qual é o nome da força que mantém os protões unidos no núcleo atómico?",
        answer: "Força Nuclear Forte",
        options: [
            "Força Eletromagnética",
            "Força Gravitacional",
            "Força Nuclear Fraca",
            "Força Nuclear Forte"
        ],
        correct: "Força nuclear forte ativada! Escolhe um jogador para fazer uma história onde questiona os seguidores se já pensaram em/que... (algo ridículo).",
        incorrect: "Força nuclear fraca! Bebe 2 goles e faz uma história onde questionas os teus seguidores se já pensaram em/que... (algo ridículo)."
    },
    {
        numb: 201,
        question: "Qual destes não faz parte dos Quatro Cavaleiros do Apocalipse?",
        answer: "Sodomia",
        options: [
            "Guerra",
            "Fome",
            "Peste",
            "Sodomia"
        ],
        correct: "Acalmas o apocalipse: escolhe 2 jogadores para fazerem uma trégua — ficam sem penalidades esta ronda.",
        incorrect: "A paz foi quebrada: bebes 4 goles e fazes um discurso dramático de fim do mundo."
    },
    {
        numb: 202,
        question: "Em média, quantos passos uma pessoa dá por dia?",
        answer: "8000",
        options: [
            "2000",
            "5000",
            "8000",
            "12000"
        ],
        correct: "Passos certos! Toda a gente dá 5 passinhos à frente (andam pelo tabuleiro), bebendo 1 gole a cada passo.",
        incorrect: "Sem pernas: ficas a rastejar até voltares a jogar ou bebes 4 goles."
    },
    {
        numb: 203,
        question: "Qual fruta tem seu próprio GPS térmico (pode detectar calor)?",
        answer: "Morango",
        options: [
            "Laranja",
            "Banana",
            "Morango",
            "Maçã"
        ],
        correct: "Sensor activado! Escolhe alguém para aproximar-se devagar de ti e ‘atacar’ com um beijo candente.",
        incorrect: "Sem sinal: bebes 2 goles e finges ser uma fruta murcha."
    },
    {
        numb: 204,
        question: "Que criptomoeda usa o algoritmo de consenso Proof-of-Stake em vez de Proof-of-Work desde a sua ‘fusăo’ em 2022?",
        answer: "Ethereum",
        options: [
            "Ethereum",
            "Bitcoin",
            "Litecoin",
            "Monero"
        ],
        correct: "Staking bem-sucedido! Recebes 2 “goles de rendimento” e distribuis 1 gole a outro jogador.",
        incorrect: "Gas alto: bebes 3 goles e ficas “pendurado” — não podes trocar de lugar neste turno."
    },
    {
        numb: 205,
        question: "Em que ano caiu a primeira grande onda da Peste Negra na Europa?",
        answer: "1347",
        options: [
            "1347",
            "1331",
            "1361",
            "1374"
        ],
        correct: "Sobreviveste à pandemia! Escolhe 2 jogadores para ficarem imunes a penalidades até a próxima ronda.",
        incorrect: "Apanhado pela Peste! Bebe 4 goles e ficas 'isolado' numa quarentena: não podes interagir até voltares a jogar."
    },
    {
        numb: 206,
        question: "Como eram chamadas as procissões penitenciais que percorriam as cidades para aplacar a ira divina durante as pragas medievais?",
        answer: "Bandeiras",
        options: [
            "Bandeiras",
            "Confrarias",
            "Cruzadas",
            "Flagelantes"
        ],
        correct: "Flagelaste com sucesso! Escolhe 2 jogadores para bater no peito (simular flagelação) — quem desistir, bebe 3 goles.",
        incorrect: "Flagelante fracassado: bebes 3 goles e fazes auto-flagelação de mentirinha (batendo no ombro) até à próxima ronda."
    },
    {
        numb: 207,
        question: "Como se chamava o sistema de servidão dominante na Europa Medieval?",
        answer: "Feudalismo",
        options: [
            "Mercantilismo",
            "Feudalismo",
            "Manorialismo",
            "Comunismo primitivo"
        ],
        correct: "Senhor feudal! Escolhe 2 'vassalos' (jogadores) para servirem 1 gole a ti e um ao grupo.",
        incorrect: "Camponês rebelde: bebes 3 goles e fazes uma pantomima de arar o campo até tua próxima vez."
    },
    {
        numb: 208,
        question: "Que peste anterior à Peste Negra devastou o Império Romano no século III?",
        answer: "Peste de Cipriano",
        options: [
            "Peste Antonina",
            "Peste de Cipriano",
            "Peste Justininiana",
            "Peste de Galeno"
        ],
        correct: "Historiador nato! Avanças ao dobro do número que disseres ao lançar o dado.",
        incorrect: "Antigo infetado: bebes 4 goles e corres em círculo imitando a fuga de um romano."
    },
    {
        numb: 209,
        question: "Como se chama a peça que transforma o movimento linear dos pistões em movimento rotativo?",
        answer: "Cambota",
        options: [
            "Biela",
            "Cambota",
            "Árvore de cames",
            "Caixa de velocidades"
        ],
        correct: "Giraste bem! Faz um rodopio triunfal e manda 1 gole a outro jogador como recompensa.",
        incorrect: "Partido: bebes 5 goles enquanto giras lentamente como se estivesses a falhar a ignição."
    },
    {
        numb: 210,
        question: "O que faz a árvore de cames?",
        answer: "Controla a abertura e fecho das válvulas",
        options: [
            "Gira as rodas",
            "Move os pistões",
            "Controla a abertura e fecho das válvulas",
            "Aciona os injetores"
        ],
        correct: "Sincronizado! Esticas os braços como válvulas — quem não imitar, bebe 2 goles.",
        incorrect: "Válvula fora de tempo: bebes 3 goles e ficas de braços abertos até voltares a jogar."
    },
    {
        numb: 211,
        question: "Que componente impede que a temperatura do motor suba perigosamente?",
        answer: "Radiador",
        options: [
            "Compressor do ar condicionado",
            "Radiador",
            "Ventilador quente/frio",
            "Filtro do ar"
        ],
        correct: "Arrefeceste bem! Todos os jogadores abanam-se como se estivessem a arrefecer e tu distribuis 1 gole.",
        incorrect: "Sobre-aqueceste: bebe 4 goles e abana-te com as mãos como se estivesses em chamas."
    },
    {
        numb: 212,
        question: "Se ouvires um som metálico alto ao travar, qual é a provável causa?",
        answer: "Discos/Pastilhas de travão danificados",
        options: [
            "Travão de mão mal afinado",
            "Discos/Pastilhas de travão danificados",
            "Medal de travão com ferrugem",
            "Amortecedor gasto"
        ],
        correct: "Travagem de mestre! Escolhe um jogador para fazer de mecânico e fingir que te troca as pastilhas.",
        incorrect: "Travão em chamas! Bebe 3 goles e trava subitamente no teu lugar (faz um 'skrrr')."
    },
    {
        numb: 213,
        question: "Para que serve o catalisador num carro?",
        answer: "Reduzir emissões de gases poluentes",
        options: [
            "Reduzir o consumo de combustível",
            "Aumentar a potência",
            "Reduzir emissões de gases poluentes",
            "Proteger o radiador"
        ],
        correct: "Eco-friendly! Escolhe alguém para beber 'biológico': troca a bebida por água por uma ronda.",
        incorrect: "Poluente! Bebe 5 goles e dás um discurso dramático sobre salvar o planeta (no estilo de Miss Universo)."
    },
    {
        numb: 214,
        question: "Dos seguintes, o que faz acionar os travões de um camião?",
        answer: "Ar",
        options: [
            "Ar",
            "Fluido de travão",
            "Óleo hidráulico",
            "Cabo de aço"
        ],
        correct: "Pressão no ponto certo! Escolhe 1 jogador para parar completamente: não pode mover-se, falar ou beber até à tua próxima jogada.",
        incorrect: "Travagem de emergência falhada! Bebes 4 goles e ficas a fazer sons de travão pneumático (‘pshhhhh-tchkk!’) sempre que alguém falar contigo até voltares a jogar."
    },
    {
        numb: 215,
        question: "Para qual destes fluidos a substituição deve ser realizada com o motor ligado e quente?",
        answer: "ATF",
        options: [
            "Óleo do motor",
            "Líquido de refrigeração do motor",
            "Nenhum!",
            "ATF"
        ],
        correct: "Temperatura ideal! Passas a próxima ronda isento de castigos (modo manutenção).",
        incorrect: "Verificaste mal! Bebe 2 goles e segura algo quente nas mãos (tipo copo ou a tua testa) até voltares a jogar."
    },
    {
        numb: 216,
        question: "Qual é a ordem correta do ciclo de combustão de um motor térmico a 4 tempos?",
        answer: "Injeção, Compressão, Ignição, Escape",
        options: [
            "Ignição, Injeção, Compressão, Escape",
            "Compressão, Ignição, Injeção, Escape",
            "Injeção, Compressão, Ignição, Escape",
            "Escape, Injeção, Ignição, Compressão"
        ],
        correct: "Combustão perfeita! Grita ‘VRUUUM’ com convicção e avanças 1 casa por cada tempo que consigas dizer de cor (sem ler).",
        incorrect: "Desincronizado! Bebes 4 goles e imitas um motor engasgado até alguém adivinhar qual dos tempos disseste errado."
    },
    {
        numb: 217,
        question: "Como se chama o sistema responsável por fornecer energia hidráulica, pneumática e elétrica em solo sem ligar os motores principais?",
        answer: "APU (Unidade de Potência Auxiliar)",
        options: [
            "GPU (Unidade Geradora de Terra)",
            "PDU (Power Distribution Unit)",
            "APU (Unidade de Potência Auxiliar)",
            "ACS (Aircraft Core System)"
        ],
        correct: "Sistema de apoio ativo! Escolhe 1 jogador para ser a tua APU — ele vai fazer sons de motor enquanto bebes à vontade.",
        incorrect: "Sem energia auxiliar! Bebes 5 goles e ficas em modo de 'emergência energética' — só podes usar uma palavra por frase na próxima jogada."
    },
    {
        numb: 218,
        question: "Qual é a função dos slats nas asas de um avião comercial?",
        answer: "Aumentar a curvatura da asa e atrasar o estol em baixas velocidades",
        options: [
            "Reduzir o arrasto em alta velocidade",
            "Canalizar combustível entre as asas",
            "Aumentar a curvatura da asa e atrasar o estol em baixas velocidades",
            "Ativar a pressão do sistema hidráulico principal"
        ],
        correct: "Lift maximizado! Escolhe 1 jogador para estender os braços contigo como slats — quem baixar primeiro, bebe 3 goles.",
        incorrect: "Estol iminente! Bebes 5 goles e gritas ‘STALL WARNING!’ com sotaque de copiloto até à tua próxima jogada."
    },
    {
        numb: 219,
        question: "Num sistema fly-by-wire, que componente interpreta os comandos do piloto e envia sinais aos atuadores?",
        answer: "Computador de controle de voo (FCC)",
        options: [
            "Relevo hidráulico",
            "Acelerómetro central",
            "Computador de controle de voo (FCC)",
            "ADIRU (Air Data Inertial Reference Unit)"
        ],
        correct: "Eletrónica estável! Controlas a próxima jogada de outro jogador como se fosses o sistema dele — sem protestos!",
        incorrect: "Erro digital! Bebes 4 goles e finges estar com pane nos comandos (braços tremem, cabeça pende...) até voltares a jogar."
    },
    {
        numb: 220,
        question: "Qual é o propósito principal dos spoilers em voo de cruzeiro?",
        answer: "Reduzir a sustentação e ajudar na descida controlada",
        options: [
            "Aumentar o empuxo",
            "Reduzir o arrasto total",
            "Reduzir a sustentação e ajudar na descida controlada",
            "Refrigeração das superfícies aerodinâmicas"
        ],
        correct: "Spoilers deploy! Podes cortar o ‘lift’ de outro jogador: escolhe alguém para não avançar na próxima jogada.",
        incorrect: "Descida abrupta! Bebes 3 goles e manténs os braços paralelos ao chão até tua próxima vez (modo spoiler ativado)."
    },
    {
        numb: 221,
        question: "Qual é a função do sistema Ram Air Turbine (RAT) em aeronaves comerciais?",
        answer: "Gerar energia elétrica e hidráulica de emergência",
        options: [
            "Refrigeração dos freios durante o taxi",
            "Gerar energia elétrica e hidráulica de emergência",
            "Controlar a pressurização da cabine",
            "Aumentar o fluxo de ar para as turbinas"
        ],
        correct: "Sobreviveste à emergência! Todos batem palmas como numa aterragem de Ryanair e tu distribuis 3 goles como herói.",
        incorrect: "Perda total! Bebes 6 goles e finges fazer um ‘checklist de emergência’ em voz alta até voltares a jogar."
    },
    {
        numb: 222,
        question: "O que é o 'coffin corner' na performance de voo de uma aeronave?",
        answer: "Zona de altitude onde a velocidade mínima e máxima permitidas estão muito próximas",
        options: [
            "O ponto onde o estol é inevitável em curva",
            "Zona de altitude onde a velocidade mínima e máxima permitidas estão muito próximas",
            "Momento de máxima carga G",
            "Zona onde se inicia a compressibilidade do ar"
        ],
        correct: "Voo afiado como bisturi! Escolhe 2 jogadores para ‘voar contigo na coffin corner’: se errarem outra pergunta, bebem em dobro.",
        incorrect: "Estás em zona crítica! Bebes 5 goles e finges estar a voar com máscaras de oxigénio ativadas (simula a máscara com a mão)."
    }
];

/* {
        numb: 000,
        question: "Pergunta?",
        answer: "R Certa",
        options: [
            "R",
            "R",
            "R",
            "R"
        ],
        correct: "Vantagem",
        incorrect: "Consequencia"
    }, */