const shoppingList = 
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

function addItems() {
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
console.log(updatedItems)

function deleteItems(){
    const removeItem = shoppingList.filter((item) => item.name != 'car')
    return removeItem
}
let filteredList = deleteItems()
console.log(filteredList)

function printAll(){
    const printShoppinglist = shoppingList.map((item) => item.name + '-' + item.quantity + '-' + item.checked)
    return printShoppinglist
}
let printName = printAll()
console.log(printName)



   