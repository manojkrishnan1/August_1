let arr = [
  { id: 1, name: 'john', age: 18, profession: 'developer' },
  { id: 2, name: 'jack', age: 20, profession: 'developer' },
  { id: 3, name: 'karen', age: 19, profession: 'admin' },
];

// Don't worry about consoling these functions, they are already being called on the button clicks.
// Please don't change anything in the index.html file.

function PrintDeveloper() {
  //Write your code here , just console.log
  console.log('All the employees who are developers:')
  arr.forEach((element)=>{
    if(element.profession == 'developer')
    console.log(element);
  })
}

function addData() {
  //Write your code here, just console.log
  let susan = {id:4,name:"susan",age:20,profession:"intern"};
  arr.push(susan);
  console.log('New employee ',susan.name,' is appended to the employee list. New list:');
  consoleArr();
}

function removeAdmin() {
  //Write your code here, just console.log
  arr = arr.filter((element)=>{
    return element.profession != 'admin';
  })
  console.log('The employee whose profession was admin was removed from the employee list. New List:')
  consoleArr();
}

function concatenateArray() {
  //Write your code here, just console.log
  let executives = [
    { id: 1001, name: 'Michael', age: 35, profession: 'Chief of Operations' },
    { id: 1002, name: 'Jim', age: 36, profession: 'Chief Technical Officer' },
    { id: 1003, name: 'David', age: 38, profession: 'Chief Executive Officer' },
  ];
  arr = arr.concat(executives);
  console.log('An array of Executives were concatenated to the original array')
  consoleArr();
}

// Here is an example of how functions work,
// basically a function is a block of code which can directly access your 'arr' variable since arr is global.
// If I have a function called consoleArr(), that can directly access arr like this to console it.

function consoleArr() {
  // console.log('Consoling Array Variable', arr);
  // Over here I can directly access the variable.
  arr.forEach((element)=>{
    console.log(element)
  })
}
