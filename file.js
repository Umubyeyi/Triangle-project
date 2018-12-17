
function herTriangle() {
    side1 = parseInt(document.getElementById('side1').value);
    side2 = parseInt(document.getElementById('side2').value);
    side3 = parseInt(document.getElementById('side3').value);
        
   
    
        if((side1+side2)>side3 && (side1+side3)>side2 && (side2+side3)>side1){
        if (side1 ===side2 && side2 === side3 && side1 ===side3) {
           console.log(alert("This triangle is Equilateral"));
        }
           
       else if(side1 === side2 && side2 !== side3 && side1 !== side3) {
         alert("this triangle is Isosceles");
         window.location.href="eqltl.html"
        }
 
   
      else if (side1 !== side2 && side1 !== side3 && side2!== side3) {
        alert(" This triangle is Scalene!"); 
        }
      }
     else {
alert("is no triangle")
   }
}