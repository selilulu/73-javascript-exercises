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
   

   function getRandomColor(){
    let letters='0123456789ABCDEF';
    let color='#';
    for (let i=0; i < 6 ; i++){
        color=color+letters[Math.floor(Math.random()*16)];
    }
    return color;
    }

   
  
    document.body.style.background = getRandomColor();
    
}

