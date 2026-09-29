
// here is a declared array
const x = [1,2,3]

console.log(x)

function foreach(callback){
    for(let i; i < array.length; i++){
        callback(array[i])
    }
}

array.foreach(function(element) {
    

})


array.foreach((element) => {

})

//object defenition
const employee = {
    firstName: "John",
    lastName: "Smith",
    dob: 12345678
}


function doStuff(options = {}){
    if(options.someSetting){
        //do something
    }else{
        //use a default
    }
}