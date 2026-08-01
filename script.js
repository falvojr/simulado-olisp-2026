/* =====================================================================
   CONFIGURAÇÃO OPCIONAL: sincronizar o histórico com o Supabase.
   Deixe as duas constantes em branco para usar só o histórico salvo no
   navegador (funciona sem nenhuma configuração). Instruções de setup
   (SQL da tabela + política de RLS) na mensagem que acompanha este arquivo.
===================================================================== */
const SUPABASE_URL = '';
const SUPABASE_ANON_KEY = '';

/* ============ BANCO DE TEXTOS (2 versões por gênero) ============ */
const BANCO = {
  noticia: [
    {
      genero:'noticia', generoLabel:'Notícia', icone:'📰',
      titulo:'Escola do interior promove mutirão de plantio de árvores',
      corpo:[
        'Na manhã do último sábado, alunos e professores da Escola Municipal Vila Verde se reuniram na praça central da cidade para um mutirão de plantio de árvores nativas.',
        'A ação foi organizada pelo grêmio estudantil, em parceria com a prefeitura, com o objetivo de recuperar áreas verdes e conscientizar a população sobre a importância da preservação ambiental. Ao todo, foram plantadas 40 mudas de espécies como ipê e jatobá.',
        'Segundo a diretora da escola, Fernanda Souza, a atividade também fez parte do projeto de vida dos alunos do 6º ano, que estudaram sobre sustentabilidade nas semanas anteriores. Os estudantes pretendem repetir a ação em outras praças da cidade nos próximos meses.'
      ],
      perguntas:[
        { enunciado:'Que tipo de texto é esse que você acabou de ler?',
          opcoes:['Uma notícia','Uma receita culinária','Um poema','Um anúncio publicitário'], correta:0,
          certo:'Boa! Esse texto conta um fato real, tem data, local e até uma fonte (a diretora) sendo citada. Isso é bem típico de notícia.',
          errado:'Repara de novo: o texto conta algo que aconteceu de verdade, cita uma fonte (a diretora) e traz data e local. Essas pistas indicam notícia.' },
        { enunciado:'Qual é o principal objetivo desse texto?',
          opcoes:['Informar a comunidade sobre uma ação que a escola realizou','Vender mudas de árvores para a prefeitura','Convencer os alunos a estudar mais sobre plantas','Contar uma história inventada sobre uma escola'], correta:0,
          certo:'Exatamente. Repara na diferença: o mutirão em si tinha o objetivo de conscientizar sobre o meio ambiente, mas o texto que conta isso está só relatando o que já aconteceu, sem pedir nada pro leitor. Por isso o objetivo do texto é informar.',
          errado:'Repara que o texto conta uma ação que já aconteceu, sem pedir nada pro leitor fazer agora. Mesmo o mutirão tendo um propósito ambiental, o texto que relata isso só informa, não convence.' },
        { enunciado:'De acordo com o texto, quantas mudas de árvores foram plantadas?',
          opcoes:['40','4','14','400'], correta:0,
          certo:'Isso! O texto fala direitinho: "foram plantadas 40 mudas". Boa atenção aos números.',
          errado:'Essa resposta está escrita no texto. Vale reler o segundo parágrafo com calma pra achar o número certo.' }
      ]
    },
    {
      genero:'noticia', generoLabel:'Notícia', icone:'📰',
      titulo:'Escola realiza primeira Feira de Ciências com 18 projetos',
      corpo:[
        'No sábado passado, a Escola Estadual Nova Esperança recebeu sua primeira Feira de Ciências, organizada pelos alunos do 6º e 7º anos.',
        'Os estudantes apresentaram 18 projetos, entre eles uma horta suspensa feita com garrafas recicladas e um forno solar capaz de esquentar comida em menos de uma hora.',
        'A professora de Ciências, Patrícia Lima, contou que a ideia surgiu depois que a turma visitou um museu de tecnologia no início do ano. Cerca de 300 pessoas passaram pelos estandes durante a tarde, entre famílias e alunos de outras escolas.',
        'A direção já confirmou uma segunda edição da feira para o ano que vem.'
      ],
      perguntas:[
        { enunciado:'Que tipo de texto é esse que você acabou de ler?',
          opcoes:['Uma notícia','Um anúncio','Uma fábula','Uma receita'], correta:0,
          certo:'Isso! O texto conta um fato real, com data, local e uma fonte (a professora Patrícia) sendo citada. É uma notícia.',
          errado:'Repara que o texto conta algo que realmente aconteceu e cita uma fonte (a professora). Isso indica notícia.' },
        { enunciado:'Qual é o principal objetivo desse texto?',
          opcoes:['Informar sobre um evento que aconteceu na escola','Ensinar como montar uma horta suspensa','Convencer os alunos a estudar Ciências','Anunciar a venda de fornos solares'], correta:0,
          certo:'Exatamente. O texto só quer contar o que aconteceu na feira, sem tentar vender ou convencer de nada.',
          errado:'Repara que o texto não tenta convencer nem vender nada, só informa o que aconteceu. Esse é o objetivo de informar.' },
        { enunciado:'De acordo com o texto, quantos projetos foram apresentados na feira?',
          opcoes:['18','8','80','13'], correta:0,
          certo:'Isso! O texto diz claramente: "os estudantes apresentaram 18 projetos". Boa atenção ao número.',
          errado:'Esse número está escrito no texto. Vale reler o segundo parágrafo com calma.' }
      ]
    },
    {
      genero:'noticia', generoLabel:'Notícia', icone:'📰',
      titulo:'Time de handebol da escola conquista torneio regional',
      corpo:[
        'No último final de semana, o time de handebol da Escola Estadual Monte Azul conquistou o primeiro lugar no Torneio Regional de Escolas Públicas, disputado na cidade vizinha de Serra Bonita.',
        'A equipe, formada por 12 alunos do 6º ao 9º ano, treina três vezes por semana desde março, sob orientação do professor de Educação Física Marcelo Andrade. Na final, a escola venceu por 18 a 15, em uma partida disputada até o último minuto.',
        'Segundo o técnico, a conquista é resultado de disciplina e trabalho em equipe. A prefeitura confirmou que vai custear a viagem do time para o campeonato estadual, marcado para outubro.'
      ],
      perguntas:[
        { enunciado:'Que tipo de texto é esse que você acabou de ler?',
          opcoes:['Uma notícia','Um anúncio','Uma fábula','Uma receita'], correta:0,
          certo:'Boa! O texto conta um fato real, com data, local e uma fonte (o técnico) sendo citada. É uma notícia.',
          errado:'Repara que o texto conta algo que realmente aconteceu e cita uma fonte (o técnico). Isso indica notícia.' },
        { enunciado:'Qual é o principal objetivo desse texto?',
          opcoes:['Informar sobre o resultado de um torneio','Convencer os alunos a jogar handebol','Ensinar as regras do handebol','Contar a biografia de um professor'], correta:0,
          certo:'Isso mesmo. O texto só quer contar o que aconteceu no torneio, sem tentar convencer ou vender nada.',
          errado:'Repara que o texto não tenta convencer nem vender nada, só informa o resultado do jogo. Esse é o objetivo de informar.' },
        { enunciado:'De acordo com o texto, qual foi o placar da partida final?',
          opcoes:['18 a 15','15 a 18','12 a 9','20 a 10'], correta:0,
          certo:'Isso! O texto diz: "a escola venceu por 18 a 15". Boa atenção ao número.',
          errado:'Esse placar está escrito no texto. Vale reler o segundo parágrafo com calma.' }
      ]
    },
    {
      genero:'noticia', generoLabel:'Notícia', icone:'📰',
      titulo:'Gincana de leitura bate recorde de livros emprestados na escola',
      corpo:[
        'A Escola Estadual Rio Claro encerrou o mês de julho com um recorde: 540 livros emprestados pela biblioteca, o maior número dos últimos cinco anos.',
        'O resultado é fruto de uma gincana de leitura organizada pelos professores de Língua Portuguesa, que dividiu as turmas em equipes e premiou os grupos que mais lessem e resenhassem livros ao longo do mês.',
        'A bibliotecária Joana Ferreira contou que o gênero mais procurado pelos alunos foi o de aventura, seguido por quadrinhos. Por causa do sucesso, a gincana deve virar um evento semestral na escola.'
      ],
      perguntas:[
        { enunciado:'Que tipo de texto é esse que você acabou de ler?',
          opcoes:['Uma notícia','Um anúncio','Uma fábula','Uma receita'], correta:0,
          certo:'Isso! O texto traz um fato real, com data, local e uma fonte (a bibliotecária) sendo citada. É uma notícia.',
          errado:'Repara que o texto conta algo que aconteceu de verdade e cita uma fonte (a bibliotecária). Isso é característica de notícia.' },
        { enunciado:'Qual é o principal objetivo desse texto?',
          opcoes:['Informar sobre o resultado de uma gincana','Convencer os alunos a lerem mais','Ensinar como resenhar um livro','Anunciar a venda de livros de aventura'], correta:0,
          certo:'Exatamente. A gincana em si foi pensada pra incentivar a leitura, mas o texto que conta o resultado dela só relata o que aconteceu, sem pedir nada pro leitor. Por isso o objetivo do texto é informar.',
          errado:'Repara que o texto conta um resultado que já aconteceu, sem pedir nada pro leitor fazer agora. Mesmo a gincana tendo o propósito de incentivar a leitura, o texto que relata isso só informa, não convence.' },
        { enunciado:'De acordo com o texto, quantos livros foram emprestados durante o mês?',
          opcoes:['540','54','450','504'], correta:0,
          certo:'Boa! O texto diz: "540 livros emprestados". Ótima atenção ao número.',
          errado:'Esse número está escrito bem no início do texto. Vale reler com calma.' }
      ]
    }
  ],
  anuncio: [
    {
      genero:'anuncio', generoLabel:'Anúncio', icone:'📣',
      titulo:'Feira do Livro na escola!',
      corpo:[
        '📚 FEIRA DO LIVRO NA ESCOLA! 📚',
        'Venha descobrir novas aventuras! De 10 a 14 de agosto, a biblioteca da escola recebe a Feira do Livro, com títulos de todos os gêneros: aventura, fantasia, quadrinhos e muito mais!',
        '✨ Preços especiais para alunos. ✨ Sorteio de kits de livros todos os dias. ✨ Sessão de autógrafos com autor local na sexta-feira.',
        'Não perca! Traga seus amigos e venha garantir os melhores títulos antes que acabem!',
        'Local: Biblioteca da escola. Horário: das 8h às 17h.'
      ],
      perguntas:[
        { enunciado:'Esse texto é um exemplo de:',
          opcoes:['Anúncio','Fábula','Notícia','Biografia'], correta:0,
          certo:'Isso mesmo. Frases curtas, exclamações e um convite direto pro leitor são bem típicos de anúncio.',
          errado:'Repara nas exclamações e no convite direto ("Venha descobrir", "Não perca!"). Esses são sinais de anúncio.' },
        { enunciado:'Qual é a intenção principal desse texto?',
          opcoes:['Convencer o leitor a participar do evento','Informar sobre uma pesquisa científica','Ensinar uma receita passo a passo','Contar a vida de uma pessoa famosa'], correta:0,
          certo:'Exato! Um anúncio quase sempre quer convencer alguém a fazer alguma coisa, nesse caso, ir até a feira do livro.',
          errado:'Pensa: o texto tá tentando te convidar e animar pra participar de algo. Esse é o objetivo de convencer.' },
        { enunciado:'O uso de frases como "Não perca!" e os pontos de exclamação no texto têm o objetivo de:',
          opcoes:['Chamar a atenção do leitor e reforçar o convite','Deixar o texto mais triste e formal','Explicar uma regra de um jogo','Descrever tecnicamente um objeto'], correta:0,
          certo:'Isso! Exclamações e frases de urgência como "Não perca!" servem pra chamar atenção e empolgar quem tá lendo.',
          errado:'Pensa no efeito de "Não perca!" com exclamação. Ela busca chamar atenção e criar entusiasmo, não explicar algo com calma.' }
      ]
    },
    {
      genero:'anuncio', generoLabel:'Anúncio', icone:'📣',
      titulo:'Show de Talentos da escola',
      corpo:[
        '🎤 SHOW DE TALENTOS DA ESCOLA! 🎤',
        'Você canta, dança, conta piadas ou faz mágica? Chegou a sua vez de brilhar! No dia 21 de agosto, o pátio da escola vira palco pro nosso Show de Talentos.',
        'Inscrições abertas na secretaria até sexta-feira. Cada aluno tem até 3 minutos de apresentação.',
        'Os três melhores números ganham medalha e um dia sem tarefa de casa. Chama os amigos e não fica de fora dessa, as vagas são limitadas!'
      ],
      perguntas:[
        { enunciado:'Esse texto é um exemplo de:',
          opcoes:['Anúncio','Notícia','Fábula','Receita'], correta:0,
          certo:'Isso mesmo. As exclamações, os emojis e o convite direto pro leitor são bem típicos de anúncio.',
          errado:'Repara nas exclamações e no convite direto ("Chegou a sua vez de brilhar"). São sinais de anúncio.' },
        { enunciado:'Qual é a intenção principal desse texto?',
          opcoes:['Convencer os alunos a se inscreverem no show','Informar sobre os resultados de uma prova','Ensinar uma técnica de mágica','Contar a história de um show antigo'], correta:0,
          certo:'Exato! O texto quer animar os alunos a se inscreverem no show. Esse é o objetivo de convencer.',
          errado:'Pensa no que o texto tá pedindo pro leitor fazer: se inscrever e participar. Esse é o objetivo de convencer.' },
        { enunciado:'De acordo com o texto, quantos minutos cada aluno tem para se apresentar?',
          opcoes:['3 minutos','13 minutos','30 minutos','8 minutos'], correta:0,
          certo:'Isso! O texto diz: "cada aluno tem até 3 minutos de apresentação".',
          errado:'Essa informação está escrita no texto. Vale reler com calma o segundo parágrafo.' }
      ]
    },
    {
      genero:'anuncio', generoLabel:'Anúncio', icone:'📣',
      titulo:'Vem aí o Clube de Robótica!',
      corpo:[
        '🤖 CLUBE DE ROBÓTICA ABRE VAGAS! 🤖',
        'Curiosa pra saber como um robô funciona por dentro? O Clube de Robótica da escola está com inscrições abertas pra alunos do 6º ao 9º ano!',
        'Encontros toda quarta-feira, das 14h às 15h30, no laboratório de informática. Não precisa saber nada de programação, a gente ensina tudo do zero!',
        'Vagas limitadas a 20 alunos. Corre lá na sala da coordenação e garante a sua!'
      ],
      perguntas:[
        { enunciado:'Esse texto é um exemplo de:',
          opcoes:['Anúncio','Fábula','Notícia','Biografia'], correta:0,
          certo:'Isso mesmo. Emojis, exclamações e um convite direto pro leitor são bem típicos de anúncio.',
          errado:'Repara nas exclamações e no convite direto ("Corre lá"). Esses são sinais de anúncio.' },
        { enunciado:'Qual é a intenção principal desse texto?',
          opcoes:['Convencer os alunos a se inscreverem no clube','Informar sobre uma feira de tecnologia','Ensinar a programar um robô','Contar a história da robótica'], correta:0,
          certo:'Exato! O texto quer convencer os alunos a se inscreverem no clube.',
          errado:'Pensa no que o texto pede pro leitor fazer: se inscrever no clube. Esse é o objetivo de convencer.' },
        { enunciado:'De acordo com o texto, quantas vagas o clube oferece?',
          opcoes:['20','12','200','2'], correta:0,
          certo:'Isso! O texto diz: "vagas limitadas a 20 alunos".',
          errado:'Esse número está escrito no texto. Vale reler o terceiro parágrafo.' }
      ]
    },
    {
      genero:'anuncio', generoLabel:'Anúncio', icone:'📣',
      titulo:'Bazar Solidário da escola: ajude e aproveite!',
      corpo:[
        '👕 BAZAR SOLIDÁRIO NO SÁBADO! 👕',
        'Roupas, livros e brinquedos com preços de até R$5, e toda a renda vai pra reforma da quadra da escola!',
        'Sábado, dia 15, das 9h às 13h, no pátio principal. Chegue cedo porque as melhores peças somem rápido!',
        'Quer doar alguma coisa também? Leve até a secretaria até sexta-feira.'
      ],
      perguntas:[
        { enunciado:'Esse texto é um exemplo de:',
          opcoes:['Anúncio','Notícia','Fábula','Receita'], correta:0,
          certo:'Isso mesmo. As exclamações e o convite direto pro leitor são bem típicos de anúncio.',
          errado:'Repara nas exclamações e no convite ("Chegue cedo"). São sinais de anúncio.' },
        { enunciado:'Qual é a intenção principal desse texto?',
          opcoes:['Convencer as pessoas a irem ao bazar','Informar sobre uma reforma já concluída','Ensinar a fazer doações','Contar a história da quadra da escola'], correta:0,
          certo:'Exato! O texto quer convencer as pessoas a irem ao bazar.',
          errado:'Pensa no que o texto está pedindo pro leitor fazer: comparecer ao bazar. Esse é o objetivo de convencer.' },
        { enunciado:'Segundo o texto, para onde vai a renda do bazar?',
          opcoes:['Reforma da quadra da escola','Compra de livros novos','Viagem dos professores','Reforma da biblioteca'], correta:0,
          certo:'Isso! O texto diz que a renda vai "pra reforma da quadra da escola".',
          errado:'Essa informação está escrita no texto. Vale reler o primeiro parágrafo com calma.' }
      ]
    }
  ],
  fabula: [
    {
      genero:'fabula', generoLabel:'Fábula', icone:'📖',
      titulo:'O Sabiá e o Rio Apressado',
      corpo:[
        'Era uma vez um sabiá que vivia à beira de um rio muito rápido. Todos os dias, ele via a água correndo sem parar, sempre com pressa para chegar ao mar. Cansado de tanta pressa, o sabiá perguntou:',
        '<span class="fala">Rio, por que você nunca para para descansar?</span>',
        'O rio respondeu, sem diminuir a velocidade:',
        '<span class="fala">Se eu parar, viro um lago parado, e a água fica escura e cheia de mosquitos. É me movendo que eu me mantenho limpo e vivo.</span>',
        'Intrigado, o sabiá decidiu experimentar: por uma semana inteira, ficou parado no mesmo galho, sem voar nem cantar. No fim da semana, sentiu-se triste, fraco e sem vontade de nada.',
        'Foi então que entendeu o que o rio quisera dizer: não é a pressa que faz bem, mas o movimento com propósito. A partir daquele dia, o sabiá voltou a voar, cantar e explorar, sem pressa, mas sem parar.'
      ],
      perguntas:[
        { enunciado:'Esse texto é:',
          opcoes:['Uma fábula','Uma notícia','Um anúncio','Uma receita'], correta:0,
          certo:'Isso mesmo. Personagens que falam, uma história curta e um ensinamento no final são bem típicos de fábula.',
          errado:'Repara que elementos da natureza conversam e a história termina com um aprendizado. Isso é característica de fábula.' },
        { enunciado:'Segundo o texto, por quanto tempo o sabiá ficou parado, sem voar nem cantar?',
          opcoes:['Uma semana','Um dia','Um mês','Um ano'], correta:0,
          certo:'Boa! O texto diz "por uma semana inteira, ficou parado". Ótima atenção ao detalhe.',
          errado:'Essa informação está escrita no texto. Vale reler o trecho sobre a experiência do sabiá.' },
        { enunciado:'Segundo a fala do rio, o que aconteceria se ele parasse de correr?',
          opcoes:['Ele viraria um lago parado e cheio de mosquitos','Ele ficaria mais rápido','Ele chegaria mais cedo ao mar','Ele se transformaria em uma cachoeira'], correta:0,
          certo:'Exatamente. O próprio rio explica isso na história. Prestar atenção na fala de um personagem ajuda muito a entender o texto.',
          errado:'Volta na fala do rio no texto, ele mesmo explica o que aconteceria. Reler a fala de um personagem ajuda bastante.' },
        { enunciado:'Qual é o ensinamento (a moral) que essa fábula sugere?',
          opcoes:['O movimento com um propósito é importante para o bem-estar','É preciso ter muita pressa na vida','Ficar parado sem fazer nada deixa a gente mais forte','Rios são mais sábios do que pássaros'], correta:0,
          certo:'Muito bem! Essa é a parte mais difícil de uma fábula, entender a mensagem por trás da história, não só os fatos. Você foi além do texto! 🌟',
          errado:'Essa é a mais desafiadora mesmo. Pensa assim: o sabiá ficou mal quando parou e melhor quando voltou a se mover com um objetivo. É essa ideia que a fábula ensina.' }
      ]
    },
    {
      genero:'fabula', generoLabel:'Fábula', icone:'📖',
      titulo:'A Formiga que Aprendeu a Pedir Ajuda',
      corpo:[
        'Na floresta, vivia uma formiga chamada Nina, conhecida por nunca pedir ajuda a ninguém.',
        'Um dia, ela encontrou uma folha enorme no caminho, perfeita para levar até o formigueiro, só que pesada demais para carregar sozinha. Ela empurrou, puxou e tentou de todo jeito, sem sucesso.',
        'Um besouro que passava por ali ofereceu ajuda. Nina recusou na hora: <span class="fala">Consigo sozinha, obrigada.</span>',
        'Depois de uma hora inteira suando e sem sair do lugar, Nina finalmente aceitou a ajuda do besouro. Juntos, levaram a folha em poucos minutos.',
        'No caminho de volta, Nina pensou: pedir ajuda não era sinal de fraqueza, era só um jeito mais esperto de resolver as coisas.'
      ],
      perguntas:[
        { enunciado:'Esse texto é:',
          opcoes:['Uma fábula','Uma notícia','Um anúncio','Uma receita'], correta:0,
          certo:'Isso! Um personagem que fala, uma situação do dia a dia e um aprendizado no final são bem típicos de fábula.',
          errado:'Repara que a formiga vive uma situação e a história termina com um aprendizado. Isso é característica de fábula.' },
        { enunciado:'Segundo o texto, por quanto tempo Nina tentou carregar a folha sozinha antes de aceitar ajuda?',
          opcoes:['Uma hora inteira','Um minuto','Um dia inteiro','Uma semana'], correta:0,
          certo:'Boa! O texto diz "depois de uma hora inteira suando e sem sair do lugar".',
          errado:'Essa informação está no texto. Vale reler o trecho sobre a tentativa de Nina.' },
        { enunciado:'Quem ofereceu ajuda a Nina?',
          opcoes:['Um besouro','Uma borboleta','Outra formiga','Um passarinho'], correta:0,
          certo:'Isso mesmo! Foi um besouro que passava por ali e ofereceu ajuda pra Nina.',
          errado:'Volta no texto: quem apareceu oferecendo ajuda pra formiga? Reler esse trecho ajuda a encontrar a resposta.' },
        { enunciado:'Qual é o ensinamento (a moral) que essa fábula sugere?',
          opcoes:['Pedir ajuda pode ser uma forma inteligente de resolver problemas','É preciso fazer tudo sozinho para ser forte','Formigas são mais fracas que besouros','É melhor desistir quando algo é difícil'], correta:0,
          certo:'Muito bem! Essa é a mensagem principal da fábula: pedir ajuda não é fraqueza, é inteligência. Você entendeu o recado por trás da história!',
          errado:'Pensa no final da história: Nina só resolveu o problema quando aceitou ajuda, e percebeu que isso não era fraqueza. Essa é a mensagem que a fábula quer passar.' }
      ]
    },
    {
      genero:'fabula', generoLabel:'Fábula', icone:'📖',
      titulo:'O Vaga-lume que Tinha Medo do Escuro',
      corpo:[
        'Existia um vaga-lume chamado Zeca que, por incrível que pareça, tinha medo do escuro. Toda noite, quando a floresta escurecia, ele se escondia debaixo de uma folha, tremendo.',
        'Os outros vaga-lumes não entendiam: <span class="fala">Zeca, você tem uma luz própria! Por que tem medo justamente da escuridão?</span>',
        'Uma noite, um filhote de coruja se perdeu do ninho e começou a chorar, sozinho no meio do mato fechado. Zeca ouviu o choro e, sem pensar direito, saiu voando na escuridão para ajudar.',
        'Foi só quando chegou perto do filhote que Zeca percebeu: sua luz, que ele tanto temia usar, era exatamente o que guiava o caminho de volta pro ninho.',
        'A partir daquela noite, Zeca entendeu que sua luz só fazia sentido ali, no escuro, e nunca mais teve medo de brilhar.'
      ],
      perguntas:[
        { enunciado:'Esse texto é:',
          opcoes:['Uma fábula','Uma notícia','Um anúncio','Uma receita'], correta:0,
          certo:'Isso! Um personagem que fala, uma situação vivida e um aprendizado no final são bem típicos de fábula.',
          errado:'Repara que o vaga-lume vive uma situação e a história termina com um aprendizado. Isso é característica de fábula.' },
        { enunciado:'Quem Zeca ajudou a encontrar o caminho de volta?',
          opcoes:['Um filhote de coruja','Outro vaga-lume','Um besouro perdido','Uma borboleta'], correta:0,
          certo:'Isso mesmo! Foi um filhote de coruja que se perdeu e Zeca ajudou a encontrar o caminho.',
          errado:'Volta no texto: quem estava perdido e chorando no meio do mato? Reler esse trecho ajuda a encontrar a resposta.' },
        { enunciado:'Onde Zeca se escondia todas as noites, antes de mudar?',
          opcoes:['Debaixo de uma folha','Dentro de um buraco','Atrás de uma pedra','No topo de uma árvore'], correta:0,
          certo:'Boa! O texto diz que ele se escondia "debaixo de uma folha".',
          errado:'Essa informação está no início do texto. Vale reler o primeiro parágrafo.' },
        { enunciado:'Qual é o ensinamento (a moral) que essa fábula sugere?',
          opcoes:['O que mais nos assusta pode ser exatamente onde está a nossa força','É melhor nunca sair à noite','Vaga-lumes são mais corajosos que corujas','É preciso ter medo do escuro pra sobreviver'], correta:0,
          certo:'Muito bem! Essa é a mensagem da fábula: o que a gente teme pode ser exatamente onde mora a nossa força. Você entendeu o recado por trás da história!',
          errado:'Pensa no final da história: foi bem na escuridão que Zeca percebeu o valor da própria luz. Essa é a mensagem que a fábula quer passar.' }
      ]
    },
    {
      genero:'fabula', generoLabel:'Fábula', icone:'📖',
      titulo:'A Muda que Queria Crescer Rápido',
      corpo:[
        'No meio do quintal, uma pequena muda de ipê observava as árvores altas ao redor e sonhava em alcançar o mesmo tamanho o quanto antes.',
        'Ela implorava para o sol: <span class="fala">Me faz crescer mais rápido, por favor! Quero ser alta logo!</span>',
        'O velho jequitibá, ao lado, ouviu o pedido e disse com calma: <span class="fala">Enquanto você pensa só em crescer pra cima, suas raízes estão ficando fortes lá embaixo. É isso que vai te sustentar quando vier a primeira tempestade.</span>',
        'Meses depois, uma tempestade forte derrubou galhos de árvores maiores, mas a muda, com raízes bem firmes, resistiu inteira.',
        'Foi então que ela entendeu: crescer devagar não era um problema, era exatamente o que a estava preparando.'
      ],
      perguntas:[
        { enunciado:'Esse texto é:',
          opcoes:['Uma fábula','Uma notícia','Um anúncio','Uma receita'], correta:0,
          certo:'Isso! Personagens que conversam (a muda e o jequitibá) e um ensinamento no final são bem típicos de fábula.',
          errado:'Repara que a muda e a árvore antiga conversam e a história termina com um aprendizado. Isso é característica de fábula.' },
        { enunciado:'Quem deu o conselho pra muda de ipê?',
          opcoes:['O velho jequitibá','O sol','Outra muda','Um passarinho'], correta:0,
          certo:'Isso mesmo! Foi o velho jequitibá que explicou pra muda sobre a importância das raízes.',
          errado:'Volta no texto: quem estava ao lado da muda e deu o conselho? Reler esse trecho ajuda a encontrar a resposta.' },
        { enunciado:'De acordo com o texto, o que aconteceu meses depois?',
          opcoes:['Uma tempestade forte derrubou galhos de árvores maiores','A muda parou de crescer','O jequitibá caiu','Choveu pouco durante o verão'], correta:0,
          certo:'Boa! O texto diz que "uma tempestade forte derrubou galhos de árvores maiores".',
          errado:'Essa informação está no quarto parágrafo. Vale reler com calma.' },
        { enunciado:'Qual é o ensinamento (a moral) que essa fábula sugere?',
          opcoes:['Crescer com solidez, mesmo que devagar, prepara a gente pros desafios','É preciso crescer o mais rápido possível','Árvores altas nunca caem','Pedir ajuda ao sol sempre funciona'], correta:0,
          certo:'Muito bem! Essa é a mensagem da fábula: crescer com solidez, mesmo que devagar, prepara a gente pros desafios. Você foi além dos fatos da história!',
          errado:'Pensa no final: a muda resistiu à tempestade por causa das raízes fortes, não da altura. Essa é a mensagem que a fábula quer passar.' }
      ]
    }
  ]
};

