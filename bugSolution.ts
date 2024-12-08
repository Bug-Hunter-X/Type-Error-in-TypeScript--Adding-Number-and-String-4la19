function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number, b: any): number {
  if (typeof b === 'number') {
    return a + b;
  } else {
    return a;
  }
}

const result1 = add(5, 10); // Correct
const result2 = addSafe(5, '10'); // Safe handling of potential type error
const result3 = addSafe(5,10); //Safe handling of numbers
console.log(result1,result2,result3); // Output: 15 5 15