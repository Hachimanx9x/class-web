let numero1, numero2, strOperacion;
/*
 *Funcion para calcular dos valores
 *@param {string} strOperacion ["Sumar" , "Restar","Dividir", "Multiplicar" ]
 *@param {double} numero1
 *@param {double} numero2
 */

function Calcular(numero1, numero2, strOperacion) {
  if (strOperacion === "Sumar") {
    let calculo = numero1 + numero2
    return calculo
  } else if (strOperacion === "Restar") {
    let calculo = numero1 - numero2
    return calculo
  } else if (strOperacion === "Dividir") {
    let calculo = numero1 / numero2
    return calculo
  } else if (strOperacion === "Multiplicar") {
    let calculo = numero1 * numero2
    return calculo
  }
}

/*
 *Funcion para calcular dos valores y complicando las cosas
 *@param {string} str
 *@param {double} n1
 *@param {double} n2
 */
let calcular2 = (n1, n2, str) => (
  (str === "+") ? (n1 + n2) : (str === "-") ? (n1 - n2) : (str === "/") ? (n1 / n2) : (str === "*") ? (n1 * n2) : 0)