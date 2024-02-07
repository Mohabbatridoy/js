document.getElementById("get_data").addEventListener('click',Loadjoke);

function Loadjoke(){
    let xhr = new XMLHttpRequest();

    xhr.open('GET','http://api.icndb.com/jokes/random',true);

    xhr.onload =  () => {
        if (this.status === 200){
            console.log(this.responsText);
        }
    }
    xhr.send();
}