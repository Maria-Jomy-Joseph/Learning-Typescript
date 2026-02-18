//infer_types
var userName = "John Doe"; // TypeScript infers the type as string
var userAge = 30; // TypeScript infers the type as number
//explicit_types
var userEmail = "john.doe@example.com";
var isActive = true;
var skills = ["JS", "TS", "React"]; // TypeScript infers the type as string[]
var count = [1, 2, 3, 4, 5]; // TypeScript infers the type as number[]
var emptyArray = []; // TypeScript infers the type as never[] (an array that can never have any elements)
var userDetails = { name: "John", age: 30 }; //object
