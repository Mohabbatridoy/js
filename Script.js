//Json.stringify() - js object to json string
//Json.parse() - Json string to js object.

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var data = this.responseText;
        // console.log(data);
        jsonData(data);
    }
};
xmlhttp.open("GET", "data.json", true);
xmlhttp.send();


function jsonData(json_obj){
    // console.log(json_obj)
    var js_obj = JSON.parse(json_obj)
    // console.log(js_obj)

    for( i in js_obj.person){
        // console.log(i)
        var persons = js_obj.person;
        // console.log(persons[i])

        for (x in persons[i]){
            console.log(persons[i][x])
        }
    }

}