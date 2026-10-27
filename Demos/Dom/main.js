const title = document.getElementById("title")
const button = document.getElementById("button")
const box = document.getElementById("box")
//title.innerHTML = new Date()
// console.log(title.innerHTML)

// function buttonClick()
// {

// }
// calls buttonClick()
// button.onclick = buttonClick

// addtional way of calling
// button.onclick = function (event){ //anyomous function

// }


let sum = 0
title.innerHTML = sum
//third way of calling
button.onclick = (event) =>
{
    //1. create and configure our element
    const p = document.createElement("p")
    const rand = Math.random() * 100 //gets number 0 - 100 will need to round for decimal


    sum += rand
    title.innerText = sum
    p.innerText = rand
    //2. insert element into document(if needed
    box.append(p)

}

// window.onkeydown = (event) =>
// {
//     if (event.key == "g" && event.ctrlKey)
//     {
//         window.alert("Hello")
//         event.preventDefault()
//     }
// }
