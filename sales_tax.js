"use strict";
//create the focus on subtotal text field when application is loaded
window.addEventListener("load", function() {
    document.querySelector("#subtotal").focus();
});

/* This function is responsible for:
    1. Validate the input value
    2. Validate the subtotal
    3. Validate the tax rate
    4. calculate the subtotal and rate tax and giving a result
*/
function processEntries() {
    //getting values from text field using querySelector ID's
    var sub_total = parseFloat(document.querySelector("#subtotal").value);
    var tax_rate = parseFloat(document.querySelector("#tax_rate").value);

        if (!isNaN(sub_total) && !isNaN(tax_rate) ) { //checking if subtotal and rate tax is NaN
                if(sub_total <= 0 || sub_total >= 10000) { //check if constraints are within the range
                    alert("Subtotal must be > 0 and < 10000");
                    return;
                } 
                if(tax_rate <= 0 || tax_rate >= 12) { //check if constraints are within the range
                    alert("Tax Rate must be > 0 and < 12");
                    document.querySelector("#tax_rate").focus();
                    return;
                }  
        } else {
            alert("Invalid subtotal or tax rate");
            return;
        }

        //Formula to calculate the sale tax and total value
        var sales_tax = sub_total * (tax_rate / 100);
        var total = sub_total + sales_tax;

        //appending the result into the blank text fields using querySelector ID's and formating the number
        document.querySelector("#sales_tax").value = sales_tax.toFixed(2);
        document.querySelector("#total").value = total.toFixed(2);
}
//Creating DOMContentLoaded when #calculate button hit which calls the function processEntries()
document.addEventListener("DOMContentLoaded", function() {
    document.querySelector("#calculate").addEventListener("click", processEntries);
});


//clear all text fields when clear button hit and moving the cursor to the subtotal button
document.querySelector("#clear").addEventListener("click", function() {
    document.querySelector("#subtotal").value = "";
    document.querySelector("#tax_rate").value = "";
    document.querySelector("#sales_tax").value = "";
    document.querySelector("#total").value = "";
    document.querySelector("#subtotal").focus();
    });

  // updating the subtotal text field null when we try to type in it again
    document.querySelector("#subtotal").addEventListener("click", function() {
     document.querySelector("#subtotal").value = "";
    });
  
  // updating the tax rate text field null when we try to type in it again
    document.querySelector("#tax_rate").addEventListener("click", function() {
    document.querySelector("#tax_rate").value = "";
    });

