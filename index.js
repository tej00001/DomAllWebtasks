//console.dir(document)

//console.log(document.visibilityState)

//console.log(document.hidden)

/*var items= document.getElementsByClassName('list-group-item');
console.log(items);
console.log(items[1]);



items[2].style.backgroundColor = "green";

for(let i=0;i<items.length;i++)
{
items[i].style.fontWeight = "bold";

}


var li= document.getElementsByTagName('li');
console.log(li);
console.log(li[1]);



li[1].style.backgroundColor = "green";
li[2].style.color = "white"
for(let i=0;i<li.length;i++)
{
li[i].style.fontWeight = "bold";

}
var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc';

//var input = document.querySelector('input');
//input.value = 'Helloworld'

//var submit = document.querySelector('input[type= "submit"]');
//submit.value='SEND'

//var item = document.querySelector('.list-group-item');
//item.style.color = 'red';

//var lastItem = document.querySelector('.list-group-item:last-child');
//lastItem.style.color = 'blue';

var SecondItem = document.querySelector('.list-group-item:last-child');
SecondItem.style.color = 'green';



//var titles = document.querySelectorAll('.title');

//console.log(titles);
//titles[0].textContent = 'Hello';

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');


for(let i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = 'green';
    even[i].style.backgroundColor = 'white';
}*/




// Traversing the DOM//
var itemList = document.querySelector('#items');


//1 parentElement
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor = '#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);


//2 lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent = 'hello 4';

// 3 lastchild
console.log(itemList.lastChild);

//4 createchild
console.log(itemList.createchild);

// 5 FirstElementChild
console.log(itemList.firstElementChild);
itemList.firstElementChild.textContent = 'hello 1';


// 6 Firstchild
console.log(itemList.firstChild);

// 7 nextSibling
console.log(itemList.nextSibling);

// 8 nextElementSibling
console.log(itemList.nextElementSibling);

// 9 previousSibling
console.log(itemList.previousSibling);

// 10 previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';





//parentNode
console.log(itemList.parentNode);
itemList.parentNode .style.backgroundColor = '#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

//childNode
console.log(itemList.childNodes);

console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor = 'yellow';

// 11 createElement
//create div
var newDiv = document.createElement('div');

 //add class
 newDiv.classname = 'HEllo word';

 //add id
 newDiv.id = 'HEllo word';

 // 12 set attr
 newDiv.setAttribute('title','HEllo word Div');

 //creat text Node
 var newDivText = document.createTextNode('HEllo word');

 //add text to div
 newDiv.appendChild(newDivText);

 var container = document.querySelector('header .container');
 var h1 = document.querySelector('header h1');
 console.log(newDiv);

 newDiv.style.fontSize = '30px';
 container.insertBefore(newDiv,h1);
 

 var container = document.querySelector('items .li');
 var h1 = document.querySelector('header h1');
 console.log(newDiv);

var newEle = document.createElement('div');
var newDivText2 = document.createTextNode('HEllo word');

newEle.appendChild(newDivText2);


var newHead = document.querySelector('div .list-group');
var h2 = document.querySelector('div li');

newHead.insertBefore(newEle, h2);






