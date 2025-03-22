let fruit=require("./Fruit_Backend");
let args=process.argv;
switch(args[2]){
    case 'apple':
        console.log(`Name: ${fruit[0].name}\nColor: ${fruit[0].color}`);
        break;
    case 'banana':
        console.log(`Name: ${fruit[1].name}\nColor: ${fruit[1].color}`);
        break;
    case 'orange':
        console.log(`Name: ${fruit[2].name}\nColor: ${fruit[2].color}`);
        break;
    }
