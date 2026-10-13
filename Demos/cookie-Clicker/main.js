const cookie = document.getElementById("cookie")
const moneyElement = document.getElementById("money")
const levelElement = document.getElementById("level")
const shop = document.getElementById("shop")

let money = 0
let level = 0

const items =
[{
    title: "Something cool",
    price: 5,
    level: 5,
    element: null,
    purchased: false,
},
{
    title: "Coolio",
    price: 20,
    level: 1, 
    element: null,
    purchased: false,
}]

//add all items to shop, then use css for locked items
items.forEach((item) => {
    // item = items[i]

    const element = document.createElement("div")
    //creates div and then adds that div with info to the shop div
    element.innerHTML = `
    <p>${item.title}</p>
    <p>$${item.price}</p>
    <p>Unlocks at level ${item.level}</p>
    `

    item.onclick = () =>{
        //make sure they can buy it
        if(money >= item.price && item.purchased == false){
            money = money - item.price
            money.innerText = `$${money}`

            //mark as purchased in data
            item.purchased = true
            //update ui to show its purchased
            item.element.classList.add("purchased")
        }
        else{
            return
        }
    }

    element.classList.add("locked", "item")
    item.element = element
    shop.append(element)

});

cookie.onclick = () =>
{
    money++
    level++

    //loop through all items, add if newly available
    //remove all items, loop and add eligible

    items.forEach((item) =>{
        if (level >= item.level){
            item.element.classList.remove("locked")
        }
    })

    moneyElement.innerText = `$${money}`
    levelElement.innerHTML = level
}
