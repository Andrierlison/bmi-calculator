function calculateBmi() {
  let kg = document.getElementById("kg").value;
  let m = document.getElementById("m").value;

  kg = parseInt(kg);
  m = parseInt(m);

  let weight = m * m;

  var result = kg / weight;
  result = result * 10000;
  result = result.toFixed(1);

  if (result > 18.5 && result <= 24.9) {
    document.getElementById("imc").innerHTML = "normal";
    document.getElementById("imc").style.color = "green";
  }
  if (result >= 25 && result <= 29.9) {
    document.getElementById("imc").innerHTML = "overweight";
    document.getElementById("imc").style.color = "orange";
  }
  if (result >= 30 && result <= 34.9) {
    document.getElementById("imc").innerHTML = "Obesity degree 1";
    document.getElementById("imc").style.color = "red";
  }
  if (result >= 35 && result <= 40.9) {
    document.getElementById("imc").innerHTML = "Obesity degree 2";
    document.getElementById("imc").style.color = "red";
  }
  if (result >= 40) {
    document.getElementById("imc").innerHTML = "Obesity degree 3";
    document.getElementById("imc").style.color = "red";
  }
  if (result < 18.5) {
    document.getElementById("imc").innerHTML = "Under weight";
    document.getElementById("imc").style.color = "blue";
  }
  document.getElementById("result").innerHTML = result;
}
