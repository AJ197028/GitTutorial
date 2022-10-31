// GET ELEMENT BY TAG NAME

var li = document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);
li[1].textContent = 'Hello';
li[1].style.fontWeight = 'bold';
li[1].style.backgroundColor = 'yellow';

for(let i=0; i< li.length; i++){
    li[i].style.fontWeight = 'bold';
    li[i].style.backgroundColor = '#f4f4f4';
    if( i==2){
        li[i].style.backgroundColor = 'green'; 
    }
} 

li[4].textContent = 'Hi'; 
var lm = document.getElementsByClassName('My');
console.log(lm);
lm[0].textContent = 'Go on';
lm[0].style.color =  'blue';

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





