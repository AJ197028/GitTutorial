var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

//form submit event
form.addEventListener('submit',addItem);    //call the function after firing event
//Delete event
itemList.addEventListener('click', removeItem);
//Filter event
filter.addEventListener('keyup', filterItems);
 
//ADD ITEM
function addItem(e){
    e.preventDefault();                    //preventing deafault functioning of event
    //console.log(1);

    //get input value
    var newItem = document.getElementById('item').value;
    
    //create new li element
    var li = document.createElement('li');
    //task
    var editBtn = document.createElement('button');
    editBtn.className = 'btn btn-danger btn-sm float-right delete';
    editBtn.appendChild(document.createTextNode('Edit'));
    li.appendChild(editBtn);
    itemList.appendChild(li);       //task
    
    //add class
    li.className = 'list-group-item';
    //console.log('li');
    //add textnode with input value
    li.appendChild(document.createTextNode(newItem));
    
    //Create button element
    var deleteBtn = document.createElement('button');
    

    //add classes to button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
 
    //append textnode
    deleteBtn.appendChild(document.createTextNode('X'));
    
    //Append button to li
    li.appendChild(deleteBtn);
    
    
    //Append li to list
    itemList.appendChild(li);
    
    }  

//REMOVE ITEM
function removeItem(e){
    //console.log(1);                           //fuction fires for li
    if(e.target.classList.contains('delete')){  //fuction fires for delete button only
        //console.log(1); 
        if(confirm('Are you sure ?')){
            var li = e.target.parentElement;    
            itemList.removeChild(li);
        }           
    }

}

//FILTER ITEMS
function filterItems(e){
    //convert text to lowercase
    var text = e.target.value.toLowerCase();
    //console.log(text);
    //get list
    var items = itemList.getElementsByTagName('li');
    //console.log(items);                        //list in html format
    //convert to array
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        //console.log(itemName);                //gives all item for every typing
        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        }
        else{
            item.style.display = 'none';
        }

    });
}