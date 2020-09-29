// Индекс массы тела
// index = m / (h^2)

function index(m, h){
	const formula = (m/(Math.pow(h, 2)))
	console.log(formula)
	if (m == 420 && h == 420){
		return('Фотка Турика')
	} else if (formula <= 16){
		return('Выраженный дефицит массы тела')
	} else if (formula > 16 && formula <= 18.5) {
		return('Недостаточная (дефицит) масса тела')
	} else if (formula > 18.5 && formula <= 24.99){
		return('Норма')
	} else if (formula >= 25 && formula <= 30){
		return('Избыточная масса тела')
	} else if (formula > 30 && formula <= 35){
		return('Ожирение первой степени')
	} else if (formula > 35 && formula <= 40){
		return('Ожирение второй степени')
	} else if (formula > 40){
		return('Ожирение третьей степени')}
}

function check(){
	const inA = document.getElementById("kg").value
	const inB = document.getElementById("sm").value
	alert(index(inA, inB))
}





