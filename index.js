function calcNivelRank(vitoria, derrota) {
    return vitoria - derrota;
}
function validarSaldoRank(saldo) {
    let resultadoRank = "Não Ranqueado";
    if (saldo < 10) {
        return resultadoRank = "Ferro";
    } else if (saldo <= 20) {
        return resultadoRank = "Bronze";
    } else if (saldo <= 50) {
        return resultadoRank = "Prata";
    } else if (saldo <= 50) {
        return resultadoRank = "Ouro";
    } else if (saldo <= 90) {
        return resultadoRank = "Diamante";
    } else if (saldo <= 100) {
        return resultadoRank = "Lendário";
    } else if (saldo >= 101) {
        return resultadoRank = "Imortal";
    }
}
let heroi = {'vitoria' : 80, 'derrota' : 15};
let resultadoCalcRank = calcNivelRank(heroi.vitoria, heroi.derrota);
let validacaoRank = validarSaldoRank(resultadoCalcRank)
console.log(`O Herói tem um total de ${resultadoCalcRank} vitórias e está no rank: ${validacaoRank}`)
