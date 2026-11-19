//client side js, runs on user end devices
const greeting = document.getElementById("greeting")


async function getUser(id){
    const res = await fetch(`/api/users/${id}`)

    if(!res.ok){
        throw res
    }

    const data = await res.json()
    return data

}

getUser(1).then((data) => {
    greeting.innerText = `Hi, ${data.email}`
}).catch((err) => {
    console.log(err)
})




// fetch("/api/users/1")
//     .then((res) =>{
//         if(!res.ok){
//             throw res
//         }
//         return res.json()
//     })
//     .then((data) => { // .then for the returned promise of res.json(). The response is fully loaded
//         console.log(data)
        
//     })
//     .catch((err) => {
//         console.log(err)
//     })


