
   function verificarResposta() {
    let resposta = "'" + document.querySelector("input").value + "'";
    for (let node of document.querySelectorAll("td")) {
        if (node.className.indexOf(resposta) >= 0) {
            node.style = "color: black"
    }
    }
    document.querySelector("input").value = ''
    }
function dica1(){

      res.innerHTML=`É a memória dentro da própria CPU que armazena os bits.`
}
function dica2(){

    res.innerHTML=`O componente recebe um determinado volume de dados, orientados em padrão binário 0 e 1 e tem a função de responder a esse volume, processando a informação com base em instruções armazenadas em sua memória interna. começado a ser fabricado em 2008 e lançado em 2021.`
}

function dica3(){

    res.innerHTML=`O componente recebe um determinado volume de dados, orientados em padrão binário 0 e 1 e tem a função de responder a esse volume, processando a informação com base em instruções armazenadas em sua memória interna. começado a ser fabricado em 2009 e lançado em 2012.`
}
function dica4(){

    res.innerHTML=`É capaz de armazenar as informações para sererm recuperadas e utilizadas porsteriormente, mesmo depois de alimentação ter sido interrompida.`
}

function dica5(){

    res.innerHTML=`É uma memória não volátil, não se perde dados quando desliga, e também quando não tem fonte de energia. Por exemplo: pen drive, HD ou SSD.`
}
function dica6(){

    res.innerHTML=`Usa memória não volátil, ou seja, não se perde nada quando é desligado, além de não exigir partes móveis ou uso excessivo de energia para funcionar.`
}
function dica7(){

    res.innerHTML=`É o mais simples e é indicado para rodar jogos leves e tarefas básicas, como navegar na web ou acessar redes sociais.`
}
function dica8(){

    res.innerHTML=`usada para transferir dados entre dispositivos identificados pelo endereço de hardware da memória física (o endereço físico)`
}
function dica9(){

    res.innerHTML=`Uma Unidade Lógica e Aritmética ,um dispositivo que realiza operações lógicas e aritméticas sobre números representados em circuitos lógicos.`
}
function dica10(){

    res.innerHTML=`É uma parte da CPU, sendo uma memória volátil que recupera rapidamente os dados, sem a necessidade de busca direta na memória RAM`
}
function dica11(){

    res.innerHTML=`Onde você pode usar vários apps ao mesmo tempo e rodar jogos mais pesados com ainda mais velocidade.`
}
function dica12(){

    res.innerHTML=`Define as linhas de execução do processador.`
}
function dica13(){

    res.innerHTML=`Tipo de memória que permite apenas a leitura de dados e não a escrita, e é uma memória não volátil.`
}
function dica14(){

    res.innerHTML=`Uma entrada de controle de muitos circuitos integrados , como chips de memória, permitindo ativar ou desativar o circuito.`
}
function dica15(){

    res.innerHTML=`Unidade Central de Processamento, o componente do computador que concentra todas as principais operações que permitem a seu PC, celular, tablet ou videogame a funcionar.`
}
function dica16(){

    res.innerHTML=`Um barramento de dados é um sistema dentro de um computador ou dispositivo, consistindo em um conector ou conjunto de fios, que fornece transporte de dados.`
}
function dica17(){

    res.innerHTML=`Responsável pelo armazenamento de informações necessárias para a execução de programas em uso e para funcionamento do próprio sistema operacional.`
}
function dica18(){

    res.innerHTML=`Permite que um dispositivo de entrada e saída envie ou receba dados diretamente da memória principal, ignorando a CPU, acelerando as operações que envolvem a memória.`
}
function dica19(){

    res.innerHTML=`Pode ser chamdo de núcleo ou unidade de processamento, é como se fossem um ‘cérebro’.`
}






