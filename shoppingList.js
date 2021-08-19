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
const checkedItemsCount = shoppingList.filter((ok) => checked.ok == true)
return checkedItemsCount
}
console.log(checkedItemsCount)