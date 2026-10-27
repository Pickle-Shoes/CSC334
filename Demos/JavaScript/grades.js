
//Bill - 98, 56, 89, 76  ---name and a list of scores
const students = [
    {
        name: "Bill",
        grades: [98, 56, 89, 76],
    },
    {
        name: "Alice",
        grades: [35, 88, 76, 45],
    },
    {
        name: "Bob",
        grades: [87, 55, 67, 99, 76],
    },
]
// console.log(students[1].grades[0])

//calculate the average for each student
//print letter grade  Bill: C

function calculateLetterGrade(average){
    if(average >= 90){
        return "A"
    }
    else if(average >= 80){
        return "B"
    }
    else if(average >= 70){
        return "C"
    }
    else if(average >= 60){
        return "D"
    }
    else{
        return "F"
    }
}

function stduentAverage(){
    let totalAverage = 0
    let numOfGrades = 0
    students.forEach(student => {
        let average = 0
        for(let i = 0; i < student.grades.length; i++){
            average  = average + student.grades[i]
            numOfGrades = numOfGrades + 1
        }
        totalAverage = totalAverage + average
        average = calculateLetterGrade(average / student.grades.length)
        console.log(student.name + ":", average)
    });
    totalAverage = totalAverage / numOfGrades
    console.log("Total Student average:", totalAverage.toFixed(2))
}

//calculate course average, print number
stduentAverage()



