 function validateForm() {
     var x = document.forms["myForm"]["fname"]["lname"]["email"]["phone"].value;
     if (x == "") {
         alert("Please fill out the whole form");
         return false;
     }
 }