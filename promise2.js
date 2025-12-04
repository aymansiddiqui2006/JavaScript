// const pro = new Promise((resolve, reject) => {
//     const num = Math.random();
//     if (num < 0) {
//         reject("the number is negetive")
//     }
//     setInterval(() => {
//         console.log('resolved');
//         resolve()
//     }, 2000)
// })
const pro2 = new Promise((resolve, reject) => {
    setInterval(() => {
        const num = Math.random()*10;
        if (num < 9) {
            reject(num)
        }
        else {
            console.log(`resolved ${num}`);
            resolve(num)
        }
    }, 1000);
})

.then((e)=>{
    console.log(`resolved the number ${e}`);
    
}).catch ((e)=>{
    console.log(`nagetive num ${e}`);
    
})
