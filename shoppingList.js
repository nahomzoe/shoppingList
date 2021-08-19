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
    const checkedItemsCount = shoppingList.filter((ok) => ok.checked == true)
    return checkedItemsCount
}
const checkedItemsCount = getShoppingListSize()
console.log(checkedItemsCount)

function getShoppingListSizeUn() {
    const uncheckedItemsCount = shoppingList.filter((not) => not.checked == false)
    return uncheckedItemsCount
}
const uncheckedItemsCount = getShoppingListSizeUn()
console.log(uncheckedItemsCount)