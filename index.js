// THIS IS A FUNCTION
function mom(dad, bro){
  console.log('I love MOM ' + dad + ' ' + bro)
}
mom('DAD', 'BRO')
 
//STRING PRIMITIVE
//const message = 'this is my first message';

//STRING OBJECT
//const another = new String('hi')

//THIS IS TEMPLATE LITERALS
const message2 = 'this is my\n first meassage';
console.log(message2)
const another = `this is my 'first' message`
const name = 'Daniel';
const intro = `hi my name is ${name}, welcome to my program ${1*4} times winner in the academy`

//IF STATEMENT
let hour = 20
if(hour >= 6 && hour < 12){
console.log('good morning')
}else if(hour >= 12 && hour < 18){
  console.log('good afternoon');
}else {
console.log('good evening')
}
//objects in arrays
const pot = [{
  'protein': 3,
  'carbonhydrate':2
},
{
'fats': 2,
'oil': 4,
}]
console.log(pot[1])

//LOOPS
for (let i = 5; i >= 1; i--){
  console.log(i)
}

//VAR
function start(){
  for (let i = 0; i < 5; i++ ){
    console.log(i)
  }
}
start()

//THIS KEYWORD
const video = {
  title: 'a',
  play(){
    console.log(this)
  }
}
video.play()

//array.filter()
const numbers = [1, -1, 2, 3]
const filtered = numbers.filter(m => m >= 0)



console.log(filtered);
//array.map
/*
 pending
 */

//array.reduce
const numbers2 = [4, -4, 2, 3];
//let sum = 0
for(let n of numbers2)
  //sum += n
;
 

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(sum)