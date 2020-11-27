/* becode/javascript
 *
 * /07-misc/03-worst-ui-one/script.js - 7.3: la pire interface (1) : phone slider
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let slider=document.querySelector("#slider");
    let target=document.querySelector("#target");

    target.innerHTML= slider.value;//here value can be replaced with innerhtml



    slider.addEventListener("click",function(){
        target.innerHTML = this.value;//here instead of this slider can be used too
    })






    // your code here

})();
