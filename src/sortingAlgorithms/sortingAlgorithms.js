// this function is call to generate the sorting animation
export function getMergeSortAnimations(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();                                   // the slice() method returns selected 
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);// elementes in an array, as a new array.
    return animations;
}

// this function is called to help the mergeSort function
function mergeSortHelper(mainArray, startIdx, endIdx, auxiliaryArray, animations) {
    if (startIdx === endIdx) return;
    const middleIdx = Math.floor((startIdx + endIdx) / 2);                          // the math.floor() method rounds a
    mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);    // number downwards to the nearest
    mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);  // integer, and returns the result.
    doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations) {
    let k = startIdx;
    let i = startIdx;
    let j = middleIdx + 1;
    while (i <= middleIdx && j <= endIdx) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([i, j]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([i, j]);
        if (auxiliaryArray[i] <= auxiliaryArray[j]) {
            // We overwrite the value at index k in the original array with the
            // value at index i in the auxiçiary array.
            animations.push([k, auxiliaryArray[i]]);
            mainArray[k++] = auxiliaryArray[i++];
        } else {
            // We overwrite the value at index k in the original array with the
            // value at index j in the auxiliary array.
            animations.push([k, auxiliaryArray[j]]);
            mainArray[k++] = auxiliaryArray[j++];
        }
    }
    while (i <= middleIdx) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([i, i]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([i, i]);
        // We overwrite the value at index k in the original array with the
        // value at index i in the auxiliary array.
        animations.push([k, auxiliaryArray[i]]);
        mainArray[k++] = auxiliaryArray[i++];
    }
    while (j <= endIdx) {
        // These are the values that we're comparing; we push them once
        // to change their color.
        animations.push([j, j]);
        // These are the values that we're comparing; we push them a second
        // time to revert their color.
        animations.push([j, j]);
        // We overwrite the value at index k in the original array with the
        // value at index j in the auxiliary array.
        animations.push([k, auxiliaryArray[j]]);
        mainArray[k++] = auxiliaryArray[j++];
    }
}

//------------------------------------------------- QUICKSORT ----------------------------------------------------//
export function getQuickSortAnimations(array) {
	if (array.length <= 1) return array;
	doQuick(array, 0, array.length - 1);
	return array;
}

function swap(array, leftIdx, rightIdx) {
	var temp = array[leftIdx];
	array[leftIdx] = array[rightIdx];
	array[rightIdx] = temp;
}

function partition(array, left, right) {
	var pivot = array[Math.floor((right + left) / 2)];
	var i = left, j = right;
	while (i <= j) {
		while (array[i] < pivot) i++;
		while (array[j] > pivot) j--;
		if (i <= j) {
			swap(array, i, j);
			i++;
			j--;
		}
	}
	return i;
}
function doQuick(array, left, right) {
	var index;
	if (array.length > 1) {
		index = partition(array, left, right);
		if (left < index - 1) {
			doQuick(array, left, index - 1);
		}
		if (index < right) {
			doQuick(array, index, right);
		}
	}
	return array;
}

//------------------------------------------------- HEAPSORT ----------------------------------------------------//
export function getHeapSortAnimations(array) {

}
function doHeap() {

}

//------------------------------------------------- BUBBLESORT ----------------------------------------------------//
export function getBubbleSortAnimations(array) {
	const animations = [];
	if (array.length <= 1) return array;
	const auxiliaryArray = array.slice();
	doBubble(array.length, 0, auxiliaryArray, animations);
	return animations;
}
function doBubble(mainArray, startIdx, auxiliaryArray, animations) {
	
	for (let i = startIdx; i < mainArray - 1; i++) {
		for (let j = i + 1; j < mainArray; j++) {
			animations.push([i, j]);
			animations.push([i, j]);
			if (auxiliaryArray[i] > auxiliaryArray[j]) {
				animations.push(auxiliaryArray[j]);
			} else {
				animations.push(auxiliaryArray[i]);
			}
			
		}
	}
}





//---------------------------------------------------------------------------------------------------------------//
export const mergeSort = array => {
	if (array.length === 1) return array;
	const middleIdx = Math.floor(array.length/2);
	const firstHalf = mergeSort(array.slice(0, middleIdx));
	const secondHalf = mergeSort(array.slice(middleIdx));
	const sortedArray = [];
	let i = 0, j = 0;
	while (i < firstHalf.length && j < secondHalf.length) {
		if (firstHalf[i] < secondHalf[j]) {
			sortedArray.push(firstHalf[i++]);
		} else {
			sortedArray.push(secondHalf[j++]);
		}
	}
	while (i < firstHalf.length) sortedArray.push(firstHalf(i++));
	while (j < firstHalf.length) sortedArray.push(secondHalf(j++));
	return sortedArray;
};

export const quickSort = array => {

};

//working correct
export const bubbleSort = array => {
	if (array.length === 1) return array;
	var aux;
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = i + 1; j < array.length; j++) {
			if (array[i] > array[j]) {
				aux = array[i];
				array[i] = array[j];
				array[j] = aux;
			}
		}
	}
	return array;
};
