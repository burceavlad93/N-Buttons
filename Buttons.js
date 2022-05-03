function add() {
  let number= document.getElementById("inputNumber").value;
  let randomNumber = Math.trunc(Math.random() * number) + 1;
  
  let button = document.getElementById("addButton");
  button.disabled = true;
  
    while (number != 0) {
      let btn= document.createElement("button");
      btn.innerText = "Click"
      btn.value = number;
      btn.id = number;
      btn.onclick = function() {
      		
      		if(randomNumber == btn.value) {
						alert('You won!');
          } else {
          	alert('Try Again');
            document.getElementById(btn.value).disabled = true;
          }
      }
      
      document.body.append(btn);
      --number;
    }

}







