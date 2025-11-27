function user(name,age,branch){
    this.name=name;
    this.age=age;
    this.branch=branch;

    return this; // not imp this is default
}

const user1= new user("ayman" , 19, "CST");
console.log(user1)

const user2= new user("prachi" , 20 , "CST");
console.log(user2)

const user3= new user("paridhi" , 19, "CST");
console.log(user3)

