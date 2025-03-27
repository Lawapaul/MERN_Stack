let url = "https://v2.jokeapi.dev/joke/Any";


async function request(){
    let res= await fetch(url);
    let data=await res.json();
    console.log(data.delivery);
}
request();
