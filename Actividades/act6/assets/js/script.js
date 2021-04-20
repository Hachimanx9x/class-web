let num1=0, num2=0, operation="Sumar", loop=false;

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

function fclic() {
  loop= true; 
  pensamiento();
}

function fchange(){
   if(loop){
    pensamiento()
   }
}

function pensamiento(){
  this.num1 = document.getElementById('num1').value
  this.num2 = document.getElementById('num2').value
  this.operation = document.getElementById('operator').value
  console.log(this.num1)
  console.log(this.num2)
  console.log(this.operation)
  document.getElementById('response').value = Calcular(this.num1, this.num2, this.operation)
}