/* Versão curta, pra tela inicial (leitura rápida) */
const DICAS_CURTAS = [
  '🔍 Descubra o tipo de texto antes de tudo',
  '🤫 Leia com atenção total, sem pressa',
  '💡 Busque a ideia principal',
  '🕵️ Pense no contexto: quem escreveu, pra quem, com que intenção',
  '🔁 Não entendeu de primeira? Releia com calma',
  '🎯 O texto quer informar, convencer ou contar uma história?'
];

/* Versão completa, pra tela de revisão opcional */
const DICAS = [
  { icone:'🔍', texto:'Primeiro, tenta descobrir que tipo de texto é aquele. É uma notícia? Um anúncio? Uma história? Saber isso já ajuda a entender o que esperar dele.' },
  { icone:'🤫', texto:'Lê com atenção total. Desliga as notificações um pouco e foca só naquele texto, sem pressa nenhuma.' },
  { icone:'💡', texto:'Procura a ideia principal. Quase todo texto carrega uma mensagem central no meio dos detalhes.' },
  { icone:'🕵️', texto:'Pensa no contexto: quem escreveu isso? Para quem? Com que intenção?' },
  { icone:'🔁', texto:'Não entendeu de primeira? Super normal. Volta e lê de novo com calma.' },
  { icone:'🎯', texto:'Pergunta pra você mesma: esse texto quer informar, convencer ou contar uma história?' }
];

