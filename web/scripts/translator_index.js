//Dieses Script fügt in index.html englische Begriffe ein
let german = {
    project:"Projekt",
    menue:"Menü",
    short_desc:"Kurzbeschreibung",
    long_desc:"Langbeschreibung",
    project_overview:"Projektübersicht",
    newArticle_menu:"Neuer Artikel",
    welcome_message:"Willkommen im StudBoard",
    welcome_message_2:"Hier gibt es Motivation für Studierende",
    about:"<h3>Worum geht es?</h3>\n" + "Hier geht es darum, deine Projekte während dem Studium im Blick zu haben.",
    news:"Das sind die neusten Projekte:",
    top:"Anfang der Seite",
    details:"Zu den Projektdetails"
};
let english ={
    project:"Project",
    menue:"Menu",
    short_desc:"Short description",
    long_desc:"Long description",
    project_overview:"Project overview",
    newArticle_menu:"New Article",
    welcome_message:"Welcome to the StudBoard",
    welcome_message_2:"Here you will find motivation for students",
    about:"<h3>What is this about</h3>\n" + "This is about having an overview of your projects in university.",
    news:"These are the newest projects:",
    top:"Back to top",
    details:"To project details"
};

let liststart= "<div style=\"margin-top: 10px\">";
let listlink ="<a class=\"reg\" href=\"";
let listdesc="\">";
let listend="</a> </div>"

var lang = navigator.language || navigator.userLanguage;
console.log(lang);

window.onload = function() {
    check_login();
    if (lang.includes("de")) {
        document.getElementById("project_overview").innerHTML = german["project_overview"];
        document.getElementById("newArticle_menu").innerHTML = german["newArticle_menu"];
        document.getElementById("line1").innerHTML = german["welcome_message"];
        document.getElementById("line2").innerHTML = german["welcome_message_2"];
        document.getElementById("about").innerHTML = german["about"];
        document.getElementById("news").innerHTML = german["news"];

        document.body.children[1].children[1].children[1].children[0].innerHTML = german["top"];

    } else if (lang.includes("en")) {
        document.getElementById("project_overview").innerHTML = english["project_overview"];
        document.getElementById("newArticle_menu").innerHTML = english["newArticle_menu"];
        document.getElementById("line1").innerHTML = english["welcome_message"];
        document.getElementById("line2").innerHTML = english["welcome_message_2"];
        document.getElementById("about").innerHTML = english["about"];
        document.getElementById("news").innerHTML = english["news"];

        document.body.children[1].children[1].children[1].children[0].innerHTML = english["top"];

    }

    for (let i = 0; i < 3; i++) {
        document.getElementById("projekt-liste").innerHTML += (liststart + project_list[(project_list.length-(i+1))].titel + "<br>" + project_list[(project_list.length-(i+1))].kurzbeschreibung +"<br>" + listlink + "Projekt1.html?_id=" + i + listdesc +"Zum Projekt"+listend+ "<br>")
    }
}