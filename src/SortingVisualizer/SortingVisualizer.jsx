import React from "react";
import "./SortingVisualizer.css";

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
        for (let i = 0; i < 270; i++) {
            array.push(randomIntFromInterval(5, 540));
        }
        this.setState({array});
    }

    mergeSort() {}

    quickSort() {}

    heapSort() {}

    bubbleSort() {}

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
           </div> 
        );
    }
}

// this function is call to generate random number inside the array
function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min); 
}