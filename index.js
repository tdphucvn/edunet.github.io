function showhide(){
    var div = document.getElementById("donate-info");
    if (div.className === "") {
        div.className = "active";
    } else {
        div.className = "";
    }
}

