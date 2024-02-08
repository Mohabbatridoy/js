//Fetch API
//Fetch API uses Javascript Promise

document.getElementById("get_data").addEventListener('click', getData);

function getData(){
    fetch('https://api.api-ninjas.com/v1/jokes?')
    .then(res => res.json())
    .then((Data)=> console.log(Data))
    .catch((err) => console.log(err))
}