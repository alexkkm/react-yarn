// function that return a promise, is in attribute of "promise"
function analysis(num){
    return new Promise(resolver=>{
        setTimeout(()=>{
            resolver(num*2)},2000
        )
})
}

// Example of using await for promise in a async function
async function awaitForPromise(){   // if the function inside include componenet of "await", then it should define "async"
    console.log("Start!");
    console.log("Ans1 generating");
    const ans1=await analysis(2);   // use "await" to pause the code below,  until the "promise" is executed
    console.log("Ans1 finished");
    console.log(ans1);
    console.log("Ans2 generating");
    const ans2=await analysis(ans1);
    console.log("Ans2 finished");
    console.log(ans2);
}

async function main(){  
    await awaitForPromise();
    console.log("End of main");
}
main();