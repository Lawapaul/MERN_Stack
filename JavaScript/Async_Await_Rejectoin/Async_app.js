///This program will print the promise

async function hello(){
    return "Hello World";
}
hello().then((data)=>{
    console.log(`Promise Successfully Exceuted. Printing Result....${data}`);
})
console.log(hello());
