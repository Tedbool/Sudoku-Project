// function login(){
//   let userN = document.getElementById('uName').value;
//   let passW = document.getElementById('pWord').value;



//   if (userN != 'abcd') {
//     document.getElementById('userError').innerHTML = `  User name does not exist`;
//   }
//   else{
//     document.getElementById('userError').innerHTML = "";
//   }
//   if (passW != "1234") {
//     document.getElementById('passError').innerHTML = " Password is incorrect";
//   }
//   else{
//     document.getElementById('passError').innerHTML = "";
//   }
//   if (userN == "abcd" && passW == "1234") {
//     document.getElementById("login").style.display = "none";
//     document.getElementById("welcome").style.display = "block";
//     document.getElementById(`welcome`).style.display = 'flex';
//     document.getElementById(`welcome`).style.flexDirection = 'column'
//     document.getElementById(`welcome`).style.justifyContent = 'space-around';
//   }
//   document.getElementById('loginN').innerHTML = ` ${userN}`;
// }

function login(){
  var userN = document.getElementById('uName').value;
  localStorage.setItem("NAME", userN);
  let passW = document.getElementById('pWord').value;
  if (userN != 'abcd') {
      document.getElementById('userError').innerHTML = "User name does not exist";
  }
  else{
      document.getElementById('userError').innerHTML = "";
  }
  if (passW != "1234") {
      document.getElementById('passError').innerHTML = "Password is incorrect";
  }
  else{
      document.getElementById('passError').innerHTML = "";
  }
  if (userN == "abcd" && passW == "1234") {
      window.location.href = "homepage.html";
  }
}
let userName = localStorage.getItem("NAME");
if (document.getElementById("helloName") != null) {
document.getElementById("helloName").innerText = userName;
}
let rndMat = Math.floor(Math.random() * (3 - 1)) + 1;
let mat1 = [ // The sudoku table
  [8,3,5, 4,1,6, 9,2,7],
  [2,9,6, 8,5,7, 4,3,1],
  [4,1,7, 2,9,3, 6,5,8],

  [5,6,9, 1,3,4, 7,8,2],
  [1,2,3, 6,7,8, 5,4,9],
  [7,4,8, 5,2,9, 1,6,3],

  [6,5,2, 7,8,1, 3,9,4],
  [9,8,1, 3,4,5, 2,7,6],
  [3,7,4, 9,6,2, 8,1,5]     
];

let mat2 =[
  [3,1,6, 5,7,8, 4,9,2],
  [5,2,9, 1,3,4, 7,6,8],
  [4,8,7, 6,2,9, 5,3,1],

  [2,6,3, 4,1,5, 9,8,7],
  [9,7,4, 8,6,3, 1,2,5],
  [8,5,1, 7,9,2, 6,4,3],

  [1,3,8, 9,4,7, 2,5,6],
  [6,9,2, 3,5,1, 8,7,4],
  [7,4,5, 2,8,6, 3,1,9]
];

let mat3 = [
  [2,9,5, 7,4,3, 8,6,1],
  [4,3,1, 8,6,5, 9,2,7],
  [8,7,6, 1,9,2, 5,4,3],
  
  [3,8,7, 4,5,9, 2,1,6],
  [6,1,2, 3,8,7, 4,9,5],
  [5,4,9, 2,1,6, 7,3,8],

  [7,6,3, 5,2,4, 1,8,9],
  [9,2,8, 6,7,1, 3,5,4],
  [1,5,4, 9,3,8, 6,7,2]
];

function randomMat(){
  let rndMat = Math.floor(Math.random() * (4 - 1)) + 1;
  if (rndMat == 1) {
  return mat1;
  }
  else if(rndMat == 2){
    return mat2;
  }
  else{
    return mat3;
  }
}

//Create array for the sudoku table
let mat = randomMat();
let arr1 = [];
arr1.push(0);
for (let i = 0; i < mat.length; i++) {
  for (let j = 0; j < mat[i].length; j++) {
    arr1.push(mat[i][j]);
  }
}
// Create the sudoku table itself
let count = 1;
let newTable = document.createElement("table");
newTable.setAttribute("id", "sudokuT");
  document.getElementById('addtable').appendChild(newTable);
  for (let i = 1; i <= 9; i++){ // create row
    let row = document.createElement("tr");
    row.setAttribute("id", `rowTable${i}`);
    for(let j = 1; j <= 9; j++, count++){ // create collumn
      document.getElementById("sudokuT").appendChild(row);
      let cell = document.createElement("td");
      let inputNum = document.createElement('input');
      cell.setAttribute("id", `cellNum${count}`);
      inputNum.setAttribute("id", `inputNum${count}`);
      inputNum.setAttribute("maxlength", 1);
      inputNum.setAttribute("class", "inputHov");
      cell.style.width = '9mm';
      cell.style.height = '9mm';
      document.getElementById(`rowTable${i}`).appendChild(cell);
      inputNum.style.width = '8mm';
      inputNum.style.height = '8mm';
      inputNum.style.textAlign = 'center';
      document.getElementById(`cellNum${count}`).appendChild(inputNum);
      if(count%3 == 0){ 
        document.getElementById(`cellNum${count}`).style.borderRightWidth = '2mm'; // highlight right
      }
    }
    if((i-1)%3 == 0){
      document.getElementById(`rowTable${i}`).style.borderTopWidth = '2mm'; // highlight top
    }
  }
  document.getElementById(`sudokuT`).style.borderLeftWidth = '2mm'; // highlight left
  document.getElementById(`rowTable9`).style.borderBottomWidth = '2mm'; // highlight bottom

