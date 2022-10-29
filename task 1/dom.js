// GET ELEMENT BY ID
console.log(document.getElementById('header-title'));
var headertitle= document.getElementById('header-title');   
//console.log(headertitle);
//headertitle.innerText= "Hello";
//headertitle.textContent= "ABC"
console.log(headertitle.textContent);                   /* print everything in header title irrespective of styling  */
console.log(headertitle.innerText);                     /* same but affected by styling */
headertitle.innerHTML= '<h3>Hello</h3>'                 /* put h3 tag under h1 */
//headertitle.style.borderBottom = "solid 3px #000";
var header= document.getElementById('main-header');
header.style.borderBottom = "solid 3px #000";           /* header on the bottom  */

// sharpner task
//var main = document.getElementById('main');
//main.style.fontStyle = 'bold';
//main.style.color= 'Green';
var card = document.getElementsByClassName('title');
card[0].style.fontStyle = 'bold';
card[0].style.color = 'green';                          //sharpner task





// exaime
//console.dir(document);
//console.dir(document);
//console.dir(document.URL);
//console.dir(document.title);
//document.title= 123;
//console.dir(document.doctype);
//console.dir(document.head);
//console.dir(document.body);
//console.dir(document.all);
//console.dir(document.all[10]);           /* manupulate any part  */
//document.all[10].textContent= "Hello";
//console.dir(document.form[0])           /* current form */
//console.dir(document.links);            /* all link in doc */
//console.dir(document.images);