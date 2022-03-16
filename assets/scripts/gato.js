function textoGato() {
    limpar()
    document.getElementById("gatoMenu").classList.add('active');

    /*TITULO*/
    document.querySelector('main .titulo h1').innerHTML = 'Gato';
    document.querySelector('main .titulo span').innerHTML = 'da família Felidae';

    /*IMAGENS*/
    document.querySelector('.foto1').setAttribute('src', 'assets/img/body/gato1.jpg');
    document.querySelector('.foto2').setAttribute('src', 'assets/img/body/gato4.jpg');
    document.querySelector('.foto2').classList.add('foto2tamanho');
    /* ULTIMA IMAGEM */
    document.querySelector('.foto3').classList.add('foto3')
    document.querySelector('.foto3').setAttribute('src', 'assets/img/body/gato3.jpg');

    /*MENU E INFORMAÇÕES PESO/IDADE*/
    document.querySelector('.content .peso').innerHTML = '5';
    document.querySelector('.content .idade').innerHTML = '12';
    document.querySelector('main .numero').classList.add('infomenor');
    document.querySelector('.idade').classList.add('infomenor');


    /* MUDANÇAS NOS TEXTOS */
    document.querySelector('main p').textContent = 'O gato, também conhecido como gato caseiro, gato urbano ou gato doméstico, é um mamífero carnívoro da família dos felídeos, muito popular como animal de estimação.'
    document.querySelector('.texto-secundario').textContent = 'Ocupando o topo da cadeia alimentar, é predador natural de diversos animais, como roedores, pássaros, lagartixas e alguns insetos. Segundo pesquisas realizadas por instituições norte-americanas, os gatos consistem no segundo animal de estimação mais popular do mundo, estando numericamente atrás apenas dos peixes de aquário.';
    document.querySelector('.foto-grid1').textContent = 'A primeira associação dos gatos com os humanos da qual se tem evidência ocorreu há cerca de 9 500 anos, período mais antigo ao estimado anteriormente, que oscilava entre 3 500 e 8 000 anos.';
    document.querySelector('.foto-grid2').textContent = 'A subfamília Felinae, que agrupa os gatos domésticos, surgiu há cerca de 12 milhões de anos, expandindo-se a partir da África subsariana até alcançar as terras do atual Egito.';
    document.querySelector('.citacao p').textContent = '"De todas as criaturas de Deus, somente uma não pode ser castigada. Essa é o gato. Se fosse possível cruzar o homem com o gato, melhoraria o homem, mas pioraria o gato."';

    /*TEXTO INFORMAÇÕES*/
    document.querySelector('.informacoes #p1').textContent = 'Acredita-se que o gato-selvagem-africano era seu antepassado imediato.Adicionalmente, evidências genéticas assinalam que os gatos domésticos atuais partilham uma procedência direta com os gatos selvagens do Oriente Médio.';
    document.querySelector('.informacoes #p2').textContent = '  Existem cerca de 250 raças de gato doméstico, cujo peso variável entre 2,5 a 12 kg coloca a espécie na categoria de animal doméstico de pequeno a médio porte. Assim como ocorre com algumas raças de cães que apresentam esta mesma faixa de peso, o gato doméstico pode viver entre quinze e vinte anos.';

    /*MUDANÇA DE PAINEL */

    let idade = '130 mil anos';
    let genero = 'Mamífero';
    let idadeMedia = '14 anos';
    let machoadulto = '  2,5 a 12 kg';
    let femeaAdulta = ' 2,5 a 12 kg';
    let familia = 'Felidae';

    document.querySelector('.atributos #idade').innerHTML = `Surgiu: ${idade} `;
    document.querySelector('.atributos #genero').innerHTML = `Tipo: ${genero} `;
    document.querySelector('.atributos #idadeMedia').innerHTML = `Idade Média: ${idadeMedia} `;
    document.querySelector('.atributos #machoAdulto').innerHTML = `Macho adulto: ${machoadulto} `;
    document.querySelector('.atributos #femeaAdulta').innerHTML = `Fêmea adulta: ${femeaAdulta} `;
    document.querySelector('.atributos #familia').innerHTML = `Família: ${familia} `;


}