/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    //When you click the button, change the source of the image to the next one listed in the gallery array.
  var gallery= [
    "../../_shared/img/bell.svg",
    "../../_shared/img/clock.svg",
    "../../_shared/img/compass.svg",
    "../../_shared/img/lemon.svg",
    "../../_shared/img/map.svg",
    ];
  
let currentIndex = 0; // doesnt work when its inside of the click function!


 document.getElementById("next").addEventListener("click", function(){


   let value=document.querySelector("img");

   value.src = gallery[currentIndex];


  if (currentIndex === 4){
      currentIndex = 0; 
  }else {
      currentIndex ++;
    }

});

})();