const GEN_LABEL = { noticia:'📰 Notícia', anuncio:'📣 Anúncio', fabula:'📖 Fábula' };

/* ============ ESTADO ============ */
const state = {
  screen:'inicio',
  current:0,
  respostas:[],
  respondidaAtual:null,
  inicio:null,
  fim:null,
  perguntas:[],
  textosAtuais:[],
  nomeTemp:''
};

/* ============ ARMAZENAMENTO LOCAL ============ */
const HIST_KEY = 'olisp_treino_historico_v1';
const NOME_KEY = 'olisp_nome';

async function sincronizarSupabase(registro){
  if(!SUPABASE_URL || !SUPABASE_ANON_KEY) return;
  try{
    await fetch(SUPABASE_URL + '/rest/v1/tentativas', {
      method:'POST',
      headers:{
        'Content-Type':'application/json',
        'apikey': SUPABASE_ANON_KEY,
        'Authorization':'Bearer ' + SUPABASE_ANON_KEY,
        'Prefer':'return=minimal'
      },
      body: JSON.stringify({
        nome: registro.nome,
        acertos: registro.acertos,
        total: registro.total,
        tempo_segundos: registro.tempoSegundos,
        por_genero: registro.porGenero
      })
    });
  }catch(e){ /* falha silenciosa, não interrompe a experiência dela */ }
}
function salvarHistorico(registro){
  try{
    const atual = JSON.parse(localStorage.getItem(HIST_KEY) || '[]');
    atual.push(registro);
    localStorage.setItem(HIST_KEY, JSON.stringify(atual));
  }catch(e){ /* segue sem quebrar se o navegador bloquear armazenamento local */ }
  sincronizarSupabase(registro);
}
function lerHistorico(){
  try{ return JSON.parse(localStorage.getItem(HIST_KEY) || '[]'); }
  catch(e){ return null; }
}
function lerNome(){ try{ return localStorage.getItem(NOME_KEY) || ''; }catch(e){ return ''; } }
function salvarNome(n){ try{ localStorage.setItem(NOME_KEY, n); }catch(e){} }

