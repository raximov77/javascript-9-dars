

/* 1 masalalar */

/* 1 */
/* let array = [55, 3, 2, 11, 3, 4, 6, 7, 12];
let orderArray = sortArray(array);

function sortArray(arr) {
    return arr.sort((first, second) => first - second);
}

console.log(orderArray); */

/* 2 */
/* let array = [23,43,56,87,12,65,87]
function rangeSum(arr, startIndex, endIndex){
    let sum = 0
  const res = arr.slice(startIndex, endIndex + 1 )
  res.forEach(value => sum += value)
  return sum
  }
  console.log(rangeSum(array, 2, 5)); */
  
/* 3 */
/* let array = [2, 4, 5, 6, 6, 3, 2, 1];
let soleArray = array.filter((item, index, self) => self.indexOf(item) == index);

console.log(soleArray);  */

/* 4 */
/* let array = [2, 4, 9, 15, 30, 45, 75, 99];
let { min, max } = findMinMax(array);

function findMinMax(arr) {
    return {
      min: Math.min(...arr),
      max: Math.max(...arr),
    };
  }
  
  console.log(`Eng kichik qiymat: ${min}`); 
  console.log(`Eng katta qiymat: ${max}`); 
   */

  /* 5 */
/*   let arr = [1, 5, 8, 9, 10];

  if (arr.length > 0) {
      let firstNumber = arr.shift();
      arr.push(firstNumber);         
  }
  
  console.log(arr); */
  

/* 6 */
/* let array = [7, 8, 12, 42, 50];
let reverseArr = reverseArray(array);

function reverseArray(arr) {
    return arr.reverse();
  }
  
  console.log(reverseArr);  */

/* 7 */
/* let array = [1,3,7,5, 50, 36, 66, 8, 35, 29, 94, 61];

function oddsNumber(arr) {
    let oddNumbers = arr.filter(num => num % 2 !== 0);

    console.log(`Toq sonlar: ${oddNumbers}`);
    console.log(`Toq sonlarning soni: ${oddNumbers.length}`);
  }
  
  oddsNumber(array); */

/* 8 */
/* let array = [1,9, 66, 91, 114, 79];

function oddIndex(arr) {
    let elementsAtOddIndices = arr.filter((_, index) => index % 2 !== 0);
    
    console.log(elementsAtOddIndices);
  }
  
  oddIndex(array); */

/* 9 */
/* let array = [2, 3, 4, 5, 7];
let oddMax = oddIndex(array);

function oddIndex(arr) {
    let max = -Infinity; 
  
    for (let i = 1; i < arr.length; i += 2) {  
      if (arr[i] > max) {
        max = arr[i];
      }
    }
  
    return max === -Infinity ? undefined : max;
  }
  
  console.log(`Toq indexlaridagi eng katta qiymat: ${oddMax}`); */

/* 10 */
/* let array = [23,43,56,87,12,65,11]
  
let min = array[0]
let max = array[0]
let res = array.filter((item, index) => {
    if(item <= min){
        min = item
    }
    else{
        max = item
    }
})
const minIndex = array.indexOf(min)
const maxIndex = array.indexOf(max)
console.log(min, max);
  
if (minIndex < maxIndex) {
    for (let i = minIndex + 1; i < maxIndex; i++) {
        array[i] = 0;
    }
} else {
    for (let i = maxIndex + 1; i < minIndex; i++) {
        array[i] = 0;
    }
} */

/* 11 */
/* let n = 15; 
let oddArr = oddNumbers(n);

function oddNumbers(n) {
    let oddNumbers = [];
    let current = 1;
  
    for (let _ of Array(n)) {
      oddNumbers.push(current);
      current += 2;
    }
  
    return oddNumbers;
  }
  
  console.log(oddArr);  */

/* 12 */
/* let array = [22, 3, 5, 6, 3, 2, 3];
let reversedArray = reverseArray(array);

function reverseArray(arr) {
    let reversed = [];
    
    for (let value of arr) {
      reversed.unshift(value);
    }
    
    return reversed;
  }
  
  console.log(reversedArray);  */

/* 13 */
/* let array = [1, 2, 2, 3, 4, 4, 5];
let filterArr = uniqueArray(array);

function uniqueArray(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) == index);
  }
  
  console.log(filterArr);  */

