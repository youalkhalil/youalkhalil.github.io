
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



