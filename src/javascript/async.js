async function testAsync() {
    return "hello async";
}

const result = testAsync();
console.log(result);


function print() {
    document.getElementById("demo").innerHTML = "RUNOOB!";
}
setTimeout(print, 3000);