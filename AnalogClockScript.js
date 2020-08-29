setInterval(setClock, 1000) /* setInterval(function,int) calls the function every int in milliseconds*/

const hourHand = document.querySelector('[hour]')
const minuteHand = document.querySelector('[minute]')
const secondHand = document.querySelector('[second]')

function setClock() {
	const currentDate = new Date() //new Date() gives current date
	const secondsRatio = currentDate.getSeconds() / 60 // Date() has .getSeconds/Minutes/Hours function */
	const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60 //secondsRatio allows hand to gradually move
	const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
	setRotation(secondHand, secondsRatio)
	setRotation(minuteHand, minutesRatio)
	setRotation(hourHand, hoursRatio)
}

function setRotation(hand, ratio) {
	hand.style.setProperty('--rotation', ratio * 360)
}

setClock() //calls the function
