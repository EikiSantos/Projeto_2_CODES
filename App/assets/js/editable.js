let history = []


function add(total, number) {
	history.push(number)

	let prev = getValue(total)

	let curr = prev + 1

	setValue(total, curr)
}

function sub(total, number) {

	history.push(number)

	let prev = getValue(total)

	if(prev > 0) {

		let curr = prev - 1

		setValue(total, curr)

	}
}

