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
let message;
let userName = (<string>message).lastIndexOf('Mr');
let userParams = (message as string).indexOf('Mr');


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

let getPoint = (point: Point) => {

};

// Classes
class PointClass {
    // Access modifiers: public, private, protected
    // private - access modifier that doesn't allows to change variable from outside the class
    // ? after the initial variable tell to compiler that this is optional parameter
    constructor(private _x?: number, private _y?: number) {

    }

    draw() {
        console.log('x: ' + this._x + ', y: ' + this._y);
    }

    // X Propertie - Getter
    get x() {
        return this._x;
    }

    // Y Propertie - Setter
    set x(value) {
        if (value < 0) {
            throw new Error('value cannot be less than 0.');
        }
    }
}

let point = new PointClass(1, 2);
point.x = 20;
point.draw();

