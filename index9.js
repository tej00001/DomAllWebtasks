var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Form submit event
form.addEventListener('submit', addItem);
// Delete event
itemList.addEventListener('click', removeItem);
// Filter event
filter.addEventListener('keyup', filterItems);

itemList.addEventListener('click', editItem);

// Add item
function addItem(e){
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById('item').value;

  const description = document.getElementById('description').value;
  


  // Create new li element
  var li = document.createElement('li');
  // Add class
  li.className = 'list-group-item';
  // Add text node with input value

  const descriptionNode = document.createTextNode(description);

  li.appendChild(document.createTextNode(newItem));
  li.appendChild(descriptionNode);

  // Create del button element
  var deleteBtn = document.createElement('button');

  // Add classes to del button
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  // Append text node
  deleteBtn.appendChild(document.createTextNode('X'));

  // Append button to li
  li.appendChild(deleteBtn);

  var editBtn = document.createElement('button');
  editBtn.className = 'btn btn-sm float-right editBtn';
  editBtn.appendChild(document.createTextNode('EDIT'));
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
}

// Remove item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filter Items
function filterItems(e){
  // convert text to lowercase
  var text = e.target.value.toLowerCase();
  // Get list
  var items = itemList.getElementsByTagName('li');// array of node
  // Convert to an array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    const description = item.childNodes[1].textContent;

    if(itemName.toLowerCase().indexOf(text) != -1 || description.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
} 