import './App.css';

function Typescripting() {
  //   let employee = {};
  //   employee.code = 10;
  //   employee.name = 'John';

  //   let employee = {
  //     code: 10,
  //     name: 'John',
  //   };
  //   console.log(employee);

  //   Basic Data Types
  // let isDone: boolean = false;

  //   let decimal: number = 6;
  //   let hex: number = 0xf00d;
  //   let binary: number = 0b1010;
  //   let octal: number = 0o744;
  //   let oneHundred: bigint = BigInt(100);

  //   let color: string = "blue";

  // Arrays:
  // let list: number[] = [1, 2, 3];

  //Tuple:
  // var empId: number = 1;
  // var empName: string = "Steve";

  // Tuple type variable
  // var employee: [number, string] = [1, "Steve"];

  // Tuple Array:
  // var employee: [number, string] = [1, "Steve"];
  // employee[0]; // returns 1
  // employee[1]; // returns "Steve"

  //Enum

  //   enum Color {
  //     Red = 1,
  //     Green,
  //     Blue,
  //   }
  //   let colorName: string = Color[2];

  //    Displays 'Green'
  //   console.log(colorName);

  //   Any
  // The convenience of any comes at the cost of losing type safety. Type safety is one of the main motivations for using TypeScript and you should try to avoid using any when not necessary.

  //   let anyValue: any = 'whatever';
  //   anyValue.do.something.stupid();

  // Uwnknown
  //   let unknownValue: unknown = 'uhhhhhh';
  //   unknownValue.do.something.stupid();

  // Null and Undefined
  // With strictNullChecks off, values that might be null or undefined can still be accessed normally.

  // With strictNullChecks on, when a value is null or undefined, you will need to test for those values before using methods or properties on that value.

  // function doSomething(x: string | null) {
  //     if (x === null) {
  //       // do nothing
  //     } else {
  //       console.log("Hello, " + x.toUpperCase());
  //     }
  //   }

  // Type Inference

  //   var a = "some text";
  //   var b = 123;
  //   a = b;
  // Compiler Error: Type 'number' is not assignable to type 'string'

  // Type Casting
  // Example:
  // To assign the length of a string stored in a variable declared as 'any' to a variable declared as 'number'.

  // let helloWorld: any = "Hello world!";

  // let strLength: number = (<string>helloWorld).length;

  // let helloWorld: any = "Hello world!";

  // let strLength: number = (helloWorld as string).length;

  // let vs. var

  // let is Block scoped
  // let num1:number = 1;

  // if (num2 > num1) {
  //     let num3: number = 3;
  //     num3++;
  // }

  // - let variables cannot be read or written to before they are declared.

  // - let variables cannot be re-declared

  // Const

  // same scoping rules as let, the difference is that a const value cannot be changed.

  // const num:number;
  // Compiler Error: const declaration must be initialized
  // num = 100;

  // //  Destructuring & Spread  // //

  // Array Destructuring

  //   let students = ['Ben', 'Reba'];
  //   let [first, second, third = 'Logan'] = students;

  //   console.log(first); // 'Ben'
  //   console.log(second); // 'Reba'
  //   console.log(third); // 'Logan'

  //   How to swap two variables without using a third one.
  //   var x = 1, y = 2;
  //   [x, y] = [y, x];
  //   console.log(x, y); // 2,1

  // Object Destructuring

  // API response
  // {
  //    gender: 'male',
  //    age: 6
  // }

  // interface Person {
  //     gender: string
  //     age: number
  //   }
  //   const { gender, age }: Person = response;
  //   const person: Person = response; // person.gender, person.age

  // Property Renaming

  return (
    <div className="Script">
      <header className="Script-header">
        <a>Holy moly!</a>
      </header>
    </div>
  );
}

export default Typescripting;
