

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





const add =document.querySelector('button')
let x = document.querySelector("item-name").value;
let y = document.getElementById("item-quantity").value;
alert(x)
add.addEventListener("click",function(){
    const newRow = '<div><label>' + x + '<label/>' + '<input' + y + '/> <span class="close-button">&times;</span></div>'
});

