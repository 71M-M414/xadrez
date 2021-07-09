var pawn = document.getElementById("pawn");
var bishop = document.getElementById("bishop");
var knight = document.getElementById("knight");
var rook = document.getElementById("rook");
var king = document.getElementById("king");
var queen = document.getElementById("queen");

function Pawn() {
    var txt = document.getElementById('txt')

    txt.innerHTML = `O Peão é uma peça menor do xadrez ocidental. ... O peão move-se verticalmente na coluna que encontra-se, sendo incapaz de recuar. No primeiro movimento de cada peão, a partir do ponto de partida, pode avançar duas casas e, a partir daí, uma. Um peão pode capturar a peça imediatamente na fileira na diagonal.`
}

function Bishop() {
    var txt = document.getElementById('txt')

    txt.innerHTML = `O Bispo é uma peça menor do xadrez ocidental de valor aproximado de três peões. Movimenta-se em diagonal, não podendo pular peças intervenientes, e captura tomando o lugar ocupado pela peça adversária.`
}

function Knight() {
    var txt = document.getElementById('txt')

    txt.innerHTML = `O cavalo é uma peça menor do xadrez ocidental de um valor aproximado de três peões. Tem um movimento assemelhado a um "L" e, diferente das outras peças, pode pular as peças intervenientes. Captura tomando a casa ocupada pela peça adversária, sendo sempre no final do L.`
}

function Rook() {
    var txt = document.getElementById('txt')

    txt.innerHTML = `A Torre é uma peça maior do xadrez, empregada usualmente na fase final do jogo devido ao seu valor estratégico e tático, movimenta-se em linhas retas nas colunas e fileiras do tabuleiro não podendo, entretanto, pular peças adversárias ou aliadas e captura ao ocupar a casa deixada pelo adversário. Excepcionalmente, caso não tenha sido movimentada, é permitido a uma das torres realizar um movimento especial denominado roque com o Rei, no qual a Torre pode "pular" o monarca, ocupando a casa imediatamente após este no movimento.`
}

function King() {
    var txt = document.getElementById('txt')

    txt.innerHTML = `A sua movimentação consiste no deslocamento de uma casa na direção horizontal, vertical ou diagonal, desde que ela não esteja sob ataque adversário. Caso ainda não tenha sido movimentado no jogo, é permitido ao Rei realizar um movimento especial denominado roque com uma das torres, com o que se pode protegê-lo deslocando-o duas casas horizontalmente, caso estas casas não estejam sob ataque e o Rei não esteja em xeque.`
}

function Queen() {
    var txt = document.getElementById('txt')

    txt.innerHTML = `A Dama ou Rainha é uma peça maior do jogo de xadrez, a dama movimenta-se em linhas retas pelas fileiras, colunas e diagonais no tabuleiro. Não pode pular suas próprias peças ou as adversárias e captura tomando a casa ocupada pela adversária. Devido ao seu valor, normalmente é trocada somente pela Dama adversária e o seu sacrifício, em função de outras peças, são posições que normalmente determinam o desfecho da partida.`
}
pawn.addEventListener('click', Pawn)
bishop.addEventListener('click', Bishop)
knight.addEventListener('click', Knight)
rook.addEventListener('click', Rook)
king.addEventListener('click', King)
queen.addEventListener('click', Queen)