/* ============ HELPERS ============ */
function escapeHtml(str){
  return String(str).replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}
function embaralhar(lista){
  const a = [...lista];
  for(let i=a.length-1;i>0;i--){
    const j = Math.floor(Math.random()*(i+1));
    [a[i],a[j]] = [a[j],a[i]];
  }
  return a;
}
function formatarTempo(segundos){
  const m = Math.floor(segundos/60);
  const s = segundos % 60;
  return m + 'min ' + String(s).padStart(2,'0') + 's';
}
function calcularResultado(){
  const total = state.perguntas.length;
  const acertos = state.respostas.filter(r=>r.acertou).length;
  const porGenero = {};
  state.respostas.forEach(r=>{
    if(!porGenero[r.genero]) porGenero[r.genero] = {acertos:0,total:0};
    porGenero[r.genero].total++;
    if(r.acertou) porGenero[r.genero].acertos++;
  });
  return {total, acertos, porGenero};
}
function mensagemPorDesempenho(acertos,total){
  const pct = acertos/total;
  if(pct >= 0.9) return {emoji:'🌟', texto:'Nossa, mandou muito bem! Você já está pronta pra prova de verdade.'};
  if(pct >= 0.7) return {emoji:'👏', texto:'Muito bem! Você já pegou o jeito da coisa, só faltam uns ajustes finos nos próximos treinos.'};
  if(pct >= 0.5) return {emoji:'🙂', texto:'Bom treino! Você já entendeu como funciona. Agora é treinar a releitura com calma pra pegar os detalhes que passam batido.'};
  return {emoji:'💪', texto:'Esse foi só o primeiro contato com o formato, e tá tudo bem começar assim. Cada treino vai ficar mais fácil a partir de agora.'};
}
function textoCompartilhar(acertos,total){
  return 'Terminei um treino da OLISP! 🎉 Acertei ' + acertos + ' de ' + total + ' questões. Bora treinar o próximo comigo?';
}

