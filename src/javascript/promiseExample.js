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
