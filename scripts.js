function problemOne() {
  //Get all the numbers from the form.
  let num1 = parseFloat(document.getElementById('num1').value);
  let num2 = parseFloat(document.getElementById('num2').value);
  let num3 = parseFloat(document.getElementById('num3').value);
  let num4 = parseFloat(document.getElementById('num4').value);
  let num5 = parseFloat(document.getElementById('num5').value);
  let num6 = parseFloat(document.getElementById('num6').value);
  var sum= num1+num2+num3+num4+num5+num6;
  sum-=findMin(num1,num2,num3,num4,num5,num6);
  var average = sum/5;

  //Find the average, not including the lowest score.

  //Print it to the console.
  console.log(average);
}

function problemTwo() {
  //Get all the letter grades from the form.
  let grade1 = document.getElementById('grade1').value;
  let grade2 = document.getElementById('grade2').value;
  let grade3 = document.getElementById('grade3').value;
  let grade4 = document.getElementById('grade4').value;
  let grade5 = document.getElementById('grade5').value;
  let grade6 = document.getElementById('grade6').value;
  var gpa=findGPA(grade1,grade2,grade3,grade4,grade5, grade6);
  
  console.log(average);
  if (gpa >= 3){
	  document.getElementById('box').style.backgroundColor = "green";

  }
  else
  {
	  document.getElementById('box').style.backgroundColor = "red";
  }
  
  

  //Compute the GPA.

  //Print it to the console.

  //If it is 3.0 or above, turn the div with id="box" green. Otherwise, turn it red.
  // document.getElementById("box").style.backgroundColor = "orange";

}

function findMin(num1, num2, num3, num4, num5, num6) {
  let list = [num1, num2, num3, num4, num5, num6];
  let minimum = 0;

  for (let i = 1; i < 6; i++) {
    if(list[i] < list[minimum]) {
      minimum = i;
    }
  }

  return list[minimum];
}

function findGPA(grade1, grade2, grade3, grade4, grade5, grade6) {
  let list = [grade1, grade2, grade3, grade4, grade5, grade6];

  let sum = 0;

  for(let i = 0; i < 6; i++) {
    if(list[i] == 'a' || list[i] == 'A') {
      sum += 4;
    }
    else if(list[i] == 'b' || list[i] == 'B') {
      sum += 3;
    }
    else if(list[i] == 'c' || list[i] == 'C') {
      sum += 2;
    }
    else if(list[i] == 'd' || list[i] == 'D') {
      sum += 1;
    }
  }
  

  return sum / 6;
}
