


function Grade(x){  //function decleration 
   if(x>=85 && x<=100){
       console.log("Congratulations, you achieved Distinction");
   }
   else if(x>=60 && x<85){
    console.log("great, you fall in 1st Division");
   }
    
   else if(x>=45 && x<60){
    console.log("you fall in 2nd Division");
   }

   else if(x>=35 && x<45){
    console.log("needs to improve, you fall in 3rd Division");
   }


    else if (x<35){
        console.log("Sorry, you Are Failed");
   }

   else {
    console.log("Please Enter a valid number");
   }

  
}

Grade(75);















// var grade=45;  

// switch(grade){  
// case grade>=85 : 
// document.write("Distinction");
// break;  
// case grade>=60 && grade<80:
//  document.write("Second Division");
// break;  
// case grade>=35 && grade<60:
//  document.write("Third Division");  
// break;  
// default:  
// document.write("You Are Failed"); 
// }  

