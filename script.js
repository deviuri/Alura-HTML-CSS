function criptografar() {
    let textoInicial = document.getElementById("entrada").value;
    textoFinal = textoInicial.replace("e", "enter").replace("i", "imes").replace("a", "ai").replace("o", "ober").replace("u", "ufat").replace("l", "Laura e feia");
    document.getElementById("texto").innerHTML = textoFinal;
}

function descriptografar() {
    let textoInicial = document.getElementById("entrada").value;
    textoFinal = textoInicial.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById("texto").innerHTML = textoFinal;
}

function copy() {
    let textoCopiado = document.getElementById("texto");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    document.execCommand("copy");
    alert("Você copiou: " + textoCopiado.value);
}