/* ============ MONTAGEM DINÂMICA DO SIMULADO ============ */
function montarPerguntasDoTexto(texto, textoIndex){
  return texto.perguntas.map(p => {
    const ordem = embaralhar([0,1,2,3]);
    const novasOpcoes = ordem.map(i => p.opcoes[i]);
    const novaCorreta = ordem.indexOf(p.correta);
    return { enunciado:p.enunciado, opcoes:novasOpcoes, correta:novaCorreta,
      certo:p.certo, errado:p.errado, textoIndex, genero:texto.genero };
  });
}
function novoSimulado(){
  const generos = embaralhar(['noticia','anuncio','fabula']);
  const textosEscolhidos = generos.map(g => {
    const pool = BANCO[g];
    return pool[Math.floor(Math.random()*pool.length)];
  });
  state.textosAtuais = textosEscolhidos;
  state.perguntas = textosEscolhidos.flatMap((t,i) => montarPerguntasDoTexto(t,i));
}

/* ============ RENDER ============ */
const app = document.getElementById('app');

function renderPersonalizar(){
  return `
    <div class="tela">
      <p class="eyebrow">Antes de começar</p>
      <h1>Como posso te chamar? 😊</h1>
      <input type="text" id="input-nome" class="input-nome" value="${escapeHtml(state.nomeTemp)}" placeholder="Seu nome ou apelido" maxlength="30">
      <button class="btn btn-primary" data-action="salvar-personalizacao" style="margin-top:10px">Continuar →</button>
    </div>`;
}

