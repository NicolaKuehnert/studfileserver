let head="<header class=\"user\">";
let text_field ="</header>\n" +
    "        <div>";
let rating = "</div>\n" +
    "        <footer class=\"comment_foot\">Bewertung: ";let end = "</footer>";
let i = 0;

var id = GET_var("_id");

let json = JSON.parse(localStorage.getItem("project"+id));
let project = new convertJSON(json).toObject();

function saveComment() {
    if(is_logged_in==="1"){
        let text = document.getElementById("comment").value;
        let note = document.getElementById("note");
        let note_text = note.options[note.selectedIndex].text;

        let comment = new Comments(id,text, note_text, localStorage.getItem("username"));
        let json = new convertJSON(comment).toJSON();
        localStorage.setItem(("comment"+i+id), JSON.stringify(json));
        i++;
    } else {
        alert("Du muss angemeldet sein!");
    }
    window.location.replace(("Projekt1.html?_id="+id));
}

window.onload = function () {
    loadComments();
    loadProject();
    let check = check_login();
    if(check === 1){
        document.getElementById("edit").style.display = "block";
    } else {
        document.getElementById("edit").style.display = "none";
    }

}

function loadProject() {
    document.getElementById("titel").innerHTML = project.titel;
    document.getElementById("leiter").innerHTML = project.projektleiter;
    document.getElementById("kurzbeschreibung").innerHTML = project.kurzbeschreibung;
    document.getElementById("langbeschreibung").innerHTML = project.langbeschreibung;

    let text = project.langbeschreibung;
    let h = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    for(let i=1; i<h.length;i++){
        console.log(h[i].tagName);
        if(h[i].tagName ==="H1"){
            document.getElementById("content").innerHTML += "<li><a href='#" + (i-1) + "'>" + h[i].innerText + "</a></li>";
        } else if(h[i].tagName ==="H2"){
            document.getElementById("content").innerHTML += "<ul id='"+i+"'><li><a href='#" + (i-1) + "'>" + h[i].innerText + "</a></li></ul>";
        } else if(h[i].tagName ==="H3"){
            let content = document.getElementById("content").querySelectorAll("ul");

            for(let j=0;j<content.length;j++){
                if(parseInt(content[j].id) === i-1){
                    content[j].innerHTML += "<ul><li><a href='#" + (i-1) + "'>" + h[i].innerText + "</a></li></ul>";
                }
            }
        }
    }

    for(let i =0; i< project.zielliste.length;i++){
        document.getElementById("zielliste").innerHTML += "<li>" + project.zielliste[i] + "</li><br>";
    }
}

function editButton(){

}

function loadComments() {
    i = 0;
    let avgrating = 0;
    for(let x = 0; x< localStorage.length;x++){
        if(localStorage.getItem("comment"+x+id)){
            let storage = JSON.parse(localStorage.getItem("comment"+x+id));
            let comment = new convertJSON(storage).toObject();
            let html = head + comment.user + text_field + comment.kommentar + rating + comment.bewertung + end;
            document.getElementById("comment_section").innerHTML += html;
            i++;
            avgrating += parseInt(comment.bewertung);
        }
    }
    avgrating = avgrating/i;
    document.getElementById("avg_rating").innerHTML = "Durchschnittliche Bewertung: " + avgrating + "/5";

}

function GET_var(string) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");

    for (var i=0; i<vars.length;i++){
        var pair= vars[i].split("=");
        if(pair[0] === string){
            return pair[1];
        }
    }
}