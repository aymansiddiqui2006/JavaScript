const promise1= new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log(`promise is consumed`);
        resolve();
    },1000)
})

promise1.then(function(){
    console.log(`task done`);
})

new Promise(function(resolve, reject) {
    setTimeout(function(){
        console.log(`the promise permitted`);
        resolve();
    },1000)
    
}).then(function(){
    console.log(`done`)
})

const promise2= new Promise(function(resolve,reject){
    setTimeout(function () {
        resolve({username:'ayman' , branch:'CST'})
    },1000)
})
promise2.then(function(user){
    console.table(user);
})

new Promise((resolve, reject) => {
    setTimeout(()=>{
        const error=true;
        if(!error){
            resolve({username:'ayman'})
        }
        else{
            reject(`some error`)
        }
    },1000)
}).then((user)=>{
    console.log(user);
    return user.username;
}).then((username)=>{
    console.log(user);
}).catch(function (error) {
    console.log(error)
}).finally(()=>{
    console.log("the promise is either resolved or rejected ")
})

const promise5= new Promise(function(resolve, reject) {
    setTimeout(()=>{
        const error=true;
        if(!error){
            resolve({username:'ayman'})
        }
        else{
            reject(`some went wrong`)
        }
    },1000)
});

async function pro() {
    try {
        const response=await promise5
        console.log(response)
    } catch (error) {
        console.log(error);
    }
}
pro()