function renderInicio(){
  const nome = escapeHtml(lerNome() || 'Campeã');
  const historico = lerHistorico();
  const temHistorico = historico && historico.length > 0;

  if(!temHistorico){
    return `
      <div class="tela">
        <p class="eyebrow">Treino OLISP · Nível 1 · 6º e 7º anos</p>
        <h1>Oi, ${nome}! 👋</h1>
        <p class="lead">Que orgulho! Chegar até a Fase 2 já mostra o quanto você entende de leitura. Esse treino foi feito especialmente pra você, com carinho do seu tio.</p>
        <div class="info-box">
          <p class="info-box-titulo">COMO É A PROVA DE VERDADE</p>
          <ul class="info-lista">
            <li>📝 20 questões de múltipla escolha</li>
            <li>⏱️ 1h20 de duração</li>
            <li>💻 Prova on-line, feita na sua escola, dia 27/08</li>
          </ul>
        </div>
        <div class="dicas-compactas">
          <p class="dicas-titulo">Antes de começar, um resuminho de estratégia:</p>
          <ul class="dicas-lista-compacta">
            ${DICAS_CURTAS.map(d => `<li>${d}</li>`).join('')}
          </ul>
        </div>
        <button class="btn btn-primary" data-action="iniciar-quiz">Vamos praticar! 💪</button>
        <button class="link-editar" data-action="editar-personalizacao">✏️ Trocar nome</button>
        <p class="rodape-nota">Material de treino feito em família, sem relação oficial com a SEDUC-SP.</p>
      </div>`;
  }

  const ultimo = historico[historico.length-1];
  return `
    <div class="tela">
      <p class="eyebrow">Treino OLISP · Nível 1 · 6º e 7º anos</p>
      <h1>Oi de novo, ${nome}! 👋</h1>
      <div class="ultimo-resultado">
        <span class="ultimo-label">Última vez</span>
        <span class="ultimo-valor">${ultimo.acertos}/${ultimo.total} acertos</span>
      </div>
      <p class="lead">Bora treinar mais um pouco? Uma combinação nova de textos te espera.</p>
      <button class="btn btn-primary" data-action="iniciar-quiz">Começar treino 💪</button>
      <button class="link-editar" data-action="ir-dicas">🧠 Rever as dicas rapidinho</button>
      <button class="link-editar" data-action="editar-personalizacao">✏️ Trocar nome</button>
    </div>`;
}

