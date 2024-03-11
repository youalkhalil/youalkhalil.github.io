
//Defining function for button


function askName(){
    var name

    //Ask for name
  name = window.prompt("What is your name?")
    console.log(name)
    //display name as HTML element
    document.getElementById('displayName').textContent = 'Welcome ' + name + '!';
}


//create function to enlarge image

function enlarge(element){

  // toggle between enlarged and normal
  element.classList.toggle("enlarged");
 
}
// when user clicks button it toggles to show dropdown content

function myFunction(){
  document.getElementById("myDropdown").classList.toggle("show");
}
// closes dropdown if user clicks outside of it
window.onclick = function(event){
  if(!event.target.matches('.dropbtn')){
    var dropdowns = document.getElementsByClassName('dropdown-content');
    for (var i=0; i<dropdowns.length;i++){
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }

    }
  }
}
// same as above
function myFunction1(){
  document.getElementById("myDropdown1").classList.toggle("show");
}
  
window.onclick = function(event){
  if(!event.target.matches('.dropbtn1')){
    var dropdowns = document.getElementsByClassName('dropdown-content1');
    for (var i=0; i<dropdowns.length;i++){
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')){
        openDropdown.classList.remove('show');
      }

    }
  }
}

// function for when users cursor is over button it will show click me
function mOver(some_tag){
  some_tag.innerHTML = "Click Me";
  some_tag.style.color = "blue";
}

// function to save and log form data
function saveFormdata() {
  
  
  
  // saving first and last name
  var firstname = document.getElementById('fname').value; 
  localStorage.setItem("firstname", firstname); 
  
  // Log the stored name to the console
  console.log(localStorage.getItem("firstname"));

    
    var lastname = document.getElementById('lname').value; 
    localStorage.setItem("lastname", lastname); 
    
    // Log the stored username to the console
    console.log(localStorage.getItem("lastname"));

     // save and log email
     var email = document.getElementById('email').value; 
     localStorage.setItem("email", email); 
     
     // Log the stored username to the console
     console.log(localStorage.getItem("email"));
 
     //log and store checkbox selection

     if (document.getElementById('general').checked) {
      var general = document.getElementById('general').value;
      localStorage.setItem("general", general); 
      
      // Log to console
      console.log(localStorage.getItem("general"));
     }

     else if(document.getElementById('complaint').checked){
      var complaint = document.getElementById('complaint').value; 
      localStorage.setItem("complaint", complaint); 
      
      // Log the stored username to the console
      console.log(localStorage.getItem("complaint"));

     }
     else if(document.getElementById('partnership').checked){
      var partnership = document.getElementById('partnership').value; 
      localStorage.setItem("partnership", partnership); 
      
      // Log  to the console
      console.log(localStorage.getItem("partnership"));}

      else if(document.getElementById('feedback').checked){
        var feedback = document.getElementById('feedback').value; 
        localStorage.setItem("feedback", feedback); 
        
        // Log to the console
        console.log(localStorage.getItem("feedback"));}

        var hear = document.getElementById('hear').value; 
        localStorage.setItem("hear", hear); 
        
        // Log to the console
        console.log(localStorage.getItem("hear"));

        //log and store text box

        var message = document.getElementById('message').value;
        localStorage.setItem("message", message);
        
        // Log to the console
        console.log(localStorage.getItem("message"));

        //log and store rating 0-100

        var rating = document.getElementById('rating').value; 
        localStorage.setItem("rating", rating); 
        
        // Log to the console
        console.log(localStorage.getItem("rating"));
        
        //store and log value and selection of radio buttons 
        if (document.getElementById('yes').checked) {
          var yes = document.getElementById('yes').value; 
          localStorage.setItem("yes", yes); 

          
          // Log to the console
          console.log(localStorage.getItem("yes"));
         }
         else if (document.getElementById('no').checked) {
          var no = document.getElementById('no').value; 
          localStorage.setItem("no", no); 
          
          // Log to the console
          console.log(localStorage.getItem("no"));


         }
         
    
         

}

        