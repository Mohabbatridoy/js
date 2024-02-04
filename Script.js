
//Asynchronous Programming 
// AJAX = Asynchoronous Javascript and XML
//get data without loading the page

document.getElementById('get_data').addEventListener('click', loadData);

function loadData(){

    //create xmlhttprequest class's object: 
    let xhr = new XMLHttpRequest();

    //load data by open class: 
    xhr.open('GET','data.txt',true);

    xhr.onload = function(){
        // HTTP statuses
        // 200: "OK"
        // 403: "Forbidden"
        // 404: "Not Found"

        if (this.status === 200){
            //console.log(this.status)
            document.getElementById('output').innerHTML = `<h4>${this.responseText}</h4?`
        }

    }
    xhr.send();
    // console.log(xhr)
}