function renderDicas(){
  return `
    <div class="tela">
      <p class="eyebrow">Revisão rápida</p>
      <h1>Relembrando a estratégia 🧠</h1>
      <div class="lista-dicas">
        ${DICAS.map(d => `
          <div class="dica-item">
            <span class="dica-icone">${d.icone}</span>
            <span class="dica-texto">${d.texto}</span>
          </div>`).join('')}
      </div>
      <button class="btn btn-primary" data-action="iniciar-quiz">Pronta! Vamos praticar 💪</button>
      <button class="link-editar" data-action="voltar-inicio">← Voltar</button>
    </div>`;
}

function renderQuiz(){
  const q = state.perguntas[state.current];
  const texto = state.textosAtuais[q.textoIndex];
  const respondida = state.respondidaAtual !== null;
  const pct = Math.round((state.current / state.perguntas.length) * 100);

  const opcoesHtml = q.opcoes.map((op,i)=>{
    let classe = 'opcao';
    if(respondida){
      if(i === q.correta) classe += ' correta';
      else if(i === state.respondidaAtual) classe += ' incorreta-selecionada';
      else classe += ' neutra';
    }
    const letra = String.fromCharCode(65+i);
    return `<button class="${classe}" data-action="responder" data-index="${i}" ${respondida?'disabled':''}>
      <span class="letra">${letra}</span><span>${op}</span>
    </button>`;
  }).join('');

  const acertou = state.respondidaAtual === q.correta;

  return `
    <div class="tela">
      <div class="progress-wrap">
        <div class="progress-track"><div class="progress-fill" style="width:${pct}%"></div></div>
        <p class="progress-label">Questão ${state.current+1} de ${state.perguntas.length}</p>
      </div>

      <div class="text-card genero-${texto.genero}">
        <p class="kicker">${texto.icone} ${texto.generoLabel.toUpperCase()}</p>
        <h2 class="text-titulo">${texto.titulo}</h2>
        <div class="text-corpo">${texto.corpo.map(p=>`<p>${p}</p>`).join('')}</div>
      </div>

      <div class="pergunta-box">
        <p class="pergunta-enunciado">${q.enunciado}</p>
        <div class="opcoes">${opcoesHtml}</div>

        ${respondida ? `
          <div class="feedback ${acertou?'ok':'tente'}" aria-live="polite">
            <p style="margin:0">${acertou ? '✅ ' + q.certo : '💭 ' + q.errado}</p>
          </div>
          <button class="btn btn-primary" data-action="proxima">
            ${state.current === state.perguntas.length-1 ? 'Ver resultado 🎉' : 'Próxima pergunta →'}
          </button>` : ''}
      </div>
    </div>`;
}

