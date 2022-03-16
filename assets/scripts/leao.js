function textoLeao() {
    limpar()
    document.getElementById("leaoMenu").classList.add('active');

    /*TITULO*/
    document.querySelector('main .titulo h1').innerHTML = 'Leão';
    document.querySelector('main .titulo span').innerHTML = 'da família Felidae';

    /*IMAGENS*/
    document.querySelector('.foto1').setAttribute('src', 'assets/img/body/leao2.jpg');
    document.querySelector('.foto2').setAttribute('src', 'assets/img/body/leaocapa.jpg');
    document.querySelector('.foto2').classList.add('foto2tamanho');
    /* ULTIMA IMAGEM */
    document.querySelector('.foto3').classList.add('foto3')
    document.querySelector('.foto3').setAttribute('src', 'assets/img/body/leaocapa2.jpg');

    /*MENU E INFORMAÇÕES PESO/IDADE*/
    document.querySelector('.content .peso').innerHTML = '190';
    document.querySelector('.content .idade').innerHTML = '14';
    document.querySelector('main .numero').classList.add('infomenor');
    document.querySelector('.idade').classList.add('infomenor');


    /* MUDANÇAS NOS TEXTOS */
    document.querySelector('main p').textContent = 'O leão é uma espécie de mamífero carnívoro do gênero Panthera e da família Felidae. A espécie é atualmente encontrada na África subsaariana e na Ásia,'
    document.querySelector('.texto-secundario').textContent = 'Há cerca de 10 000 anos, era o mais difundido grande mamífero terrestre depois dos humanos, sendo encontrado na maior parte da África, em muito da Eurásia, da Europa Ocidental à Índia, e na América, do Yukon ao México. ';
    document.querySelector('.foto-grid1').textContent = 'É uma dos quatro grandes felinos, com alguns machos excedendo 250 quilogramas em peso, sendo o segundo maior felino recente depois do tigre.';
    document.querySelector('.foto-grid2').textContent = 'A pelagem é unicolor de coloração castanha, e os machos apresentam uma juba característica. Uma das características mais marcantes da espécie é a presença de um tufo de pelos pretos na cauda, que também possui uma espora. Habita preferencialmente as savanas e pastagens abertas, mas pode ser encontrado em regiões mais arbustivas. ';
    document.querySelector('.citacao p').textContent = '"O rei da selva recebe esse nome porque ninguém é mais valente e determinado do que ele."';

    /*TEXTO INFORMAÇÕES*/
    document.querySelector('.informacoes #p1').textContent = 'É um animal sociável que vive em grupos que consiste das leoas e suas crias, o macho dominante e alguns machos jovens que ainda não alcançaram a maturidade sexual.';
    document.querySelector('.informacoes #p2').textContent = '  A dieta consiste principalmente de grandes ungulados e possuem hábitos noturnos e crepusculares, descansando e dormindo na maior parte do dia. Leões vivem por volta de 10-14 anos na natureza, enquanto em cativeiro eles podem viver por até 30 anos. Alguns animais desenvolveram o hábito de atacar e devorar humanos, ficando conhecidos como "devoradores de homens".';

    /*MUDANÇA DE PAINEL */
    let idade = '124 mil anos';
    let genero = 'Mamífero';
    let idadeMedia = '14 anos';
    let machoadulto = ' 140 a 180 KG';
    let femeaAdulta = '120 a 150kg';
    let familia = 'Felidae';

    document.querySelector('.atributos #idade').innerHTML = `Surgiu: ${idade} `;
    document.querySelector('.atributos #genero').innerHTML = `Tipo: ${genero} `;
    document.querySelector('.atributos #idadeMedia').innerHTML = `Idade Média: ${idadeMedia} `;
    document.querySelector('.atributos #machoAdulto').innerHTML = `Macho adulto: ${machoadulto} `;
    document.querySelector('.atributos #femeaAdulta').innerHTML = `Fêmea adulta: ${femeaAdulta} `;
    document.querySelector('.atributos #familia').innerHTML = `Família: ${familia} `;

}