// task

var secondItem=document.querySelector('.list-group-item:nth-child(2)');
//secondItem.style.backgroundColor='green';         //first subtask

var thirdItem=document.querySelector('.list-group-item:nth-child(3)');
//thirdItem.style.display='none';                   //first subtask

var secItem=document.querySelectorAll('.list-group-item');
secItem[1].style.color='green';

var odd=document.querySelectorAll('li:nth-child(odd)')
for (var i=0;i<odd.length;i++){
    odd[i].style.backgroundColor= 'green' ;  
}



//QUERY SELECTOR

// var header = document.querySelector('#main-header');     //can select .classs, #id ,tags ,$ for jquery etc
// header.style.borderBottom = 'solid 8px #cccc';

// var input = document.querySelector('input');             //giving values to input tag
// input.value = 'Hello World';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'SEND';                                  // changing value to button

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var LastItem = document.querySelector('.list-group-item:last-child');
// LastItem.style.color = 'blue';

// var SecondItem = document.querySelector('.list-group-item:nth-child(2)');
// SecondItem.style.backgroundColor = 'green';


// QUERY SELECTOR ALL

// var titles = document.querySelectorAll('.title');
// //console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// for(var i=0;i<odd.length;i++){
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = 'yellow';
// }








// GET ELEMENT BY TAG NAME

// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// for(let i=0; i< li.length; i++){
//     li[i].style.fontWeight = 'bold';
//     li[i].style.backgroundColor = '#f4f4f4';
//     if( i==2){
//         li[i].style.backgroundColor = 'green'; 
//     }
// } 

// li[4].textContent = 'Hi'; 
// var lm = document.getElementsByClassName('My');
// console.log(lm);
// lm[0].textContent = 'Go on';
// lm[0].style.color =  'blue';

// GET ELEMENT BY CLASS


/*var list = document.getElementsByClassName('list-group-item');
console.log(list);
console.log(list[1]);
list[1].textContent = 'Hello';
list[1].style.fontWeight = 'bold';
list[1].style.backgroundColor = 'yellow';

for(let i =0;i< list.length;i++){
    list[i].style.fontWeight = 'bold';
    list[i].style.backgroundColor = '#f4f4f4';
    if( i==2){
        list[i].style.backgroundColor = 'green'; 
    }
}
*/





