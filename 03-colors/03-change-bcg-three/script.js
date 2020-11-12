/* becode/javascript
 *
 * /03-colors/03-change-bcg-three/script.js - 3.3: couleur de fond (3)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


document.getElementById("run").addEventListener("click", function() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  
    document.body.style.background = bgColor;
    
});

//here is a useful link=https://www.w3resource.com/javascript-exercises/javascript-math-exercise-40.php
/*document.getElementById("run").addEventListener("click", function()    {

    const backgrnd = Math.floor(Math.random()*16777215).toString(16);

    document.body.style.backgroundColor = "#" + backgrnd;

*/