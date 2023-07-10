// TS array functions
interface Product {
    id: number;
    name: string;
    price: number;
}

const products: Product[] = [
    { id: 1, name: 'Laptop', price: 1001 },
    { id: 2, name: 'Mouse', price: 20 },
    { id: 3, name: 'Keyboard', price: 50 },
    { id: 4, name: 'Monitor', price: 300 },
];

// forEach
//console.log('--- forEach ---');
products.forEach((product) => {
    //console.log(product.name);
});

// map
//console.log('--- map ---');
const productNames: string[] = products.map((product) => product.name);
// console.log(productNames);

// filter
//console.log('--- filter ---');
const cheapProducts: Product[] = products.filter((product) => product.price < 100);
//console.log(cheapProducts);

// find
//console.log('--- find ---');
const foundProduct: Product | undefined = products.find((product) => product.id === 3);
//console.log(foundProduct);
const laptop : Product | undefined = products.find(product => product.name === "Laptop")
// console.log(laptop)

// every
//console.log('--- every ---');
const allExpensive: boolean = products.every((product) => product.price > 50);
// console.log(allExpensive);

// some
//console.log('--- some ---');
const hasExpensiveProduct: boolean = products.some((product) => product.price > 1000);
// console.log(hasExpensiveProduct);

// reduce
//console.log('--- reduce ---');
const totalPrice: number = products.reduce((total, product) => total + product.price, 0);
// const total : number = products.reduce((total , product) => total + product.price , 0)
console.log(totalPrice);

// sort
//console.log('--- sort ---');
const sortedProducts: Product[] = products.sort((a, b) => a.price - b.price);
// console.log(sortedProducts);

// slice
//console.log('--- slice ---');
const slicedProducts: Product[] = products.slice(1, 3);
// console.log(slicedProducts);

// concat
//console.log('--- concat ---');
const additionalProducts: Product[] = [
    { id: 5, name: 'Headphones', price: 80 },
    { id: 6, name: 'Speaker', price: 120 },
];
const mergedProducts: Product[] = products.concat(additionalProducts);
// console.log(mergedProducts);




/// another array example in typescript 
interface Employee {
    id: number;
    name: string;
    age: number;
    department: string;
    salary: number;
}

const employeesList: Employee[] = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 5000 },
    { id: 2, name: 'Jane Smith', age: 35, department: 'HR', salary: 6000 },
    { id: 3, name: 'Mike Johnson', age: 40, department: 'Finance', salary: 7000 },
    { id: 4, name: 'Sarah Davis', age: 28, department: 'IT', salary: 5500 },
    { id: 5, name: 'David Wilson', age: 32, department: 'HR', salary: 6500 },
];

// forEach
//console.log('--- forEach ---');
employeesList.forEach((employee) => {
    //console.log(`${employee.name} (${employee.department})`);
});

// map
//console.log('--- map ---');
const employeeNames: string[] = employeesList.map((employee) => employee.name);
//console.log(employeeNames);

// filter
//console.log('--- filter ---');
const itDepartmentEmployees: Employee[] = employeesList.filter((employee) => employee.department === 'IT');
//console.log(itDepartmentEmployees);

// find
//console.log('--- find ---');
const foundEmployee: Employee | undefined = employeesList.find((employee) => employee.id === 3);
//console.log(foundEmployee);

// every
//console.log('--- every ---');
const allSalariesAbove5000: boolean = employeesList.every((employee) => employee.salary > 5000);
//console.log(allSalariesAbove5000);

// some
//console.log('--- some ---');
const hasEmployeeWithAgeAbove40: boolean = employeesList.some((employee) => employee.age > 40);
//console.log(hasEmployeeWithAgeAbove40);

// reduce
//console.log('--- reduce ---');
const totalSalary: number = employeesList.reduce((total, employee) => total + employee.salary, 0);
//console.log(totalSalary);

// sort
//console.log('--- sort ---');
const sortedBySalary: Employee[] = employeesList.sort((a, b) => a.salary - b.salary);
//console.log(sortedBySalary);

// slice
//console.log('--- slice ---');
const slicedEmployees: Employee[] = employeesList.slice(1, 4);
//console.log(slicedEmployees);

// concat
//console.log('--- concat ---');
const additionalEmployees: Employee[] = [
    { id: 6, name: 'Emily Jones', age: 33, department: 'Finance', salary: 6800 },
    { id: 7, name: 'Michael Brown', age: 38, department: 'IT', salary: 5200 },
];
const mergedEmployees: Employee[] = employeesList.concat(additionalEmployees);
  //console.log(mergedEmployees);
