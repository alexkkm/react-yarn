async function testing(){


    console.log("Start!");
    console.log("Ans1 generating");
    const ans1=await analysis(2);
    console.log("Ans1 finished");
    console.log(ans1);
    const ans2=await analysis(ans1);
    console.log(ans2);
}

function analysis(num){
    return new Promise(resolver=>{
        setTimeout(()=>{
            resolver(num*2)},2000
        )
})
}

testing()