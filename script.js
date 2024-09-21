function converter() {
    var numeroUsuario = ipt_numero.value;
    var baseOriginal = parseInt(slt_bases.value);
    var numeroAtualizado;

    // Convertndo numero para base
    if (baseOriginal == '16') {
        numeroAtualizado = parseInt(numeroUsuario, 16);
    } else if (baseOriginal == '10') {
        numeroAtualizado = parseInt(numeroUsuario, 10);
    } else if (baseOriginal == '8') {
        numeroAtualizado = parseInt(numeroUsuario, 8);
    } else if (baseOriginal == '2') {
        numeroAtualizado = parseInt(numeroUsuario, 2);
    }

    // Converte para as outras bases
    var decimal = numeroAtualizado.toString(10);
    var octal = numeroAtualizado.toString(8);
    var hexadecimal = numeroAtualizado.toString(16).toUpperCase();
    var binario = numeroAtualizado.toString(2);

    // Exibe os resultados
    div_decimal.innerHTML = `Decimal: ${decimal}`;
    div_octal.innerHTML = `Octal: ${octal}`;
    div_hexa.innerHTML = `Hexadecimal: ${hexadecimal}`;
    div_bin.innerHTML = `Binário: ${binario}`;
}

// Funções para exibir os resultados
function aparecer_hexa() {
    if(div_hexa.style.display == 'block'){
        div_hexa.style.display = 'none'
    }else{
        div_hexa.style.display = 'block'
    }
}

function aparecer_decimal() {
    if(div_decimal.style.display == 'block'){
        div_decimal.style.display = 'none'
    }else{
        div_decimal.style.display = 'block'
    }
}

function aparecer_octal() {
    if(div_octal.style.display == 'block'){
        div_octal.style.display = 'none'
    }else{
        div_octal.style.display = 'block'
    }
}

function aparecer_bin() {
    if(div_bin.style.display == 'block'){
        div_bin.style.display = 'none'
    }else{
        div_bin.style.display = 'block'
    }
}

