class convertJSON {
    constructor(object) {
        this.object1 = object;
    }

    toJSON() {
        var output = JSON.stringify(this.object1);
        var jsonObject = JSON.parse(output);
        return jsonObject;
    }

    toObject(){
        if(this.object1.hasOwnProperty("_titel")) {
            console.log("Object is a project");
            let project = new Project(
                this.object1._titel,
                this.object1._start,
                this.object1._ende,
                this.object1._kurzbeschreibung,
                this.object1._langbeschreibung,
                this.object1._logo,
                this.object1._projektleiter,
                this.object1._zielliste,
                this.object1.id
            );
            return project;
        }
        else if(this.object1.hasOwnProperty("_benutzername")){
            console.log("Object is a User");
            let user = new User(
                this.object1._benutzername,
                this.object1._emailadresse,
                this.object1._passwort,
                this.object1._profilbild,
                this.object1._kurzbeschreibung,
                this.object1._langbeschreibung,
                this.object1._zielliste,
                this.object1.id
            )
            return user;
        }
        else if(this.object1.hasOwnProperty("_user")){
            let comment = new Comments(
                this.object1._id,
                this.object1._kommentar,
                this.object1._bewertung,
                this.object1._user
            );
            console.log(comment);
            return comment;
        }
        else{
            console.log("Something went wrong converting");
        }
    }
}

u1 = new User(
    "Nicola",
    "email@mail.de",
    "passwort",
    "bild-binär-wert",
    "Ich bin Nicola",
    "Ich bin selten online",
    ["Schön", "Lauffähig"],
    1);

p1 = new Project(
    "Projekt 1",
    "25.05.2019",
    "30.05.2019",
    "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
    "<h1 id='1'>Ü1</h1><br><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n" +
    "                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo\n" +
    "                        dolores et ea rebum. <br><h2 id='2'>Ü2</h2><br> Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor\n" +
    "                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor\n" +
    "                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et\n" +
    "                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem\n" +
    "                        ipsum dolor sit amet.</p>\n" +
    "                    <h3 id='3'>Ü3</h3><br><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n" +
    "                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo\n" +
    "                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor\n" +
    "                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor\n" +
    "                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et\n" +
    "                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem\n" +
    "                        ipsum dolor sit amet.</p>\n" +
    "                    <h2 id='4'>Ü4</h2><br><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n" +
    "                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo\n" +
    "                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor\n" +
    "                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor\n" +
    "                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et\n" +
    "                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem\n" +
    "                        ipsum dolor sit amet.</p>\n" +
    "                    <h3 id='5'>Ü5</h3><br><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n" +
    "                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo\n" +
    "                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor\n" +
    "                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor\n" +
    "                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et\n" +
    "                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem\n" +
    "                        ipsum dolor sit amet.</p>\n" +
    "                    <h4 id='6'>Ü6</h4><br><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n" +
    "                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo\n" +
    "                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor\n" +
    "                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor\n" +
    "                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et\n" +
    "                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem\n" +
    "                        ipsum dolor sit amet.</p>\n" +
    "                    <h1 id='7'>Ü7</h1><br><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n" +
    "                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo\n" +
    "                        dolores et ea rebum. <h2 id='7'>Ü8</h2><br>Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor\n" +
    "                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor\n" +
    "                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et\n" +
    "                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem\n" +
    "                        ipsum dolor sit amet.</p>",
    "binär-wert-bild",
    "Müller",
    ["Lauffähig", "Aktiv"],
    0
);

p2 = new Project(
    "Projekt 2",
    "26.05.2019",
    "30.05.2019",
    "tema tis rolod muspi meroL tse sutcnas atamikat aes on ,nergrebug dsak atilc tetS .muber ae te serolod oud otsuj te masucca te soe orev tA",
    "<h1>Am Anfang war das Licht</h1><br><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n" +
    "                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo\n" +
    "                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor\n" +
    "                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor\n" +
    "                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et\n" +
    "                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem\n" +
    "                        ipsum dolor sit amet.</p>\n" +
    "                    <h2>Danach kam der Schatten</h2><br><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n" +
    "                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo\n" +
    "                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor\n" +
    "                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor\n" +
    "                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et\n" +
    "                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem\n" +
    "                        ipsum dolor sit amet.</p>\n" +
    "                    <h3>Und dann das Leben</h3><br><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n" +
    "                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo\n" +
    "                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor\n" +
    "                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor\n" +
    "                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et\n" +
    "                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem\n" +
    "                        ipsum dolor sit amet.</p>\n" +
    "                    <h2>Irgendwann kam der Mensch</h2><br><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n" +
    "                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo\n" +
    "                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor\n" +
    "                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor\n" +
    "                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et\n" +
    "                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem\n" +
    "                        ipsum dolor sit amet.</p>\n" +
    "                    <h3>Und dann seine Gebäude</h3><br><p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n" +
    "                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo\n" +
    "                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor\n" +
    "                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor\n" +
    "                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et\n" +
    "                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem\n" +
    "                        ipsum dolor sit amet.</p>\n" +
    "                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt\n" +
    "                        ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo\n" +
    "                        dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor\n" +
    "                        sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor\n" +
    "                        invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et\n" +
    "                        justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem\n" +
    "                        ipsum dolor sit amet.</p>",
    "binär-wert-bild",
    "Müller",
    ["Lauffähig"],
    1
);

p3 = new Project(
    "Revolution!",
    "27.05.2019",
    "30.05.2019",
    "Ein super Test-Projekt",
    "Mit gaaaannnzz langer Beschreibung",
    "binär-wert-bild",
    "Müller",
    ["Lauffähig", "Frustfrei"],
    2
);

p4 = new Project(
    "Nichts besonderes",
    "28.05.2019",
    "30.05.2019",
    "Ein super Test-Projekt",
    "Mit gaaaannnzz langer Beschreibung",
    "binär-wert-bild",
    "Müller",
    ["Lauffähig"],
    3
);
let project_list =[p1,p2,p3,p4];



if(performance.navigation.type === 1){
    /*
    Da wir die Items als Strings im Storage ablegen müssen, muss der Json String erst nochmal zum Json Objekt werden
    und kann dann zurück zum richtigen Objekt-Typ konvertiert werden
    */
    json1 = JSON.parse(localStorage.getItem("user1"));
    fillArray();
    console.log("Load from storage");

} else {
    json1 = new convertJSON(u1).toJSON();
    for (let i = 0; i < project_list.length; i++){
        json2 = new convertJSON(project_list[i]).toJSON();
        console.log(json2);
        localStorage.setItem(("project" + i), JSON.stringify(json2));
    }
    localStorage.setItem("user1", JSON.stringify(json1));
    fillArray();
    console.log("Save to storage");
}
u2 = new convertJSON(json1).toObject();

function fillArray() {
    for (let j = 0; j < localStorage.length; j++){
        if (localStorage.getItem("project" +j)) {
            project_list[j] = new convertJSON(JSON.parse(localStorage.getItem("project" +j))).toObject();
        }
    }
}