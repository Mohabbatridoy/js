//promises: 

let persons = [
    {firstName: "Mohabbt", LastName: "Hossain"},
    {firstName: "Rezwan", LastName: "Haque"}
];

function createPerson(person){
    let prom = new Promise(function(resolve,reject){
        persons.push(person);
        let error = false;
        if (error!=true){
            resolve();
        }
        else{
            reject(`error somthing wrong`);
        }
    })
    return prom;
}

function getPerson(){
    setTimeout(() => {
        let output = '';
        persons.forEach( function(person) {
            output += `<li> ${person.firstName} ${person.LastName}</li>`;
        }), document.getElementById('output').innerHTML = output;
    }, 500);
}

createPerson({firstName: "shahed", LastName: "Mitul"}).then(getPerson).catch(function(err){
    console.log(err);
});
