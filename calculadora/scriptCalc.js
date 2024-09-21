function calcular() {
    var numero1 = Number(ipt_n1.value);
    var numero2 = Number(ipt_n2.value);
    var numero1Att;
    var numero2Att;
    var base = parseInt(slt_bases.value);
    var operacao = slt_operacao.value;
    var operacaoExibir;

    // Convertndo numero para base escolhida
    if (base == 16) {
        numero1Att = parseInt(numero1, 16);
        numero2Att = parseInt(numero2, 16);
    } else if (base == 10) {
        numero1Att = parseInt(numero1, 10);
        numero2Att = parseInt(numero2, 10);
    } else if (base == 8) {
        numero1Att = parseInt(numero1, 8);
        numero2Att = parseInt(numero2, 8);
    } else if (base == 2) {
        numero1Att = parseInt(numero1, 2);
        numero2Att = parseInt(numero2, 2);
    }

    // Convertendo para decimal
    var n1Decimal = numero1Att.toString(10);
    var n2Decimal = numero2Att.toString(10);

    //transformando em int o decimal para operacoes
    var intn1 = parseInt(n1Decimal)
    var intn2 = parseInt(n2Decimal)

    // variavel resultado em decimal
    var resultado = 0;

    //variavel para voltar o decimal a base origem
    var resultadoBaseAtt = 0;

    if(operacao == 'soma'){
        operacaoExibir = 'soma'
        resultado = intn1 + intn2
        resultadoBaseAtt = resultado.toString(base)
    }else if(operacao == 'div'){
        operacaoExibir = 'divisão'
        resultado = intn1 / intn2
        resultadoBaseAtt = resultado.toString(base)
    }else if(operacao == 'sub'){
        operacaoExibir = 'subtração'
        resultado = intn1 - intn2
        resultadoBaseAtt = resultado.toString(base)
    }else if(operacao == 'multi'){
        operacaoExibir = 'multiplicação'
        resultado = intn1 * intn2
        resultadoBaseAtt = resultado.toString(base)
    }

    div_resultado.style.display = 'block'
    div_resultado.innerHTML = `O resultado da ${operacaoExibir} <br>
                        entre <span class='spn_result'> ${numero1} </span>
                        e <span class='spn_result'> ${numero2} </span> 
                        na base <span class='spn_result'> ${base} </span> <br>
                        é igual a: <span class='spn_result'> ${resultadoBaseAtt.toUpperCase()} </span> <br>
                        ou <span class ='spn_result'> ${resultado} </span> na base <span class = 'spn_result' > 10 </span>`

}
