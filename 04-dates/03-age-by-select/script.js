/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.


    /* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function () {
    // your code here
  
    document.getElementById("run").addEventListener("click", function () {
      let Day = document.getElementById("dob-day").value * 1;
      let Month = document.getElementById("dob-month").value * 1;
      let Year = document.getElementById("dob-year").value * 1;
  
      let date = new Date(Year, Month, Day);
  
      function getAge(d1, d2) {
        d2 = d2 || new Date();
        let diff = d2.getTime() - d1.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
      } //calculating the age
  
      let age = getAge(date); //input your birthday "date". You save the result (age) to a new variable
  
      console.log(age);
  
      alert(age); // show the result
  
    });
  })();



   /* function calculate_age(dob) { 
        var diff_ms = Date.now() - dob.getTime();
        var age_dt = new Date(diff_ms); 
      
        return Math.abs(age_dt.getUTCFullYear() - 1970);
    }
    console.log(calculate_age(new Date(dob)));
*/

