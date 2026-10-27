const cookie = document.getElementById("cookie")
const moneyElement = document.getElementById("money")
const levelElement = document.getElementById("level")
const multiplierElement = document.getElementById("multiplier")
const shop = document.getElementById("shop")

let money = 0
let level = 0
let multiplier = 1

const items =
[{
    title: "Something cool",
    price: 5,
    level: 5,
    element: null,
    purchased: false,
    multiplier: 2,
},
{
    title: "Coolio",
    price: 20,
    level: 1, 
    element: null,
    purchased: false,
    multiplier: 3,
},
{
    title: "Coolest Item",
    price: 100,
    level: 20, 
    element: null,
    purchased: false,
    multiplier: 5,
    clickRate: 1000,
}
]

//generate random number for bonus chance
//Math.random()
//bonus element show up
//if they clck then add money and remove it
//after a few seconds it goes away
//element.after(newElement)
//element.remove()

function bonus() {
    let num = Math.random() * 100
    if(num >= 95){
        bonus = document.createElement("p")
        bonus.innerText = "CLICK ME"
        bonus.classList.add("bonus")
        cookie.after(bonus)

        const timeout = setTimeout(() => {
            bonus.remove
        }, 2500);

        bonus.onclick = () =>{
            money += 50 * multiplier
            moneyElement.innerText = `$${money}`
            clearTimeout(timeout)
            bonus.remove()
        }
    }
    return
}



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

    element.onclick = () =>{
        //make sure they can buy it
        if(money >= item.price && item.purchased == false){
            money = money - item.price
            moneyElement.innerText = `$${money}`

            //mark as purchased in data
            item.purchased = true
            //update ui to show its purchased
            item.element.classList.add("purchased")
            multiplier = multiplier * item.multiplier
            multiplierElement.innerText = multiplier
        }
        else{
            return
        }
    }

    if(item.clickRate != undefined){
        setInterval(() => {
            cookie.click()
        }, item.clickRate)
    }
    element.classList.add("locked", "item")
    item.element = element
    shop.append(element)

});

cookie.onclick = () =>
{
    money = money + multiplier
    level++
    bonus()
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
