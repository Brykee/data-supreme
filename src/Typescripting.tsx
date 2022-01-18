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

  return (
    <div className="Script">
      <header className="Script-header">
        <a>Holy moly!</a>
      </header>
    </div>
  );
}

export default Typescripting;
