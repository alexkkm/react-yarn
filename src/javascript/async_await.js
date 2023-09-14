const timeout = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function test() {
    console.log("first");
    await timeout(2000);
    console.log("second");
}

test();