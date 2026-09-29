
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

function newEmployee(firstName, lastName, dob){
    const employee = {
        firstName: firstName,
        lastName: lastName,
        dob: dob,   
        fullName: function (){
        //return this.firstName + " " + this.lastName  -- bad syntax using +
        return `${this.firstName} ${this.lastName}` //better syntax using template strings
        },
        greeting: function(){
    
        },
        age: function(){
            return this.dob / 4 
        }

    }
    return employee
}
print(employee.fullName())

//object definition
/*
const employee = {
    firstName: "John",
    lastName: "Smith",
    dob: 12345678,
    fullName: function (){
        //return this.firstName + " " + this.lastName  -- bad syntax using +
        return `${this.firstName} ${this.lastName}` //better syntax using template strings
    },
    greeting: function(){
    
    },
    age: function(){
        return this.dob / 4 
    }

}
*/

employee.firstName.toLocaleUpperCase()


function doStuff(options = {}){
    if(options.someSetting){
        //do something
    }else{
        //use a default
    }
}