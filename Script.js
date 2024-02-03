// //Json - Javascript Object Notation
// var student = {
//     name: "Mohabbat",
//     age: 21,
//     homtown: "Jamalpur"
// }
// console.log(`Object: ${student}`)
// var studet_json = JSON.stringify(student);


// console.log(`Json: ${studet_json}`)

// var student_new = JSON.parse(studet_json)
// console.log("object",student_new)


//Json support 5 types of data :
//string
//number
//object
//array
//boolean
//null

var person = {
    name: "Mohabbat",  //string
    age: 21,            //Number
    homtown: "Jamalpur", 
    married: false,  //Boolean
    dob: 1995-5-12, //Date
    tes_null: null,  //null
    test_undefined: undefined, 
    greet: function(){         //function
        console.log(`hello ${this.name}`)
    }
}
person.greet()

var person_json = JSON.stringify(person)
console.log(person_json)