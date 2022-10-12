// Your code here.
/*
getFirstName

parameters: person object
person = {
firstName: string
lastName: string
}
return firtName property (string)

*/
//Getter function - gets a value from an object
//does not modify the object
//getPropertyName()


// getFirstName

function getFirstName(person){
  return person.firstName;
}
console.log(getFirstName({firstName: 'Colin', lastName: 'Jaffe'}))
console.log(getFirstName({firstName: 'Petra', lastName: 'Solano'}))



/*

*/

// getLastName

let person1 = {firstName: 'Colin', lastName: 'Jaffe'}

let person2 = {firstName: 'Petra', lastName: 'Solano'}

function getLastName(person){
  return person.lastName
}
console.log(getLastName(person1));
console.log(getLastName(person2));


// getFullName

function getFullName(person){
  return person.firstName + " " + person.lastName;

}

console.log(getFullName(person1));
console.log(getFullName(person2));

// Setter function
/*
parameters: person object, newFirstName string
*/
// setFirstName

// Pass by Reference!
function setFirstName(person,newFirstName){
  person.firstName = newFirstName;
  }

  setFirstName(person1,'Jean');
  console.log(person1);

  person1 = {firstName: 'Colin', lastName: 'Jaffe', age: 39}

  person2 = {firstName: 'Petra', lastName: 'Solano', age: 29}

  person3 = {firstName: 'Claude', lastName: 'Soileau' }


  // setAge

  function setAge(person, newAge){
    person.age = newAge;

}

setAge(person1, 45)
console.log(person1)


// giveBirthday

/*
person object
{
  firstName:
  lastName:
  age:

}
*/

function giveBirthday(person){
  if(person.age === undefined){
    person.age = 1
  }else if(person.age !== undefined){person.age += 1}

}
giveBirthday(person3)
console.log(person3)


// marry

person1 = {firstName: 'Colin', lastName: 'Jaffe', age: 39, married: false}

person2 = {firstName: 'Petra', lastName: 'Solano', age: 29, married: false}

function marry(person1,person2){
  person1.married = true
  person2.married = true
  person1.spouseName = person2.firstName + ' ' + person2.lastName
  person2.spouseName = person1.firstName + ' ' + person1.lastName
}

marry(person1,person2)
console.log(person1,person2)

//divorce


function divorce(person1,person2){
  person1.married = false;
  person2.married = false;
  delete person1.spouseName 
  delete person2.spouseName 
}

divorce(person1,person2)
console.log(person1,person2)





















// Our code here. Don't touch!
if (typeof getFirstName === 'undefined') {
  getFirstName = undefined
}

if (typeof getLastName === 'undefined') {
  getLastName = undefined
}

if (typeof getFullName === 'undefined') {
  getFullName = undefined
}

if (typeof setFirstName === 'undefined') {
  setFirstName = undefined
}

if (typeof setAge === 'undefined') {
  setAge = undefined
}

if (typeof giveBirthday === 'undefined') {
  giveBirthday = undefined
}

if (typeof marry === 'undefined') {
  marry = undefined
}

if (typeof divorce === 'undefined') {
  divorce = undefined
}


module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
}
