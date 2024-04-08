/* responsive navbar---menu*/
var x= true;


function toggleMenu() {
    

    if (x == true){

         document.getElementById("menuList").style.height  = "200px";
     }

    else{
     document.getElementById("menuList").style.height = "0px";
    }

    x= !x;
}





window.onclick = myFunction;
   function myFunction() {
      document.getElementsByTagName("body")[0].style.backgroundcolor = "black";
   }
