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
        const num = Math.random();
        if (num < 0.5) {
            reject()
        }
        else {
            console.log(`resolved ${num}`);
            resolve()
        }
    }, 1000);
})

.then(()=>{
    console.log("resolved the number");
    
}).catch ((e)=>{
    console.log(`negetive num`);
    
})
