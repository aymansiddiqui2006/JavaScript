let score=99
let put=false
let name=""
let place=null
// console.table([typeof(score),typeof(put),typeof(name),typeof(place)])

let play=""
let boolen=Boolean(play)
// console.log(boolen)

let name1="ayman"
let name2=" siddiqui"
// console.log(name1+name2)

// let n=100
// console.log(n)
// ++n;
// console.table(n)

if(1>2){
    // console.log("nums is greater")
}
else{
    // console.log("not")
}

let pl=(2**3)===(3**2)
// console.log(pl)

// for(let i=0;i<5;i++){
//     console.log(i);
// }

const num1=2
const num2=3
const num3=num1+num2
// console.log(`the sum of ${num1} and ${num2} is ${num3}`)

// const num=1009
// let num2=new Number (1009)
// console.log(num2)
// console.log(num2.toString().length)

// ***********maths***********

// const num=4.3
// console.log(-num)
// console.log(Math.abs(-num))
// console.log(Math.ceil(num))
// console.log(Math.round(num))
// console.log(Math.floor(num))

//*******date********

// const date=new Date()
// console.log(date)
// console.log(date.toString())
// console.log(date.toDateString())
// console.log(date.getDate())
// console.log(date.getFullYear())



//*****replace*****
let email="http//aymans@siddiqui.com"
// console.log(name)
// console.log(name.replace("@","_"))

// ******array*******
let array=[1,2,4,5,6]
// console.log(array)
array.push(5)
// console.log(array)
// console.log(array.length)
array.pop()
array.pop()
// console.log(array)
const newArray=array.join()
// console.log(newArray)

//******array 2*******

let hero=["spiderman", "iron mam" , "thor"];
let jk =["harry","harmini","ron"];
const new_hero=hero.concat(jk) // we can only add two arrays
// console.log(new_hero)
const spread=[...hero,...jk] //we can put many arrays in one
// console.log(spread)

// let array = [1,2,3,[5,6,[34,7,4,3],46,23,56],34,56,34] // looks vary messy
// console.log(array)
// const new_array=array.flat(1) // we will use flat by putting the number of aaray we need to remove
// console.log(new_array)

/* array.of to covert into array
array.from to make a word in array like- harry = h a r r y
arr.isarray to check it is array or  not */


//********object********
const student={
    name:"ayman",
    "fullname":"ayman siddiqui", // data is in string
    email:"aymansiddiqui@gmail.com",
    roll_no : 56,
    login:false

}

// console.log(student.name)
// console.log(student["fullname"]) // we need to declare that the data is string , we can not access it in (.)way
// Object.freeze(student) // no new change will happend 

// console.log("name ",student.name)
// console.log(`the name is ${student["fullname"]} and email is ${student.email} `)


//**********function********
function sum(num1 , num2){
    // console.log(num1+num2)
    return num1+num2
}

// sum(4,5)

// console.log(sum(1,2))

/******if else and switch******/
if(2<1){
    // console.log("true")
}
else{
    // console.log("false")
}

let num=5

switch(num){
    case 1:
        // console.log("1");
        break;
    case 2:
        // console.log("2");
        break;
        
    case 3:
        // console.log("3");
        break; 
     
    default:
        // console.log("wrong") ;
        break;   
}


/******loop *****/
for (let i = 0; i < 6; i++) {
    const element =i;
    // console.log(element)
    
}

/*******arrow function******/
const act=(actor) => (`actor is ${actor}`)
// console.log(act("salman"))

const acto=(actor) => {(`actor is ${actor}`)} // we can not run the object
// console.log(acto("salman"))



const num4=(num5,num6)=>({
    sum:num5+num6,
    mul:num5*num6
})
// console.log(num4(2,3))

const num7 =(num8,num9)=>{return num8+num9}
// console.log(num7(3,4))


/*****map*******/
const map=new Map()
    map.set("tv",10)
    map.set("AC",100)

// console.log(map)

// console.log(electronics)
for (const [key,value] of map) {
    // console.log(`the key is ${key} :- ${value}`);
}




