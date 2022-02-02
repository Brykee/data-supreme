import './App.css';
// type Employee = {
//   name: string;
//   age: number;
//   code?: number;
// };
function Typescripting() {
  //   let employee = {};
  //   employee.code = 10;
  //   employee.name = 'John';

  // let employee: Employee = {
  //   name: 'John',
  //   age: 4,
  // };
  // console.log(employee);

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
  // let myWorstDays: string[] = ['Thursday', 'Friday'];
  // console.log(list[0])

  //Tuple:
  // to use when we know exactly how many types we want to allow in an array.

  // let contact: [string, number] = ['utbry@email.com', 6150490034];

  // var empId: number = 1;
  // var empName: string = "Steve";

  // Tuple type variable
  // var employee: [number, string] = [1, "Steve"];

  // Tuple Array:
  // var employee: [number, string] = [1, "Steve"];
  // employee[0]; // returns 1
  // employee[1]; // returns "Steve"

  //Enum
  // makes it easier to handle named sets of constants.

  //   enum Color {
  //     Red = 1,
  //     Green,
  //     Blue,
  //   }
  //   let colorName: string = Color[2];

  //    Displays 'Green'
  //   console.log(colorName);

  //   Any
  // The convenience of any comes at the cost of losing type safety. Type safety is one of the main motivations for using TypeScript and you should
  // try to avoid using any when not necessary.

  //   let anyValue: any = 'whatever';
  //   anyValue.do.something.stupid();

  // Void
  // Use the void type as the return type of functions that do not return any value.

  //   function log(message): void {
  //     console.log(messsage);
  // }

  // Uwnknown
  //forces you to determine what a variable typed as unknown is
  // const x: unknown = 1;

  // if(typeof x === "number") {
  //   console.log(x * x);
  // }

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

  //   var a: = "some text";
  //   var b = 123;
  //   a = b;
  // Compiler Error: Type 'number' is not assignable to type 'string'

  // Type Casting
  // Example:
  // To assign the length of a string stored in a variable declared as 'any' to a variable declared as 'number'.

  // let helloWorld: any = "Hello world!";

  // let strLength: number = (<string>helloWorld).length;
  // or
  // let helloWorld: any = "Hello world!";

  // let strLength: number = (helloWorld as string).length;

  // let vs. var

  // calling var z before definition will return undefined
  // document.write(z, "\n");
  // var z = 2;

  // calling let a before definition will give error
  // document.write(a);
  // let a = 3;

  // - let variables cannot be read or written to before they are declared.

  // - let variables cannot be re-declared

  // Const

  // same scoping rules as let, the difference is that a const value cannot be changed.

  // const num:number;
  // Compiler Error: const declaration must be initialized
  // num = 100;

  // //  Destructuring & Spread  // //

  // Array Destructuring

  // let students: string[] = ['Ben', 'Reba'];
  // let [first, second, third = 'Logan'] = students;

  // let ages: number[] = [22, 44, 77];
  // let [prettyCool, eh, woah] = ages;

  // console.log(first); // 'Ben'
  // console.log(second); // 'Reba'
  // console.log(third); // 'Logan'

  //   How to swap two variables without using a third one.
  //   var x = 1, y = 2;
  //   [x, y] = [y, x];
  //   console.log(x, y); // 2,1

  // Spread:

  // let first = [1, 2];
  // let second = [3, 4];
  // let bothPlus = [0, ...first, ...second, 5];

  // Object Destructuring:

  // API response
  // {
  //    gender: 'male',
  //    age: 25
  // }

  //destructured
  // const { gender, age }: { gender: string; age: number } = response;

  // or

  // interface Person {
  //     gender: string
  //     age: number
  //   }
  //   const { gender, age }: Person = response;
  //   const person: Person = response; // person.gender, person.age

  // Property Renaming:

  // interface SmallPerson {
  //   name: string;
  //   age: number;
  //   height: string;
  // }

  // const personObject: SmallPerson = {
  //   age: 29,
  //   height: "4'5",
  //   name: 'Frank',
  // };

  // const { name: personName, age: personAge } = personObject;

  // console.log(personAge);

  // Default Values
  //if you dont pass a discount argument you get the default.

  // function applyDiscount(price: number, discount: number = 0.05) {
  //   return price * (1 - discount);
  // }

  // console.log(applyDiscount(100));

  // // Classes in TypeScript // //

  // class Person {
  //   age: number;
  //   instantiatedAt = new Date();
  //   static humanity: boolean = true;

  //   constructor(name: string, age: number) {
  //     console.log(`Constructor called with name = ${name}`);
  //     this.age = age;
  //   }
  // }

  // const personInstance = new Person('Adam', 25);

  // console.log(personInstance);
  // //visible on the class rather than the instance
  // console.log(Person.humanity);

  // Abstract classes
  // mainly for inheritance where other classes may derive from them. You cannot create an instance of an abstract class.

  // abstract class Person {
  //   name: string;

  //   constructor(name: string) {
  //     this.name = name;
  //   }

  //   display(): void {
  //     console.log(this.name);
  //   }

  //   abstract find(name: string): Person;
  // }

  // class Employee extends Person {
  //   empCode: number;

  //   constructor(name: string, code: number) {
  //     super(name); // must call super()
  //     this.empCode = code;
  //   }

  //   find(name: string): Person {
  //     // execute AJAX request to find an employee from a db
  //     return new Employee(name, 1);
  //   }
  // }

  // let emp: Person = new Employee('James', 100);
  // emp.display(); //James

  // let emp2: Person = emp.find('Steve');

  return (
    <div className="Script">
      <header className="Script-header">
        <a>Holy moly!</a>
      </header>
    </div>
  );
}

export default Typescripting;