function renderResults(){
  const {total, acertos, porGenero} = calcularResultado();
  const msg = mensagemPorDesempenho(acertos,total);
  const segundos = Math.max(0, Math.round((state.fim - state.inicio)/1000));
  const historico = lerHistorico();

  const breakdownHtml = Object.entries(porGenero).map(([g,v])=>`
    <div class="genero-item"><span>${GEN_LABEL[g]||g}</span><strong>${v.acertos}/${v.total}</strong></div>
  `).join('');

  const historicoHtml = (historico && historico.length > 1) ? `
    <div class="historico-box">
      <p class="historico-titulo">SEU HISTÓRICO NESTE APARELHO</p>
      ${historico.slice(-5).reverse().map(h=>`<p class="historico-item">${new Date(h.data).toLocaleDateString('pt-BR')} · ${h.acertos}/${h.total} acertos</p>`).join('')}
    </div>` : '';

  const shareText = encodeURIComponent(textoCompartilhar(acertos,total));

  return `
    <div class="tela">
      <p class="eyebrow">Resultado</p>
      <h1>${msg.emoji} Você acertou ${acertos} de ${total}!</h1>
      <p class="lead">${msg.texto}</p>

      <div class="genero-breakdown">${breakdownHtml}</div>
      <p class="tempo-total">⏱️ Tempo total: ${formatarTempo(segundos)}</p>
      ${historicoHtml}

      <div class="acoes">
        <a class="btn btn-whatsapp" href="https://api.whatsapp.com/send?text=${shareText}" target="_blank" rel="noopener">📤 Compartilhar com seu tio</a>
        <button class="btn btn-secondary" data-action="copiar">📋 Copiar resultado</button>
        <p class="copiar-msg" id="copiar-msg"></p>
        <button class="btn btn-secondary" data-action="reiniciar">🔄 Fazer outro treino</button>
        <button class="link-editar" data-action="ir-dicas" style="text-align:center">🧠 Rever as dicas antes do próximo</button>
      </div>
    </div>`;
}

function render(){
  if(state.screen==='personalizar') app.innerHTML = renderPersonalizar();
  else if(state.screen==='inicio') app.innerHTML = renderInicio();
  else if(state.screen==='dicas') app.innerHTML = renderDicas();
  else if(state.screen==='quiz') app.innerHTML = renderQuiz();
  else if(state.screen==='results') app.innerHTML = renderResults();
  window.scrollTo({top:0, behavior:'smooth'});
}

/* ============ EVENTOS ============ */
app.addEventListener('input', (e)=>{
  if(e.target.id === 'input-nome') state.nomeTemp = e.target.value;
});

app.addEventListener('click', (e)=>{
  const el = e.target.closest('[data-action]');
  if(!el) return;
  const action = el.dataset.action;

  if(action==='iniciar-quiz'){
    novoSimulado();
    state.screen='quiz';
    state.current=0;
    state.respostas=[];
    state.respondidaAtual=null;
    state.inicio = Date.now();
  } else if(action==='responder'){
    if(state.respondidaAtual !== null) return;
    const idx = parseInt(el.dataset.index,10);
    state.respondidaAtual = idx;
    const q = state.perguntas[state.current];
    state.respostas.push({ genero: q.genero, acertou: idx === q.correta });
  } else if(action==='proxima'){
    if(state.current < state.perguntas.length-1){
      state.current++;
      state.respondidaAtual = null;
    } else {
      state.fim = Date.now();
      const r = calcularResultado();
      salvarHistorico({
        nome: lerNome(),
        data: new Date().toISOString(),
        acertos: r.acertos,
        total: r.total,
        tempoSegundos: Math.max(0, Math.round((state.fim-state.inicio)/1000)),
        porGenero: r.porGenero
      });
      state.screen='results';
    }
  } else if(action==='reiniciar'){
    state.screen='inicio'; state.current=0; state.respostas=[];
    state.respondidaAtual=null; state.inicio=null; state.fim=null;
  } else if(action==='ir-dicas'){
    state.screen='dicas';
  } else if(action==='voltar-inicio'){
    state.screen='inicio';
  } else if(action==='editar-personalizacao'){
    state.nomeTemp = lerNome() || 'Maria Eduarda';
    state.screen = 'personalizar';
  } else if(action==='salvar-personalizacao'){
    const nomeFinal = (state.nomeTemp || '').trim() || 'Campeã';
    salvarNome(nomeFinal);
    state.screen = 'inicio';
  } else if(action==='copiar'){
    const {acertos,total} = calcularResultado();
    const txt = textoCompartilhar(acertos,total);
    const msgEl = document.getElementById('copiar-msg');
    try{
      navigator.clipboard.writeText(txt).then(()=>{
        if(msgEl) msgEl.textContent = 'Copiado! ✓';
      }).catch(()=>{ if(msgEl) msgEl.textContent = 'Não foi possível copiar automaticamente.'; });
    }catch(err){ if(msgEl) msgEl.textContent = 'Não foi possível copiar automaticamente.'; }
    return;
  }
  render();
});

/* ============ INÍCIO ============ */
function iniciarApp(){
  const nomeSalvo = lerNome();
  if(!nomeSalvo){
    state.nomeTemp = 'Maria Eduarda';
    state.screen = 'personalizar';
  } else {
    state.screen = 'inicio';
  }
  render();
}
iniciarApp();
