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
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header')           //for pointing hearder
//headerTitle.innerHTML ='<h3>Hello</h3>';
// headerTitle.style.borderbottom = 'solid 3px #000';        for bottom only
//headerTitle.style.border = 'solid 3px #000';                 // for complete
//header.innerHTML ='<h3>Hello</h3>';
// header.style.border = 'solid 3px #000';                        // for complete border on header
// var addItem = document.getElementById('main');
// addItem.style.fontWeight = "bold";                              //changed to bold
// addItem.style.color = "#008000";                                // additem is now green

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style. fontweight = 'bold';
// items[1].style.backgroundColor = 'yellow';
// Gives error
//items.style.backgroundColor = '#f4f4f4';
// for(var i = 0; i < items.length; i++){ 
//     items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontweight = 'bold';
// li[1].style.backgroundColor = 'yellow';
// // Gives error
// //items.style.backgroundColor = '#f4f4f4';
// for (var i = 0; i < li.length; i++){
// li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header'); 
// header.style.borderBottom = 'solid 4px #ccc';
// var input = document.querySelector('input'); 
// input.value = 'Hello World';
// var submit = document.querySelector('input[type="submit"]'); 
// submit.value="SEND";
// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';
// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';
// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.backgroundColor = '#008000';
// var thirdItem = document.querySelector('.list-group-item:nth-child(3)');
// thirdItem.style.opacity = '0.1';

// // QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent = 'Hello';
// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');
// for (var i = 0; i < odd.length; i++) { 
//     odd[i].style.backgroundColor = '#f4f4f4'; 
//     even[i].style.backgroundColor = '#ccc';
//  }

// TRAVERSING THE DOM //
var itemList = document.querySelector('#items');

// //parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// // parentElement
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement)

// // childNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor 'yellow';

// // FirstChild
// console.log(itemList.firstChild);

// // firstElementChild
// console.log(itemlist.firstElementChild);
// itemList.firstElementChild.textContent = 'Hello 1';

// //lastChild
// console.log(itemList.lastChild);

//lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'Hello 4';


// // nextSibling
// console.log(itemList.nextSibling);

// // nextElementSibling
// console.log(itemList.nextElementSibling);

// // previousSibling
// console.log(itemList.previousSibling);

// // previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color = 'green';


// createElement
// create a div
var newDiv = document.createElement('div');
// Add class 
newDiv.className= 'hello';
// Add id 
newDiv.id = 'hello1';

