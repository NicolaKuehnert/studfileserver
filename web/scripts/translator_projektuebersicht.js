//Dieses Script fügt in projektuebersicht.html englische Begriffe ein
let german = {
    project_overview:"Projektübersicht",
    new_project:"Neues Projekt",
    content:"Inhalt",
    project:"Projekt"
};

let english = {
    project_overview:"Project Overview",
    new_project:"New Project",
    content:"Content",
    project:"Project"
};

title ="<section>\n" +
    "                <article>\n" +
    "                    <header>\n" +
    "                        <h3>";

body ="</h3>\n" +
    "                    </header>\n" +
    "                    <div style=\"width: 90%\">\n" +
    "                        <p>";

link="</p>\n" +
    "                    </div>\n" +
    "                    <footer><a href=\"";

footer_text = "\">";

end="</a></footer>\n" +
    "\n" +
    "\n" +
    "                </article>\n" +
    "            </section>";

var lang = navigator.language || navigator.userLanguage;

window.onload = function()
{
    if (lang.includes("de")){
        document.getElementById("projectuebersicht").innerHTML = german["project_overview"];
        document.getElementById("newArticle_menu").innerHTML = german["new_project"];
        document.getElementById("heading").innerHTML = german["content"];

    }
    else if (lang.includes("en")){
        document.getElementById("projectuebersicht").innerHTML = english["project_overview"];
        document.getElementById("newArticle_menu").innerHTML = english["new_project"];
        document.getElementById("heading").innerHTML = english["content"];

    }

    let count = parseInt(localStorage.getItem("count"));
    if(count > project_list.length){count = project_list.length} else if(count > 0){} else {count = 1}
    console.log(count);
    for (let k=0; k<(count); k++){
        console.log(project_list[k]);
        let article= (title + project_list[k].titel + body +project_list[k].kurzbeschreibung + link + "Projekt1.html?_id="+ k + footer_text+ "Zur Projektseite" + end);

        document.getElementById("projekte").innerHTML += article;
        document.getElementById("content").innerHTML += "<li>" + project_list[k].titel + "</li>";
    }
    check_login();
}

function setCount() {
    let node = document.getElementById("count");
    let count = node.options[node.selectedIndex].text;
    localStorage.setItem("count", count);
}