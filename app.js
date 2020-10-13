let arr = [];

   let elem1 = document.getElementById('first');
   let elem2 = document.getElementById('first1');
   let elem3 = document.getElementById('first2');
   let elem4 = document.getElementById('first3');
   let elem5 = document.getElementById('first4');
   let elem6 = document.getElementById('first5');
   let elem7 = document.getElementById('first6');
   let elem8 = document.getElementById('first7');
   let elem9 = document.getElementById('first8');
   
   arr.push(elem1);
   arr.push(elem2);
   arr.push(elem3);
   arr.push(elem4);
   arr.push(elem5);
   arr.push(elem6);
   arr.push(elem7);
   arr.push(elem8);
   arr.push(elem9);

   let radioX = document.getElementById('X');
let radioO = document.getElementById('O');

function getSumbol(id){

if(radioX.checked == true){
   let element = document.getElementById(id);
   
   for(let i = 0; i < arr.length; i++)
   {
      if(element == arr[i]){
         let p = document.createElement('p');
         p.innerHTML = 'X';
         p.setAttribute('id', 'Cross');
         element.appendChild(p);
         
         arr.splice(i, 1);
         
      }

   }
console.log(arr)
   console.log(arr.length)
   
   let item = Math.floor(Math.random() * arr.length);
   
console.log(item)
  
   let randO = arr[item]

   let p1 = document.createElement('p');
   p1.innerHTML = 'O';
   p1.setAttribute('id', 'Cross');
   randO.appendChild(p1);
   
   arr.splice(item, 1);
   console.log(arr.length)
}



if(radioO.checked == true){
   let element = document.getElementById(id);
   
   for(let i = 0; i < arr.length; i++)
   {
      if(element == arr[i]){
         let p = document.createElement('p');
         p.innerHTML = 'O';
         p.setAttribute('id', 'Cross');
         element.appendChild(p);
         
         arr.splice(i, 1);
         
      }

   }
console.log(arr)
   console.log(arr.length)
   
   let item = Math.floor(Math.random() * arr.length);
   
console.log(item)
  
   let randO = arr[item]

   let p1 = document.createElement('p');
   p1.innerHTML = 'X';
   p1.setAttribute('id', 'Cross');
   randO.appendChild(p1);
   
   arr.splice(item, 1);
   console.log(arr.length)
}

}
   

