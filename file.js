
function checkInputs() {
    side1 = parseInt(document.getElementById('side1').value);
    side2 = parseInt(document.getElementById('side2').value);
    side3 = parseInt(document.getElementById('side3').value);
        
   var sides={side1, side2, side3 }
   sides.forEach(function(sides){
      console.log("number " + sides )
      
   });
    
        if((side1+side2)>side3 && (side1+side3)>side2 && (side2+side3)>side1){
        if (side1 ===side2 && side2 === side3 && side1 ===side3) {
           console.log(alert("This triangle is Equilateral"));
           window.location.href="eqltl.html"  
        }
           
       else if(side1 === side2 && side2 !== side3 && side1 !== side3) {
         alert("this triangle is Isosceles");
         window.location.href="isoscls.html"
         
         
        }
 
   
      else if (side1 !== side2 && side1 !== side3 && side2!== side3) {
        alert(" This triangle is Scalene!"); 
        window.location.href="scln.html"
        }
      }
     else {
alert("There is no triangle")
   }
}