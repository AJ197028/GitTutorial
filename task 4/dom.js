// GET ELEMENT BY CLASS



var list = document.getElementsByClassName('list-group-item');
console.log(list);
console.log(list[1]);
list[1].textContent = 'Hello';
list[1].style.fontWeight = 'bold';
list[1].style.backgroundColor = 'yellow';

for(let i =0;i<= list.length;i++){
    list[i].style.fontWeight = 'bold';
    list[i].style.backgroundColor = '#f4f4f4';
    if( i==2){
        list[i].style.backgroundColor = 'green'; 
    }
}






