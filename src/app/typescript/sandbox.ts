let a: number;
let b: string;
let c: boolean;
let d: any;
let e: number[];
let f: any[];


enum Color { Red = 0, Green = 1, Blue = 2};
let backgroundColor = Color.Blue;


// Type Assertions
// To get prompts with a list of methods, you need to set the variable type next to it.
let userName = (<string>message).lastIndexOf('Mr');
let name = (message as string).indexOf('Mr');


// Arrow functions
let log = (message) => console.log(message);
let sayHi = () => console.log('Hello world!');

// Inline Annotation
let drawPoint = ( point:{x: number, y: number }) => {
  //
};

// Interfaces - Allows to use the same annotation in few places
interface Point {
    x: number,
    y: number
}

let drawPoint = (point: Point) => {

};
