/* becode/javascript
 *
 * /07-misc/04-worst-ui-two/script.js - 7.4: la pire interface (2) : phone clicker
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let one=document.getElementById("part-one")
    let numberOne=one.getAttribute("data-min", "data-max");
    console.log(numberOne);
    let two=document.getElementById("part-two");    
    let three=document.getElementById("part-three");
    let four=document.getElementById("part-four");
    let target=document.querySelector("#target");

    //target.innerHTML=getAttribute();


    one.addEventListener("click",function(){
        target.innerHTML = this.data-min;//here instead of this slider can be used too
    })






    // your code here

})();
