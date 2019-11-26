function getValue(total) {
	let words = total.innerHTML.split(' ')

	return parseInt(words[1])
}


function setValue(total, value) {
	total.innerHTML = 'Total: ' + value
}


function clear(number) {
	number.innerHTML = '0'
}



document.addEventListener('DOMContentLoaded', function() {
	let total = document.querySelector('.total')
	setValue(total, 0)

	let number = document.querySelector('.number')
	clear(number)

	let keys

	keys = document.querySelectorAll('.com')

	for(let key of keys) {
		key.addEventListener('click', function() {
			if(key.innerHTML == '-') {
				sub(total, parseInt(number.innerHTML))
				clear(number)
			}
			
			if(key.innerHTML == '+') {
				add(total, parseInt(number.innerHTML))
				clear(number)
			}
		})
	}
})
