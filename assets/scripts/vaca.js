function textoVaca() {
    limpar()
    document.getElementById("vacaMenu").classList.add('active');

    /*TITULO*/
    document.querySelector('main .titulo h1').innerHTML = 'Vaca';
    document.querySelector('main .titulo span').innerHTML = 'da família Bovidae';

    /*IMAGENS*/
    document.querySelector('.foto1').setAttribute('src', 'assets/img/body/vaca1.jpg');
    document.querySelector('.foto2').setAttribute('src', 'assets/img/body/vaca2.jpeg');
    document.querySelector('.foto2').classList.add('foto2tamanho');
    /* ULTIMA IMAGEM */
    document.querySelector('.foto3').classList.add('foto3')
    document.querySelector('.foto3').setAttribute('src', 'assets/img/body/vaca3.jpeg');

    /*MENU E INFORMAÇÕES PESO/IDADE*/
    document.querySelector('.content .peso').innerHTML = '12';
    document.querySelector('.content .idade').innerHTML = '720';
    document.querySelector('main .numero').classList.add('infomenor');
    document.querySelector('.idade').classList.add('infomenor');


    /* MUDANÇAS NOS TEXTOS */
    document.querySelector('main p').textContent = 'O nome vaca é atribuído às fêmeas dos mamíferos da espécie Bos taurus. Touro é o nome dado ao macho reprodutivo; boi, ao macho castrado; novilho, ao gado jovem; e bezerro, ao filhote.'
    document.querySelector('.texto-secundario').textContent = 'Tais animais são ruminantes, possuem porte médio a grande, cauda comprida e, na maioria dos casos, pelagem curta. Quando adultos, geralmente apresentam um par de cornos ocos, não ramificados e permanentes; sendo chamados de mochos aqueles indivíduos desprovidos dessa estrutura.';
    document.querySelector('.foto-grid1').textContent = 'Domesticados há pelo menos 5000 anos, tais variedades foram sendo criadas, por seleção artificial, para atender às demandas relativas ao que tais animais oferecem, com destaque para o transporte, leite, couro e carne. Este último item, embora amplamente visado pela nossa espécie na atualidade, só era considerado quando o animal se apresentava inapto a fornecer leite ou a ser utilizado para transportar cargas; ou, ainda, após a sua morte.';
    document.querySelector('.foto-grid2').textContent = 'A partir do cruzamento entre duas subespécies de bovinos: o gado taurino (o europeu Bos taurus taurus) e o gado zebuíno (o asiático Bos taurus indicus), temos diversos tipos desses animais, na atualidade.';

    document.querySelector('.citacao p').textContent = '"Aquele que bebe leite, sabe o valor que tem uma vaca".';

    /*TEXTO INFORMAÇÕES*/
    document.querySelector('.informacoes #p1').textContent = 'Uma vez utilizados para este último fim, bovinos passaram a ser criados em larga escala. Graças a essa atividade, nosso país passou a ser mais bem povoado em locais não litorâneos e algumas regiões, como a Centro-Oeste, passaram a ter destaque significativo nesse quesito.';
    document.querySelector('.informacoes #p2').textContent = '  Por outro lado, a agropecuária propiciou, e ainda favorece negativamente nesse sentido, o desflorestamento de áreas nativas, tanto para dar lugar a pastagens quanto para a produção de alimentos para o gado. Além disso, há o fato de que o processo digestivo desses animais libera metano, um gás vinte vezes mais perigoso para o aquecimento global do que o dióxido de carbono; e outros fatores, como o alto consumo de água para esse fim, e a exploração e maus tratos direcionados a esses animais.';

    /*MUDANÇA DE PAINEL */

    let idade = '10.500 anos';
    let genero = 'Mamífero';
    let idadeMedia = '12 anos';
    let machoadulto = '  1.100 kg';
    let femeaAdulta = '720 Kg';
    let familia = 'Bovidae';

    document.querySelector('.atributos #idade').innerHTML = `Surgiu: ${idade} `;
    document.querySelector('.atributos #genero').innerHTML = `Tipo: ${genero} `;
    document.querySelector('.atributos #idadeMedia').innerHTML = `Idade Média: ${idadeMedia} `;
    document.querySelector('.atributos #machoAdulto').innerHTML = `Macho adulto: ${machoadulto} `;
    document.querySelector('.atributos #femeaAdulta').innerHTML = `Fêmea adulta: ${femeaAdulta} `;
    document.querySelector('.atributos #familia').innerHTML = `Família: ${familia} `;
}