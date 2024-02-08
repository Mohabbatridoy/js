//Callback Function;
//setTimeout -- run code in delay. 
// setTimeout(() => {
//     console.log("hello world")
// }, 5000);

let persons = [
    {firstName: "Mohabbt", LastName: "Hossain"},
    {firstName: "Rezwan", LastName: "Haque"}
];

function createPerson(person,callback){
    setTimeout(() => {
        persons.push(person);
        callback();
    }, 2000);
}

function getPerson(){
    setTimeout(() => {
        let output = '';
        persons.forEach( function(person) {
            output += `<li> ${person.firstName} ${person.LastName}</li>`;
        }), document.getElementById('output').innerHTML = output;
    }, 500);
}

createPerson({firstName: "shahed", LastName: "Mitul"},getPerson);
