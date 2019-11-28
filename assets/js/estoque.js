function getValue(total) {
	let words = total.innerHTML.split(' ')

	return parseInt(words[1])
}


function setValue(total, value) {
	total.innerHTML = ' ' + value
}


function clear(total) {
	total.innerHTML = '0'
}



document.addEventListener('DOMContentLoaded', function() {
	let total = document.querySelector('.total')
	setValue(total, 3)

	let keys

	keys = document.querySelectorAll('.com')

	for(let key of keys) {
		key.addEventListener('click', function() {
			if(key.innerHTML == '-') {
				sub(total)
			}

			if(key.innerHTML == '+') {
				add(total)	
			}
			if(key.innerHTML == 'C') {
				clear (total)
			}
		})
	}
})