// console.log(newTable);

function Level1() {
  //Get the numbers into the table
  let count_Random = [], counter = 0;
  for (let y = 0; y < 51; y++) {
    let rndCell = Math.floor(Math.random() * (82 - 1)) + 1;
    count_Random.push(rndCell);
    for (let p = 0; p < count_Random.length; p++){
      if (count_Random[p] == rndCell) {
        counter++;
      }
    }
     if (counter == 2) {
      count_Random.pop();
      counter = 0;
      y--;
    }
    if (counter == 1) {
      document.getElementById(`cellNum${rndCell}`).innerHTML = arr1[rndCell];
      counter = 0;
    }
  }
}
function Level2() {
  //Get the numbers into the table
  let count_Random = [], counter = 0;
  for (let y = 0; y < 36; y++) {
    let rndCell = Math.floor(Math.random() * (82 - 1)) + 1;
    count_Random.push(rndCell);
    for (let p = 0; p < count_Random.length; p++){
        if (count_Random[p] == rndCell) {
            counter++;
        }
        if (counter == 2) {
          count_Random.pop();
          counter = 0;
          y--;
        }
      }
      if (counter == 1) {
        document.getElementById(`cellNum${rndCell}`).innerHTML = arr1[rndCell];
        counter = 0;
      }
    }
}
function Level3() {
  //Get the numbers into the table
  let count_Random = [], counter = 0;
  for (let y = 0; y < 21; y++) {
    let rndCell = Math.floor(Math.random() * (82 - 1)) + 1;
    count_Random.push(rndCell);
    for (let p = 0; p < count_Random.length; p++){
        if (count_Random[p] == rndCell) {
            counter++;
        }
        if (counter == 2) {
          count_Random.pop();
          counter = 0;
          y--;
        }
      }
      if (counter == 1) {
        document.getElementById(`cellNum${rndCell}`).innerHTML = arr1[rndCell];
        counter = 0;
      }
    }
  console.log(count_Random);
}

function game(){ 
  document.getElementById('welcome').style.display = 'none';
  document.getElementById('game').style.display = 'flex';
  for (let i  = 1; i  < 4; i ++) {
    var hearts = document.createElement('img');
    hearts.src = './images/heart.jpg';
    document.getElementById('lifeCount').appendChild(hearts);
    hearts.setAttribute("id", `heart${i}`);
    hearts.style.width = '8mm';
    hearts.style.height = '8mm';
  }
}

function Easy(){
  game();
  Level1();
}
function Medium(){
  game();
  Level2();
}
function Hard(){
  game();
  Level3();
}
function clearBoard(){
	for (let i = 0; i < 82; i++) {
	  	if (document.getElementById(`inputNum${i}`) != null){
			document.getElementById(`inputNum${i}`).value = "";
			document.getElementById(`cellNum${i}`).style.backgroundColor = 'lightgoldenrodyellow';
	  }
	}
}

document.getElementById('lifeCount').innerHTML = 'Life : ';
let life = 3;
function finish(){
  let mistake = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (document.getElementById(`inputNum${i}`) != null){
      let x = document.getElementById(`inputNum${i}`).value;
      if(x != arr1[i]){
        mistake++;
        document.getElementById(`cellNum${i}`).style.backgroundColor = 'red';
      }
      else{
        document.getElementById(`cellNum${i}`).style.backgroundColor = 'lightgoldenrodyellow';
      }
    }
  }
  if(mistake == 0){
    document.getElementById(`game`).style.display = 'none';
    document.getElementById(`winGame`).style.display = 'flex';
  } 
  else{
    alert (`You had ${mistake} mistakes.`);
    hearts = document.getElementById(`heart${life}`);
    document.getElementById(`heart${life}`).remove();
    life--;
  }
  if (life == 0) {
    document.getElementById(`game`).style.display = 'none';
    document.getElementById(`loseGame`).style.display = 'flex';
    life = 3;
  }
}
function backToGame(){
  document.getElementById(`loseGame`).style.display = 'none';
  document.getElementById(`winGame`).style.display = 'none';
  clearBoard();
  window.location.reload();
  // document.getElementById(`login`).style.display = 'none';
  document.getElementById(`welcome`).style.display = 'block';
}

