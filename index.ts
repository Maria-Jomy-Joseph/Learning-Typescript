//infer_types
let userName = "John Doe"; // TypeScript infers the type as string
let userAge = 3_0; // TypeScript infers the type as number

//explicit_types
let userEmail: string = "john.doe@example.com";
let isActive: boolean = true;
let skills: string[] = ["JS", "TS", "React"]; // TypeScript infers the type as string[]
let count: number[] = [1, 2, 3, 4, 5]; // TypeScript infers the type as number[]
let emptyArray: [] = []; // TypeScript infers the type as never[] (an array that can never have any elements)
let userDetails: { name: string; age: number } = { name: "John", age: 30 }; //object


//interface
let adminDetails: { name: string; age: number } = { name: "John", age: 30 };
//using same object structure as userDetails, we can reuse the type definition
interface Details {
  name: string;
  age: number;
  getname: () => void;
}

//let userDetails2: Details = { name: "John", age: 30 };
let adminDetails2: Details = { name: "John", age: 30, getname() { console.log("John"); } };


//Type
type Details2 = {
    name: string;   
    age: number;
    getname: () => void;
}

let adminDetails3: Details2 = { name: "John", age: 30, getname() { console.log("John"); } };


//Union/Optional
type Details3 = {
    name: string;   
    age: number | string; // age can be either a number or a string
    getname: () => void;
}

let adminDetails4: Details3 = { name: "John", age: "30", getname() { console.log("John"); } }; // here the age can be string as well

let skillList: (string | number)[]  = ["JS", "TS", "React", 4]; // skillList can be either an array of strings or number

//myArray?.map()
type Details4 = {
    name: string;   
    age: number | string; // age can be either a number or a string
    getname?: () => void; //Now this function is optional, it may or may not be present in the object
}



let adminDetails5: Details4 = { name: "John", age: "30" }; // here the age can be string as well
