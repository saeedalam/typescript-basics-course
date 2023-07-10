interface Employee {
    id: number;
    name: string;
    age: number;
    department: 'IT' | 'HR' | 'Finance';
    salary: number;
  }
  
  type EmployeeFilter = (employee: Employee) => boolean;
  
  function calculateTotalSalary(employees: Employee[]): number {
    return employees.reduce((total, employee) => total + employee.salary, 0);
  }
  
  function filterEmployees(employees: Employee[], ...filters: EmployeeFilter[]): Employee[] {
    return employees.filter((employee) => filters.every((filter) => filter(employee)));
  }
  
  function getITEmployeesAbove30WithHighSalary(employees: Employee[]): Employee[] {
    return filterEmployees(
      employees,
      (employee) => employee.department === 'IT',
      (employee) => employee.age > 30,
      (employee) => employee.salary > 5000
    );
  }
  
  function calculateSalaryInfo(employees: Employee[]): { totalSalary: number; averageSalary: number; count: number } {
    const filteredEmployees = getITEmployeesAbove30WithHighSalary(employees);
    const totalSalary = calculateTotalSalary(filteredEmployees);
    const averageSalary = totalSalary / filteredEmployees.length;
    const count = filteredEmployees.length;
    return { totalSalary, averageSalary, count };
  }
  
  // Usage example
  const employees: Employee[] = [
    { id: 1, name: 'John Doe', age: 32, department: 'IT', salary: 6000 },
    { id: 2, name: 'Jane Smith', age: 28, department: 'HR', salary: 4500 },
    { id: 3, name: 'Mike Johnson', age: 35, department: 'IT', salary: 5500 },
    { id: 4, name: 'Sarah Davis', age: 33, department: 'IT', salary: 7000 },
    { id: 5, name: 'David Wilson', age: 40, department: 'Finance', salary: 8000 },
  ];
  
  const salaryInfo = calculateSalaryInfo(employees);
  console.log(salaryInfo);
  