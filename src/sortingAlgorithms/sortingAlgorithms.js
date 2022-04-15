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

export function getQuickSortAnimation(array) {

}
function doQuick() {

}

export function getHeapSortAnimation(array) {

}
function doHeap() {

}

export function getBubbleSortAnimation(array) {

}
function doBubble() {

}
/*
array = {30 20 10 50 22 33 55}
getMergeSortAnimation(array)
	animation = []
	auxiliaryArray = copy of array
	mergeSortHelper(array, 0, 6, auxiliaryArray, [])

mergeSortHelper(array, 0, 6, auxiliaryArray, [])
	OBS.: mainArray = array
		startIdx = 0
		endIdx = 6
		auxiliaryArray = auxiliaryArray
		animations = []
	if(0 === 6) return.....0 !== 6
	middleIdx = 3
	mergeSortHelper(auxiliaryArray, 0, 3, array, []) {----------------------------------------------------------------------------------
		if(0 === 3) return...0 !== 3
		middleIdx = 1
		mergeSortHelper(auxiliaryArray, 0, 1, array, []) {0000000000000000000000000000000000000000000000000000000000000000000000000000
			if(0 === 1) return...0 !== 1
			middleIdx = 0
			mergeSortHelper(auxiliaryArray, 0, 0, array, [])aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
				if(0 === 0) return 0
			mergeSortHelper(auxiliaryArray, 1, 1, array, [])aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
				if(1 === 1) return 0
			doMerge(array, 0, 0, 1, auxiliarArray, []) {
				k = 0
				i = 0
				j = 1
				while(0 <= 1 && 1 <= 1) {
					[].push([0, 1])
					[].push([0, 1])
					if(30 <= 20)....
					else {
						[].push(30, auxiliaryArray[1])
					{	
				}
			}
		}
		mergeSortHelper(auxiliaryArray, 2, 3, array, []) {00000000000000000000000000000000000000000000000000000000000000000000000000000
			if(2 === 3) return...2 !== 3
			middleIdx = 2
			mergeSortHelper(auxiliaryArray, 2, 2, array, [])lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
				if(2 === 2) return 0
			mergeSortHelper(auxiliaryArray, 3, 3, array, [])lllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllllll
				if(3 === 3) return 0
			doMerge()
		}
		doMerge()
	}
	mergeSortHelper(auxiliaryArray, 4, 6, array, []) {----------------------------------------------------------------------------
		if(4 === 6) return...4 !== 6
		middleIdx = 5
		mergeSortHelper(auxiliaryArray, 4, 5, array, []) {uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu
			if(4 === 5) return...4 !== 5
			middleIdx = 4
			mergeSortHelper(auxiliaryArray, 4, 4, array, [])ppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
				if(4 === 4) return 0
			mergeSortHelper(auxiliaryArray, 5, 5, array, [])pppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppppp
				if(5 === 5) return 0
			doMerge()
		}
		mergeSortHelper(auxiliaryArray, 6, 6, array, [])uuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuuu
			if (6 === 6) return 0
	}
	doMerge()
*/
