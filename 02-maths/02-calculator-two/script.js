/* becode/javascript
 *
 * /02-maths/02-calculator-two/script.js - 2.2: calculatrice (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    // to get the value of an input: document.getElementById("element-id").value

    const performOperation = operation => {
        // perform the operation

        let number1 = parseInt(document.getElementById('op-one').value);
        let number2 = parseInt(document.getElementById('op-two').value);
        let answer; 

       

        switch(operation){

            case ("addition"): 
                answer = number1 + number2;
                break;

            case ("substraction"):
                answer = number1 - number2;
                break;

            case ("multiplication"):
                answer = number1 * number2;
                break;

            case ("division"):
                answer = number1 / number2;
                break;

            default: 
                answer = "Its not an easy one "
                break;
        
            

        }

        alert(answer);
        

        
    };

  


    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),

           


        ),
    );
})();


   
/*const performOperation = operation => {
        // perform the operation 
        switch (operation){
                case "addition":
                    var result = (+ document.getElementById("op-one").value) + (+ document.getElementById("op-two").value);
                    alert(result);
                    break;
                case "substraction":
                    var result = document.getElementById("op-one").value - document.getElementById("op-two").value;
                    alert(result);
                    break;
                case "multiplication":
                    var result = document.getElementById("op-one").value * document.getElementById("op-two").value;
                    alert(result);
                    break; 
                default:
                    var result = document.getElementById("op-one").value / document.getElementById("op-two").value;
                    alert(result);
                    break;
                
   
   
   
    };
    

    }

    Array.from(document.querySelectorAll("button.operator")).forEach($btn =>
        $btn.addEventListener(
            "click",
            () => (performOperation($btn.id), false),
        ),
    );
})();
*/