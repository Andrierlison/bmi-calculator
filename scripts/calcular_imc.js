/*função para calcular imc*/
function calcularImc(){
	/*pega os valores "inicio"*/
	var kg = document.getElementById("kg").value
	var m = document.getElementById("m").value
	/*pega os valores "fim"*/
	/*passa as strings para numbers "inicio"*/
	kg = parseInt(kg)
	m = parseInt(m)
	/*passa as strings para numbers "fim"*/
	/*calcula o imc "inicio"*/
	var altura = m * m
	res = kg / altura
	res = res * 10000
	res = parseInt(res)
	/*calcula o imc "fim"*/
	if (res > 18 && res <= 24)
	{
		document.getElementById("imc").innerHTML="normal"
		document.getElementById("imc").style.color="green"
	}
	else {
	if (res >= 25 && res <= 29)
	{
		document.getElementById("imc").innerHTML="sobrepeso"
		document.getElementById("imc").style.color="orange"

	}
	else {
	if (res >= 30 && res <= 34)
	{
		document.getElementById("imc").innerHTML="Obesidade grau 1"
		document.getElementById("imc").style.color="red"

	}
	else {
	if (res >= 35 && res <= 40)
	{
		document.getElementById("imc").innerHTML="Obesidade grau 2"
		document.getElementById("imc").style.color="red"
	}
	else {
		if (res >= 41)
	{
		document.getElementById("imc").innerHTML="Obesidade grau 3"
		document.getElementById("imc").style.color="red"
	}
	else {
		if (res < 18)
	{
		document.getElementById("imc").innerHTML="Abaixo do peso"
		document.getElementById("imc").style.color="blue"
	}
	else {
		document.getElementById("imc").innerHTML="Por favor digite os dois valores!"
	}
	}
	}
	
	}
	}
	}
	/*mostra os resultados "inicio"*/
	document.getElementById("resultado").innerHTML = res
	/*mostra os resultados "fim"*/
}