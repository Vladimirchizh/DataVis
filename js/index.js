let g = document.querySelector('path');
const circle = document.querySelector('circle');

let angle = 0;
const x = circle.getAttribute('cx');
const y = circle.getAttribute('cy');
function myFunction() {
    // Get the checkbox
    var checkBox = document.getElementById("myCheck");
    // Get the output text
    var text = document.getElementById("text");
    var text1 = document.getElementById("text1");
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true){
      g.setAttribute('transform', `rotate(${180} ${230} ${220})`);
      text.style.display = "block";
      text1.style.display = "none";
    } else {
      g.setAttribute('transform', `rotate(${360} ${230} ${220})`);
      text1.style.display = "block";
      text.style.display = "none";
    }
  } 