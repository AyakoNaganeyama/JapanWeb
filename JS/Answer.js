/* Function to compute the total score*/
function check() {
	/**
	 * @TODO: Seems like score is not being calculated
	 * Will need to go through this in next catchup
	 */

	let score = ''
	const Q1 = document.quiz.question1.value
	const Q2 = document.quiz.question2.value
	const Q3 = document.quiz.question3.value
	const Q4 = document.quiz.question4.value
	const Q5 = document.quiz.question5.value

	if (Q1.toLowerCase() === 'Henn na Hotel'.toLowerCase()) {
		// @TODO: '&#128150;' is being used more than once
		// You can store '&#128150;' as a variable and use it where you need
		score += '&#128150;'

		// @TODO: EndCheckCorrect and EndCheckIncorrect are used more than once
		// You can store it as a variable and use it where you need
		// @TODO: 'block' and 'none' are also used more than once, can be saved as a variable

		// heres an example of using variables in a string
		const endCheckCorrect = 'EndCheckCorrect'
		document.getElementById(`${endCheckCorrect}1`).style.display = 'block'
		document.getElementById('EndCheckIncorrect1').style.display = 'none'
	} else {
		document.getElementById('EndCheckIncorrect1').style.display = 'block'
		document.getElementById(`${endCheckCorrect}1`).style.display = 'none'
	}

	// Similar checks for other questions...

	if (Q2.toLowerCase() == 'Tokyo'.toLowerCase()) {
		score = score + '&#128150;'
		document.getElementById('EndCheckCorrect2').style.display = 'block'
		document.getElementById('EndCheckIncorrect2').style.display = 'none'
	} else {
		document.getElementById('EndCheckIncorrect2').style.display = 'block'
		document.getElementById('EndCheckCorrect2').style.display = 'none'
	}
	if (Q3.toLowerCase() == 'Phnom Penh'.toLowerCase()) {
		score = score + '&#128150;'
		document.getElementById('EndCheckCorrect3').style.display = 'block'
		document.getElementById('EndCheckIncorrect3').style.display = 'none'
	} else {
		document.getElementById('EndCheckIncorrect3').style.display = 'block'
		document.getElementById('EndCheckCorrect3').style.display = 'none'
	}
	if (Q4 == 'Omelette') {
		score = score + '&#128150;'
		document.getElementById('EndCheckCorrect4').style.display = 'block'
		document.getElementById('EndCheckIncorrect4').style.display = 'none'
	} else {
		document.getElementById('EndCheckIncorrect4').style.display = 'block'
		document.getElementById('EndCheckCorrect4').style.display = 'none'
	}
	if (Q5 == 'Siem Reap') {
		score = score + '&#128150;'
		document.getElementById('EndCheckCorrect5').style.display = 'block'
		document.getElementById('EndCheckIncorrect5').style.display = 'none'
	} else {
		document.getElementById('EndCheckIncorrect5').style.display = 'block'
		document.getElementById('EndCheckCorrect5').style.display = 'none'
	}

	document.getElementById('total').innerHTML = score
}

/*Function check1, check2...are for individual check answer to show emoji for fun*/
function check1() {
	/**
	 * @TODO: Doesn't look like Q2, Q3, Q4, Q5 are being used.
	 * Please look into this remove if not being used
	 */

	const score = ''
	const Q1 = document.quiz.question1.value
	const Q2 = document.quiz.question2.value
	const Q3 = document.quiz.question3.value
	const Q4 = document.quiz.question4.value
	const Q5 = document.quiz.question5.value

	if (Q1 == 'Henn na Hotel') {
		score = score + '&#128150;'
		document.getElementById('Correct1').style.display = 'block'
		document.getElementById('Incorrect1').style.display = 'none'
	} else {
		document.getElementById('Incorrect1').style.display = 'block'
		document.getElementById('Correct1').style.display = 'none'
	}
}

function check2() {
	const score = ''
	const Q2 = document.quiz.question2.value
	if (Q2.toLowerCase() == 'Tokyo'.toLowerCase()) {
		score = score + '&#128150;'
		document.getElementById('Correct2').style.display = 'block'
		document.getElementById('Incorrect2').style.display = 'none'
		document.getElementById('total').innerHTML = score
	} else {
		document.getElementById('Incorrect2').style.display = 'block'
		document.getElementById('Correct2').style.display = 'none'
	}
}
function check3() {
	const score = ''
	const Q3 = document.quiz.question3.value
	if (Q3.toLowerCase() == 'Phnom Penh'.toLowerCase()) {
		score = score + '&#128150;'
		document.getElementById('Correct3').style.display = 'block'
		document.getElementById('Incorrect3').style.display = 'none'
		document.getElementById('total').innerHTML = score
	} else {
		document.getElementById('Incorrect3').style.display = 'block'
		document.getElementById('Correct3').style.display = 'none'
	}
}

function check4() {
	const score = ''
	const Q4 = document.quiz.question4.value
	if (Q4 == 'Omelette') {
		score = score + '&#128150;'
		document.getElementById('Correct4').style.display = 'block'
		document.getElementById('Incorrect4').style.display = 'none'
		document.getElementById('total').innerHTML = score
	} else {
		document.getElementById('Incorrect4').style.display = 'block'
		document.getElementById('Correct4').style.display = 'none'
	}
}

function check5() {
	const score = ''
	const Q5 = document.quiz.question5.value
	if (Q5 == 'Siem Reap') {
		score = score + '&#128150;'
		document.getElementById('Correct5').style.display = 'block'
		document.getElementById('Incorrect5').style.display = 'none'
		document.getElementById('total').innerHTML = score
	} else {
		document.getElementById('Incorrect5').style.display = 'block'
		document.getElementById('Correct5').style.display = 'none'
	}
}
