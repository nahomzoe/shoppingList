

/*let shoppingList = 
[
    {
        name: 'Milk',
        quantity: 5,
        checked: true
    },
    {
        name: 'Oil',
        quantity: 3,
        checked: true
    },
    {
        name: 'Banana',
        quantity:'6',
        checked: false
    },
    {
        name: 'Salt',
        quantity: 1,
        checked: true
    },
    {
        name: 'Sugar',
        quantity: 2,
        checked: false
    },
    {
        name: 'Corn',
        quantity: 8,
        checked: true
    },
    {
        name: 'Grapes',
        quantity: 4,
        checked: false
    },
    {
        name: 'Orange',
        quantity: 7,
        checked: true   
    }

]
function getShoppingListSize() {
    const checkedItemsCount = shoppingList.filter((item) => item.checked == true)
    return checkedItemsCount
}
const checkedItemsCount = getShoppingListSize()
console.log(checkedItemsCount)

function getShoppingListSizeUnchecked() {
    const uncheckedItemsCount = shoppingList.filter((item) => item.checked == false)
    return uncheckedItemsCount
}
const uncheckedItemsCount = getShoppingListSizeUnchecked()
console.log(uncheckedItemsCount)

/*function addItems() {
    let updatedItems = shoppingList.push(
        {
            name: 'car',
            quantity: 2,
            checked: true   
        },
        {
            name: 'Shoes',
            quantity: 18,
            checked: true   
        },
        {
            name: 'Football',
            quantity: 5,
            checked: false   
        }
    )
    return updatedItems
}
const updatedItems = addItems()
console.log(updatedItems)*/

/*function addItem(itemName,itemQuantity) {
    /*function addItem(itemName, itemQuantity) {
    if (typeof itemName !== 'string' || itemName.length === 0) {
        return false;
    } 

    if (typeof itemQuantity !== 'number' || itemQuantity <= 0) {
        return false;
    }*/
   

   /* if (typeof itemName === 'string' && itemName.length > 0 && typeof itemQuantity === 'number'&& itemQuantity >0){
    let updatingItems = shoppingList.push(
        { name: itemName,
          quantity: itemQuantity,
          checked: false
        }
     
    )
    return updatingItems
}
}
const updatedItems = addItem('Jebena',4)
console.log(updatedItems)



function deleteItem(itemName){
    shoppingList = shoppingList.filter((item) => item.name != itemName)
    return shoppingList
}
let filteredList = deleteItem('Football')
console.log(filteredList)

function printAll(){
    const printShoppinglist = shoppingList.map((item) => item.name + '-' + item.quantity + '-' + item.checked)
    return printShoppinglist
}
let printName = printAll()
console.log(printName)

/*function printAll() {
    for (const {name, quantity, checked} of shoppingList){
        console.log(name, quantity, checked)
      }
}
const printList = printAll()
console.log(printList)*/


/*
let shoppingList = 
[
    {
        name: 'Milk',
        quantity: 5,
        checked: true
    },
    {
        name: 'Oil',
        quantity: 3,
        checked: true
    },
    {
        name: 'Banana',
        quantity:'6',
        checked: false
    },
    {
        name: 'Salt',
        quantity: 1,
        checked: true
    },
];

function render() {
    const list = document.querySelector('.list');
    list.innerHTML = "";

    shoppingList.forEach((item) => {
        const newRow = '<div>'
                    + '<label class="item-list">' + item.name + '</label>'
                    + '<input type="number" class="list-box" value="' + item.quantity + '"/>'
                    + '<span class="close-button" data-name="' + item.name + '">&times;</span>'
                 + '</div>';
    
        list.innerHTML = newRow + list.innerHTML;
    });

    attachDeleteListener();
}

function addItem(itemName,itemQuantity) {
    shoppingList.push(
        { 
            name: itemName,
            quantity: itemQuantity,
            checked: false
        }
    )
}

const addButton =document.querySelector('button')

addButton.addEventListener('click', function(){
    const nameValue = document.getElementById("name-field").value;
    const quantityValue = document.getElementById("quantity-field").value;
    
   addItem(nameValue, quantityValue);

   render();
});

function deleteItem(itemName){
    shoppingList = shoppingList.filter((item) => item.name != itemName)
    return shoppingList
}

function attachDeleteListener() {
    document.querySelectorAll('.close-button').forEach((deleteBtn) => {
        deleteBtn.addEventListener('click', function (event) {
            // event.target is the element that the event (click) was performed on
            const itemName = event.target.getAttribute("data-name");
            deleteItem(itemName);
            render();
        });
    })
}

render();*/

const addButton = document.querySelector('button');
addButton.addEventListener('click',function(){
    const nameValue = document.getElementById('name-field').value;
    const quantityValue = document.getElementById('quantity-field').value;
 const newRow = '<div>'
                 +'<label class="item-list">' + nameValue + '</label>'
                 +'<input type="number"  value="'+quantityValue +'"class="list-box"/>'
                 +'<input type="checkbox" id="check-box">' 
                 +'<span class="close-button">&times;</span>'
                 +'</div>' ;
const list = document.querySelector('.list');
list.innerHTML = newRow + list.innerHTML;
                 
});

const closeButton = document.querySelector('close-button')
closeButton.addEventListener('Click',function(){
   
})



