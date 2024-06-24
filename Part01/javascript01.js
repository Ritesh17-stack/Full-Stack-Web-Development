//this is how we print
console.log('hello.world!!');
// Variables
let num = 20;
console.log(num);
num = 100;
// String can be insitialzed
let string = 'this is a message';
console.log(string);     
// concatenation of string
let first = 'Ritesh';
let last = 'Parvat';
let fullName = first+" "+last;
console.log(fullName);
console.log(fullName+num)
// We can create ititialize variable name with "_". cannot start variable name with number
let _hello;
// Lists
let a_list = [];
let b_list = [1,2,3,'hello']; //zero based 
console.log(b_list[2]);
        //push method
console.log(a_list.push(5));
        // length method
console.log(b_list.length); 
// Objects in js(Similar to dictionary in python)
let a_obj={};
let b_obj={'name':'Ritesh','age':21};
console.log(b_obj);
console.log(b_obj['name']);
console.log(b_obj['age']);
// adding new key
b_obj['height']='165cm';
console.log(b_obj);
// Combining list and object
let names =[{name:'Ritesh',age:21},{name:'Ravi',age:38}];
console.log(names);
console.log(names[0]);
console.log(names[0]['name']);
        // push
let new_name = {'name':'John','age':31};
names.push(new_name);

// String methods
let str = "Ritesh";
console.log(str.toUpperCase());
console.log(str.toLowerCase());
let my_email = 'ritesh@gmail.com';
let result = my_email.split('@'); //split method will split the string in two halves along (@)
console.log(result);
result2 = result[1].split('.');
console.log(result2);
let result3 = result.join('@'); //Join mrthod will add the character between the spaces
console.log(result3);
