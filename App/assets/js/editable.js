let history = []


function add(total) {

	let prev = getValue(total)

	let curr = prev + 1

	setValue(total, curr)
}

function sub(total) {

	let prev = getValue(total)

	if(prev > 0) {

		let curr = prev - 1

		setValue(total, curr)

	}
}
function undo(total) {
	let prev = getValue(total)
	let curr = 0

    setValue(total, curr)
}



