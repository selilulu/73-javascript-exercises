/* becode/javascript
 *
 * /06-dom/03-select-three/script.js - 6.3: sélection multiple par sélecteur css
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    const targets=document.querySelectorAll(".target");
    for (var x=0; x<targets.length; x++){
     targets[x].innerHTML="owned";
     }


                                                          //here is another solution with forEach loop !
    // var targets =document.querySelectorAll(".target");
    // targets.forEach(x=>{
    //     x.innerHTML="owned";
    // })


    // your code here

})();
