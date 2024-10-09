//CODIGO REFATORADO

function checkeMelhorCombustivel (gasolina, etanol) {
    const result = gasolina * 0.70
    if ( result > etanol) {
        alert("Melhor usar etanol")
    }else {
        alert("Melhor usar gasolina")
    }
}

const etanol = parseInt(prompt("Qual valor do etanol? "), 10)
const gasolina = parseInt(prompt("Qual valor do gasolina? "), 10)

checkeMelhorCombustivel(gasolina, etanol)


//CODIGO ANTIGO

// let etanol = parseInt(prompt("Qual valor do etanol? "));
// let gasolina = parseInt(prompt("Qual valor da gasolina? "));
// let resultado = gasolina * 0.70;
// if (resultado > etanol){
//     alert("Melhor usar etanol")
// }
// else {
//     alert("Melhor usar gasolina")
// }