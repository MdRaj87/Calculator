// collecting Data
let inputBox = document.getElementById('input');
let buttons = document.querySelectorAll('button');


// Create an empty string 
let string = "";

//Convert the button data into an array
let arr = Array.from(buttons);

// I have attached the function that operates (=) when you click on it.
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            inputBox.value = string;
        }

        else if (e.target.innerHTML == 'AC') {
            string ="";
            inputBox.value = string;
             
        }
        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            inputBox.value = string;


        }

        else {
            string += e.target.innerHTML;
            inputBox.value = string;
        };


    })
})

