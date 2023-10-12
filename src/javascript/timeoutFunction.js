// Timeout function
const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function example() {
    console.log("Start")
    await timeout(1000)
    console.log("Stop")
}

example();

/**************************************************************************************/


// Example of the usage of setTimeout()
function setTimeoutExample() {
    console.log("start!");

    setTimeout(First, 1000);   // Will do the First() 1 sec after MainFunction run

    function First() {
        console.log("First");
        setTimeout(Second, 4000);   // Will do the Second() 4 sec after First() run
    }

    function Second() {
        console.log("Second");
        setTimeout(Third, 3000);   // Will do the Third() 3 sec after Second() run
    }

    function Third() {
        console.log("Third");
    }

    console.log("End");
}

