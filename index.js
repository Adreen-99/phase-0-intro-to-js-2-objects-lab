const employee = {
    name: 'John Doe', 
    streetAdress: '4569 Main Street',
    emailAdress: 'johndoe@gmail.com'  
};

//Non-destructive 
function updateEmployeeWithKeyAndValue(employee, key, value){
    return {
        ...employee,
        [key]: value
    };
}

//Destructive
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key, value){
    employee[key] = value;
    return employee;
}

//Delete 
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee };
  delete newEmployee[key];
  return newEmployee;
}

//Destructive delete
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  delete employee[key];
  return employee;
}
