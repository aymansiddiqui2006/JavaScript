function user(name){
    this.name=name
    
}

function mem(name,branch , roll_no){
    user.call(this,name);
    this.branch=branch
    this.roll_no=roll_no
}

const mem1=new mem("ayman","cst",57)
console.log(mem1)

