let etanol = parseInt(prompt("Qual valor do etanol? "));
let gasolina = parseInt(prompt("Qual valor da gasolina? "));
let resultado = gasolina * 0.70;
if (resultado > etanol){
    console.log("Melhor usar Etanol")
}
else {
    console.log("Melhor Usar Gasolina")
}