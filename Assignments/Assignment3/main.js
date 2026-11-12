
const add_button = document.getElementById("add-item");
const input = document.getElementById("input-text");
const todo = document.getElementById("to-do");


add_button.onclick = () =>
{
    const description = input.value; //get description
    input.value = "";

    if(description) //make sure description is not empty or blank
    {
        //define parts I will be adding to the list
        const listItem = document.createElement("li");
        const element = document.createElement("div");
        const h2 = document.createElement("h2");
        const increase = document.createElement("button");
        const decrease = document.createElement("button");
    
        h2.innerText =  description;
        increase.innerText = "Increase Priority";
        increase.classList.add("increase-priority");
        decrease.innerText = "Decrease Priority";
        decrease.classList.add("decrease-priority");


        element.append(h2, increase, decrease);
        element.classList.add("item");
        
        listItem.classList.add("low");
        listItem.append(element); //add to a list item
        todo.append(listItem); //add the item to the to-do list
        
        increase.onclick = () => {
            if(listItem.classList.contains("low")){
                listItem.classList.add("medium");
                listItem.classList.remove("low");
            }
            else if(listItem.classList.contains("medium")){
                listItem.classList.add("high");
                listItem.classList.remove("medium");
            }
            else{
                //do nothing it is max priority
            }
        }

        decrease.onclick = () => {
            if(listItem.classList.contains("low")){
                //do nothing it is lowest priority
            }
            else if(listItem.classList.contains("medium")){
                listItem.classList.add("low");
                listItem.classList.remove("medium");
            }
            else{
                listItem.classList.add("medium");
                listItem.classList.remove("high");
            }
        }

        h2.onclick = () => {
            if(h2.classList.contains("cross-through")){
                h2.classList.remove("cross-through");
            }
            else{
                h2.classList.add("cross-through");
            }
        }
    }


}