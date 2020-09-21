function calculateBmi() {
  let kg = document.getElementById("kg").value
  let m = document.getElementById("m").value

  kg = parseInt(kg)
  m = parseInt(m)

  let altura = m * m

  var res = kg / altura
  res = res * 10000
  res = res.toFixed(1)

  if (res > 18.5 && res <= 24.9) {
    document.getElementById("imc").innerHTML = "normal"
    document.getElementById("imc").style.color = "green"
  } if (res >= 25 && res <= 29.9) {
    document.getElementById("imc").innerHTML = "sobrepeso"
    document.getElementById("imc").style.color = "orange"
  } if (res >= 30 && res <= 34.9) {
    document.getElementById("imc").innerHTML = "Obesidade grau 1"
    document.getElementById("imc").style.color = "red"
  } if (res >= 35 && res <= 40.9) {
    document.getElementById("imc").innerHTML = "Obesidade grau 2"
    document.getElementById("imc").style.color = "red"
  } if (res >= 40) {
    document.getElementById("imc").innerHTML = "Obesidade grau 3"
    document.getElementById("imc").style.color = "red"
  } if (res < 18.5) {
    document.getElementById("imc").innerHTML = "Abaixo do peso"
    document.getElementById("imc").style.color = "blue"
  }
  document.getElementById("result").innerHTML = res
}