/* 14 */
/* let array = [1,7,22, 31, 57, 69,35];
let minIndex = minIndexValue(array);

function minIndexValue(arr) {
    let min = Infinity;
    
    for (let i = 0; i < arr.length; i += 2) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    
    return min === Infinity ? undefined : min;
  }
  
  console.log(`Juft indexlarning eng kichik qiymati: ${minIndex}`); */
  

/* 2-masala */
/* 1 */
/* let arrayList = [
  { id: 1, 
    name: 'Jahongir', 
    age: 20, 
    salary: 1000 
  },
  { id: 2, 
    name: 'Begzod', 
    age: 24, 
    salary: 3500 
  },
  { id: 3, 
    name: 'Farrux',
    age: 22, 
    salary: 4000 
  },
  { id: 4,
    name: 'Ozod',
    age: 18,
    salary: 580 
  }
];

function totalSalaryaArr(employees) {

    let salaries = [];
    let totalSalary = 0;

    for (let i = 0; i < employees.length; i++) {
        let salary = employees[i].salary;
        salaries.push(salary);
        totalSalary += salary;
    }

    return {
        salaries: salaries,
        totalSalary: totalSalary
    };
}

let result = totalSalaryaArr(arrayList);
console.log(result.salaries); 
console.log(result.totalSalary); 
 */

/* 2 */
/* let arrayList = [
  { id: 1, name: 'Jahongir', age: 20, salary: 1000 },
  { id: 2, name: 'Begzod', age: 24, salary: 3500 },
  { id: 3, name: 'Farrux', age: 22, salary: 4000 },
  { id: 4, name: 'Ozod', age: 18, salary: 580 }
];

function highSalaryArr(employees) {
    if (employees.length === 0) return 'Xodimlar mavjud emas'; 

    let highestSalaryEmployee = employees.reduce((max, employee) => {
        return (employee.salary > max.salary) ? employee : max;
    });

    return highestSalaryEmployee.name;
}

console.log(highSalaryArr(arrayList));  */

/* 3 */
/* let arrayList = [
  { id: 1, 
    name: 'Jahongir', 
    age: 20, 
    salary: 1000 
  },
  { id: 2, 
    name: 'Begzod', 
    age: 24, 
    salary: 3500 
  },
  { id: 3, 
    name: 'Farrux', 
    age: 22, 
    salary: 4000 
  },
  { id: 4, 
    name: 'Ozod', 
    age: 18, 
    salary: 580 }
];

function sortEmployees(employees, criterion) {
    let sortedArray = [...employees];

    sortedArray.sort((a, b) => {
        if (criterion === 'age' || criterion === 'salary') {
            return a[criterion] - b[criterion];
        } else if (criterion === 'name') {
            return a[criterion].localeCompare(b[criterion]);
        } else {
            throw new Error('Invalid criterion');
        }
    });

    console.log(sortedArray);
}

sortEmployees(arrayList, 'age'); 
sortEmployees(arrayList, 'salary');
sortEmployees(arrayList, 'name'); */

/* 4 */
/* let numbers = [43, 12, 76, 23, 97, 28, 11];

numbers.sort((a, b) => a - b);

console.log(numbers); */

/* 5 */
/* let numbers = [43, 12, 76, 23, 97, 28, 11];

let minNumber = Math.min(...numbers);

console.log(minNumber);  */

/* 6 */
/* function arrName() {
  let size = parseInt(prompt("Arrayning o'lchamini kiriting:"), 10);

  if (isNaN(size) || size <= 0) {
      console.log("Musbat son kiriting.");
      return [];
  }

  let employees = [];
  for (let i = 0; i < size; i++) {
      let name = prompt(`Xodim ${i + 1} ismini kiriting:`);
      let age = parseInt(prompt(`Xodim ${i + 1} yoshini kiriting:`), 10);
      let salary = parseFloat(prompt(`Xodim ${i + 1} maoshini kiriting:`));

      employees.push({ id: i + 1, name: name, age: age, salary: salary });
  }

  let namesArray = [];
  for (let i = 0; i < employees.length; i++) {
      namesArray.push(employees[i].name);
  }

  return namesArray;
}

let names = arrName();
console.log(names); */





  
  
  

  
