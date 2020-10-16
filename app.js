// let arr = [];

//    let elem1 = document.getElementById('first');
//    let elem2 = document.getElementById('first1');
//    let elem3 = document.getElementById('first2');
//    let elem4 = document.getElementById('first3');
//    let elem5 = document.getElementById('first4');
//    let elem6 = document.getElementById('first5');
//    let elem7 = document.getElementById('first6');
//    let elem8 = document.getElementById('first7');
//    let elem9 = document.getElementById('first8');
   
//    arr.push(elem1);
//    arr.push(elem2);
//    arr.push(elem3);
//    arr.push(elem4);
//    arr.push(elem5);
//    arr.push(elem6);
//    arr.push(elem7);
//    arr.push(elem8);
//    arr.push(elem9);

//    function change(elem, x){
   
//       elem.innerHTML = x;
//    }

//    let radioX = document.getElementById('X');
//    let radioO = document.getElementById('O');

//    function getSumbol(id){

//       let element = document.getElementById(id);
//       let p = document.createElement('p');
      
//       for(let i = 0; i < arr.length; i++)
//       {
//          if(element == arr[i])
//          {
//          if(radioX.checked == true){
//             change(p, 'X')
//          }

//          if(radioO.checked == true)
//          {
//             change(p, 'O')
//          }
//             p.setAttribute('id', 'Cross');
//             element.appendChild(p);
//             arr.splice(i, 1);
//          }
//       }
//       element.onclick = function(){
//          element.setAttribute('disabled', 'disabled')
//       }
//       let item = Math.floor(Math.random() * arr.length);
//       let randO = arr[item]
      
//       randO.onclick = function(){
//          randO.setAttribute('disabled', 'disabled')
//       }
//       let p1 = document.createElement('p');
//       if(radioX.checked == true){
//          change(p1, 'O')
//          }
//       if(radioO.checked == true){
//             change(p1, 'X')
//          }
      
//       p1.setAttribute('id', 'Cross');
//       randO.appendChild(p1);
//       arr.splice(item, 1);
// }



let arr = [
   ['', '', ''],
   ['', '', ''],
   ['', '', '']
]

let array = 
   [
      {x: 0, y: 0}, {x: 0, y: 1}, {x: 0, y: 2},
      {x: 1, y: 0}, {x: 1, y: 1}, {x: 1, y: 2},
      {x: 2, y: 0}, {x: 2, y: 1}, {x: 2, y: 2}
   ]

function getSymbol(id){
   let radioO = document.getElementById('O');
   let radioX = document.getElementById('X');
   let element = document.getElementById(id);
   element.onclick = function(){
      element.setAttribute('disabled', 'disabled')
   }
   let par = document.createElement('p');
   par.innerHTML = 'X';
   let par1 = document.createElement('p');
   par1.innerHTML = 'O';
   let row = +id[1];
   let column = +id[2];
   
   if(radioX.checked == true){
      
      element.appendChild(par);
      arr[row][column] = par;
   }
   if(radioO.checked == true){
      element.appendChild(par1);
      arr[row][column] = par1;
   }
   
   
   
   let index = array.findIndex(obj => obj.x == row && obj.y == column);
   array.splice(index, 1);
   if(arr[0][0].innerHTML == "X" && arr[0][1].innerHTML == "X" && arr[0][2].innerHTML == "X" ||
   arr[1][0].innerHTML == "X" && arr[1][1].innerHTML == "X" && arr[1][2].innerHTML == "X" ||
   arr[2][0].innerHTML == "X" && arr[2][1].innerHTML == "X" && arr[2][2].innerHTML == "X" ||
   arr[0][0].innerHTML == "X" && arr[1][1].innerHTML == "X" && arr[2][2].innerHTML == "X" ||
   arr[0][2].innerHTML == "X" && arr[1][1].innerHTML == "X" && arr[2][0].innerHTML == "X" ||
   arr[0][0].innerHTML == "X" && arr[1][0].innerHTML == "X" && arr[2][0].innerHTML == "X" ||
   arr[0][1].innerHTML == "X" && arr[1][1].innerHTML == "X" && arr[2][1].innerHTML == "X" ||
   arr[0][2].innerHTML == "X" && arr[1][2].innerHTML == "X" && arr[2][2].innerHTML == "X"){
   alert("Player X won!");
   
   }

   
   let item = Math.floor(Math.random() * array.length);
   if(array[item] == undefined)
   {
      alert('Good luck next time!!')
   }
    
   if(radioX.checked == true){
      arr[array[item].x][array[item].y] = par1;
      document.getElementById('f' + array[item].x + array[item].y).appendChild(par1);
   }
   if(radioO.checked == true){
      arr[array[item].x][array[item].y] = par;
      document.getElementById('f' + array[item].x + array[item].y).appendChild(par);
   }
   
   
   array.splice(item, 1);
   if(arr[0][0].innerHTML == "O" && arr[0][1].innerHTML == "O" && arr[0][2].innerHTML == "O" ||
   arr[1][0].innerHTML == "O" && arr[1][1].innerHTML == "O" && arr[1][2].innerHTML == "O" ||
   arr[2][0].innerHTML == "O" && arr[2][1].innerHTML == "O" && arr[2][2].innerHTML == "O" ||
   arr[0][0].innerHTML == "O" && arr[1][1].innerHTML == "O" && arr[2][2].innerHTML == "O" ||
   arr[0][2].innerHTML == "O" && arr[1][1].innerHTML == "O" && arr[2][0].innerHTML == "O" ||
   arr[0][0].innerHTML == "O" && arr[1][0].innerHTML == "O" && arr[2][0].innerHTML == "O" ||
   arr[0][1].innerHTML == "O" && arr[1][1].innerHTML == "O" && arr[2][1].innerHTML == "O" ||
   arr[0][2].innerHTML == "O" && arr[1][2].innerHTML == "O" && arr[2][2].innerHTML == "O"){
   alert("Player O won!");

   }
   console.log(arr)
   }

 
// let arr = [
//    ['', '', ''],
//    ['', '', ''],
//    ['', '', '']
// ]

