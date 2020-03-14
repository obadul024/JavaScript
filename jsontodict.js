var result = {
   'status': 'success',
   'employees' : [
      { 'id': 12, 'name': 'Tom', 'department': 'finance' },
      { 'id': 34, 'name': 'Dick', 'department': 'admin' },
      { 'id': 56, 'name': 'Harry', 'department': 'marketing' },
	  { 'id': 24, 'name': 'Jake', 'department': 'marketing' },
	  { 'id': 32, 'name': 'Pen', 'department': 'marketing' }
   ]
}

var employeesDict = {};

for (var i = 0, emp; i < result.employees.length; i++) {
   emp = result.employees[i];
   employeesDict[ emp.id ] = emp;
   employeesDict[emp.department] = 
   
}

console.log(employeesDict);       // logs "Harry"
// logs "marketing"









