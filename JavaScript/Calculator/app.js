let buttons = document.querySelectorAll('.btn');
let userInput = document.querySelector('.user_input');
let operator=null;
let num1=null;

buttons.forEach(button => {
    button.addEventListener('click', function() {
        userInput.value += this.innerText;
        if(this.innerText=='*' || this.innerText=='+' || this.innerText=='-' || this.innerText=='*'){
            num1=parseInt(userInput.value);
            operator=this.innerText;
            userInput.value='';
            console.log(num1)
        }
        else{
            userInput.value+=this.innerText;
        }


    });
});