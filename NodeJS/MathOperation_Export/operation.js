let operation=require("./app.js");
let args=process.argv;
switch(args[2]){
    case 'add':
        console.log(operation.add(args[3],args[4]));
        break;
    case 'sub':
        console.log(operation.sub(args[3],args[4]));
        break;
    case 'mul':
        console.log(operation.mul(args[3],args[4]));
        break;
    case 'div':
        console.log(operation.div(args[3],args[4]));
        break;
}
