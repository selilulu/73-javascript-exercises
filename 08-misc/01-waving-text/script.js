/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    //document.querySelector("#target").innerHTML="I like to move it move it !";

    var letterContainer = document.querySelector("#target");
    letterContainer.innerHTML="I like to move it move it !";
    var letters = letterContainer.innerText;
    
    var letters1;
    var letters2;
    var letters3;
    var letters4;
    var letters5;

    letters1 = letters.slice(0 , 5);
    letters2 = letters.slice(5 , 8);
    letters3 = letters.slice(8 , 10);
    letters4 = letters.slice(10 , 17);
    letters5 = letters.slice(17 , 27);

    var size1=letters1.fontsize(1);
    var size2=letters2.fontsize(2);
    var size3=letters3.fontsize(3);
    var size4=letters4.fontsize(4);
    var size5=letters5.fontsize(5);
     

    document.getElementById("target").innerHTML=size1+ size2 +size3 +size4 + size5;







    

    // //This code gives a wave 

    
    // letterContainer.innerText = ""; // text should be an empty string otherwise the wave affect text will be added on the original one.
    
    
    // letters.forEach(function(letter, i){
    //   var wrap = document.createElement("span");
    //   wrap.innerText = letter;
    //   wrap.style.position = "relative";// position relative ? rotation
    //   wrap.style.bottom = i+"px";// it does a  letter lifting from the bottom 
    //   wrap.style.fontSize=`${i}+px`;//replace it with fontsize
    //   letterContainer.appendChild(wrap);
    //  }
    
      
      // this is the code to use split instead of slice : then i need to use arrays!!!!

//     var letterContainer = document.querySelector("#target");
//     letterContainer.innerHTML="I like to move it move it !";
//     var letters = letterContainer.innerText;
    
//     var letters1;
//     var letters2;
//     var letters3;
//     var letters4;
//     var letters5;

//     var size1;


//     var stringArray = letters.split(" ", 5);
//     var size11=stringArray[0].fontsize(1);
//     var size22=stringArray[1].fontsize(2);
//     var size33=stringArray[2].fontsize(3);
//     var size44=stringArray[3].fontsize(4);
//     var size55=stringArray[4].fontsize(5);

//     document.getElementById("target").innerHTML=size11+size22+size33+size44+size55;
     
//     console.log();

//     letters2 = letters.slice(4 , 6);
//     letters3 = letters.slice(6 , 9);
//     letters4 = letters.slice(10 , 13);
//     letters5 = letters.slice(15 , 18);
//    // console.log(letters1);

//     var size1=letters5.fontsize(1);
//     var size2=letters4.fontsize(2);
//     var size3=letters3.fontsize(3);
//     var size4=letters2.fontsize(4);
//   //  var size5=letters1.fontsize(5);
     

//     //document.getElementById("target").innerHTML= size1+ size2 +size3 +size4 + size5;
//    // document.getElementById("target").innerHTML= size1+ size2 +size3 +size4;




//     console.log(size1);






    
//     // })

//     // // your code here

})();
