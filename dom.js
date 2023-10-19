// EXAMINE THE DOCUMENT OBJECT //
// console.dir(document);
// console.log(document.domain); 
// console.log(document.URL) 
// console.log(document.title);
// document.title = 123;
// console.log(document.doctype); 
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// var headerTitle = document.getElementById('header-title');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Hi';
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
var headerTitle = document.getElementById('header-title');
var header = document.getElementById('main-header')           //for pointing hearder
//headerTitle.innerHTML ='<h3>Hello</h3>';
// headerTitle.style.borderbottom = 'solid 3px #000';        for bottom only
//headerTitle.style.border = 'solid 3px #000';                 // for complete
//header.innerHTML ='<h3>Hello</h3>';
header.style.border = 'solid 3px #000';                        // for complete border on header
var addItem = document.getElementById('main');
addItem.style.fontWeight = "bold";                              //changed to bold
addItem.style.color = "#008000";                                // additem is now green

// GETELEMENTSBYCLASSNAME //
var items = document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);
items[1].textContent = 'Hello 2';
items[1].style. fontweight = 'bold';
items[1].style.backgroundColor = 'yellow';
// Gives error
//items.style.backgroundColor = '#f4f4f4';
for(var i = 0; i < items.length; i++){ 
    items[i].style.backgroundColor = '#f4f4f4';
}

