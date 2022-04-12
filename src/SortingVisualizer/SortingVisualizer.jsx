import React from "react";
import {getMergeSortAnimations} from "../sortingAlgorithms/sortingAlgorithms.js";
import "./SortingVisualizer.css";

// change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// change this value for the number of bars (value) in the array.
const NUMBER_OF_ARRAY_BARS = 270;

// this is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// this is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
    // mounted function create to generete the array
    constructor(props) {
        super(props);

        this.state = {
            array: [],
        };
    }

    // when this component loads for the first time
    componentDidMount() {
        this.resetArray();
    }

    // this function is call to reset the array 
    resetArray() {
        const array = [];
        for (let i = 0; i < NUMBER_OF_ARRAY_BARS; i++) {
            array.push(randomIntFromInterval(5, 540));
        }
        this.setState({array});
    }

    mergeSort() {
        const animations = getMergeSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName("array-bar");
            const isColorChange = i % 3 !== 2;
            if (isColorChange) {
                const [barOneIdx, barTwoIdx] = animations[i];
                const barOneStyle = arrayBars[barOneIdx].style;
                const barTwoStyle = arrayBars[barTwoIdx].style;
                const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
                setTimeout(() => {
                    barOneStyle.backgroundColor = color;
                    barTwoStyle.backgroundColor = color;
                }, i * ANIMATION_SPEED_MS);
            } else {
                setTimeout(() => {
                    const [barOneIdx, newHeight] = animations[i];
                    const barOneStyle = arrayBars[barOneIdx].style;
                    barOneStyle.height = `${newHeight}px`;
                }, i * ANIMATION_SPEED_MS);
            }
        }
    }

    quickSort() {}

    heapSort() {}

    bubbleSort() {}

    testSortingAlgorithms() {
        for (let i = 0; i < 100; i++) {
            const array = [];
            const length = randomIntFromInterval(1, 1000);
            for (let i = 0; i < length; i++) {
                array.push(randomIntFromInterval(-1000, 1000));
            }
            const javaScriptSortedArray = array.slice().sort((a, b) => a - b); 
            const mergeSortedArray = getMergeSortAnimations(array.slice());
            console.log(arrayAreEqual(javaScriptSortedArray, mergeSortedArray));
        }
    }

    // this function is call to render the array
    render() {
        const {array} = this.state;

        return (
           <div className="array-container">
               {array.map((value, idx) => (
                   <div 
                        className="array-bar" 
                        key={idx}
                        style={{height: `${value}px`}}> 
                   </div>
               ))}
               <button onClick={() => this.resetArray()}>Gerar Nova Array</button>
               <button onClick={() => this.mergeSort()}>Merge Sort</button>
               <button onClick={() => this.quickSort()}>Quick Sort</button>
               <button onClick={() => this.heapSort()}>Heap Sort</button>
               <button onClick={() => this.bubbleSort()}>Bubble Sort</button>
               <button onClick={() => this.testSortingAlgorithms()}>Testing Sorting Algorithms</button>
           </div> 
        );
    }
}

// this function is call to generate random number inside the array
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
}

// check if both of the arrays sorted equaly
function arrayAreEqual(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false;
    for (let i = 0; i < arrayOne.length; i++) {
        if (arrayOne[i] !== arrayTwo[i]) return false;
    }
    return true;
}