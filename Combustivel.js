let etanol = parseInt(prompt("Qual valor do etanol? "));
let gasolina = parseInt(prompt("Qual valor da gasolina? "));
let resultado = gasolina * 0.70;
if (resultado > etanol){
    alert("Melhor usar etanol")
}
else {
    alert("Melhor usar gasolina")
}

/*console.log("Melhor Usar Gasolina")*/