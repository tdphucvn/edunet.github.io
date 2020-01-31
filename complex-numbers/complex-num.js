function showHide(i){
    var string = "content-part-"
    var string_2 = string+i
    var div = document.getElementById(string_2)
    if (div.className == "hidden") {
        div.className = "hidden active";
    } else {
        div.className = "hidden";
    }
}

function solutionShow(k){
    var content = "content-solution-";
    var content_2 = content+k;
    var content_3 = document.getElementById(content_2);
    if(content_3.className == "hidden"){
        content_3.className = "hidden active"
    }else {
        content_3.className="hidden";
    }
}
function problemShow(j){
    var problem = "content-problem-part-";
    var problem_2 = problem+j;
    var problem_3 = document.getElementById(problem_2);
    if(problem_3.className == "hidden"){
        problem_3.className = "hidden active"
    }else {
        problem_3.className="hidden";
    }
}