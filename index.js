function findMinAndRemove(array){
	let min = array[0];
	let idx;
	for (let i = 0; i < array.length; i++) {
		if (array[i] < min) {
			min = array[i];
			idx = i;
		}
	}
	array.splice(idx, 1);
	return min;
}

function selectionSort(array){
	const result = [];
	while (array.length != 0) {
		result.push(findMinAndRemove(array));
	}
	return result;
}
