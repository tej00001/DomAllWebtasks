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

}*/


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
}