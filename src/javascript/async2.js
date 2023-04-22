function TimeoutFuntion() {
    setTimeout(First, 1000);   // Will do the First() 1 sec after MainFunction runned

    function First() {
        console.log("First");
        setTimeout(Second, 4000);   // Will do the Second() 4 sec after First() runned
    }

    function Second() {
        console.log("Second");
        setTimeout(Third, 3000);   // Will do the Third() 3 sec after Second() runned
    }

    function Third() {
        console.log("Third");
    }

}

function PromiseExample() {
    const promise = new Promise((resolve, reject) => {
        // 异步操作
        setTimeout(() => {
            if (Math.random() < 0.5) {
                resolve('success');
            } else {
                reject('error');
            }
        }, 2000);
    });

    console.log("Start");
    promise.then(result => {
        console.log(result);
    }).catch(error => {
        console.log(error);
    });
}

PromiseExample();
