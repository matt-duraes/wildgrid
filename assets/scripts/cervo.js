
function textoCervo() {

    limpar()
    document.getElementById("cervoMenu").classList.add('active');
    document.querySelector('main .titulo h1').innerHTML = 'Cervo';


    document.querySelector('main .titulo span').innerHTML = 'da família dos cervídeos';
    document.querySelector('.foto1').setAttribute('src', 'assets/img/body/cervao4k.jfif');
    document.querySelector('.foto2').setAttribute('src', 'assets/img/body/cervao3k.jpg');
    document.querySelector('.foto2').classList.add('foto2tamanho');

    document.querySelector('.content .peso').innerHTML = '200';
    document.querySelector('.content .idade').innerHTML = '20';
    document.querySelector('main .numero').classList.add('infomenor');
    document.querySelector('.idade').classList.add('infomenor');


    /* MUDANÇAS NOS TEXTOS */
    document.querySelector('main p').textContent = 'A família dos cervídeos, ou cervos, é um grupo de mamíferos que inclui animais como o veado-campeiro, o cervo-do-pantanal, o alce, o uapiti e a rena. Eles são os únicos animais que desenvolvem galhadas. Existem cerca de trinta espécies, ou tipos, de cervídeos.'
    document.querySelector('.texto-secundario').textContent = 'Os cervos são nativos da Europa, da Ásia, da América do Norte, da América do Sul e do norte da África. Eles foram levados para a Austrália, a Nova Zelândia e outras regiões pelos homens';
    document.querySelector('.foto-grid1').textContent = 'Desde a Antiguidade, as pessoas costumam caçar cervos por causa da carne, do couro e das galhadas. Caçar cervos é também um passatempo popular nos Estados Unidos e em outros países. Em alguns lugares, as pessoas os caçam para controlar a população de certas espécies.';
    document.querySelector('.foto-grid2').textContent = 'No Brasil, a caça a animais silvestres é proibida por lei.Em muitas partes do mundo, alguns tipos de cervos estão ameaçados de extinção. Entre as causas estão a caça a esses animais e a derrubada das matas onde eles costumam viver.';
    document.querySelector('.citacao p').textContent = 'Penso que um cervo com coragem de enfrentar um leão é mais "respeitado" do que um exercito inteiro de leões.'

    /*MUDANÇA DE PAINEL */
    let idade = '20 milhões de anos';
    let genero = 'Mamífero';
    let idadeMedia = '20 anos';
    let machoadulto = '100 a 250 KG';
    let femeaAdulta = '70 a 120kg';
    let familia = 'Cervídeos';


    document.querySelector('.atributos #idade').innerHTML = `Surgiu: ${idade} `;
    document.querySelector('.atributos #genero').innerHTML = `Tipo: ${genero} `;
    document.querySelector('.atributos #idadeMedia').innerHTML = `Idade Média: ${idadeMedia} `;
    document.querySelector('.atributos #machoAdulto').innerHTML = `Macho adulto: ${machoadulto} `;
    document.querySelector('.atributos #femeaAdulta').innerHTML = `Fêmea adulta: ${femeaAdulta} `;
    document.querySelector('.atributos #familia').innerHTML = `Família: ${familia} `;

    /*TEXTO INFORMAÇÕES*/
    document.querySelector('.informacoes #p1').textContent = 'Os cervos têm grandes orelhas, cauda curta e pernas longas e finas. Em cada pé, têm dois cascos pequenos e dois grandes. Costumam ter pelagem marrom e lisa, com áreas brancas no peito e na garganta. Alguns tipos têm pelagem mais espessa nas estações frias. O menor cervídeo, o pudu, vive na cordilheira dos Andes e tem cerca de 30 centímetros de altura.';
    document.querySelector('.informacoes #p2').textContent = ' O maior, o alce, pode chegar a mais de 2 metros de altura(medida do chão até os ombros). As fêmeas costumam ser menores que os machos. Os machos da maioria das espécies desenvolvem galhadas, que são estruturas ósseas que saem da cabeça.As fêmeas das renas também desenvolvem galhadas.Os machos usam as galhadas para brigar pelas fêmeas na época de acasalamento.Eles perdem as galhadas a cada ano, e novas crescem no lugar';
    /* ULTIMA IMAGEM */
    document.querySelector('.foto3').classList.add('foto3')
    document.querySelector('.foto3').setAttribute('src', 'assets/img/body/cervoneve.jpg!d');

}