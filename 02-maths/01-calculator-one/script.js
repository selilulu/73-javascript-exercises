/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value











    document.getElementById("addition").addEventListener("click", function() {
        // perform an addition

    var number1 =parseInt(document.getElementById("op-one").value);//using parseInt after the var names in () we can reach the same as below in comment
    var number2 =parseInt(document.getElementById("op-two").value);
    var result =number1 + number2;//parseInt(number1) - parseInt(number2); can be also used as below

    console.log(result);


    });

    document.getElementById("substraction").addEventListener("click", function() {
        // perform an substraction

    var number1 =document.getElementById("op-one").value;
    var number2 =document.getElementById("op-two").value;
    var result =parseInt(number1) - parseInt(number2);

    console.log(result);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        // perform an multiplication

        var number1 =document.getElementById("op-one").value;
        var number2 =document.getElementById("op-two").value;
        var result =parseInt(number1) *  parseInt(number2);

        console.log(result);
    });

    document.getElementById("division").addEventListener("click", function() {
        // perform an division

        var number1 =document.getElementById("op-one").value;
        var number2 =document.getElementById("op-two").value;
        var result =parseInt(number1) / parseInt(number2);
    
        console.log(result);
        
    });



})();



