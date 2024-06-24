// Functions
function FunctionName(variable) {
    console.log('Hey,1');
    console.log('Hi there ,2');
    console.log('Last ,3');
}
function sum(num1, num2) {
    return num1 + num2;
}
// FunctionName('fkfdf'); 
// console.log(sum(4,6));

function is_adult(age) {
    if (age > 20) {
        console.log('Adult');
    }
    else if (age > 10) {
        console.log('Teenager');
    }
    else {
        console.log('Child');
    }
}
// in  javascript '==' it is loose operator and '===' is strict operator
function is_adult(age, gender) {
    if (age > 20 && gender === 'female') {
        console.log('Female Adult');
    }
    else if (age > 20 && gender === 'male') {
        console.log('male adult');
    }
    else {
        console.log('teenager');
    }
}
// is_adult(21,'female');

// For loop
// for(let i = 0;i<10;i++){
//     console.log(i);
// }

// let people = ['Ritesh','Rahul','Ravi','Akshay','Ashish'];
// for(let i =0 ;i<people.length;i++){
//     console.log(people[i]);
// }

let scores = [
    { 'name': 'James', 'score': 90 },
    { 'name': 'Victoria', 'score': 85 },
    { 'name': 'Alex', 'score': 70 },
    { 'name': 'Emily', 'score': 50 },
    { 'name': 'Amanda', 'score': 68 },
    { 'name': 'Josh', 'score': 30 }
]
for(let i =0 ;i<scores.length;i++){
    if(scores[i]['score']>60){
        console.log(scores[i]['name']);
    }
}
