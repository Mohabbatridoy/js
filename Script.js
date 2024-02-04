
//Asynchronous Programming 
// AJAX = Asynchoronous Javascript and XML
//get data without loading the page

document.getElementById('get_data').addEventListener('click', loadData);

function loadData(){

    //create xmlhttprequest class's object: 
    let xhr = new XMLHttpRequest();

    xhr.onprogress = function(){
        console.log(xhr.readyState);
    }

    //load data by open class: 
    xhr.open('GET','data.txt',true);

    xhr.onload = function(){
        // HTTP statuses
        // 200: "OK"
        // 403: "Forbidden"
        // 404: "Not Found"

        if (this.status === 200){
            //console.log(this.status)
            document.getElementById('output').innerHTML = `<h4>${this.responseText}</h4>`
        }

    }
    xhr.onreadystatechange = function(){
           //     // readyState Values
    //     // 0: request not initialized
    //     // 1: server connection established
    //     // 2: request received
    //     // 3: processing request
    //     // 4: request finished and response is ready
    console.log(this.readyState)
    if (this.status === 200 && this.readyState === 4){
        console.log(this.responseText)
    }

    }

    xhr.send();
    // console.log(xhr)
}

